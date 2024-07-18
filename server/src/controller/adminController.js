import UserAuthModel from "../models/userAuthModel.js"

const allUsers = async(req,res) => {
    try {
        let usersList = await UserAuthModel.find()
        res.status(200).send({
            usersList
        }) 
    } catch (error) {
        res.status(500).send({
            message : "Internal error in fetching Users list"
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
    deleteUser
}