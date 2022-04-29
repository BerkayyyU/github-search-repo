import { ComponentStory, ComponentMeta } from '@storybook/react';
import LanguageIcon from '../components/languageIcon/languageIcon';

export default {
  title: 'Components/LanguageIcon',
  component: LanguageIcon,
  argTypes: {
    langName: { control: 'text', description: 'Language name', defaultValue: 'JavaScript' },
  },
} as ComponentMeta<typeof LanguageIcon>;

const Template: ComponentStory<typeof LanguageIcon> = (args) => <LanguageIcon {...args} />;

export const Javascript = Template.bind({});
Javascript.args = {
  langName: 'JavaScript',
};

export const Typescript = Template.bind({});
Typescript.args = {
  langName: 'TypeScript',
};

export const Vue = Template.bind({});
Vue.args = {
  langName: 'Vue',
};
