import React, { useState } from "react";
import Input from "./utils/Input";
import Modal from "./utils/Modal";
import useHttp from "./cutomHooks/useHttp";

const AddVendor = ({ onShowModal }) => {
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankname] = useState("");

  const { sendRequest } = useHttp();

  const addVendorHandler = (e) => {
    e.preventDefault();
    const newInfo = {
      name,
      address1,
      address2,
      city,
      zipcode,
      country,
      accountNumber,
      bankName,
    };
    // console.log(newInfo);

    sendRequest({
      url: "http://localhost:3001/vendor",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newInfo,
    });
  };

  return (
    <Modal
      onClose={onShowModal}
      className="absolute inset-1/3 bg-white p-2 rounded-md drop-shadow-lg">
      <form onSubmit={addVendorHandler}>
        <div className="flex flex-col">
          <Input
            label={"Name"}
            type="text"
            changeValue={(e) => setName(e.target.value)}
          />
          <Input
            label={"Bank Name"}
            type="text"
            changeValue={(e) => setBankname(e.target.value)}
          />
          <Input
            label="Account Number"
            type="number"
            changeValue={(e) => setAccountNumber(e.target.value)}
          />
          <Input
            label={"Address1"}
            type="text"
            changeValue={(e) => setAddress1(e.target.value)}
          />
          <Input
            label={"Address2"}
            type="text"
            changeValue={(e) => setAddress2(e.target.value)}
          />
          <Input
            label="City"
            type="text"
            changeValue={(e) => setCity(e.target.value)}
          />
          <Input
            label="Country"
            type="text"
            changeValue={(e) => setCountry(e.target.value)}
          />
          <Input
            label="Zip-code"
            type="number"
            changeValue={(e) => setZipcode(e.target.value)}
          />
        </div>
        <button className="mt-3 bg-blue-600 py-2 px-5 rounded-sm drop-shadow-md text-white">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddVendor;
