import express from 'express'
import userController from '../controller/userController.js'

const router = express.Router()

router.post('/login',userController.login)
router.post('/register',userController.register)
router.put('/logout/:id',userController.logout)

export default router