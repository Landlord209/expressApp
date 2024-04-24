const express= require("express")
const { getAProduct, getAllProducts, createProduct } = require("../controller/productController")

const router = express.Router()

router.route("/products").get(getAllProducts)  // get all products

router.get("/products/:itemid", getAProduct)

router.post("/products/create", createProduct);

module.exports = router