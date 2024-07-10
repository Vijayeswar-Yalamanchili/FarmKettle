import express from 'express'
import userController from '../controller/userController'

const router = express.Router()

router.use('/login',userController.login)
router.use('/register',userController.register)

export default router