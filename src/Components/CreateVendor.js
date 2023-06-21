import React, { useState } from "react";
import Input from "./utils/Input";

const CreateVendor = ({ initialVal }) => {
  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [bankName, setBankname] = useState("");

  const createVendorHandler = (e) => {
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
    console.log(newInfo);
    fetch(`http://localhost:3001/vendor/${initialVal._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newInfo),
    });
  };

  return (
    <form
      className="absolute inset-1/3 bg-white p-2 rounded-md drop-shadow-lg"
      onSubmit={createVendorHandler}>
      <div className="flex flex-col">
        <Input
          label={"Name"}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label={"Bank Name"}
          type="text"
          onChange={(e) => setBankname(e.target.value)}
        />
        <Input
          label="Account Number"
          type="number"
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <Input
          label={"Address1"}
          type="text"
          onChange={(e) => setAddress1(e.target.value)}
        />
        <Input
          label={"Address2"}
          type="text"
          onChange={(e) => setAddress2(e.target.value)}
        />
        <Input
          label="City"
          type="text"
          onChange={(e) => setCity(e.target.value)}
        />
        <Input
          label="Country"
          type="text"
          onChange={(e) => setCountry(e.target.value)}
        />
        <Input
          label="Zip-code"
          type="number"
          onChange={(e) => setZipcode(e.target.value)}
        />
      </div>
      <button className="mt-3 bg-blue-600 py-2 px-5 rounded-sm drop-shadow-md text-white">
        Submit
      </button>
    </form>
  );
};

export default CreateVendor;
