import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

//using this we will create sessions discounts and many more for payments
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);