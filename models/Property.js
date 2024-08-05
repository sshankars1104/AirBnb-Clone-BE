const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true }, // Added category field
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
