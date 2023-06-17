import React, { useState } from "react";
import Input from "./utils/Input";

const CreateVendor = ({ initialVal }) => {
  const [name, setName] = useState(initialVal.name);
  const [address1, setAddress1] = useState(initialVal.address1);
  const [address2, setAddress2] = useState(initialVal.address2);
  const [city, setCity] = useState(initialVal.city);
  const [zipcode, setZipcode] = useState(initialVal.zipcode);
  const [country, setCountry] = useState(initialVal.country);
  const [accountNumber, setaccountNumber] = useState(initialVal.accountNumber);
  const [bankName, setBankname] = useState(initialVal.bankName);

  return (
    <form className="absolute top-20">
      <Input
        label={"Name"}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label={"address1"}
        type="text"
        value={address1}
        onChange={(e) => setAddress1(e.target.value)}
      />
      <Input
        label={"Address1"}
        type="text"
        value={address2}
        onChange={(e) => setAddress2(e.target.value)}
      />
      <Input
        type="text"
        label="City"
        value={city}
        changeValue={(e) => setCity(e.target.value)}
      />
    </form>
  );
};

export default CreateVendor;
