import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header () {
    return(
        <header className={styles.HeaderContainer}>
          <div className={styles.HeaderContent}>
                <img src='/images/logo.svg' alt='ig.news' />
             <nav>
               <ActiveLink  activeClassName={styles.active} href='/'>
                 <a>Home</a>
               </ActiveLink>

               <ActiveLink  activeClassName={styles.active} href='/posts'>
                  <a>Posts</a>
                </ActiveLink>
             </nav>

             <SignInButton />
          </div>
        </header>
    );
}