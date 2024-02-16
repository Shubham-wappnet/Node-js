var db=require('../models')
const Users=db.users;

var addUser=(req,res)=>{
    let response={
        data:'ok'
    }
    res.status(200).json(response);
}
module.exports={
    addUser
}