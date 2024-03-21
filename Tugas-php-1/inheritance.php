<?php

class Ikan
{
protected $warna;
protected $berat;

public function __construct($warna, $berat)
{
$this->warna = $warna;
$this->berat = $berat;
}

public function getWarna()
{
  return $this->warna;
}
public function setWarna($value)
{
$this->warna = $value;
}

public function getBerat()
{
return $this->berat;
}

public function setBerat($value)
{
$this->berat = $value;
}

public function makan($food)
{
var_dump("Ikan Memakan " . $food);
}
}

class Hiu extends Ikan
{
private $jenis;

public function __construct($warna, $berat, $jenis)
{
parent::__construct($warna, $berat);
$this->jenis = $jenis;
}

public function getJenis()
{
return $this->jenis;
}

public function setJenis($jenis)
{
$this->jenis = $jenis;
}
public function makan($food)
{
var_dump("Hiu Memangsa " . $food);
}

public function kejarTarget($value)
{
var_dump("Hiu sedang mengejar " . $value);
}
}

$hiu1 = new Hiu("Hitam", 500, "Tiger Shark");
$hiu2 = new Hiu("Merah", 200, "Unknown Shark");

$hiu1->kejarTarget("Ikan Tuna");
$hiu1->makan("Ikan Tuna");

echo $hiu1->getJenis() . "\n"; 