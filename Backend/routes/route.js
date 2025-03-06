// routes.js
import express from "express";
import { getProduct, getProductById } from "../controllers/product-controller.js";
import { userSignup, userLogin } from "../controllers/user-controller.js";
import { addPaymentGateway, paymentResponse } from "../controllers/payment-controller.js";

const router = express.Router();

// User Routes
router.post('/signup', userSignup);
router.post('/login', userLogin);

// Product Routes
router.get('/product', getProduct); // Fetch all products
router.get('/product/:id', getProductById); // Fetch product by ID
router.post('/payment',addPaymentGateway);
router.post('/callback',paymentResponse)



export default router;
