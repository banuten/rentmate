import { getSession } from 'next-auth/client';

import UserProfile from '../../../components/profile/user-profile';
import Profile from '../../../components/profile/profile';

function ProfilePage(props) {
  return <Profile email={props.email} />;
  // return <UserProfile />;
}
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  // console.log(session)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  const email = session.user.email; // Get the userId from the session

  return {
    props: { session, email }, // Include userId in the props
  };
}

export default ProfilePage;
