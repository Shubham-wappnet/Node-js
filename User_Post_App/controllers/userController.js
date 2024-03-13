const { Sequelize, Op, where } = require('sequelize')
require('dotenv').config
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../models')
const User = db.user;
const Post = db.post;


const addUser = async (req, res) => {
    try {
        let info = {
            id: req.body.id,
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            status: req.body.status
        };

        const user = await User.create(info);
        console.log(user);

        res.status(201).send(user);
        return;
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).send('Error adding user');
    }
};

const queryData = async (req, res) => {    // Create a new user record with specified fields
    try {
        let info = {
            id: req.body.id,
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            status: req.body.status
        };
        const user = await User.create({      //option is not availbale with create method
            email: info.email
        });

        console.log(user);

        res.status(201).send(user);
        return;
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).send('Error adding user');
    }
};

/// get all users
const getAllUser = async (req, res) => {
    try {
        const users = await User.findAll({ where: { status: "Active" } });
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

//get one user
const getOneUser = async (req, res) => {
    try {
        const id = req.params.id;
        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: "Invalid id format. Please provide an integer value." });
        }
        const user = await User.findOne({ where: { id: id, status: "Active" } });

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


//search
const searchData = async (req, res) => {
    let user = await User.findAll({
        // id:{
        //     [Op.eq]:102
        // },
        // email:{
        //     [Op.like]:'%@gmail.com'
        // },
        // id: { 
        //     [Op.is]: null 
        // },
        order: [
            ['name', 'desc']
        ],
        limit: 2
        // group:'name' 

    })
    res.status(200).send(user)
}

//update user
const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: "Invalid id format. Please provide an integer value." });
        }
        const updatedUser = await User.update(req.body, { where: { id: id } });
        if (updatedUser > 0) {
            console.log(updatedUser);
            res.status(200).json({
                success: true,
                message: 'User updated successfully',
                user: updatedUser[0]
            });
        } else {
            res.status(404).json({ error: "User not found" });
        }

    } catch (error) {
        console.error("Error occurred while processing request:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

}


//all users' post can be viewed by their id
const viewUserPostById = async (req, res) => {
    try {
        const id = req.params.id;
        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: "Invalid id format. Please provide an integer value." });
        }

        const data = await User.findOne({
            attributes: ['id', 'name', 'email', 'phone'],
            include: [{
                model: Post,
                as: 'postDetails',
                attributes: ['postId', 'title', 'description', 'status']
            }
            ],
            where: { id: id, status: "Active" }
        })
        if (data) {
            res.status(200).send(data);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    }
    catch (error) {
        console.error("Error occurred while fetching user's post:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// soft delete
const userSoftDelete = async (req, res) => {
    try {
        const id = req.params.id;
        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: "Invalid id format. Please provide an integer value." });
        }
        const softDeleteUser = await User.update({ status: "Deleted" }, { where: { id: id, status: "Active" } });
        if (softDeleteUser > 0) {

            const softDeletePost = await Post.update({ status: "Deleted" }, { where: { userId: id, status: "Active" } });
            console.log(softDeleteUser);
            res.status(200).json({
                success: true,
                message: 'User and associated posts soft deleted successfully',
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
const userHardDelete = async (req, res) => {
    try {
        const id = req.params.id;
        if (!Number.isInteger(Number(id))) {
            return res.status(400).json({ error: "Invalid id format. Please provide an integer value." });
        }
        const hardDeleteUser = await User.destroy({ where: { id: id } });
        if (hardDeleteUser > 0) {
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

// signup

const signup = async (req, res) => {
    try {
        const { email, name, phone, status, password } = req.body;

        const existingUser = await User.findOne({ where: { email: email } });
        if (existingUser) {
            return res.status(400).json({ error: 'email is already used' });
        }
        if(password!==confirmpassword){
            return res.status(400).json({error:'password and confirm-password must be same'})
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email, name, phone, status, password: hashedPassword });
        await newUser.save();

    
        const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, {
            expiresIn: "2h"
        });
        newUser.password=undefined

        res.status(201).json({ newUser,token });
    } 
    catch (error) {
        console.error('Error in signup controller:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);  //check password
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "2h"
        });
        //newUser.password=undefined

        res.status(201).json({message:"user is logged in" });
    } 
    catch (error) {
        console.error('Error in login controller:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// change Password
const changePassword=async(req,res)=>{
      try{
          const {email,password,newPassword}=req.body;

          const user=await User.findOne({where:{email:email}})
          if(!user){
            res.status(401).json({error:"Invalid email or password"})
          }

          const isPasswordValid=await bcrypt.compare(password,user.password)
          if(!isPasswordValid){
            res.status(401).json({error:"Invalid email or password "})
          }

          // change password after user is autherised
          const hashedPassword=await bcrypt.hash(newPassword,10) 
          user.password=hashedPassword
          await user.save();
          res.status(200).json({message:"password changed successfully" });
    }
      catch(error){
        console.error('Error in changePassword controller:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
// forgot password
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        console.log(email);
        const user = User.findOne({ where: { email:email } });
        if (!user) return res.status(401).json({ error: "User not found." });

        const data = {
            "email": email,
        }

        const token = jwt.sign(data, process.env.JWT_SECRET, {
            expiresIn: 300
        });

        return res.status(200).json({
            status: true,
            message: "Update password token is generated , update your password withing 5 min",
            token: token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

module.exports = { addUser, 
    getAllUser, 
    getOneUser, 
    updateUser,
    queryData, 
    searchData, 
    viewUserPostById, 
    userSoftDelete, 
    userHardDelete, 
    signup, 
    login,
    changePassword,
    forgotPassword
}