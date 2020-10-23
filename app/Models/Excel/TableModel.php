<?php
namespace App\Models\Excel;

use App\Service\Excel\Entity\Cell;
use Illuminate\Database\Eloquent\Model;

/**
 * Class TableModel
 *
 * @property int $id
 * @property int $user_id
 * @property string $name
 * @property string $description
 * @property string $created_at
 * @property string $updated_at
 *
 * @property CellModel[] $cells
 *
 * @package App\Models\Excel
 */
class TableModel extends Model
{
    /**
     * The table associated with the model.
     * @var string
     */
    protected $table = 'excel_tables';

    /**
     * @var array
     */
    protected $fillable = ['name', 'description'];

    /**
     * Связь с ячейками таблицы
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function cells()
    {
        return $this->hasMany(CellModel::class, 'table_id', 'id');
    }

    /**
     * Получить ячейку таблицы, сущность которой указанна
     * @param Cell $cell
     * @return CellModel
     */
    public function getCell(Cell $cell): CellModel
    {
        $cellModel = $this
            ->cells()
            ->where('col', $cell->col)
            ->where('row', $cell->row)
            ->first();

        if (!$cellModel) {
            $cellModel = new CellModel();
            $cellModel->table_id = $this->id;
            $cellModel->col = $cell->col;
            $cellModel->row = $cell->row;
        }
        return $cellModel;
    }
}
