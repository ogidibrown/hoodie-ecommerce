// utils/authMiddleware.js
import { getSession } from 'next-auth/react';

const authMiddleware = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login', // Redirect to login page if not authenticated
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default authMiddleware;
