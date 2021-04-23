import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header () {
    return(
        <header className={styles.HeaderContainer}>
          <div className={styles.HeaderContent}>
                <img src='/images/logo.svg' alt='ig.news' />
             <nav>
                <a className={styles.active}>Home</a>
                <a>Posts</a>
             </nav>

             <SignInButton />
          </div>
        </header>
    );
}