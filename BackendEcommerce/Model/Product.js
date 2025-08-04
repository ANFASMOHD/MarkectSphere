    const  mongoose  = require("mongoose");


        const productSchema = new mongoose.Schema({
      title: String,
      description: String,
      price: Number,
      images: [String],
      stock: Number,
      category: String,
      sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Register'
      }
    });

    const Product = mongoose.model("Product", productSchema);

    module.exports = Product;