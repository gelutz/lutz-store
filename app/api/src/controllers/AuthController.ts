import { Request, Response } from 'express';
import { verifyPassword } from '../utils/verifyPassword';

export const AuthController = {
    login: (request: Request, response: Response) => {
        const {
            login, password
        } = request.body

        try {
            verifyPassword(login, password)

            return response.status(200).send({ message: 'Log in was successfull' })
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
                // log thing logs e.stack to a file
                return response.sendStatus(400)
            }
        }
    }
}
