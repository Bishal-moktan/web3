import Image from 'next/image';
import * as fcl from '@onflow/fcl';

import landing from '@/public/login.svg';
import styles from '@/styles/Landing.module.css';
const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.content}>
        <h2>Welcome to Flow</h2>
        <h3>
          Log in to continue..
          <span onClick={fcl.logIn} className={styles.btn}>
            Log In
          </span>
        </h3>
      </div>
      <div className="image">
        <Image src={landing} height={'auto'} width={'auto'} alt="Landing" />
      </div>
    </div>
  );
};
export default Landing;
