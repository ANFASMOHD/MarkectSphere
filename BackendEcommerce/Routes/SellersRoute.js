

const express = require("express");
const { addProduct } = require("../Controllers/SellerControllers");

const authentication = require("../Middleware/AuthMiddleware");
const authorizeRoles = require("../Middleware/RoleMiddleware");
const upload = require("../Middleware/Upload");
const router = express.Router();    



router.post(
  "/add-product",
  upload.array("images", 5), // 👈 MUST be BEFORE your controller
  authentication,
  authorizeRoles("seller"),
  addProduct
);



module.exports = router;

