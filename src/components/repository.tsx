import React from 'react';

export interface Repo {
  name: string;
  description: string;
  language: string;
}

const Repository = ({ name, description, language }: Repo) => {
  return (
    <li className="flex flex-row border-2 mb-4 p-4">
      <p>{name}</p>
      <p className="mx-4">{description}</p>
      <p>{language}</p>
    </li>
  );
};

export default Repository;
