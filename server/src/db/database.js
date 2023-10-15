const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then((data)=>{
    console.log(`MongoDB Connected with the Server: ${data.connection.host}`);
  })
  .catch((err)=>{
    console.log(`Shutting Down Server due to ${err.name}`);
    console.log(`Error: ${err}`);
    process.exit(1);
  })
}

module.exports = connectDB;