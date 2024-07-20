import UserAuthModel from "../models/userAuthModel.js"

const allUsers = async(req,res) => {
    try {
        let usersList = await UserAuthModel.find()
        if(usersList) {
            let userCount = await UserAuthModel.countDocuments({isAdmin : false})
            let adminCount = await UserAuthModel.countDocuments({isAdmin : true})
            res.status(200).send({
                usersList,
                userCount,
                adminCount
            }) 
        }
    } catch (error) {
        res.status(500).send({
            message : "Internal error in fetching Users list"
        })
    }
}

const currentUser = async(req,res) => {
    try {
        let currentuser = await UserAuthModel.findById({_id : req.params.userId})
        res.status(200).send({
            currentuser
        }) 
    } catch (error) {
        res.status(500).send({
            message : "Internal error in fetching Users list"
        })
    }
}

const editUser = async(req,res) => {
    try {
        let editUserData = await UserAuthModel.findByIdAndUpdate({_id : req.params.userId},{$set : req.body},{new : true})
        res.status(200).send({
            editUserData
        }) 
    } catch (error) {
        res.status(500).send({
            message : "Internal error in editing Users data"
        })
    }
}

const deleteUser = async(req,res) => {
    try {
        let deletedUser = await UserAuthModel.findByIdAndDelete({_id : req.params.id})
        res.status(200).send({
            deletedUser
        }) 
    } catch (error) {
        res.status(500).send({
            message : "Internal error in fetching Users list"
        })
    }
}

export default {
    allUsers,
    currentUser,
    editUser,
    deleteUser
}