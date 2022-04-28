import React from 'react';
import { DiJavascript1 } from 'react-icons/di';
import { SiTypescript, SiHtml5, SiJava, SiPython, SiVuedotjs } from 'react-icons/si';
import styles from './repository.module.css';

export interface RepositoryModel {
  id: number;
  svn_url: string;
  name: string;
  description: string;
  language: string;
  updated_at: string;
}

export const langIcons = [
  {
    name: 'JavaScript',
    icon: <DiJavascript1 />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'HTML',
    icon: <SiHtml5 />,
  },
  {
    name: 'Java',
    icon: <SiJava />,
  },
  {
    name: 'Python',
    icon: <SiPython />,
  },
  {
    name: 'Vue',
    icon: <SiVuedotjs />,
  },
];

const DynamicFaIcon = ({ name }: any) => {
  const IconComponent = name;
  debugger;
  if (!IconComponent) {
    // Return a default one
  }

  return <IconComponent />;
};

const Repository = ({ svn_url, name, description, language, updated_at }: RepositoryModel) => {
  return (
    <div className={styles.repository}>
      <a href={svn_url} target="_blank" rel="noreferrer" className="flex text-blue-400 hover:underline">
        <p>{name}</p>
      </a>
      {description ? <p className={styles.description}>{description}</p> : null}
      <div className="flex items-center">
        {langIcons.find((element: any) => element.name === language)?.icon}
        <p className="ml-4">{language}</p>
      </div>
      <p className="text-left">{updated_at}</p>
    </div>
  );
};

export default Repository;
