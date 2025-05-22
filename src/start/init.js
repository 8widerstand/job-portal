import path from 'path'
import { fileURLToPath } from 'url'
import {Edge} from "edge.js";
import express from "express";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const initEdge = (app) => {
    const edge = new Edge()
    app.set('views', path.join(__dirname, '..', 'views'))

    app.engine('edge', (filePath, options, callback) => {
        edge.render(filePath, options)
            .then(rendered => callback(null, rendered))
            .catch(err => callback(err))
    })
    app.set('view engine', 'edge')
}

export const initStatic = (app) => {
    app.use(express.static(path.join(__dirname, '..', 'public')));//pour les fichiers statique css,js,images.
}