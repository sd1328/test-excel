<?php
namespace App\Service\Table\Entity;

/**
 * Interface SerializeInterface
 * @package App\Service\Table\Entity
 */
interface SerializeInterface extends \JsonSerializable
{
    /**
     * @return array
     */
    public function jsonSerialize();

    /**
     * @param array $data
     */
    public function jsonDeserialization(array $data);
}
