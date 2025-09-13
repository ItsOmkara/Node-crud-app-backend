const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const Product = require('./models/product.model');
const productRoute = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get('/',(req,res)=>{
    res.send('Hello from Node API Server');
});


app.use("/api/products", productRoute);




mongoose.connect("mongodb+srv://9403139921om_db_user:fXcQfB5e6Rudh6eR@backenddb.231hbmg.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
    console.log("Connected to Database!")
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
    
})
.catch(()=>{
    console.log("Connection failed")
});