const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const ProjectRouter = require('./projects/project-router.js')

const server = express();

server.use(helmet());
server.use(morgan());
server.use(express.json());

server.use('/api/projects', ProjectRouter);

server.get('/', (req,res) => {
    res.status(200).json({message:"WE DID IT"})
})


module.exports = server;