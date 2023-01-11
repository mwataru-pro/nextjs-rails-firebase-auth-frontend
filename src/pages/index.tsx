import type { NextPage } from 'next';

import { useUserState } from '@/atoms/user';

const Home: NextPage = () => {
  const currentUser = useUserState();

  return (
    <div>
      <p>{currentUser?.email}</p>
    </div>
  );
};

export default Home;
