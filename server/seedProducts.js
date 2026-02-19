// seedProducts.js
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const Product = require("./models/Product");

// MongoDB connection
mongoose
  .connect("mongodb+srv://abidazamkhan26_db_user:oE11nK6EPuNNI3n2@cluster0.r2nduq7.mongodb.net/MernEcommerce2024?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Categories & Brands example
// New categories
const categories = ["men", "women", "kids", "accessories", "footwear"];

// New brands
const brands = ["h&m", "zara", "levi", "puma", "adidas", "nike"];

// Generate 30 products
const products = Array.from({ length: 30 }).map(() => ({
  image: `https://picsum.photos/seed/${faker.string.uuid()}/400/400`, 
  title: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  category: categories[Math.floor(Math.random() * categories.length)],
  brand: brands[Math.floor(Math.random() * brands.length)],
  price: Number(faker.commerce.price(50, 500, 2)),
  salePrice: Number(faker.commerce.price(20, 400, 2)),
  totalStock: faker.number.int({ min: 10, max: 100 }),
  averageReview: Number((Math.random() * 5).toFixed(1)),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

// Insert into DB
const seedProducts = async () => {
  try {
    await Product.deleteMany(); 
    const inserted = await Product.insertMany(products);
    console.log(`${inserted.length} products added successfully!`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedProducts();
