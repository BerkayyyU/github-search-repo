import styles from './user.module.css';
import { FiUsers } from 'react-icons/fi';

export interface UserModel {
  id: number;
  html_url: string;
  avatar_url: string;
  login: string;
  name: string;
  followers: number;
  following: number;
}

const User = ({ avatar_url, html_url, login, name, followers, following }: UserModel) => {
  return (
    <div className="min-w-64">
      <img src={avatar_url} alt="avatar" className={styles.avatar} />
      <a href={html_url} rel="noreferrer" target="_blank" className="text-2xl hover:underline">
        {name}
      </a>
      <p className="text-xl mb-2">{login}</p>
      <div className="flex items-center">
        <FiUsers className="mr-2" />
        <p>
          <span className="text-white">{followers}</span> followers - <span className="text-white">{following}</span> following
        </p>
      </div>
    </div>
  );
};

export default User;
