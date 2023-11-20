// require('dotenv').config()

import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`\n Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB CONNECTION ERROR", err);
    process.exit(1);
  });

/**
  import express from "express";
  
  const app = express();
  
  (async () => {
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      app.on("error", (error) => {
        console.log("Error", error);
      });
  
      app.listen(process.env.PORT, () => {
        console.log(`APP is listing on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.log("ERRROR", error);
    }
  })();
 */
