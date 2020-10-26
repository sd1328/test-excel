<?php
namespace App\Service\Excel\Entity;
use App\Service\Excel\AlphaNumberSystemDefinition;

/**
 * Class Cell
 * Класс ячейки таблицы
 *
 * @property-read string $type
 * @property-read int $row
 * @property-read int $col
 * @property-read string|float $val
 *
 * @OA\Schema(
 *     schema="CellEntity",
 *     title="Ячейка таблицы",
 *     @OA\Property(property="r", type="integer", description="Номер строки", example="1"),
 *     @OA\Property(property="c", type="integer", description="Номер колонки (символьный Excel подобный)", example="AD"),
 *     @OA\Property(property="t", type="string", description="Тип значения ячейки: n - число, c - строка", example="c"),
 *     @OA\Property(property="v", type="string", description="Значение конечной ячейки", example="Василий Пупкин"),
 * )
 *
 * @package App\Service\Excel\Entity
 */
class Cell implements SerializeInterface
{
    /**
     * @const - идентификатор типа значения ячейки - число
     */
    public const TYPE_NUMBER = 'n';

    /**
     * @const - идентификатор типа значения ячейки - строка (255 символов макс.)
     */
    public const TYPE_STRING = 'c';

    /**
     * @const - мапинг десериализации json -> object
     */
    protected const DESERIALIZATION_MAP = [
        't' => 'type',
        'r' => 'row',
        'c' => 'col',
        'v' => 'val',
    ];

    /**
     * Тип значения:  число / строка
     * @var string
     */
    protected $type;

    /**
     * Номер строки (начиная с 1)
     * @var int
     */
    protected $row;

    /**
     * Номер колонки (начиная с 1)
     * @var int
     */
    protected $col;

    /**
     * Значение ячейки
     * @var float|string
     */
    protected $val;


    /**
     * Cell constructor.
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
     * @param $value
     * @return Cell
     */
    public function setVal($value): self
    {
        if (is_numeric($value)) {
            $this->val = (float)$value;
            $this->type = self::TYPE_NUMBER;
        } else {
            $this->val = mb_substr($value, 0, 255, 'UTF-8');
            $this->type = self::TYPE_STRING;
        }
        return $this;
    }

    /**
     * @param $value
     * @param string $type
     * @return Cell
     */
    public function setTypedVal($value, string $type): self
    {
        switch ($type) {
            case self::TYPE_NUMBER:
                $this->val = (float) $value;
                $this->type = $type;
                break;
            case self::TYPE_STRING:
                $this->val = (string) $value;
                $this->type = $type;
                break;
            default:
                throw new \InvalidArgumentException("Неизвестный тип ячейки [$type]");
                break;
        }
        return $this;
    }

    /**
     * @param int $column
     * @param int $row
     * @return Cell
     */
    public function setCoordinate(int $column, int $row): self
    {
        if ($column < 1 || $row < 1) {
            throw new \InvalidArgumentException(
                "Номера строк и колонок могут быть только положительный числа больше нуля"
            );
        }
        $this->col = $column;
        $this->row = $row;
        return $this;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            't' => $this->type,
            'r' => $this->row,
            'c' => $this->col,
            'v' => $this->val,
        ];
    }

    /**
     * Данный для json - отдача фронту
     * - отличие от jsonSerialize, символьные координаты колонки
     * @return array
     */
    public function jsonResource()
    {
        return [
            't' => $this->type,
            'r' => $this->row,
            'c' => strtoupper(AlphaNumberSystemDefinition::getAlphaByNumber($this->col)),
            'v' => $this->val,
        ];
    }

    /**
     * @param array $data
     */
    public function jsonDeserialization(array $data)
    {
        foreach ($data as $name => $value) {
            if (isset(self::DESERIALIZATION_MAP[$name])) {
                $this->{self::DESERIALIZATION_MAP[$name]} = $value;
            }
        }
    }
}
