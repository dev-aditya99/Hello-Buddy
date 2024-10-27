import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/jwtToken.js";

// sign up user 
export const signupUser = async (req, res) => {
    try {
        // distructing the data from req.body 
        const { first_name, last_name, username, email, password, confirm_password, gender } = req.body;

        // check condition for password matches to confirm_password or not 
        if (password != confirm_password) {
            return res.status(400).json({ error: "Password doesn't match" })
        }

        // find a user by username 
        const user = await User.findOne({ username });

        // if user exist by that username, then send an error to client side 
        if (user) {
            return res.status(400).json({ error: "This username unavailable" })
        }

        // Hash password here
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        // define avatars for user profiles
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // create new user 
        const newUser = new User({
            first_name,
            last_name,
            username,
            email,
            password: hashedPassword,
            gender: gender === 0 ? "female" : "male",
            profile_pic: gender === 0 ? girlProfilePic : boyProfilePic
        })

        if (newUser) {
            // generate JWT token 
            generateTokenAndSetCookie(newUser?._id, res);

            // save the new user 
            await newUser.save();

            // send an json response
            res.status(201).json({
                msg: "User Sign Up Successfully",
                _id: newUser._id,
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                username: newUser.username,
                profile_pic: newUser.profile_pic,
            })
        } else {
            res.status(400).json({ error: "Invalid User Data" });
        }

    } catch (error) {
        console.error("Error in Sign Up Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// login user 
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user?._id, res);

        // send an json response
        res.status(201).json({
            msg: "User Login Successfully",
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            profile_pic: user.profile_pic,
        })
    } catch (error) {
        console.error("Error in Login Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// logout user 
export const logoutUser = async (req, res) => {
    try {
        await res.cookie("uuid", "", { maxAge: 0 });
        res.status(201).json({ msg: "User Logged Out Successfully" })
    } catch (error) {
        console.error("Error in Logout Controller : ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}