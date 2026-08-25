import {
  SiStyledcomponents,
  SiRedux,
  SiTypescript,
  SiTestinglibrary,
  SiHtml5,
  SiGithub,
  SiReactrouter,
  SiReact,
  SiCss3,
  SiReactquery,
  SiMysql,
  SiSequelize,
  SiPostman,
  SiMui,
  SiJavascript,
  SiStorybook,
  SiWordpress,
  SiSalesforce,
  SiTailwindcss,
  SiNextdotjs,
} from 'react-icons/si'
import { DiNpm, DiSass, DiBootstrap, DiMongodb, DiScrum } from 'react-icons/di'
import {
  TbBrandReactNative,
  TbApi,
  TbCode,
  TbBolt,
  TbDatabase,
} from 'react-icons/tb'
import { FaJira, FaBitbucket, FaNodeJs } from 'react-icons/fa'
import { GiAtomicSlashes } from 'react-icons/gi'

export const frontEnd = [
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiReact />, name: 'React' },
  { icon: <TbBrandReactNative />, name: 'React Native' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiReactrouter></SiReactrouter>, name: 'React Router' },
  { icon: <SiRedux />, name: 'Redux' },
  { icon: <SiTestinglibrary />, name: 'React Testing Library' },
  { icon: <SiReactquery />, name: 'React Query' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiHtml5 />, name: 'HTML5' },
  { icon: <SiCss3 />, name: 'CSS' },
  { icon: <DiSass />, name: 'Sass' },
  { icon: <DiBootstrap />, name: 'Bootstrap' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <GiAtomicSlashes />, name: 'Atomic Design' },
  { icon: <SiStyledcomponents />, name: 'styled-components' },
  { icon: <SiMui />, name: 'Material UI' },
  { icon: <SiStorybook />, name: 'Storybook' },
]
export const salesforce = [
  { icon: <TbCode />, name: 'Apex' },
  { icon: <TbBolt />, name: 'Lightning Web Components (LWC)' },
  { icon: <TbDatabase />, name: 'SOQL' },
  { icon: <SiSalesforce />, name: 'Salesforce Platform' },
]

export const backEnd = [
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <DiNpm />, name: 'npm' },
  { icon: <SiSequelize />, name: 'Sequelize' },
  { icon: <SiPostman />, name: 'Postman' },
]
export const dataBase = [
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <DiMongodb />, name: 'MongoDB' },
]

export const other = [
  { icon: <TbApi />, name: 'REST API' },
  { icon: <FaJira />, name: 'Jira' },
  { icon: <FaBitbucket />, name: 'Bitbucket' },
  { icon: <DiScrum />, name: 'Scrum' },
  { icon: <SiGithub />, name: 'GitHub' },
  { icon: <SiWordpress />, name: 'WordPress' },
]
