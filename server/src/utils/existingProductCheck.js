const { products } = require('../models');
const { details } = require('../models');

const existingProductCheck = async (name, model, color) => {
    const thereIsAProductWithName = await products.findOne({ where: { name } });
    const thereIsAProductWithModel = await products.findOne({ where: { model } });
    const thereIsAProductWithColor = await details.findOne({ where: { color } });

    if (thereIsAProductWithName && thereIsAProductWithModel && !thereIsAProductWithColor) {
        return { type: 'FREE_TO_ADD', message: thereIsAProductWithName.id }; 
    }

    if (thereIsAProductWithName && thereIsAProductWithModel && thereIsAProductWithColor) {
        return { type: 'DONT_ADD', message: '' };
    }

    return { type: 'ADD', message: '' };
}

module.exports = existingProductCheck;