import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import connectDataBase from "./config/database.js";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

connectDataBase();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${PORT}`.yellow.bold));
