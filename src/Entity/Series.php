<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SeriesRepository")
 */
class Series
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", unique=true)
     */
    private $id_api;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdApi(): ?int
    {
        return $this->id_api;
    }

    public function setIdApi(int $id_api): self
    {
        $this->id_api = $id_api;

        return $this;
    }
}
