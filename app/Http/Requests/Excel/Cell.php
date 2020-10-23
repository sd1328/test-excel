<?php
namespace App\Http\Requests\Excel;

use App\Http\Requests\ApiRequests;

/**
 * Class Cell
 * Запрос на изменение ячейки
 *
 * @OA\Schema(
 *     schema="ApiRequestsCell",
 *     title="Значение ячейки таблицы",
 *     required={"col", "row"},
 *     @OA\Property(property="col", type="integer", description="Номер колонки", example="2"),
 *     @OA\Property(property="row", type="integer", description="Номер строки", example="4"),
 *     @OA\Property(property="value", type="integer", description="Значение ячейки", example="Номер"),
 * )
 *
 * @package App\Http\Requests\Excel
 */
class Cell extends ApiRequests
{
    /**
     * @return array
     */
    public function rules(): array
    {
        return [
            'col' => 'required|integer|min:1',
            'row' => 'required|integer|min:1',
            'value' => 'required|string|max:255',
        ];
    }

    /**
     * @return int
     */
    public function getCol(): int
    {
        return (int) $this->input('col');
    }

    /**
     * @return int
     */
    public function getRow(): int
    {
        return (int) $this->input('row');
    }

    /**
     * @return mixed
     */
    public function getValue()
    {
        return $this->input('value');
    }
}
