import {getJobById, getJobs, getJobTitle} from "../controllers/jobs_controller.js";
import {getHome, getTest} from "../controllers/home_controller.js";

export const initRoutes = (app) => {
    app.get('/jobs', getJobs)

    app.get('/jobs/:jobId', getJobById)

    app.get('/', getHome)

    app.get('/test', getTest)

    app.get('/jobs/:jobTitle', getJobTitle)

}