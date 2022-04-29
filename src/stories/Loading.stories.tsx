import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loading from '../ui/loading/Loading';

export default {
  title: 'UI/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => (
  <div className="flex justify-center items-center h-screen w-full">
    <Loading />
  </div>
);

export const Default = Template.bind({});
