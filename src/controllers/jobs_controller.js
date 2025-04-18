import {initViews} from "../start/init.js";
import { readFile } from 'fs/promises'

const edge = initViews()

export const getJobs = async (req, res) => {
    const jsonReaded = await readFile(new URL('../assets/data.json', import.meta.url), 'utf-8')
    const jsonParsed = JSON.parse(jsonReaded)
    const html = await edge.render('jobs', {jobs: jsonParsed.data})

    res.setHeader('content-type', 'text/html')
    res.end(html)
}

export const getJobById = async (req, res) => {
    const jobId = req.params.jobId
    const html = await edge.render('job', {jobId})

    //TODO: parse markdown based on jobId

    res.setHeader('content-type', 'text/html')
    res.end(html)
}