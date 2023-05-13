import { getSession } from 'next-auth/client';

function MyComponent() {
  async function handleClick() {
    const session = await getSession();
    const userId = session.user.id;
    console.log(userId);
  }

  return (
    <button onClick={handleClick}>Get User ID</button>
  );
}

export default MyComponent;