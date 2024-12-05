const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });
const products = require("./routes/product");
const orders = require("./routes/order");
const connectDatabase = require("./config/connectDatabase");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

//connect database
connectDatabase();

// to convert json data
app.use(express.json());
//for access
app.use(cors());

app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
mongoose.connect("mongodb+srv://Rajkumar:Rajkumar@123@cluster0.pp199.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.use("/api/v1", products);
app.use("/api/v1", orders);

app.get("/", (req, res) => {
  res.send("hi");
});

//listeing the port
app.listen(process.env.PORT, () => {
  console.log(`server running in this port buddy ${process.env.PORT}...`);
});
