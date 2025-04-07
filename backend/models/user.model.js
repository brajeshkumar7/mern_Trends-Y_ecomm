import mongoose from "mongoose";
import bcrypt from "bcryptjs";



// Create a new schema for the user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],

    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowerCase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    cartItems: [{
        quantity: {
            type: Number,
            default: 1,
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
    },],
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer',
    },
},
    { timestamps: true }
);

// Create a pre-save hook to hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});
// Create a method to compare the password
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}
// Create a new model on the top of the schema so that we can use the model to interact with the database
const User = mongoose.model('User', userSchema);


export default User;
