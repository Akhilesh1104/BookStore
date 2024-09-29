import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/bookroute.js";
import userRoute from "./routes/userroute.js";
import cors from "cors";

const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 4000;
const URL = process.env.MONGOURL;

try{
   mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   });
   console.log("Connected To Mogo DB...");
}catch(err)
{
    console.log("Error", err);
}


// Defining Routes...
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})