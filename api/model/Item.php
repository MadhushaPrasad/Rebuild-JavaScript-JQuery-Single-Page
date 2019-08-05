<?php
/**
 * Created by IntelliJ IDEA.
 * User: madhusha
 * Date: 8/5/19
 * Time: 2:50 PM
 */

class Item
{
private $code;
private $iName;
private $price;
private $qty;

    /**
     * Item constructor.
     * @param $code
     * @param $iName
     * @param $price
     * @param $qty
     */
    public function __construct($code, $iName, $price, $qty)
    {
        $this->code = $code;
        $this->iName = $iName;
        $this->price = $price;
        $this->qty = $qty;
    }

    /**
     * @return mixed
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * @param mixed $code
     */
    public function setCode($code)
    {
        $this->code = $code;
    }

    /**
     * @return mixed
     */
    public function getIName()
    {
        return $this->iName;
    }

    /**
     * @param mixed $iName
     */
    public function setIName($iName)
    {
        $this->iName = $iName;
    }

    /**
     * @return mixed
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * @param mixed $price
     */
    public function setPrice($price)
    {
        $this->price = $price;
    }

    /**
     * @return mixed
     */
    public function getQty()
    {
        return $this->qty;
    }

    /**
     * @param mixed $qty
     */
    public function setQty($qty)
    {
        $this->qty = $qty;
    }

}