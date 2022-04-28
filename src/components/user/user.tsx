import styles from './user.module.css';

export interface UserModel {
  id: number;
  html_url: string;
  avatar_url: string;
  login: string;
}

const User = ({ avatar_url, html_url, login }: UserModel) => {
  return (
    <div>
      <img src={avatar_url} alt="avatar" className={styles.avatar} />
      <a href={html_url} rel="noreferrer" target="_blank">
        {login}
      </a>
    </div>
  );
};

export default User;
