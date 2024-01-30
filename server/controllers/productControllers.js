const Product = require("../models/productModel");

//@desc add a new Product
//@params POST /api/product
//@acces PRIVATE - admin

exports.addProduct = async (req, res) => {
  try {
    const { title, desc, image, price, qty } = req.body;
    console.log(title, desc, image, price, qty);
    const newProduct = await Product.create({
      title,
      desc,
      image,
      price,
      qty,
    });
    console.log({ newProduct });
    return res.json({ newProduct });
  } catch (error) {
    return res.status(500).json({ msg: "something went wrong !" });
  }
};

//@desc get a list of all Product
  //@params GET /api/product
  //@acces PUBLIC
  (exports.getProducts = async (req, res) => {
    try {
      const Products = await Product.find();
      return res.status(201).json(Products);
    } catch (error) {
      return res.status(500).json({ msg: "something went wrong !" });
    }
  });


  //@desc update Product by id
//@params PUT /api/product/:prodId
//@acces PRIVATE  admin
exports.updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(
      req.params.prodId,
      { ...req.body }, 
      { new: true }
    );
    return res.status(200).json({ msg: "Product updated" });
  } catch (error) {
    return res.status(500).json({ msg: "Something went wrong!" });
  }
};


//@desc delete Product by id
//@params DELETE /api/product/:prodId
//@acces PRIVATE  admin
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.prodId);
    return res.status(200).json({ msg: "product delete" });
  } catch (error) {
    return res.status(500).json({ msg: "something went wrong !" });
  }
};


