import { ComponentStory, ComponentMeta } from '@storybook/react';
import Repository from '../components/repository/repository';
import '../utils.ts';

export default {
  title: 'Components/Repository',
  component: Repository,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Repository>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Repository> = (args) => <Repository {...args} />;

export const GithubSearch = Template.bind({});
GithubSearch.args = {
  id: 0,
  html_url: 'https://github.com/BerkayyyU/e-commerce-clone',
  name: 'e-commerce-clone',
  visibility: 'private',
  description: 'Github',
  language: 'TypeScript',
  updated_at: '2022-03-04T14:00:00Z',
  stargazers_count: 1,
};

export const EcommerceClone = Template.bind({});
EcommerceClone.args = {
  id: 1,
  html_url: 'https://github.com/BerkayyyU/e-commerce-clone',
  name: 'e-commerce-clone',
  visibility: 'private',
  description: 'A simple e-commerce clone',
  language: 'JavaScript',
  updated_at: '2020-05-06T14:00:00Z',
  stargazers_count: 0,
};
