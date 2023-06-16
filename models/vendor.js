const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema({
  name: { type: String, require: true },
  accountNumber: { type: Number, require: true, unique: true },
  bankName: { type: String, require: true },
  address1: { type: String, require: true },
  address2: { type: String, require: true },
  city: { type: String, require: true },
  country: { type: String, require: true },
  zipcode: { type: Number, require: true },
});

const Vendor = mongoose.model("Vendor", vendorSchema);
module.exports = Vendor;
