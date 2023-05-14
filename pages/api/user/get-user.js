import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";

export async function findUserByEmail(email) {
  const client = await connectToDatabase();
  const usersCollection = client.db().collection("userDetails");
  const user = await usersCollection.findOne({ email });
  console.log(user);
  client.close();
  return user;
}

// The remaining code can stay in the original handler function.
async function handler(req, res) {
  if (req.method === "GET") {
    return;
  }

  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Not authenticated!" });
    return;
  }

  const userEmail = session.user.email;

  const user = await findUserByEmail(userEmail);

  if (!user) {
    res.status(404).json({ message: "User not found." });
    return;
  }

  console.log(user);

  res.status(200).json(user);
}

export default handler;
