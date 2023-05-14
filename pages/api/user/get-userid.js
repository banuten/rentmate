import { getSession } from "next-auth/client";
import { connectToDatabase } from "../../../lib/db";

async function getUserId(req, res) {
  if (req.method !== "GET") {
    return res.status(400).json({ message: "Invalid request method" });
  }

  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const userEmail = session.user.email;
  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");
  const user = await usersCollection.findOne(
    { email: userEmail },
    {
      projection: {
        _id: 0,
        userId: 1,
      },
    }
  );
  
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.status(200).json({ userId: user.userId });
}

export default getUserId;
