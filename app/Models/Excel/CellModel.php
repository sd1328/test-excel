<?php
namespace App\Models\Excel;

use App\Service\Excel\Entity\Cell;
use Illuminate\Database\Eloquent\Model;

/**
 * Class CellModel
 *
 * @property int $id
 * @property int $table_id
 * @property int $col
 * @property int $row
 * @property string $type
 * @property string $value
 *
 * @package App\Models\Excel
 */
class CellModel extends Model
{
    /**
     * The table associated with the model.
     * @var string
     */
    protected $table = 'excel_tables_cells';

    /**
     * Отключаем поля created_at, updated_at
     * @var bool
     */
    public $timestamps = false;

    /**
     *  Связь с таблицей
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function table()
    {
        return $this->belongsTo(TableModel::class, 'table_id', 'id');
    }

    /**
     * Фабричный метод - получение сущности ячейки
     * @return Cell
     */
    public function gerEntity(): Cell
    {
        return new Cell([
            't' => $this->type,
            'r' => $this->row,
            'c' => $this->col,
            'v' => $this->value,
        ]);
    }
}