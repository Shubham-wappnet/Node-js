
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        
    },
    status: {
        type: String,
        enum: ['Active', 'Deleted'],
        default:"Active",
        required: true
    },
    password:{
        type: String,
        required: true
    },
    
   
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
