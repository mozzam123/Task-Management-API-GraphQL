import Task from "./model.js";

const queryResolvers = {
  Query: {
    async tasks() {
      const allTasks = await Task.find();
      return allTasks;
    },
    async task(_, args){
        const task = await Task.findById(args.id)
        return task
    }
  },
};

export default queryResolvers;
