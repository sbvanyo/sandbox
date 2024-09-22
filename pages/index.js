// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import Image from 'next/image';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const user = { displayName: 'Stacey' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <>
      <div className="greeting playwrite-de-grund-font">
        <h1>Hello {user.displayName}! </h1>
      </div>
      <div className="main-img">
        <Image
          src="/images/IMG_3233.jpeg"
          alt="jo portrait"
          width={650}
          height={500}
          // layout="responsive"
          // objectFit="cover" // or 'contain', 'fill', 'none', 'scale-down'
        />
      </div>
    </>
  );
}

export default Home;
