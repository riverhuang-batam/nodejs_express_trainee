const express = require("express"),
  homeController = require("./controllers/homeController"),
  productController = require("./controllers/productController"),
  userController = require("./controllers/userController"),
  { body } = require("express-validator"),
  { productSchema, userSchema } = require("./middlewares/validators");
router = express.Router();
router.get("/", homeController.home);
router.get("/product/:id", productController.getProductById);
router.get("/products", productController.getProduct);
router.post("/createproduct", productSchema, productController.postProduct);
router.patch(
  "/updateproduct/:id",
  productSchema,
  productController.updateProduct
);
router.delete("/deleteproduct/:id", productController.deleteProduct);
router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.post("/createuser", userSchema, userController.postUser);
router.patch("/updateuser/:id", userSchema, userController.updateUser);
router.delete("/deleteuser/:id", userController.deleteUser);
module.exports = router;
