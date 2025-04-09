# 🛒 Trends&Y

A full-featured eCommerce website built with modern technologies. Users can browse products, add items to the cart, checkout securely, and manage orders. The application is deployed and live on [Render](https://render.com/).

## 🌐 Live Demo

👉 [Visit the Live Website](https://mern-trends-y-ecomm.onrender.com)  


## 🚀 Features

- User authentication and profile management
- Product listing 
- Featuring products
- Shopping cart and order checkout
- Recommendation for the products at cart 
- Payment integration 
- Coupon aplyment and management 
- Admin dashboard to manage products and orders and analyse all the revenues
- Fully responsive design

## 🛠️ Tech Stack

**Frontend:**  
- HTML, CSS, JavaScript  
- React.js 

**Backend:**  
- Node.js with Express  
- MongoDB with Mongoose
- Redis for refresh and access token management
**Deployment:**  
- Render (Cloud hosting)

## 📦 Dependencies

**Frontend:**  
- React
- React-Dom 
- React-Router  
- Axios  
- React-Hot-Toast  
- React-Confetti  
- Framer-Motion  
- Lucide-React  
- @stripe/stripe-js  
- recharts  
- Zustand

**Backend:**  
- Node.js  
- Express   
- Mongoose  
- Bcrypt.js  
- Dotenv  
- Jsonwebtoken  
- Cloudinary  
- cookie-parser  
- stripe  
- Ioredis

## 🔐 Environment Variables

To run this project locally, create a `.env` file in the root directory and add the following:

```env
PORT=5000

MONGO_URI=Your_mongodb_url
UPSTASH_REDIS_URL=Your_upstash_redis_url

ACCESS_TOKEN_SECRET=access_token_secret
REFRESH_TOKEN_SECRET=refresh_token_secret

JWT_SECRET=your_jwt_secret_here

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key_here
CLOUDINARY_API_SECRET=your_cloudinary_api_secret_here

STRIPE_SECRET_KEY=your_stripe_key_here
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

## 🚀 Run Locally
```terminal
npm run build
```

## 🚀 Start the App
```terminal
npm run start
```




