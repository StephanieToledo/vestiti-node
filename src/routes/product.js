const express = require('express')
const router = express.Router()
const Product = require('../models/product')
module.exports = router

router.post('/product', async (req, res) => {
  const data = new Product({
      name: req.body.name,
      actual_price: req.body.actual_price,
      old_price: req.body.old_price,
      image: req.body.image,
      description: req.body.description
  })

  try {
      const dataToSave = await data.save()
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

router.get('/products', async (req, res) => {
  try{
    const data = await Product.find();
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
})

router.get('/product/:id', async (req, res) => {
  try{
    const data = await Product.findById(req.params.id);
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
})

router.patch('/product/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Product.findByIdAndUpdate(
        id, updatedData, options
    )

    res.send(result)
}
catch (error) {
    res.status(400).json({ message: error.message })
}
})

router.delete('/product/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Product.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
}
catch (error) {
    res.status(400).json({ message: error.message })
}
})