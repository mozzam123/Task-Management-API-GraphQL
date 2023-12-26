import Task from "./model.js";

const queryResolvers = {
  Query: {
    async tasks() {
      const allTasks = await Task.find();
      return allTasks;
    },
  },
};

export default queryResolvers;
