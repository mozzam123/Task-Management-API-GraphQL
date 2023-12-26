import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import queryResolvers from "./queryResolvers.js";
import mutationResolvers from "./mutationResolvers.js";
import { typeDefs } from "./schema.js";
import dotenv from "dotenv";
import connectDB from "./db.js";
dotenv.config();
const PORT = process.env.PORT;

// Call DATabase
connectDB();

// Merge Query and Mutation Resolvers
const resolvers = {
    ...queryResolvers,
    ...mutationResolvers
}

// Create an ApolloServer instance with your schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start the standalone server
const url = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log("Server Started at: ", url);
