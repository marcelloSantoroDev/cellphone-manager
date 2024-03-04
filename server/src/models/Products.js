
module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:  DataTypes.STRING,
        brand: DataTypes.STRING,
        model: DataTypes.STRING
    },
    {
        timestamps: false
    });

    // products.associate = function (models) {
    //     products.hasOne(models.details, {
    //         foreignKey: 'productId',
    //         as: 'details'
    //     });
    // }


    return products;
}