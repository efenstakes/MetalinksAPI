import express, { Express , Response, Request} from "express"

const app: Express = express()


app.get("/", (req: Request, res: Response)=> {
    res.json({ page: 'index', status: 'running' })
})

console.log("hola")


app.listen(8080, ()=> {
    console.log("server listening on port 8080")
})