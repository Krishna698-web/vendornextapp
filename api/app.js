// packages import
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

// model
const Vendor = require("./vendor");

// environment variable configuration
dotenv.config();

// parsing the receiving json/data
app.use(express.json());

// Making connection to the mongodb
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Allowing request from different origins
app.use(
  cors({
    origin: "*",
    method: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Making a fetch/get request
app.get("/", async (req, res) => {
  res.send("hello");
});

// Making a add/post request
app.post("/vendor", async (req, res) => {
  const {
    name,
    accountNumber,
    bankName,
    address1,
    address2,
    city,
    country,
    zipcode,
  } = req.body;

  try {
    const vendor = await Vendor.create({
      name,
      accountNumber,
      bankName,
      address1,
      address2,
      city,
      country,
      zipcode,
    });
    res.json(vendor);
  } catch (error) {
    console.log(error.message);
    throw new Error();
  }
});

// Making a get/fetch request on vendor
app.get("/vendor", async (req, res) => {
  res.json(await Vendor.find());
});

// Making a get/fetch request on vendor with the vendor's id
app.get("/vendor/:id", async (req, res) => {
  const { id } = req.params;
  const vendorDoc = await Vendor.findById(id);
  res.json(vendorDoc);
  // vendorDoc.set({});
});

// Making a put/update request on vendor with vendor's id
app.put("/vendor/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    accountNumber,
    bankName,
    address1,
    address2,
    city,
    country,
    zipcode,
  } = req.body;
  try {
    const vendorDoc = await Vendor.findByIdAndUpdate(id, {
      name,
      accountNumber,
      bankName,
      address1,
      address2,
      city,
      country,
      zipcode,
    });
    vendorDoc.save();
    res.json({ success: "success" });
  } catch (error) {
    console.log(error.message);
    throw new Error();
  }
});

// Making a delete/remove request on vendor with vendor's id
app.delete("/vendor/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const vedorDeletion = await Vendor.findByIdAndDelete(id);
    res.json({ success: "document deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
});

// Listening to the server
app.listen(3001, () => console.log("listening"));

// Exporting the app
module.exports = app;
