const { products } = require('../models');
const { details } = require('../models');
const existingProductCheck = require('../utils/existingProductCheck');

const createProduct = async (name, brand, model, price, color) => {
    const checkFields = [name, brand, model, price, color];
    const checkFieldsEmpty = checkFields.some(field => field === '');

    if (checkFieldsEmpty) return { type: 'INVALID_FIELDS', message: 'All fields must be filled' };
    if (price < 0) return { type: 'INVALID_PRICE', message: 'Price must be greater than zero' };
    if (color.length < 3) return { type: 'INVALID_COLOR', message: 'Color must be at least 3 characters long' };

    const { type, message } = await existingProductCheck(name, model, color);

    if (type === 'FREE_TO_ADD') {
        await details.create({
            price,
            color,
            productId: message
        });
        return { type: null, message: '' };
    }

    if (type === 'ADD') {
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

    return { type: 'INVALID_PRODUCT', message: 'Product already exists' };

}

const getAll = async () => {
    const data = await products.findAll({
        include: [{
            model: details,
            as: 'data',
            attributes: {
                exclude: ['id', 'productId'],
            },
        }]
    });

    return { type: null, message: data };
}

const updateProduct = async (id, name, brand, model, price, color) => {
    const checkFields = [name, brand, model, price, color];
    const checkFieldsEmpty = checkFields.some(field => field === '');

    if (checkFieldsEmpty) return { type: 'INVALID_FIELDS', message: 'All fields must be filled' };
    if (price < 0) return { type: 'INVALID_PRICE', message: 'Price must be greater than zero' };
    if (color.length < 3) return { type: 'INVALID_COLOR', message: 'Color must be at least 3 characters long' };

    await products.update({ name, brand, model }, { where: { id } });
    await details.update({ price, color }, { where: { id } });
    
    return { type: null, message: 'Updated' };
}

module.exports = { createProduct, getAll, updateProduct };