const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const ProjectRouter = requre('./projects/proect-router.js')

const server = express();

server.use(helmet());
server.use(morgan());
server.use(express.json());

server.use('/api/projects', ProjectRouter);


module.exports = server;