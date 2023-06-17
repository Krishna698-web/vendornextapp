import React, { useEffect, useState } from "react";
import Vendor from "./Vendor";
import styles from "./Vendors.module.css";
import CreateVendor from "./CreateVendor";

const Vendors = () => {
  const [showVendorForm, setShowVendorForm] = useState(false);
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/vendor")
      .then((res) => res.json())
      .then((data) => {
        setVendors(data);
      });
  }, [vendors]);

  return (
    <div className="w-full flex flex-col bg-blue-500 items-center justify-center mt-10 p-1">
      <div className="w-6/12 relative flex flex-wrap items-center justify-between min-w-max bg-green-500">
        <h1 className="text-2xl font-semibold">Vendors List</h1>
        <button
          className="p-3 rounded-sm	drop-shadow-lg bg-blue-500 text-white"
          onClick={() => setShowVendorForm(!showVendorForm)}>
          Add vendor
        </button>
        {showVendorForm && <CreateVendor initialVal={vendors} />}
      </div>
      {vendors.map((vendor) => (
        <Vendor vendor={vendor} key={vendor._id} />
      ))}
    </div>
  );
};

export default Vendors;
