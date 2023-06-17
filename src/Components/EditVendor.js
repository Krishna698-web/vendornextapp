import React, { useRef, useState } from "react";
import styles from "./Vendors.module.css";
import userEvent from "@testing-library/user-event";

const EditVendor = ({ vendor, onshow, show }) => {
  const [name, setName] = useState(vendor.name);
  const [address1, setAddress1] = useState(vendor.address1);
  const [address2, setAddress2] = useState(vendor.address2);
  const [city, setCity] = useState(vendor.city);

  const submitHandler = async (e) => {
    e.preventDefault();

    let newVendorInfo = {
      name,
      address1,
      address2,
      city,
    };

    const response = await fetch(`http://localhost:3001/vendor/${vendor._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVendorInfo),
    });

    const data = await response.json();
    // console.log(data);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.field}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div className={styles.field}>
        <input
          type="text"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <input
          type="text"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button className={styles.button}>Submit</button>
    </form>
  );
};

export default EditVendor;
