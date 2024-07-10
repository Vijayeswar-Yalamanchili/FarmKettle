import express from 'express'
import userController from '../controller/userController.js'

const router = express.Router()

router.use('/login',userController.login)
router.use('/register',userController.register)

export default router