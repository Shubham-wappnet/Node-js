const {Sequelize,Op}=require('sequelize')
const db=require('../models')
const User=db.user;
console.log('User:', User);

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
            //id: req.body.id,
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



const getAllUser=async(req,res)=>{
    let user=await User.findAll({})
    res.status(200).send(user)
}

const getOneUser=async(req,res)=>{
    let id=req.params.id
    let user=await User.findOne({where:{id:id}})
    res.status(200).send(user)
}

const searchData=async(req,res)=>{   //search 
    let user=await User.findAll({
        // id:{
        //     [Op.eq]:102
        // },
        // email:{
        //     [Op.like]:'%@gmail.com'
        // },
        // id: { 
        //     [Op.is]: null 
        // },
        order:[
            ['name','desc']
        ],
        limit:2
       // group:'name' 

    })
    res.status(200).send(user)
}



const updateUser=async(req,res)=>{
    let id=req.params.id
    let user=await User.update(req.body,{where:{id:id}})
    res.status(200).send(user)
}

const deleteUser=async(req,res)=>{
     let id=req.params.id
     await User.destroy({where:{id:id}})
     res.status(200).send('user is deleted')
}

// let oneToOne=async(req,res)=>{
//     let user=await User.findAll({})
//     res.status(200).send(user)
// }
module.exports={addUser,getAllUser,getOneUser,updateUser,deleteUser,queryData,searchData}