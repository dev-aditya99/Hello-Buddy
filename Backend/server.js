import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";
import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import userRouter from "./routes/user.routes.js";
import cors from "cors";
import { app, server } from "./socket/socket.js"

dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
// app.use(cors());

app.use(cors({
    origin: process.env.FRONTEND_URL, // The frontend domain
    credentials: true, // This allows cookies to be sent in cross-origin requests
    methods: ["POST", "GET"]
}));

app.use("/auth", authRouter);
app.use("/messages", messageRouter);
app.use("/users", userRouter);

app.use(express.static(path.join(__dirname, "/Frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Frontend", "dist", "index.html"));
});



server.listen(PORT, () => {
    connectToMongoDB()
    console.log("Server Running on PORT " + PORT);
});