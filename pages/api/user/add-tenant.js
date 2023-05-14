import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { tenant_firstName, tenant_lastName, tenant_address, tenant_phone, landlord_email } = req.body;

    if (
      !tenant_firstName ||
      !tenant_lastName ||
      !tenant_address ||
      !tenant_phone ||
      !landlord_email
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const client = await connectToDatabase();
    const tenantDetailsCollection = client.db().collection('tenantDetails');

    try {
      const result = await tenantDetailsCollection.insertOne({
        tenant_firstName,
        tenant_lastName,
        tenant_address,
        tenant_phone,
        email: landlord_email,
      });

      res.status(201).json({ message: 'Tenant details added' });
    } catch (error) {
      if (error.code === 11000) {
        res.status(422).json({ message: 'Tenant with this email already exists' });
      } else {
        res.status(500).json({ message: 'Could not add tenant' });
      }
    } finally {
      client.close();
    }
  }
}

export default handler;
