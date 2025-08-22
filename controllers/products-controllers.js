const products = require("../models/products");
let Products = require("../models/products");

const getAllProducts = async (req, res, next) => {
  const products = await Products.find().exec()
  res.json({data: products, totalCount: products.length});
};

const getOneProduct = (req, res, next) => {
  const filterProduct = products.find((el) => el.id === req.params.id);
  res.json(filterProduct);
};

const addProduct = async (req, res, next) => {
  console.log("body ==>", req.body);
  const { name, price } = req.body;

  const newProduct = new Products({
    name: name,
    price: price
  })

  await newProduct.save()
  res.status(201).json({ message: "product created"});
};

const deleteProduct = (req, res, next) => {
  console.log("delete id ==>", req.body)
  const filterDeta = products.filter(el => el.id !== req.body.productId)

  console.log("new product ==>", filterDeta)
  products = filterDeta

  res.json({message: "محصول مورد نظر با موفقیت حذف شد"})
}

exports.getAllProducts = getAllProducts;
exports.getOneProduct = getOneProduct;
exports.addProduct = addProduct;
exports.deleteProduct = deleteProduct