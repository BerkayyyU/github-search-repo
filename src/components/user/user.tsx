import styles from './user.module.scss';
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
    <div className={styles.user}>
      <img src={avatar_url} alt="avatar" className={styles.avatar} />
      <div className="ml-4 md:ml-0">
        <a href={html_url} rel="noreferrer" target="_blank" className="text-2xl hover:underline">
          {name}
        </a>
        <p className="text-xl mb-2">{login}</p>
        <div className="flex items-center">
          <FiUsers className="mr-2" />
          <div className="w-full flex flex-wrap items-center">
            <p className="mr-2">
              <span className="text-white">{followers}</span> followers
            </p>
            <p>
              <span className="text-white">{following}</span> following
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
