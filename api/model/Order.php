<?php
/**
 * Created by IntelliJ IDEA.
 * User: madhusha
 * Date: 8/5/19
 * Time: 2:50 PM
 */

class Order
{

    private $oid;
    private $date;
    private $customerID;

    /**
     * Order constructor.
     * @param $oid
     * @param $date
     * @param $customerID
     */
    public function __construct($oid, $date, $customerID)
    {
        $this->oid = $oid;
        $this->date = $date;
        $this->customerID = $customerID;
    }

    /**
     * @return mixed
     */
    public function getOid()
    {
        return $this->oid;
    }

    /**
     * @param mixed $oid
     */
    public function setOid($oid)
    {
        $this->oid = $oid;
    }

    /**
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @param mixed $date
     */
    public function setDate($date)
    {
        $this->date = $date;
    }

    /**
     * @return mixed
     */
    public function getCustomerID()
    {
        return $this->customerID;
    }

    /**
     * @param mixed $customerID
     */
    public function setCustomerID($customerID)
    {
        $this->customerID = $customerID;
    }
}