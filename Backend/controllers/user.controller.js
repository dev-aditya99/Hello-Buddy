import User from "../models/user.model.js";

export const getUserForSideBar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");

        res.status(201).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUserForSideBar Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}