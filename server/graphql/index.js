import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone"
import resolvers from "./queryResolvers.js"
import { typeDefs } from "./schema.js"
import dotenv from "dotenv"
import connectDB from "./db.js"
dotenv.config()
const PORT = process.env.PORT

// Call DATabase
connectDB();

// Create an ApolloServer instance with your schema and resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers,
});


// Start the standalone server
const url = await startStandaloneServer(server, {
    listen: { port: PORT }
})

console.log('Server Started at: ', url);