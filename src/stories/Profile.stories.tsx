import { ComponentStory, ComponentMeta } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../pages/profile';

export default {
  title: 'Pages/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => <Profile />;

export const Default = Template.bind({});

//Search with 'github-search' input
export const Search = Template.bind({});
Search.play = async () => {
  const searchInput = screen.getByPlaceholderText('Find a repository...');
  await userEvent.type(searchInput, 'github-search', {
    delay: 500,
  });
};
