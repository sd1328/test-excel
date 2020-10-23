<?php
namespace App\Service\Excel\Entity;

/**
 * Interface SerializeInterface
 * @package App\Service\Excel\Entity
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
