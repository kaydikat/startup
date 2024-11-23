const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  const url = `mongodb+srv://${config.userName}:${encodeURIComponent(config.password)}@${config.hostname}/?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  try {
    // Connect to the database
    await client.connect();
    console.log('Connected to MongoDB successfully!');

    const db = client.db('rental');
    const collection = db.collection('house');

    // Insert a document
    const house = {
      name: 'Beachfront views',
      summary: 'From your bedroom to the beach, no shoes required',
      property_type: 'Condo',
      beds: 1,
    };
    await collection.insertOne(house);

    // Query the documents
    const query = { property_type: 'Condo', beds: { $lt: 2 } };
    const options = {
      sort: { score: -1 },
      limit: 10,
    };

    const rentals = await collection.find(query, options).toArray();
    rentals.forEach((rental) => console.log(rental));
  } catch (ex) {
    console.error(`Unable to connect to database: ${ex.message}`);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
