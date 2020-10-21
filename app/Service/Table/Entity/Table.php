<?php
namespace App\Service\Table\Entity;
use App\Service\Table\CellCoordinateDefinition;

/**
 * Class Table
 *
 * Класс таблицы
 *
 * @package App\Service\Table\Entity
 */
class Table implements SerializeInterface
{
    /**
     * ID таблицы
     * @var int
     */
    protected $id = 0;

    /**
     * Ячейки таблицы
     * @var Cell[]
     */
    protected $cells = [];

    /**
     * Имя таблицы
     * @var string
     */
    protected $name = '';

    /**
     * Описание таблицы
     * @var string
     */
    protected $description = '';

    /**
     * Table constructor.
     * @param array $data
     */
    public function __construct(array $data = [])
    {
        if ($data) {
            $this->jsonDeserialization($data);
        }
    }

    /**
     * @param $name
     * @return mixed
     */
    public function __get($name)
    {
        if (property_exists($this, $name)) {
            return $this->$name;
        } else {
            throw new \InvalidArgumentException("Неизвестное свойство [$name]");
        }
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @param Cell $cell
     */
    public function setCell(Cell $cell): void
    {
        $this->cells[CellCoordinateDefinition::cellIdFromCoordinate($cell->col, $cell->row)] = $cell;
    }

    /**
     * @param int $column
     * @param int $row
     * @return Cell|null
     */
    public function getCell(int $column, int $row): ?Cell
    {
        return $this->cells[CellCoordinateDefinition::cellIdFromCoordinate($column, $row)] ?? null;
    }

    /**
     * Выборка ячеек из прямоугольника определенного координатами 2 углов
     * @param int $startColumn
     * @param int $startRow
     * @param int $endColumn
     * @param int $endRow
     * @return \Generator
     */
    public function getCells(int $startColumn, int $startRow, int $endColumn, int $endRow): \Generator
    {
        // на случай если координаты перепутаны, выравниваем чтобы  start всегда был не более end
        if ($startColumn > $endColumn) {
            $startColumn+=+$endColumn-$endColumn=$startColumn;
        }
        if ($startRow > $endRow) {
            $startRow+=+$endRow-$endRow=$startRow;
        }

        for ($column = $startColumn; $column <= $endColumn; $column++) {
            for ($row = $startRow; $row <= $endRow; $row++) {
                $id = CellCoordinateDefinition::cellIdFromCoordinate($column, $row);
                if (isset($this->cells[$id])) {
                    yield $this->cells[$id];
                }
            }
        }
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        $cells = [];
        foreach ($this->cells as $key => $cell) {
            $cells[$key] = $cell->jsonSerialize();
        }
        return [
            'cells' => $cells,
            'name' => $this->name,
            'description' => $this->description,
        ];
    }

    /**
     * @param array $data
     */
    public function jsonDeserialization(array $data)
    {
        foreach ($data as $name => $value) {
            if (!property_exists($this, $name)) {
                continue;
            }
            if ($name == 'cells') {
                foreach ($value as $key => $cell) {
                    $this->cells[$key] = new Cell($cell);
                }
            } else {
                $this->$name = $value;
            }
        }
    }
}
