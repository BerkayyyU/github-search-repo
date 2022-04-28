import React, { useEffect, useState } from 'react';
import './App.css';
import Repository, { RepositoryModel } from './components/repository/repository';
import User, { UserModel } from './components/user/user';

function App() {
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
        setUser(data[0].owner);
      });
  }, []);

  return (
    <div className="flex flex-col h-screen overfow-hidden">
      <header className="flex justify-between py-4 fixed top-0 left-0 w-full z-50 hdx">
        <a href="">MVST</a>
        <a href="">Portfolio</a>
      </header>
      <div className="profile-grid mx-4 mt-16">
        {user ? <User id={user.id} avatar_url={user?.avatar_url} html_url={user?.html_url} login={user?.login} /> : null}
        <div className="w-full flex flex-col items-center  ml-4 my-8">
          <div className="w-full mx-4 border-color">
            <input type="text" onChange={handleChange} placeholder="Search repo" className="w-full mb-4" />
          </div>
          <ul className="h-screen overflow-auto" id="style-1">
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
                  ></Repository>
                );
              })
            ) : (
              <p>No data</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
