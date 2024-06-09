import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        unique: true,
        required: true
    },
    EmailOrPhone: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    roles: {
        type: [String],
        default: ['Employee']
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User', userSchema);


