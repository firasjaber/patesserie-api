const Product = require('./../models/Product');
const ObjectId = require('mongoose').Types.ObjectId;

exports.getAllProducts = async(req,res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({products});
  } catch (error) {
    console.log('INTERNAL ERROR', error)
  }
}

exports.getProduct = async (req,res) =>{
  // lbegi saheel raka7 oumourak
  try {
    const {id} = req.params;
    if (!ObjectId.isValid(id)) return res.status(404).json({message: 'Not Valid Id'});
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({message: 'Product not found'});
    res.status(200).json({product});
  } catch (error) {
    console.log('INTERNAL ERROR', error);
  }
}

exports.addProduct = async (req,res) => {
  try {
    const {name,price,description,category} = req.body;
    if(!name || !price || !category || !description) return res.status(403).json({message : 'Invalid Data'});
    const product = new Product({name,price,description,category});
    await product.save();  
    res.status(200).json({message : "Product Saved Succesfully !", product});
  } catch (error) {
    console.log('INTERNALE ERROR', error);
  }
}

exports.updateProduct = async(req,res) => {
  try {
    const {id} = req.params;
    const {name,price,description,category} = req.body;
    if (!ObjectId.isValid(id)) return res.status(404).json({message: 'Not Valid Id'});
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({message: 'Product not found'});
    const updatedProduct = {name,price,description,category};
    await Product.findByIdAndUpdate(id,{ $set: updatedProduct },{ new: true });
    res.status(200).json({message:"Product updated succesfully"});
  } catch (error) {
    console.log('INTERNAL ERROR', error);
  }
}

exports.deleteProduct = async(req,res) => {
  try {
    const {id} = req.params;
    if (!ObjectId.isValid(id)) return res.status(404).json({message: 'Not Valid Id'});
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({message: 'Product not found'});
    await Product.findOneAndDelete({_id : id});
    res.status(200).json({message:"Product deleted succesfully"});
  } catch (error) {
    console.log('INTERNAL ERROR', error);
  }
}