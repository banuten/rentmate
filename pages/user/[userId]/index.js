import { getSession } from "next-auth/client";
import Profile from "../../../components/profile/profile";
import { connectToDatabase } from "../../../lib/db";


function ProfilePage(props) {
  return <Profile userData={props.userData}/>;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  // const userData = await fetchUserData();
  const email = session.user.email;

  const client = await connectToDatabase();
  const db = client.db();
  const userDetailsCollection = db.collection("userDetails");

  const userData = await userDetailsCollection
  .findOne(
    { email: email },
    {
      projection: {
        firstName: 1,
        lastName: 1,
        address: 1,
        phone: 1,
        email: 1,
        _id: 0,
      },
    }
  );
  console.log(userData);

  return {
    props: { userData },
  };
}

export default ProfilePage;
