import { getSession } from "next-auth/client";
import Profile from "../../../components/profile/profile";
import { connectToDatabase } from "../../../lib/db";


function ProfilePage(props) {
  return <Profile userData={props.userData} tenantData={props.tenantData}/>;
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

  const tenantDetailsCollection = db.collection("tenantDetails");
  const tenantData = await tenantDetailsCollection
  .findOne(
    { email: email },
    {
      projection: {
        tenant_firstName: 1,
        tenant_lastName: 1,
        tenant_address: 1,
        tenant_phone: 1,
        landlord_email: 1,
        _id: 0,
      },
    }
  );
  console.log(userData); 
  console.log(tenantData); 

  return {
    props: { userData, tenantData },
  };
}

export default ProfilePage;
