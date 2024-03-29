const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const cors=require('cors');
app.use(cors('http://localhost:5000'));

//server creation
const port = process.env.PORT || 5000 ;
app.listen(port,(err)=>
   err ? console.log(err) : console.log(`server is runnig on port ${port}`)) 

//connection to database
const connectDB =require('./config/ConnectDB');
connectDB();

//routes
app.use('/api/person', require('./routes/personRoutes'));
app.use('/api/product', require('./routes/productRoutes'));