import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient()

type FindOneParams = Omit<Partial<User>, 'password' | 'createdAt' | 'updatedAt' | 'roleId'>

export class UserRepository {
    static async findOne(params: FindOneParams) {
        const user = await prisma.user.findFirst({
            select: {
                id: true,
                name: true,
                login: true,
                email: true,
            },
            where: {
                ...params
            }
        })

        return user
    }
}
