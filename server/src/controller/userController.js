const login = async(req,res) => {
    try {
        console.log(req.body)
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in fetching email"
        })
    }
}

const register = async(req,res) => {
    try {
        console.log(req.body)
    } catch (error) {
        res.status(500).send({
            message : "Internal server error in fetching email"
        })
    }
}

export default {
    login,
    register,
}