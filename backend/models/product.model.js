import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 0,
        required: true,
    },
    image: {
        type: String,
        required: [true, 'Image is required'],
    },
    category: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },

}, { timestamps: true });


// Create a new model on the top of the schema so that we can use the model to interact with the database
const Product = mongoose.model('Product', productSchema);

export default Product;