import express from 'express'

const router = express.Router()

router.use('/users',usersRoutes)

export default router