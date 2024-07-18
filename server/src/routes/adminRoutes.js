import express from 'express'
import adminController from '../controller/adminController.js'

const router = express.Router()

router.post('/login',adminController.login)
router.post('/register',adminController.register)
router.put('/logout/:id',adminController.logout)

export default router