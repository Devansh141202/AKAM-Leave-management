const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/database");
const app = express();
const empRoutes = require("./routes/empRoutes");
const otpRoutes = require("./models/otpModel");

dotenv.config({path:"config/dotenv.env"});
app.use(express.json());

connectDb();

process.on("uncaughtException", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promises");
    
    process.exit(1);
})

app.use('/api/employee', empRoutes);
// app.use('/api/otp', otpRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to ${process.env.PORT}`);
});
