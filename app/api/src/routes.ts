import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const Routes = Router()
Routes.get('/', (req, res) => {
    // const prisma = PrismaClient()

    console.log(req.body, req.params, req.query)
    res.send({
        message: 'Working!'
    })
})

export { Routes }
