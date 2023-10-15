const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./db/database');

dotenv.config();
const PORT = process.env.PORT || 8000;

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason.stack || reason)
  console.log("Shutting Down Server due to Unhandled Promise Rejection");
  server.close(()=> {
    process.exit(1);
  })
});

process.on('uncaughtException', (err)=> {
  console.log(`Error: ${err}`);
  console.log("Shutting Down Server due to Uncaught Exception");
  server.close(()=> {
    process.exit(1);
  })
})

// config
if (process.env.NODE_ENV !== "DEVELOPMENT") {
  require("dotenv").config({ path: "server/config/.env" });
}

// Connecting to the database
connectDB(); 

// Starting the server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});