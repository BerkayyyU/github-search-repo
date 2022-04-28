import React, { useEffect, useState } from 'react';
import Repository, { RepositoryModel } from '../components/repository/repository';
import User, { UserModel } from '../components/user/user';
import styles from './profile.module.css';

const Profile = () => {
  const [repos, setRepos] = useState<RepositoryModel[]>([]);

  const [filteredRepos, searchRepos] = useState<RepositoryModel[]>([]);

  const [user, setUser] = useState<UserModel | null>(null);

  const githubName = 'berkayyyU';
  const githubApi = 'https://api.github.com/';

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const filteredRepos = repos.filter((repo: RepositoryModel) => repo.name.includes(e.currentTarget.value));
    searchRepos(filteredRepos);
  }

  useEffect(() => {
    fetch(`${githubApi}users/${githubName}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        searchRepos(data);
      });
    fetch(`${githubApi}users/${githubName}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div className="flex mx-8 mt-24">
      {user ? (
        <User
          id={user.id}
          avatar_url={user?.avatar_url}
          html_url={user?.html_url}
          login={user?.login}
          name={user.name}
          followers={user.followers}
          following={user.following}
        />
      ) : null}
      <div className="w-full flex flex-col items-center ml-4 my-8">
        <div className="w-full mx-4 border-color">
          <input type="text" onChange={handleChange} placeholder="Find a repository..." className={styles.search} />
        </div>
        <ul className="h-full w-full overflow-auto" id="style-1">
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo: RepositoryModel) => {
              return (
                <Repository
                  key={repo.id}
                  id={repo.id}
                  svn_url={repo.svn_url}
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                  updated_at={repo.updated_at}
                />
              );
            })
          ) : (
            <p className="w-full mt-4 text-center">No matching repositories.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
