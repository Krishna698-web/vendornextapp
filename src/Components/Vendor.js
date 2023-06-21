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
    <li className="flex justify-around items-end gap-10 list-none w-max m-2 drop-shadow-md border p-2">
      <div className="text-left">
        <h1>Name: {vendor.name}</h1>
        <span>Bank: {vendor.bankName}</span>
        <p>A/c No.: {vendor.accountNumber}</p>
        <p>City: {vendor.city}</p>
        {/* <span>{vendor.country}</span> */}
      </div>
      <div className="">
        <button
          className="bg-blue-500 py-2 px-5 text-white rounded-md mx-1 "
          onClick={() => {
            setShowEditVendor(!showEditVendor);
            console.log(showEditVendor);
          }}>
          Edit
        </button>
        <button
          className="bg-red-600 py-2 px-5 text-white rounded-md mx-1"
          onClick={() => deleteVendorHandler(vendor)}>
          Delete
        </button>
      </div>
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
