import * as fcl from '@onflow/fcl';
import styles from '@/styles/Navbar.module.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [user, setUser] = useState({ loggedIn: null });
  useEffect(() => fcl.currentUser.subscribe(setUser), []);
  console.log(user.loggedIn);
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2>Flow</h2>
      </div>
      <div className="buttons">
        {!user?.loggedIn ? (
          <>
            <button onClick={fcl.logIn} className={styles.btn}>
              Log In
            </button>
            <button onClick={fcl.signUp} className={styles.btn}>
              Sign Up
            </button>
          </>
        ) : (
          <button onClick={fcl.unauthenticate} className={styles.btn}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
