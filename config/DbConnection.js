const mongoose = require("mongoose");

const DbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://chow:chow@cluster0.2py3xrd.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
module.exports = DbConnection;
