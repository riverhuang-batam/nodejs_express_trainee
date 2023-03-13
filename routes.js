const express = require("express"),
  homeController = require("./controllers/homeController"),
productController = require("./controllers/productController"),
userController = require("./controllers/userController")
router = express.Router();
router.get("/", homeController.home);
router.get("/product/:id", productController.getProductById);
router.get("/products", productController.getProduct);
router.post("/createproduct", productController.postProduct);
router.patch("/updateproduct/:id", productController.updateProduct);
router.delete("/deleteproduct/:id", productController.deleteProduct);
router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.post("/createuser", userController.postUser);
router.patch("/updateuser/:id", userController.updateUser);
router.delete("/deleteuser/:id", userController.deleteUser);
module.exports = router;
