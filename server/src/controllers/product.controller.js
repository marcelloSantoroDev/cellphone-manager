const { productService } = require('../services');

const createProduct = async (req, res) => {
    const { name, brand, model, price, color } = req.body;
    const { type, message } = await productService.createProduct(name, brand, model, price, color);

    if (type === 'INVALID_FIELDS') return res.status(200).json({ message });
    if (type === 'INVALID_PRICE') return res.status(200).json({ message });
    if (type === 'INVALID_COLOR') return res.status(200).json({ message });

    res.status(201).json('created');
}

module.exports = { createProduct };