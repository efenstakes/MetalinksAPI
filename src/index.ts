import path from "path"
import express, { Express , Response, Request} from "express"
import cors from 'cors'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
import { graphqlHTTP } from 'express-graphql'


// db connection
import { connectToDb } from "./utils/database"


// schema
import schema from './schema'
import ChainWorker from "./worker"


// create express server
const app: Express = express()


// get environment variables
dotenv.config({ path: path.join(__dirname, '.env')})


// connect to db
connectToDb()


// allow cross origin requests
app.use(cors())


// show dev logs
app.use(morgan('dev'))


console.log("env", process.env.DB_URL)

app.get("/", (req: Request, res: Response)=> {
    res.json({ page: 'index', status: 'running' })
})

console.log("hola")


// setup graqphql
app.use(
    '/q',
    graphqlHTTP({ schema, graphiql: true })
)


new ChainWorker()

// start server
app.listen(8080, ()=> {
    console.log("server listening on port 8080")
})