"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var serverless_1 = require("@neondatabase/serverless");
var adapter_neon_1 = require("@prisma/adapter-neon");
var client_1 = require("@prisma/client");
var ws_1 = require("ws");
// Sets up WebSocket connections, which enables Neon to use WebSocket communication.
serverless_1.neonConfig.webSocketConstructor = ws_1.default;
// Add error checking for the environment variable
if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is missing in .env file");
}
// Update the connection string handling
var connectionString = process.env.DATABASE_URL.startsWith("postgresql://")
    ? process.env.DATABASE_URL.replace("postgresql://", "postgres://")
    : process.env.DATABASE_URL;
// Creates a new connection pool using the provided connection string, allowing multiple concurrent connections.
var pool = new serverless_1.Pool({ connectionString: connectionString });
// Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.
var adapter = new adapter_neon_1.PrismaNeon(pool);
// Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
var prisma = new client_1.PrismaClient({
    adapter: adapter,
    transactionOptions: {
        maxWait: 5000, // Example value
        timeout: 10000, // Example value
        isolationLevel: client_1.Prisma.TransactionIsolationLevel.Serializable,
    },
}).$extends({
    result: {
        product: {
            price: {
                compute: function (product) {
                    return product.price.toString();
                },
            },
            rating: {
                compute: function (product) {
                    return product.rating.toString();
                },
            },
        },
    },
});
exports.default = prisma;
// import { Pool, neonConfig } from "@neondatabase/serverless";
// import { PrismaNeon } from "@prisma/adapter-neon";
// import { PrismaClient, Prisma } from "@prisma/client";
// import ws from "ws";
// // Sets up WebSocket connections, which enables Neon to use WebSocket communication.
// neonConfig.webSocketConstructor = ws;
// const connectionString = `${process.env.DATABASE_URL}`;
// // Creates a new connection pool using the provided connection string, allowing multiple concurrent connections.
// const pool = new Pool({ connectionString });
// // Instantiates the Prisma adapter using the Neon connection pool to handle the connection between Prisma and Neon.
// const adapter = new PrismaNeon(pool);
// // Extends the PrismaClient with a custom result transformer to convert the price and rating fields to strings.
// export const prisma = new PrismaClient({
//   adapter: adapter,
//   transactionOptions: {
//     maxWait: 5000, // Example value
//     timeout: 10000, // Example value
//     isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
//   },
// } as const).$extends({
//   result: {
//     product: {
//       price: {
//         compute(product) {
//           return product.price.toString();
//         },
//       },
//       rating: {
//         compute(product) {
//           return product.rating.toString();
//         },
//       },
//     },
//   },
// });
// // Add this type definition
// const TransactionIsolationLevel = Prisma.TransactionIsolationLevel;
