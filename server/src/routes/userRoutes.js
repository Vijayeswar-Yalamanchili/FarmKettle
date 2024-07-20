import express from 'express'
import userAuthController from '../controller/userAuthController.js'
import userController from '../controller/userController.js'
import auth from '../helper/auth.js'
import addressController from '../controller/addressController.js'

const router = express.Router()

router.post('/login',userAuthController.login)
router.post('/register',userAuthController.register)
router.put('/logout/:id',userAuthController.logout)

//user
router.put('/contact',userController.contact)
router.get('/allusers/:id', auth.authenticate,userController.allUsers)
router.get('/currentuser/:id', auth.authenticate,userController.currentUserData)
router.put('/profileupdate/:id', auth.authenticate,userController.userprofileUpdate)

//address
router.post('/addaddress/:id',auth.authenticate, addressController.addAddress)
router.get('/getaddress/:id',auth.authenticate, addressController.getAddress)
router.put('/editaddress/:id/:addressId',auth.authenticate, addressController.editAddress)
router.delete('/deleteaddress/:id/:addressId',auth.authenticate, addressController.deleteAddress)

//Products
router.get('/allproducts/:id',auth.authenticate, userController.getAllProducts)

export default router