import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

let client: MongoClient;

export const connectDB = async () => {
  try {
    client = new MongoClient(uri);
    await client.connect();
    console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};
