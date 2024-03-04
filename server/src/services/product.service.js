const { products } = require('../models');
const { details } = require('../models');  

const createProduct = async (name, brand, model, price, color) => {
    const checkFields = [name, brand, model, price, color];
    const checkFieldsEmpty = checkFields.some(field => field === '');

    if (checkFieldsEmpty) return { type: 'INVALID_FIELDS', message: 'All fields must be filled' };
    if (price < 0) return { type: 'INVALID_PRICE', message: 'Price must be greater than zero' };
    if (color.length < 3) return { type: 'INVALID_COLOR', message: 'Color must be at least 3 characters long' };

    const product = await products.create({
        name,
        brand,
        model,
    });

    await details.create({
        price,
        color,
        productId: product.id
    });

    return { type: null, message: '' };
}

module.exports = { createProduct };