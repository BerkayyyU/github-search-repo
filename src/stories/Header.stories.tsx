import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../ui/header/Header';

export default {
  title: 'UI/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
