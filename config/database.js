const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Database connected!"))
    .catch((e) => {
      console.log(e);
    });
};
module.exports = connectDb;
