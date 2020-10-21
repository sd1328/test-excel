<?php
namespace App\Service\Table;


class CellCoordinateDefinition
{
    /**
     * Получение символьного идентификатора из координат ячейки
     * @param int $column
     * @param int $row
     * @return string
     */
    public static function cellIdFromCoordinate(int $column, int $row)
    {
        return "{$column}_{$row}";
    }

    /**
     * Получение координат ячейки исходя из символьного идентификатора
     * @param string $id
     * @return array
     */
    public static function cellCoordinateFromId(string $id): array
    {
        $arr = explode('_', $id);
        return [
            (int)$arr[0],
            (int)$arr[1]
        ];
    }
}
