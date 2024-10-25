import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";
import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/messages", messageRouter);
app.use("/users", userRouter);

// root route 
app.get("/", (req, res) => {
    res.send("Shree Ganesh ji ki jay ho")
})


app.listen(PORT, () => {
    connectToMongoDB()
    console.log("Server Running on PORT " + PORT);
});