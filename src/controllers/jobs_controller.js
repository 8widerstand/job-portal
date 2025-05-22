import { readFile } from 'fs/promises'
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getJobs = async (req, res) => {
    const jsonReaded = await readFile(new URL('../assets/data.json', import.meta.url), 'utf-8')
    const jsonParsed = JSON.parse(jsonReaded)

    res.render('jobs', {jobs: jsonParsed.data})
}

export const getJobById = async (req, res) => {
    const jobId = req.params.jobId;
    const jsonReaded = await readFile(new URL('../assets/data.json', import.meta.url), 'utf-8');
    const jsonParsed = JSON.parse(jsonReaded);

    const job = jsonParsed.data.find(j => j.id === jobId);

    if (!job) {
        return res.status(404).send('Job not found');
    }

    // get html_file

    const fileKey = Object.keys(job).find(key => key.startsWith('file-'));
    const htmlFileName = job[fileKey];

    if (!htmlFileName) {
        return res.status(500).send('No HTML file defined for this job');
    }

    const htmlContent = await readFile(
        path.join(__dirname, '..', 'public', 'html', htmlFileName),
        'utf-8'
    );
    //Rendre la vue Edge avec les données
    res.render('job', { job, htmlContent });// Passer le contenu HTML au template
}


export const getJobTitle = async (req, res) => {
    const jobTitle = req.params.jobTitle;
    const jsonReaded = await readFile(new URL('../assets/data.json', import.meta.url), 'utf-8');
    const jsonParsed = JSON.parse(jsonReaded);
    const job = jsonParsed.data.find(j => j.title === jobTitle);
    if (!job) {
        return res.status(404).send('Jobtitle not found');
    }
    res.render('job', { job });
}

















