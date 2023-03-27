import { prisma } from '../config/prisma'

export const verifyPassword = async (login: string, givenPassword: string) => {
    const realPassword = await prisma.user.findFirst({
        select: { password: true },
        where: { login }
    })

    if (!realPassword) {
        throw new Error('Login not found.')
    }

    if (realPassword.password !== givenPassword) {
        throw new Error('Password is incorrect.')
    }
    // verify
    return true
}
