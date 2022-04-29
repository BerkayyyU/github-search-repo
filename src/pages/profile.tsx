import React, { useEffect, useState } from 'react';
import { githubApi, githubName } from '../assets/constants/github';
import Repository, { RepositoryModel } from '../components/repository/repository';
import User, { UserModel } from '../components/user/user';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import styles from './profile.module.css';

const Profile = () => {
  const [repos, setRepos] = useState<RepositoryModel[]>([]);

  const [filteredRepos, searchRepos] = useState<RepositoryModel[]>([]);
  const [user, setUser] = useState<UserModel | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [errorReposMsg, setErrorRepos] = useState<string>('');
  const [errorUserMsg, setErrorUser] = useState<string>('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const filteredRepos = repos.filter((repo: RepositoryModel) => repo.name.toLowerCase().includes(e.currentTarget.value.toLowerCase()));
    searchRepos(filteredRepos);
  };

  useEffect(() => {
    fetchUser();
    fetchUserRepos();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    await fetch(`${githubApi}users/${githubName}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          //error handling
          setErrorUser(data.message);
        } else {
          setUser(data);
        }
        setLoading(false);
      });
  };

  const fetchUserRepos = async () => {
    setLoading(true);
    fetch(`${githubApi}users/${githubName}/repos`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          //error handling
          setErrorRepos(data.message);
        } else {
          setRepos(data);
          searchRepos(data);
        }
        setLoading(false);
      });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col md:flex-row mx-4 sm:mx-8 mt-20 sm:mt-24">
          {user && !errorUserMsg ? (
            <User
              id={user.id}
              avatar_url={user?.avatar_url}
              html_url={user?.html_url}
              login={user?.login}
              name={user.name}
              followers={user.followers}
              following={user.following}
            />
          ) : (
            <Error error={errorUserMsg} />
          )}
          {!errorReposMsg ? (
            <div className="w-full flex flex-col items-center md:ml-8">
              <input type="text" onChange={handleChange} placeholder="Find a repository..." className={styles.search} />
              <ul className="h-full w-full overflow-auto">
                {filteredRepos.length > 0 ? (
                  filteredRepos.map((repo: RepositoryModel) => {
                    return (
                      <Repository
                        key={repo.id}
                        id={repo.id}
                        html_url={repo.html_url}
                        name={repo.name}
                        visibility={repo.visibility}
                        description={repo.description}
                        language={repo.language}
                        updated_at={repo.updated_at}
                        stargazers_count={repo.stargazers_count}
                      />
                    );
                  })
                ) : (
                  <p className="w-full mt-4 text-center">No matching repositories.</p>
                )}
              </ul>
            </div>
          ) : (
            <Error error={errorReposMsg} />
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
