const { productService } = require('../services');

const createProduct = async (req, res) => {
    const { name, brand, model, price, color } = req.body;
    const { type, message } = await productService.createProduct(name, brand, model, price, color);

    if (type === 'INVALID_FIELDS') return res.status(400).json(message);
    if (type === 'INVALID_PRICE') return res.status(400).json(message);
    if (type === 'INVALID_COLOR') return res.status(400).json(message);
    if (type === 'INVALID_PRODUCT') return res.status(400).json(message);

    res.status(201).json({ type: null, message: 'created' });
}

const getAll = async (_req, res) => {
    const { message } = await productService.getAll();

    res.status(200).json(message);
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, brand, model, price, color } = req.body;
    const { type, message } = await productService.updateProduct(id, name, brand, model, price, color);

    if (type === 'INVALID_FIELDS') return res.status(200).json({ message });
    if (type === 'INVALID_PRICE') return res.status(200).json({ message });
    if (type === 'INVALID_COLOR') return res.status(200).json({ message });
    if (type === 'INVALID_PRODUCT') return res.status(200).json({ message });

    res.status(200).json({ message });
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const { message } = await productService.deleteProduct(id);

    res.status(200).json({ message });
}

module.exports = { createProduct, getAll, updateProduct, deleteProduct };