// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_name',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_name',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags, {
  through: {
    model: ProductTag,
    unique: false
  }
})

// Tags belongToMany Products (through ProductTag)
Tags.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  }
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
