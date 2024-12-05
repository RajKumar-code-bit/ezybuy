//get mongoose
const mongoose = require("mongoose");

/* const connectDatabase=()=>{
  mongoose.connect(process.env.DB_URL).then((con)=>{
     console.log("Mongo db connected to "+ con.connection.host);
     
  })

} */

const connectDatabase = async () => {
  try {
    console.log("MongoDB connection handled in the main server file.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};

module.exports = connectDatabase;
