/* const mongoose = require("mongoose");
require("dotenv").config();
const ConnectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
 const db = mongoose.connection;

 db.on("error", console.error.bind(console, "MongoDB connection error:"));
 db.once("open", () => {
   console.log("Connected to MongoDB");
 });
}
module.exports = ConnectDB; */
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("database is connected"))
    .catch((err) => console.log(err)); 
};
module.exports = connectDB; 
