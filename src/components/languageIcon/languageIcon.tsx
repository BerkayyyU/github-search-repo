import { ReactElement } from 'react';
import { SiJavascript, SiTypescript, SiHtml5, SiJava, SiPython, SiVuedotjs } from 'react-icons/si';

export interface LanguageIconModel {
  name: string;
  icon: ReactElement;
}

export const iconSize = 20;

export const LanguageIcons: LanguageIconModel[] = [
  {
    name: 'JavaScript',
    icon: <SiJavascript size={iconSize} />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript size={iconSize} />,
  },
  {
    name: 'HTML',
    icon: <SiHtml5 size={iconSize} />,
  },
  {
    name: 'Java',
    icon: <SiJava size={iconSize} />,
  },
  {
    name: 'Python',
    icon: <SiPython size={iconSize} />,
  },
  {
    name: 'Vue',
    icon: <SiVuedotjs size={iconSize} />,
  },
];

const LanguageIcon = (props: { langName: string }): JSX.Element => {
  const lang = LanguageIcons.find((lang: LanguageIconModel) => lang.name === props.langName);
  return lang ? lang.icon : <></>;
};

export default LanguageIcon;
