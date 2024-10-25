import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.uuid;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" })
        }

        const user = await User.findById(decoded?.userId).select("-password");

        if (!user) {
            return res.status(401).json({ error: "User Not Found" })
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Error in protectRoute Middleware : ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default protectRoute;