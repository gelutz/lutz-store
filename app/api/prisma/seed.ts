import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const main = async () => {
    // ROLES
    const admin = await prisma.role.upsert({
        where: { name: 'admin' },
        update: {},
        create: {
            name: 'admin',
        }
    })

    const staff = await prisma.role.upsert({
        where: { name: 'staff' },
        update: {},
        create: {
            name: 'staff',
        }
    })

    const customer = await prisma.role.upsert({
        where: { name: 'customer' },
        update: {},
        create: {
            name: 'customer',
        }
    })
    //

    // USERS
    const first = await prisma.user.upsert({
        where: { login: 'first' },
        update: {},
        create: {
            email: 'first@gmail',
            name: 'First User',
            login: 'first',
            password: '123',
            roleId: 'admin'
        },
    })
    //

    console.log('SEEDING CONCLUÍDO COM SUCESSO!')
    console.log([admin, staff, customer, first])
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
