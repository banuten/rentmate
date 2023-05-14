import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, address, phone, email } = req.body;

    if (
      !firstName ||
      !lastName ||
      !address ||
      !phone ||
      !email
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const client = await connectToDatabase();
    const userDetailsCollection = client.db().collection('userDetails');

    try {
      // Create an index with a unique constraint on the email field
      await userDetailsCollection.createIndex({ email: 1 }, { unique: true });

      const result = await userDetailsCollection.insertOne({
        firstName,
        lastName,
        address,
        phone,
        email
      });

      res.status(201).json({ message: 'User details added' });
    } catch (error) {
      if (error.code === 11000) {
        res.status(422).json({ message: 'User with this email already exists' });
      } else {
        res.status(500).json({ message: 'Could not add user' });
      }
    } finally {
      client.close();
    }
  }
}

export default handler;
