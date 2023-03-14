const { check, oneOf, body } = require("express-validator");
const productSchema = [
  check("item", "item doesn exist").exists(),
  body("item", "item length at least 6").isLength({ min: 5 }),
];
const userSchema = [
  check("firstName", "firstName doesn exist").exists(),
  body("firstName", "firstName length at least 6").isLength({ min: 5 }),
];
module.exports = {
  productSchema,
  userSchema,
};
