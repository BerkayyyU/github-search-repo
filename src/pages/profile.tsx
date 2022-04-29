import { useEffect, useState } from 'react';
import { githubApi, githubName, repoPerPage, repoSortQuery } from '../assets/constants/github';
import Repository, { RepositoryModel } from '../components/repository/repository';
import User, { UserModel } from '../components/user/user';
import Error from '../ui/error/error';
import Loading from '../ui/loading/Loading';
import styles from './profile.module.css';
import debounce from 'lodash.debounce';

const Profile = () => {
  const [repos, setRepos] = useState<RepositoryModel[]>([]);

  const [user, setUser] = useState<UserModel | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [errorReposMsg, setErrorRepos] = useState<string>('');
  const [errorUserMsg, setErrorUser] = useState<string>('');

  // Installed 3rd party library to debounce the search to avoid continuous requests
  const inputChange = debounce((val: string) => {
    const queryString = 'q=' + encodeURIComponent(`${val} in:name user:${githubName}`);
    fetch(`${githubApi}search/repositories?` + new URLSearchParams(queryString))
      .then((res) => res.json())
      .then((data) => {
        //error handling
        if (data.message) {
          setErrorRepos(data.message);
          return;
        }
        const mappedRepos = data.items.map((item: any) => new RepositoryModel(item));
        setRepos(mappedRepos);
      });
  }, 500);

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

  // According to my resources(me and myself) %99 of the github users have less than 100 repositories
  // So I decided to fetch only 100 repositories
  // Best Practices:
  // 1) Add pagination or infinitive loading to allow users to see all the repositories
  // 2) Set repoPerPage to default value for a better performance with less loading screen
  const fetchUserRepos = async () => {
    setLoading(true);
    fetch(`${githubApi}users/${githubName}/repos?` + new URLSearchParams({ sort: repoSortQuery, per_page: repoPerPage }))
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          //error handling
          setErrorRepos(data.message);
        } else {
          const mappedRepos = data.map((item: any) => new RepositoryModel(item));
          setRepos(mappedRepos);
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUser();
    fetchUserRepos();
  }, []);

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
              <input type="text" onChange={(event) => inputChange(event.target.value)} placeholder="Find a repository..." className={styles.search} />
              <ul className="h-full w-full overflow-auto">
                {repos.length > 0 ? (
                  repos.map((repo: RepositoryModel) => {
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
