const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const DbConnection = require('./db/connection');
const userRoutes = require("./routes/userRoutes")

dotenv.config();


const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api", userRoutes)

const PORT = process.env.PORT || 4200 ;

//connecting to DB
 DbConnection()
 .then(() => {
//running server on 4200
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
   })
 }).catch((err) => { console.log(err) });








