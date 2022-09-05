const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

//home route
router.get("/", productController.home);

//search route
router.get("/buscador", productController.search);

//category filter route
router.get("/:id", productController.filter);

//Ruta de los Detalles del Producto
router.get("/product/:id", productController.productDetail);

//priceUp route
router.get("/precio/sube", productController.pricesUp);

//priceDown route
router.get("/precio/baja", productController.pricesDown);


module.exports = router;
