<?php
namespace App\Http\Requests\Excel;

use App\Http\Requests\ApiRequests;
use App\Service\Excel\AlphaNumberSystemDefinition;

/**
 * Class CellsSearch
 * Запрос на получение ячеек
 *
 * @OA\Schema(
 *     schema="ApiRequestsCellSearch",
 *     title="Координаты прямоугольника для получения ячеек",
 *     required={"col", "row"},
 *     @OA\Property(property="start_col", type="string", description="Номер начальной колонки (символьный Excel подобный)", example="A"),
 *     @OA\Property(property="start_row", type="integer", description="Номер начальной строки", example="4"),
 *     @OA\Property(property="end_col", type="string", description="Значение конечной ячейки (символьный Excel подобный)", example="AC"),
 *     @OA\Property(property="end_row", type="integer", description="Значение конечной ячейки", example="10"),
 * )
 *
 * @package App\Http\Requests\Excel
 */
class CellsSearch extends ApiRequests
{
    /**
     * @return array
     */
    public function rules(): array
    {
        return [
            'start_col' => 'required|regex:/^[a-z]+$/i|min:1',
            'start_row' => 'required|integer|min:1',
            'end_col' => 'required|regex:/^[a-z]+$/i|min:1',
            'end_row' => 'required|integer|min:1',
        ];
    }

    /**
     * @return int
     */
    public function getStartCol(): int
    {
        return AlphaNumberSystemDefinition::getNumberByAlpha(
            $this->input('start_col', 'a')
        );
    }

    /**
     * @return int
     */
    public function getStartRow(): int
    {
        return (int) $this->input('start_row', 1);
    }

    /**
     * @return int
     */
    public function getEndCol(): int
    {
        return AlphaNumberSystemDefinition::getNumberByAlpha(
            $this->input('end_col', 'a')
        );
    }

    /**
     * @return int
     */
    public function getEndRow(): int
    {
        return (int) $this->input('end_row', 1);
    }
}
