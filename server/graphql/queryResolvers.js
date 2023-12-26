import Task from "./model.js"

const resolvers = {
    Query: {
        async tasks() {
            const tasks = [{ "title": "mozzam", "description": "mozzam", "priority": "high" }]
            return tasks
        }
    },
    Mutation: {
        createTask: async (_, { title, description, priority }) => {
            const newTask = await Task({
                title: title,
                description: description,
                priority: priority,
            }).save()
            console.log('new Task saved');

        }
    }
}

export default resolvers