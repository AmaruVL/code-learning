import { envs } from './config/envs'
// import { MongoDatabase } from './data/mongodb'
import { PostgresDatabase } from './data/postgres'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'

// Iniciar
;(() => {
  main()
})()

async function main() {
  // await MongoDatabase.connect({
  //   dbName: envs.MONGO_DB_NAME,
  //   mongoUrl: envs.MONGO_URL,
  // })

  await PostgresDatabase.connect()

  // todo: inicio de server
  new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  }).start()
}
