import Task from "./model.js";

const mutationResolvers = {
  Mutation: {
    createTask: async (_, { title, description, priority }) => {
      const newTask = await Task({
        title: title,
        description: description,
        priority: priority,
      }).save();
      return newTask;
    },
    updateTask: async (_, { id, title, description, priority }) => {
      const updatedTask = await Task.findByIdAndUpdate(id, {
        title: title,
        description: description,
        priority: priority,
      });
      return updatedTask;
    },
    deleteTask: async (_, { id }) => {
      const deletedTask = await Task.findByIdAndDelete(id)
      return deletedTask
    }
  },
};

export default mutationResolvers;
