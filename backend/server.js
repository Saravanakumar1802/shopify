import express from "express";
import products from "./data/products.js";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB() //connect to mongoDB


const app = express();
app.get('/', (req, res) => {
    res.send('API is Running')
})

app.get('/api/products', (req, res) => {
    res.send(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.send(product)
})

app.listen(PORT, () => console.log(`Server Running on ${PORT}`))