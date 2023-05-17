import express, { Express , Response, Request} from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { graphqlHTTP } from 'express-graphql'


// db connection
import { connectToDb } from "./utils/database"


// schema
import schema from './schema'


// create express server
const app: Express = express()


// connect to db
connectToDb()


// get environment variables
dotenv.config({ path: './env' })


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


// start server
app.listen(8080, ()=> {
    console.log("server listening on port 8080")
})