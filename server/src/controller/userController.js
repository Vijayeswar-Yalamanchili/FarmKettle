import UserAuthModel from '../models/userAuthModel.js'

const contact = async(req,res) => {
    try {
        const {userName ,email,mobile,description} = req.body
        res.status(200).send({
            message : "Thanks for Contacting us, We will revert you back!!!",
        })
        await adminToEmpEmailService(userName ,email,mobile,description)
        await userToAdminEmailService(email)
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in sending your query"
        })
    }
}

const allUsers = async(req,res) => {
    try {
        const usersList = await UserAuthModel.find()
        res.status(200).send({
            usersList
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in getting users data"
        })
    }
}

const currentUserData = async(req,res) => {
    try {
        const currentUser = await UserAuthModel.findById({_id : req.params.id})
        res.status(200).send({
            currentUser
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in getting current User data"
        })
    }
}

const userprofileUpdate = async(req,res) => {
    try {
        const updatedProfile = await UserAuthModel.findByIdAndUpdate({_id : req.params.id}, {$set : req.body},{new :true})
        res.status(200).send({
            updatedProfile
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in updating profile data"
        })
    }
}

const addAddress = async(req,res) => {
    try {
        const newAddress = await UserAuthModel.findByIdAndUpdate({_id : req.params.id}, {$push : {addressList : req.body.newAddress}},{new :true})
        res.status(200).send({
            newAddress
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in adding address"
        })
    }
}

const getAddress = async(req,res) => {
    try {
        const addresslist = await UserAuthModel.findById({_id : req.params.id})
        if(addresslist){
            let list = addresslist.addressList
            let lists = list.map((e) => e )
            res.status(200).send({
                lists
            })
        }
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in getting address"
        })
    }
}

export default {
    contact,
    allUsers,
    currentUserData,
    userprofileUpdate,
    addAddress,
    getAddress
}