import { readFile } from 'fs/promises'

export const getJobs = async (req, res) => {
    const jsonReaded = await readFile(new URL('../assets/data.json', import.meta.url), 'utf-8')
    const jsonParsed = JSON.parse(jsonReaded)

    res.render('jobs', {jobs: jsonParsed.data})
}

export const getJobById = async (req, res) => {
    const jobId = req.params.jobId

    //TODO: parse markdown based on jobId

    res.render('job', {jobId})
}