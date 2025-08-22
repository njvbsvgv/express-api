const express = require("express");
const productControllers = require("../controllers/products-controllers");

const router = express.Router();

router.get("/products", productControllers.getAllProducts);
router.get("/products/:id", productControllers.getOneProduct);
router.post("/addNewProduct", productControllers.addProduct);
router.delete("/deleteProduct", productControllers.deleteProduct)
module.exports = router;