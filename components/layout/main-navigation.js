import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';
import { useState, useEffect } from 'react';

import classes from './main-navigation.module.css';

function MainNavigation() {
  const [session, loading] = useSession();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    async function getUserId() {
      if (!session) return;

      const userIdResponse = await fetch('/api/user/get-userid', {
        headers: {
          'Authorization': `Bearer ${session.accessToken}`,
        },
      });

      if (!userIdResponse.ok) {
        console.log('Error getting user ID');
        return;
      }

      const { userId } = await userIdResponse.json();
      setUserId(userId);
    }

    getUserId();
  }, [session]);

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <div className={classes.logo}>RentMATE</div>
        </a>
      </Link>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href={`/user/${userId}`}>Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
