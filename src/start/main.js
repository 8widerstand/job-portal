import express from 'express'
import {initRoutes} from "../routes/routes.js";

const app = express()
const port = 3000

initRoutes(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})