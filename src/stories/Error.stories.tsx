import { ComponentStory, ComponentMeta } from '@storybook/react';
import Error from '../ui/error/error';

export default {
  title: 'UI/Error',
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Default = Template.bind({});

Default.args = {
  error: 'Something went wrong!',
};
