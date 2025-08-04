const Product = require("../Model/Product");



const addProduct = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files); // 🛑 This should show uploaded images

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No images uploaded" });
    }

    const { title, price, description, stock, category } = req.body;
    const images = req.files.map(file => file.path); // will crash if files are undefined

    const product = new Product({
      title,
      price,
      description,
      stock,
      category,
      images,
      sellerId: req.user.userId
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product
    });
  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};



module.exports = { addProduct };