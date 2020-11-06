const db = require('../data/db-config.js')

module.exports = {
    async createProject(project){
        const [id] = await db("projects").insert(project)
        return db('projects').where({ id }).first()
    },
    async createResource(resource){
        const [id] = await db("resources").insert(resource)
        return db('resources').where({ id }).first()
    },
    async createTasks(task){
        const [id] = await db("tasks").insert(task)
        return db('tasks').where({ id }).first()
    }
}