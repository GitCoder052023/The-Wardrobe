const Product = require('../models/product')

async function getProductsByCategory(req, res) {
    try {
        const { category } = req.body;
        const products = await Product.getProductsByCategory(category);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server error', error: error.message });
    }
}

async function getProductsByKeywords(req, res) {
    try {
        const { keywords } = req.body;
        const products = await Product.getProductsByKeywords(keywords);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server error', error: error.message });
    }
}

module.exports = { getProductsByCategory, getProductsByKeywords };
