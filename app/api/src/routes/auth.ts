import { Router } from 'express'
import { AuthController } from '../controllers/AuthController'

const AuthRouter = Router()

AuthRouter.get('/login', AuthController.login)

export { AuthRouter }
