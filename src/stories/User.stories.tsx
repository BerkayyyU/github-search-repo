import { ComponentStory, ComponentMeta } from '@storybook/react';
import User from '../components/user/user';

export default {
  title: 'Components/User',
  component: User,
  argTypes: {
    id: { control: 'text', description: 'User ID' },
    avatar_url: { control: 'text', description: 'User avatar URL' },
    login: { control: 'text', description: 'User login credential' },
    html_url: { control: 'text', description: 'User URL' },
    name: { control: 'text', description: 'User name' },
    followers: { control: 'text', description: 'Number of followers' },
    following: { control: 'text', description: 'Number of following' },
  },
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;

export const Me = Template.bind({});
Me.args = {
  id: 0,
  avatar_url: 'https://avatars.githubusercontent.com/u/63016702?v=4',
  html_url: 'https://github.com/BerkayyyU',
  login: 'BerkayyyU',
  name: 'Berkay Ulguel',
  followers: 4,
  following: 3,
};
