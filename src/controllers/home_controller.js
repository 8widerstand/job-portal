import {initViews} from "../start/init.js";

const edge = initViews()

export const getHome = async (req, res) => {
    const html = await edge.render('home', { username: 'Virk' })

    res.setHeader('content-type', 'text/html')
    res.end(html)
}

export const getTest = async (req, res) => {
    res.send('Hello Test!')
}