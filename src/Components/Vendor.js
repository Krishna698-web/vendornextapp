import React, { useState } from "react";
import EditVendor from "./EditVendor";

const Vendor = ({ vendor }) => {
  const [showEditVendor, setShowEditVendor] = useState(false);

  const deleteVendorHandler = async (vendor) => {
    const response = await fetch(`http://localhost:3001/vendor/${vendor._id}`, {
      method: "DELETE",
    });

    const data = await response.json();
  };

  return (
    <li className="list-none w-full m-2">
      <h1>{vendor.name}</h1>
      <span>{vendor.bankName}</span>
      <p>{vendor.city}</p>
      <span>{vendor.country}</span>
      <p>{vendor.accountNumber}</p>
      <button
        onClick={() => {
          setShowEditVendor(!showEditVendor);
          console.log(showEditVendor);
        }}>
        Edit
      </button>
      <button onClick={() => deleteVendorHandler(vendor)}>Delete</button>
      {showEditVendor && (
        <EditVendor
          vendor={vendor}
          //   onShow={setShowEditVendor}
          //   show={showEditVendor}
        />
      )}
    </li>
  );
};

export default Vendor;
