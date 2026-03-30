
import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNameObj = {
  projectsCollection: "projects",
  eventCollection: "events", // Future-er jonno nam diye rakhun
  galleryCollection: "gallery",
  membersCollection: "members",
};

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Function-ti obosshoi async hote hobe
export default async function dbConnect(collectionName) {
  try {
    // Prothome connection establish hobe
    await client.connect(); 
    return client.db(process.env.DB_NAME).collection(collectionName);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
}