import ProductsModel from '../models/productModel.js'

const addProduct = async(req,res) => {
    try {
        const { title,weight,description } = req.body
        const { filename } = req.file
        const addproduct = await ProductsModel.create({productTitle : title, productWeight : weight, productDescription : description, productImage : filename})
        // console.log(addproduct)
        res.status(200).send({
            addproduct
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in adding new product"
        })
    }
}

const getAllProducts = async(req,res) => {
    try {
        let productsList = await ProductsModel.find()
        res.status(200).send({
            productsList
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in adding new product"
        })
    }
}

const updateProduct = async(req,res) => {
    try {
        const { title,weight,description } = req.body
        const { filename } = req.file
        let editedProduct = await ProductsModel.findByIdAndUpdate({_id : req.params.id}, {$set : {productTitle : title, productWeight : weight, productDescription : description, productImage : filename}},{new : true})
        res.status(200).send({
            editedProduct
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in editing product"
        })
    }
}

const removeProduct = async(req,res) => {
    try {
        let deletedProduct = await ProductsModel.findByIdAndDelete({_id: req.params.id})
        res.status(200).send({
            deletedProduct
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in deleting product"
        })
    }
}

export default {
    addProduct,
    getAllProducts,
    updateProduct,
    removeProduct
}