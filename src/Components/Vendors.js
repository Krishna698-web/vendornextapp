import React, { useEffect, useState } from "react";
import Vendor from "./Vendor";
import styles from "./Vendors.module.css";
import CreateVendor from "./CreateVendor";
import useHttp from "./cutomHooks/useHttp";

const Vendors = () => {
  const [showVendorForm, setShowVendorForm] = useState(false);
  const [vendors, setVendors] = useState([]);

  const { fetchData } = useHttp();

  const getVendorData = (vendorData) => {
    setVendors(vendorData);
  };

  useEffect(() => {
    fetchData({ url: "http://localhost:3001/vendor" }, getVendorData);
  }, [vendors]);

  return (
    <div className="w-full flex flex-col  justify-center mt-10 p-1">
      <div className="w-6/12 flex flex-wrap items-center justify-between min-w-max  m-auto">
        <h1 className="text-2xl font-semibold">Vendors List</h1>
        <button
          className="p-3 rounded-sm	drop-shadow-lg bg-blue-500 text-white"
          onClick={() => setShowVendorForm(!showVendorForm)}>
          Add vendor
        </button>
        {showVendorForm && <CreateVendor initialVal={vendors} />}
      </div>
      <ul className="flex items-center flex-col mt-5">
        {vendors.map((vendor) => (
          <Vendor vendor={vendor} key={vendor._id} />
        ))}
      </ul>
    </div>
  );
};

export default Vendors;
