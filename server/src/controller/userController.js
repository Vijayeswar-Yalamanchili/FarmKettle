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
        console.log(req.params)
        const usersList = await UserAuthModel.find()
        res.status(200).send({
            usersList
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in sending your query"
        })
    }
}

export default {
    contact,
    allUsers
}