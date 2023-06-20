console.log("working");
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import router from "./routes/GTranslateRoutes.js";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router);

app.listen(8000, () => console.log("working on port 8000"));