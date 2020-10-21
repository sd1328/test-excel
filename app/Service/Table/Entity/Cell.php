<?php
namespace App\Service\Table\Entity;

/**
 * Class Cell
 * Класс ячейки таблицы
 *
 * @property-read string $type
 * @property-read int $row
 * @property-read int $col
 * @property-read string|float $val
 *
 *
 * @package App\Service\Table\Entity
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
        'val' => 'val',
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
     */
    public function setVal($value): void
    {
        if (is_numeric($value)) {
            $this->val = (float)$value;
            $this->type = self::TYPE_NUMBER;
        } else {
            $this->val = mb_substr($value, 0, 255, 'UTF-8');
            $this->type = self::TYPE_STRING;
        }
    }

    /**
     * @param int $column
     * @param int $row
     */
    public function setCoordinate(int $column, int $row): void
    {
        if ($column < 1 || $row < 1) {
            throw new \InvalidArgumentException("Номера строк и колонок могут быть только положительный числа больше нуля");
        }
        $this->col = $column;
        $this->row = $row;
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
