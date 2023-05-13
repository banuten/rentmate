import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://cbten1:OGePKQWs7jSP8Gzj@cluster0.sdpru.mongodb.net/rentmate?retryWrites=true&w=majority'
  );

  return client;
}
