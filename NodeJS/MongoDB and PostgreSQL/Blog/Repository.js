const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017'; // Replace with your MongoDB connection string
const client = new MongoClient(uri);
async function run() {
    await client.connect();
    console.log('Connected to MongoDB');
}

run().catch(console.dir);
const database = client.db('Assignment3');
const Blogdb = database.collection('Blogs');
module.exports = Blogdb;