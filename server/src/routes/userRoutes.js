import express from 'express'
import userAuthController from '../controller/userAuthController.js'
import userController from '../controller/userController.js'
import auth from '../helper/auth.js'

const router = express.Router()

router.post('/login',userAuthController.login)
router.post('/register',userAuthController.register)
router.put('/logout/:id',userAuthController.logout)

router.put('/contact',userController.contact)
router.get('/allusers/:id', auth.authenticate,userController.allUsers)

export default router