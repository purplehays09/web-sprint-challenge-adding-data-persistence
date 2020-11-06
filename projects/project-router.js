const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req,res) => {
    console.log("WE MADE IT")
})

router.post('/project', (req,res) => {
    Projects.createProject(req.body)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(error => {
        res.status(400).json({message:error.message})
    })
})

router.post('/resource', (req,res) => {
    Projects.createResource(req.body)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(error => {
        res.status(400).json({message:error.message})
    })
})

router.post('/task', (req,res) => {
    Projects.createTasks(req.body)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(error => {
        res.status(400).json({message:error.message})
    })
})

module.exports = router