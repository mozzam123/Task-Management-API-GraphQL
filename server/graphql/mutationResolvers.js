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
  },
};

export default mutationResolvers