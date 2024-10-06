const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        unique: true
    },
    address: {
        type: "string",
    }
}, { timestamps: true })


const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;