import { Router } from 'express'
import { AuthRouter } from './auth'

const router = Router()
router.get('/', (req, res) => {
    return res.send({
        message: 'ok'
    })
})
router.use('/auth', AuthRouter)

export { router }
