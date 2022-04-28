import LanguageIcon from '../languageIcon/languageIcon';
import styles from './repository.module.css';

export interface RepositoryModel {
  id: number;
  svn_url: string;
  name: string;
  description: string;
  language: string;
  updated_at: string;
}

const Repository = ({ svn_url, name, description, language, updated_at }: RepositoryModel) => {
  return (
    <div className={styles.repository}>
      <a href={svn_url} target="_blank" rel="noreferrer" className="flex text-blue-400 hover:underline">
        <p>{name}</p>
      </a>
      {description ? <p className={styles.description}>{description}</p> : null}
      <div className="flex items-center">
        <LanguageIcon langName={language} />
        <p className="ml-4">{language}</p>
      </div>
      <p className="text-left">{updated_at}</p>
    </div>
  );
};

export default Repository;
