import { ComponentStory, ComponentMeta } from '@storybook/react';
import Repository from '../components/repository/repository';
import { calculateDateDiff } from '../utils';

export default {
  title: 'Components/Repository',
  component: Repository,
  argTypes: {
    id: { control: 'text', description: 'Repository ID' },
    name: { control: 'text', description: 'Repository name' },
    description: { control: 'text', description: 'Repository description' },
    language: { control: 'text', description: 'Repository mostly written in that language' },
    stargazers_count: { control: 'text', description: 'Number of stars' },
    visibility: { control: 'text', description: 'Public or private' },
    updated_at: { control: 'text', description: 'Last update date' },
    html_url: { control: 'text', description: 'Repository URL' },
  },
} as ComponentMeta<typeof Repository>;

const Template: ComponentStory<typeof Repository> = (args) => <Repository {...args} />;

export const GithubSearch = Template.bind({});
GithubSearch.args = {
  id: 0,
  html_url: 'https://github.com/BerkayyyU/github-search-repo',
  name: 'Github Search Repo',
  visibility: 'private',
  description: 'Github repositories with search functionality',
  language: 'TypeScript',
  updated_at: calculateDateDiff('2022-04-28T14:00:00Z'),
  stargazers_count: 1,
};

export const EcommerceClone = Template.bind({});
EcommerceClone.args = {
  id: 1,
  html_url: 'https://github.com/BerkayyyU/e-commerce-clone',
  name: 'e-commerce-clone',
  visibility: 'private',
  description:
    '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
  language: 'JavaScript',
  updated_at: calculateDateDiff('2022-03-04T14:00:00Z'),
  stargazers_count: 0,
};
