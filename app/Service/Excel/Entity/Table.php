<?php
namespace App\Service\Excel\Entity;
use App\Service\Excel\CellCoordinateDefinition;

/**
 * Class Table
 *
 * Класс таблицы
 *
 * @package App\Service\Excel\Entity
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
     * @return Table
     */
    public function setId(int $id): self
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @param string $name
     * @return Table
     */
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @param string $description
     * @return Table
     */
    public function setDescription(string $description): self
    {
        $this->description = $description;
        return $this;
    }

    /**
     * @param Cell $cell
     * @return Table
     */
    public function setCell(Cell $cell): self
    {
        $this->cells[CellCoordinateDefinition::cellIdFromCoordinate($cell->col, $cell->row)] = $cell;
        return $this;
    }

    /**
     * @param int $column
     * @param int $row
     * @return Table
     */
    public function removeCell(int $column, int $row): self
    {
        $id = CellCoordinateDefinition::cellIdFromCoordinate($column, $row);
        if (isset($this->cells[$id])) {
            unset($this->cells[$id]);
        }
        return $this;
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
