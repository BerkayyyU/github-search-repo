import LanguageIcon from '../languageIcon/languageIcon';
import styles from './repository.module.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

export interface RepositoryModel {
  id: number;
  html_url: string;
  name: string;
  visibility: string;
  description: string;
  language: string;
  updated_at: string;
  stargazers_count: number;
}

const Repository = ({ html_url, name, visibility, description, language, updated_at, stargazers_count }: RepositoryModel) => {
  //does nothing special
  const [star, setStarVal] = useState<boolean>(stargazers_count === 1 ? true : false);
  const setStar = () => {
    setStarVal(!star);
  };

  // make the first character uppercase
  const vis = visibility.charAt(0).toUpperCase() + visibility.slice(1);
  return (
    <div className={styles.repository}>
      <div>
        <div className="flex items-center">
          <a href={html_url} target="_blank" rel="noreferrer" className="flex text-xl text-blue-400 hover:underline">
            {name}
          </a>
          <span className={styles.label}>{vis}</span>
        </div>

        {description ? <p className={styles.description}>{description}</p> : null}
        <div className="flex items-center">
          <LanguageIcon langName={language} />
          <p className="ml-2">{language}</p>
        </div>
        <p className="text-left">{updated_at}</p>
      </div>
      <div className={styles.star} onClick={setStar}>
        {star ? <AiFillStar color="orange" size={20} /> : <AiOutlineStar size={20} />} <span className={styles.starText}>{star ? 'Starred' : 'Star'}</span>
      </div>
    </div>
  );
};

export default Repository;
