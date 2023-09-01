const express = require('express')
const productSchema = require("../models/producto")

const router = express.Router()

//Crear prodcuto
router.post('/products', (req, res) => {
    const product = productSchema(req.body)
    // console.log(product)
    product
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//obtener productos
router.get('/products', (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})

//enonctrar un producto
router.get('/products/:id', (req, res) => {
    const {id} = req.params
    productSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})  

//actualizar un producto
router.put('/products/:id', (req, res) => {
    const {id} = req.params
    const {name, price} = req.body
    productSchema
        .updateOne({ _id: id },{ $set:{name, price}} )
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})  

//eliminar un producto
router.delete('/products/:id', (req, res) => {
    const {id} = req.params
    productSchema
        .findByIdAndRemove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}))
})  

module.exports = router