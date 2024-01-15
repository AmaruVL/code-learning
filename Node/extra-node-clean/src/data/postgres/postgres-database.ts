// import mongoose from 'mongoose'
import { prisma } from './prisma-client'

interface Options {
  postgresUrl: string
  dbName: string
}

export class PostgresDatabase {
  static async connect() {
    // const { postgresUrl, dbName } = options
    try {
      await prisma.$queryRaw`SELECT 1`
      console.log('Postgres connected')
      return true
    } catch (error) {
      console.log('Postgres connection error')
      throw error
    }
  }
}
