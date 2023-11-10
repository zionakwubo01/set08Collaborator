import express, { Application } from "express"


const port: number = 6666

export const app: Application = express()
app.use(express.json())

process.on("uncaughtException", (reason: any) => {
    console.log(reason)
})