<?php

class Balok {
    private $panjang;
    private $lebar;
    private $tinggi;

    public function __construct($panjang, $lebar, $tinggi) {
        $this->panjang = $panjang;
        $this->lebar = $lebar;
        $this->tinggi = $tinggi;
    }

    public function getPanjang() {
        return $this->panjang;
    }

    public function setPanjang($panjang) {
        $this->panjang = $panjang;
    }

    public function getLebar() {
        return $this->lebar;
    }

    public function setLebar($lebar) {
        $this->lebar = $lebar;
    }

    public function getTinggi() {
        return $this->tinggi;
    }

    public function setTinggi($tinggi) {
        $this->tinggi = $tinggi;
    }

    public function luasPermukaan() {
        return 2 * (($this->panjang * $this->lebar) + ($this->panjang * $this->tinggi) + ($this->lebar * $this->tinggi));
    }

    public function volume() {
        return $this->panjang * $this->lebar * $this->tinggi;
    }

    public function __destruct() {
        var_dump("Program Selesai");
    }
}

$balok1 = new Balok(10, 5, 20);

?>
