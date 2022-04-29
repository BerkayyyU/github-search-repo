import styles from './header.module.css';
import { AiFillGithub } from 'react-icons/ai';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="flex">
        <a href="https://github.com/BerkayyyU/github-search-repo" target="_blank" rel="noreferrer">
          <AiFillGithub size={24} />
        </a>
        <h1 className="ml-4">Search Repository</h1>
      </div>
      <a href="https://www.berkayulguel.com/" target="_blank" rel="noreferrer">
        Portfolio
      </a>
    </header>
  );
};

export default Header;
