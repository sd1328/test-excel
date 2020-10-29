<?php
namespace App\Service\Excel;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redis;
use App\Models\Excel\TableModel;
use App\Service\Excel\Entity\Table;
use App\Service\Excel\Entity\Cell;
use App\Http\Requests\Excel\Cell as CellRequest;
use App\Http\Requests\Excel\CellsSearch as CellsSearchRequest;

/**
 * Class Service
 * @package App\Service\Excel
 */
class Service
{
    /**
     * Получить сущность таблицы
     * @param TableModel $tableModel
     * @return Table
     */
    public function getTable(TableModel $tableModel): Table
    {
        if (!($table = $this->getFromRedis($tableModel))) {
            $table = $this->buildEntity($tableModel);
            $this->setToRedis($tableModel, $table);
        }
        return $table;
    }

    /**
     * Получить генератор сущностей ячеек согласно параметрам
     * @param TableModel $tableModel
     * @param CellsSearchRequest $cellsSearchRequest
     * @return \Generator
     */
    public function getCells(TableModel $tableModel, CellsSearchRequest $cellsSearchRequest): \Generator
    {
        $table = $this->getTable($tableModel);
        return $table->getCells(
            $cellsSearchRequest->getStartCol(),
            $cellsSearchRequest->getStartRow(),
            $cellsSearchRequest->getEndCol(),
            $cellsSearchRequest->getEndRow()
        );
    }

    /**
     * @param TableModel $tableModel
     * @param CellRequest $cellRequest
     * @throws \Exception
     */
    public function cellChange(TableModel $tableModel, CellRequest $cellRequest): void
    {
        $table = $this->getTable($tableModel);
        $cell = (new Cell())
            ->setCoordinate($cellRequest->getCol(), $cellRequest->getRow())
            ->setVal($cellRequest->getValue());
        if ($cellRequest->getValue()) {
            $this->cellStore($tableModel, $table, $cell);
        } else {
            $this->cellRemove($tableModel, $table, $cell);
        }
    }

    /**
     * @param TableModel $tableModel
     * @param Table $table
     * @param Cell $cell
     * @return bool
     */
    public function cellStore(TableModel $tableModel, Table $table, Cell $cell): bool
    {
        $table->setCell($cell);
        $cellModel = $tableModel->getCell($cell);
        $cellModel->type = $cell->type;
        $cellModel->value = $cell->val;
        return $cellModel->save() && $this->setToRedis($tableModel, $table);
    }

    /**
     * @param TableModel $tableModel
     * @param Table $table
     * @param Cell $cell
     * @return void
     * @throws \Exception
     */
    public function cellRemove(TableModel $tableModel, Table $table, Cell $cell): void
    {
        $table->removeCell($cell->col, $cell->row);
        $tableModel->getCell($cell)->delete();
        $this->setToRedis($tableModel, $table);
    }

    /**
     * @param TableModel $tableModel
     * @return Table
     */
    protected function buildEntity(TableModel $tableModel): Table
    {
        $table = new Table();
        $table->setName($tableModel->name);
        $table->setDescription($tableModel->description);
        $table->setId($tableModel->id);
        foreach ($tableModel->cells as $cellModel) {
            $table->setCell(
                (new Cell())
                    ->setCoordinate($cellModel->col, $cellModel->row)
                    ->setTypedVal($cellModel->value, $cellModel->type)
            );
        }
        return $table;
    }

    /**
     * @param TableModel $tableModel
     * @param Table $table
     * @return bool
     */
    protected function setToRedis(TableModel $tableModel, Table $table): bool
    {
        $status = (bool) Redis::set(
            $this->getRedisKey($tableModel),
            json_encode($table->jsonSerialize())
        );

        if (!$status) {
            Log::warning('Не удалось сохранить сущность таблицы в Redis');
        }

        return $status;
    }

    /**
     * @param TableModel $tableModel
     * @return Table|null
     */
    protected function getFromRedis(TableModel $tableModel): ?Table
    {
        if ($data = Redis::get($this->getRedisKey($tableModel))) {
            return new Table(json_decode($data, true));
        } else {
            return null;
        }
    }

    /**
     * @param TableModel $tableModel
     * @return string
     */
    protected function getRedisKey(TableModel $tableModel): string
    {
        return "excel_table_{$tableModel->id}";
    }
}
