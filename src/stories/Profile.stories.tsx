import { ComponentStory, ComponentMeta } from '@storybook/react';
import Profile from '../pages/profile';
import '../utils.ts';

export default {
  title: 'Pages/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => <Profile />;

export const Default = Template.bind({});
