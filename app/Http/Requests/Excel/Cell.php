<?php
namespace App\Http\Requests\Excel;

use App\Http\Requests\ApiRequests;
use App\Service\Excel\AlphaNumberSystemDefinition;

/**
 * Class Cell
 * Запрос на изменение ячейки
 *
 * @OA\Schema(
 *     schema="ApiRequestsCell",
 *     title="Значение ячейки таблицы",
 *     required={"col", "row"},
 *     @OA\Property(property="col", type="string", description="Номер начальной колонки (символьный Excel подобный)", example="A"),
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
            'col' => 'required|regex:/^[a-z]+$/i|min:1',
            'row' => 'required|integer|min:1',
            'value' => 'nullable|max:255',
        ];
    }

    /**
     * @return int
     */
    public function getCol(): int
    {
        return AlphaNumberSystemDefinition::getNumberByAlpha(
            $this->input('col', 'a')
        );
    }

    /**
     * @return int
     */
    public function getRow(): int
    {
        return (int) $this->input('row');
    }

    /**
     * @return string
     */
    public function getValue(): string
    {
        return trim((string) $this->input('value'));
    }
}
