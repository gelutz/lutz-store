import { PrismaClient } from '@prisma/client';
import { logger } from '../controllers/LogController';

const prisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'error',
        },
        {
            emit: 'event',
            level: 'warn',
        },
        {
            emit: 'event',
            level: 'query',
        },
        {
            emit: 'stdout',
            level: 'info',
        },
    ],

})

prisma.$on('error', (e) => {
    logger.logError(e)
})

prisma.$on('warn', (e) => {
    logger.logWarning(e)
})

prisma.$on('query', (e) => {
    logger.logQuery(e)
})

export { prisma }
