import express from 'express'
import auth from '../helper/auth.js'
import adminAuthController from '../controller/adminAuthController.js'
import adminController from '../controller/adminController.js'

const router = express.Router()

router.post('/login',adminAuthController.login)
router.post('/register',adminAuthController.register)
router.put('/logout/:id',adminAuthController.logout)

router.get('/allusers/:id',auth.adminAuthenticate,auth.adminGuard,adminController.allUsers)
router.get('/currentuser/:userId/:id',auth.adminAuthenticate,adminController.currentUser)
router.put('/edituser/:userId/:id',auth.adminAuthenticate,adminController.editUser)
router.delete('/deleteuser/:userId/:id',auth.adminAuthenticate,adminController.deleteUser)

export default router