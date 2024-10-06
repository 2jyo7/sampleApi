const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const DbConnection = async() => await mongoose.connect(
    process.env.MONGO_URI || ""
).then(() => console.log('Connected to MongoDB ')
).catch((err) => console.log(err.message));


module.exports = DbConnection;
