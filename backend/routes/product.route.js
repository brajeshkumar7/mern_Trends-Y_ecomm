import express from 'express';
import {
    getAllProducts, getFeaturedProducts,
    createProduct,
    deleteProduct,
    getRecommendedProducts, getProductsByCategory, toggleFeaturedProducts,
} from '../controllers/product.controller.js';
const router = express.Router();
import { protectRoute, adminRoute } from '../middleware/auth.middleware.js';



router.get('/', protectRoute, adminRoute, getAllProducts);
router.get('/featured', getFeaturedProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/recommendations', getRecommendedProducts);
router.patch('/:id', protectRoute, adminRoute, toggleFeaturedProducts);
router.post('/', protectRoute, adminRoute, createProduct);
router.delete('/:id', protectRoute, adminRoute, deleteProduct);

export default router;
