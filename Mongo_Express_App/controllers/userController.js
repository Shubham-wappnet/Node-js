const User=require('../models/userModel.js') 
const bcrypt=require('bcrypt')
const { generatOtp } = require('../service/otpCreate.js');
//const db = require('../models/index.js');

//const User = db.users;



const addUser = async (req, res) => {
    try {
    
        const { email, name, phone,status } = req.body;
        const newUser = new User({
            email,
            name,
            phone,
            status
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// register user
const signup = async (req, res) => {
    try {
        const { email,name,phone,status,password } = req.body;

        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(400).json({ error: 'email is already used' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const newUser = new User({ email,name,phone,status, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const login = async (req, res) => {
    try {
        const email = req.body.email;
        req.session.email = email;
        const user = await User.findOne({where:{ email: email }});
        if(!user){
            res.status(404).json({message:"user is not register"})
        }
        const sessionID = req.sessionID;
        res.status(200).json({
            status: true,
            email: email,
            message: "User is logged in and session is created.",
            sessionID: sessionID
        })
    } catch (error) {
        console.error("Error occurred while fetching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// get all user
const getAllUser = async (req, res) => {
    try {
        
       const users = await User.find();
        if (users) {
            res.status(200).send(users);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
        

    } catch (error) {
        console.error("Error occurred while fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// get user by email
const getUserByemail = async (req, res) => {
    try {

        const email = req.session.email;
        const user = await User.findOne({ email: email }).select("-_id email name phone status");

        if (user) {
            res.status(200).send(user);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    }
    catch (error) {
        console.error("Error occurred while fetching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//update user
const updateUser = async (req, res) => {
    try {
        const email = req.session.email;
        const updateData = req.body;
        const updatedUser = await Users.findOneAndUpdate({ email: email }, updateData, { new: true });
        if (updatedUser) {
            res.status(200).json({
                success: true,
                message: 'User updated successfully',
                user: updatedUser
            });
        } else {
            res.status(404).json({ error: "User not found" });
        }

    } catch (error) {
        console.error("Error occurred while processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}


// otp generate
const sendOtp = async (req, res) => {
    try {
        const email = req.body.email;
        const user = await User.exists({ email: email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        const otp = await generatOtp(email);
        return res.status(200).json({
            status: true,
            message: "Otp is generated for given email.",
            otp: otp
        })

    } catch (error) {
        console.error("user is not fetched", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

// logout
const logout = async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error destroying session:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.clearCookie('connect.sid', { path: '/' });
            res.status(200).json({
                status: true,
                message: "User is logout."
            });
        }
    });
}

// soft detete
const softDelete = async (req, res) => {
    try {
        const email = req.session.email;
        const softDeleteUser = await User.findOneAndUpdate({ email: email, status: "Active" }, { status: "Deleted" }, { new: true });
        if (softDeleteUser) {
            console.log(softDeleteUser);
            res.status(200).json({
                success: true,
                message: 'User soft-deleted ',
                user: softDeleteUser[0]
            });
        } else {
            res.status(404).json({ error: "User not found" });
        }

    } catch (error) {
        console.error("Error occurred while processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// hard delete
const hardDelete = async (req, res) => {
    try {
        const email = req.session.email;
        const hardDeleteUser = await Users.deleteOne({ email: email });
        if (hardDeleteUser) {
            console.log(hardDeleteUser);
            res.status(200).json({
                success: true,
                message: 'User deleted successfully',
                count: hardDeleteUser
            });
        } else {
            res.status(404).json({ error: "User not found" });
        }

    } catch (error) {
        console.error("Error occurred while processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {addUser,signup,login,getAllUser,updateUser,getUserByemail,sendOtp,logout,softDelete,hardDelete};

