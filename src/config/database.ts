import { MongoClient } from "mongodb";

const uri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/${process.env.MONGO_INITDB_DATABASE}`;

let client: MongoClient;

export const connectDB = async () => {
  try {
    client = new MongoClient(uri, { authSource: "admin" });

    const database = client.db(process.env.MONGO_INITDB_DATABASE);
    const haiku = database.collection("haiku");

    // Create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    };

    const sample = await haiku.findOne();
    const result = await haiku.insertOne(doc);
    console.log(`result: ${JSON.stringify(sample)}`);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    // await client.connect();
    // console.log("Connected successfully to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  }
};
