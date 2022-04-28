import { ReactElement } from 'react';
import { DiJavascript1 } from 'react-icons/di';
import { SiTypescript, SiHtml5, SiJava, SiPython, SiVuedotjs } from 'react-icons/si';

export interface LanguageIconModel {
  name: string;
  icon: ReactElement;
}
export const LanguageIcons: LanguageIconModel[] = [
  {
    name: 'JavaScript',
    icon: <DiJavascript1 />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'HTML',
    icon: <SiHtml5 />,
  },
  {
    name: 'Java',
    icon: <SiJava />,
  },
  {
    name: 'Python',
    icon: <SiPython />,
  },
  {
    name: 'Vue',
    icon: <SiVuedotjs />,
  },
];

const LanguageIcon = (props: { langName: string }): JSX.Element => {
  const lang = LanguageIcons.find((lang: LanguageIconModel) => lang.name === props.langName);
  return lang ? lang.icon : <span>...</span>;
};

export default LanguageIcon;
