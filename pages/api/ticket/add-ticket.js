import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    const {
        ticket_id,
        ticket_issue,
        ticket_description,
        ticket_dateRaised,
        ticket_urgency,
        ticket_status,
        landlord_email,
    } = req.body;
    if (
      !ticket_id ||
      !ticket_issue ||
      !ticket_description ||
      !ticket_dateRaised ||
      !ticket_urgency ||
      !ticket_status ||
      !landlord_email
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const client = await connectToDatabase();
    const ticketCollection = client.db().collection("tickets");

    try {
      const result = await ticketCollection.insertOne({
        ticket_id,
        ticket_issue,
        ticket_description,
        ticket_dateRaised,
        ticket_urgency,
        ticket_status,
        landlord_email,
      });

      res.status(201).json({ message: "Ticket added" });
    } catch (error) {
      res.status(500).json({ message: "Could not add ticket" });
    } finally {
      client.close();
    }
  }
}

export default handler;
