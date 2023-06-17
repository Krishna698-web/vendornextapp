import React, { useEffect, useState } from "react";
import Vendor from "./Vendor";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/vendor")
      .then((res) => res.json())
      .then((data) => {
        setVendors(data);
      });
  }, []);

  return (
    <div>
      {vendors.map((vendor) => (
        <Vendor vendor={vendor} key={vendor._id} />
      ))}
    </div>
  );
};

export default Vendors;
