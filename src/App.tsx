import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Repository, { Repo } from './components/repository';

export interface User {
  avatar_url: string;
  login: string;
}

function App() {
  const [repos, setRepos] = useState([]);

  const [filteredRepos, searchRepos] = useState([]);

  const githubName = 'berkayyyU';
  const githubApi = 'https://api.github.com/';

  function handleChange(event: any) {
    const filteredRepos = repos.filter((element: Repo) => element.name.includes(event.target.value));
    searchRepos(filteredRepos);
  }

  useEffect(() => {
    fetch(`${githubApi}users/${githubName}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        searchRepos(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="w-full flex flex-col items-center my-8">
        <div className="border-color">
          <input type="text" onChange={handleChange} placeholder="Search repo" className="w-full mb-4" />
        </div>
        <ul>
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo: Repo) => {
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <div>lorem ipsum</div> */}
    </div>
  );
}

export default App;
