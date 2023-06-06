const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const categoryRouter = express.Router();
require("dotenv").config();

const url = process.env.MONGOURI;

const client = new MongoClient(url, { useUnifiedTopology: true });

// Define a route to retrieve the collection data
categoryRouter.get("/:id", async (req, res) => {
  try {
    // Connect to the MongoDB server
    await client.connect();

    console.log("Connected successfully to the MongoDB server");

    // Access the database
    const db = client.db("categories");

    // Access the collection
    const collection = db.collection(req.params.id);

    // Retrieve all documents in the collection
    const documents = await collection.find().toArray();

    // Send the documents as the response
    res.json(documents);
  } catch (err) {
    console.error("Failed to retrieve documents from the collection", err);
    res.status(500).json({ error: "Failed to retrieve documents" });
  } finally {
    // Close the connection
    client.close();
  }
});

module.exports = categoryRouter;
