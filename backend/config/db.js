const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Successfully Connected :${conn.connection.host}`);
  } catch (error) {
    console.log(`Error occured : ${error.message}`);
    process.exit();

  }
};
module.exports = connectDB;