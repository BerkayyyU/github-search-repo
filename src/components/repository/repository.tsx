import LanguageIcon from '../languageIcon/languageIcon';
import styles from './repository.module.css';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { dayInMilliseconds, hourInMilliseconds, minInMilliseconds, weekInMilliseconds } from '../../assets/constants/dates';

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
  const calculateUpdatedDate = (date: string) => {
    const dateInMilliseconds = new Date(date).getTime();
    const nowInMilliseconds = Date.now();
    switch (true) {
      case nowInMilliseconds - dateInMilliseconds < minInMilliseconds:
        return ` Updated ${Math.floor((nowInMilliseconds - dateInMilliseconds) / 1000)} seconds ago`;
      case nowInMilliseconds - dateInMilliseconds < hourInMilliseconds:
        return `Updated ${Math.floor((nowInMilliseconds - dateInMilliseconds) / minInMilliseconds)} minutes ago`;
      case nowInMilliseconds - dateInMilliseconds < dayInMilliseconds:
        return `Updated ${Math.floor((nowInMilliseconds - dateInMilliseconds) / hourInMilliseconds)} hours ago`;
      case nowInMilliseconds - dateInMilliseconds < weekInMilliseconds:
        return `Updated ${Math.floor((nowInMilliseconds - dateInMilliseconds) / dayInMilliseconds)} days ago`;
      default:
        const defaultDate = setDefaultDate(new Date(date));
        return defaultDate;
    }
  };

  const setDefaultDate = (date: Date) => {
    const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
    const year = date.getFullYear();
    return `Updated on ${day}/${month}/${year}`;
  };
  const [calculatedDate, setCalculatedDate] = useState<any>('');

  //does nothing special
  const [star, setStarVal] = useState<boolean>(stargazers_count === 1 ? true : false);
  const setStar = () => {
    setStarVal(!star);
  };

  useEffect(() => {
    setCalculatedDate(calculateUpdatedDate(updated_at));
  }, []);

  // make the first character uppercase
  const vis = visibility.charAt(0).toUpperCase() + visibility.slice(1);
  return (
    <div className={styles.repository}>
      <div>
        <div className="flex items-center mb-2">
          <a href={html_url} target="_blank" rel="noreferrer" className="flex text-xl text-blue-400 hover:underline">
            {name}
          </a>
          <span className={styles.label}>{vis}</span>
        </div>

        {description ? <p className={styles.description}>{description}</p> : null}
        <div className="flex items-center my-4">
          <LanguageIcon langName={language} />
          <p className="ml-2">{language}</p>
          <p className="text-left ml-4">{calculatedDate}</p>
        </div>
      </div>
      <div className={styles.star} onClick={setStar}>
        {star ? <AiFillStar color="orange" size={20} /> : <AiOutlineStar size={20} />} <span className={styles.starText}>{star ? 'Starred' : 'Star'}</span>
      </div>
    </div>
  );
};

export default Repository;
