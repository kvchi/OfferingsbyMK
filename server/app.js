import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

dotenv.config()

import authRoute from "./routes/auth.js"

const app = express()
app.use(cors({
    origin: "http://localhost:5174",
    credentials: true
}))
app.use(express.json({ urlencoded: 30867, limit: '25mb', extended: true}))
app.use(cookieParser(process.env.SECRET))

app.get("/", (req, res) => {
    res.send("Welcome to the API")
})

app.get("/about", (req, res) => {
    res.send("Welcome to the About Page")
})
app.get("/shop", (req, res) => {
    res.send("Welcome to the Shop Page")
})

app.use('/api/auth', authRoute)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Listining on PORT ${PORT}`))