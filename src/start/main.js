import express from 'express'
import {initRoutes} from "../routes/routes.js";
import {initEdge, initStatic} from "./init.js";

const app = express();
const port = 3000;

initEdge(app);
initStatic(app);
initRoutes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});