// TODO: achar o devido lugar desse arquivo
// não acho que deveria ser um controller
import { Prisma } from '@prisma/client'
import { appendFileSync } from 'fs'

interface Logger {
	write(message: string): void;
}

class FileLogger implements Logger {
    file: string
    constructor(file: string) {
        this.file = file
    }

    write(message: string): void {
        appendFileSync(this.file, message + '\n')
    }
}

export class LogController {
    logger: Logger

    constructor(logger: Logger) {
        this.logger = logger
    }

    logMessage(type:string, message: Prisma.LogEvent) {
        this.logger.write(`---------${type.toUpperCase()}---------`)
        this.logger.write('Message: ' + message.message)
        this.logger.write('Target: ' + message.target)
        this.logger.write('Timestamp: ' + message.timestamp + 'ms')
        this.logger.write('---------######---------')
    }

    logQuery(message: Prisma.QueryEvent) {
        this.logger.write('---------QUERY---------')
        this.logger.write('Query: ' + message.query)
        this.logger.write('Params: ' + message.params)
        this.logger.write('Duration: ' + message.duration + 'ms')
        this.logger.write('---------######---------')
    }

    logInfo(message: Prisma.LogEvent) {
        this.logMessage('info', message)
    }

    logWarning(message: Prisma.LogEvent) {
        this.logMessage('warning', message)
    }

    logError(message: Prisma.LogEvent) {
        this.logMessage('error', message)
    }
}

const logger = new LogController(new FileLogger(process.env.LOG_FILE!))

export { logger }
