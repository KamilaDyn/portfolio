import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material'
import { ModalNames } from 'enum'
import ActoutsImg from 'assets/actouts-resp.jpg'
import PortfolioLightImg from 'assets/portfolio-light-resp.jpg'
import PortfolioImg from 'assets/portfolio-blac-resp.jpg'
import FlickThroughEnglish from 'assets/flichThroughEnglish.jpg'
import BaazarImg from 'assets/bazaarProject.jpg'
import KamCodeImg from 'assets/kamcode-resp.jpg'
import CustomersList from 'assets/customersList.jpg'
import BlogList from 'assets/bloglist.jpg'
import WpExampleTheme from 'assets/wp-example-theme-resp.jpg'
import WpAcademicTheme from 'assets/academic.jpg'
import ReactForm from 'assets/react-form.jpg'
import LandingPage from 'assets/rek-landing-page.jpg'
import MtcPage from 'assets/mtc-page.jpg'

import {
  techStackCustomerList,
  techStackBazaar,
  techStackBlogList,
  techStackEnglishPage,
  techStackActOuts,
  techStackPortfolio,
  techStackKamcode,
  techWpExampleTheme,
  techWpAcademicTheme,
  techStackForm,
  techRekPage,
  mtcStackPage,
} from './utils'

interface ContainerContent {
  image: string
  modalName?: ModalNames
  listSkillArray: string[]
  title: string
  shortDescription: string
  liveLink?: string
  readMore?: boolean
  source?: string
}
const useContainerContent = () => {
  const { palette } = useTheme()
  const { t } = useTranslation('projectsPage')

  const containerContent: ContainerContent[] = [
    // {
    //   image: ReactForm,
    //   listSkillArray: techStackForm,
    //   title: t('formCard.header'),
    //   shortDescription: t('formCard.shortDescription'),
    //   liveLink: 'https://task-think-first.onrender.com/',
    //   readMore: false,
    //   source: 'https://github.com/KamilaDyn/task-think-first',
    // },
    {
      image: ActoutsImg,
      modalName: ModalNames.actouts,
      listSkillArray: techStackActOuts,
      title: t('actOutsCard.header'),
      shortDescription: t('actOutsCard.shortDescription'),
      liveLink: 'https://actouts.com/',
      readMore: true,
      source: 'https://github.com/KamilaDyn/act-outs-theme',
    },
    {
      image: WpExampleTheme,
      modalName: ModalNames.wpExampleTheme,
      listSkillArray: techWpExampleTheme,
      title: t('wpExampleTheme.header'),
      shortDescription: t('wpExampleTheme.shortDescription'),
      liveLink: 'https://dev.wp-example.kamcode.pl/',
      readMore: false,
    },
    {
      image: WpAcademicTheme,
      modalName: ModalNames.wpAcademicTheme,
      listSkillArray: techWpAcademicTheme,
      title: t('wpAcademicTheme.header'),
      shortDescription: t('wpAcademicTheme.shortDescription'),
      liveLink: 'https://dev.wp-academic.kamcode.pl/',
      readMore: false,
    },

    {
      image: BlogList,
      modalName: ModalNames.blogList,
      listSkillArray: techStackBlogList,
      source:
        'https://github.com/KamilaDyn/fullStackOpen-2023/tree/master/part7/bloglist-app',
      title: t('blogListCard.header'),
      shortDescription: t('blogListCard.shortDescription'),
      liveLink: 'https://bloglist-app-fe.onrender.com/',
      readMore: true,
    },
    {
      image: CustomersList,
      modalName: ModalNames.customerList,
      listSkillArray: techStackCustomerList,
      source: 'https://github.com/KamilaDyn/customers-list-react',
      title: t('customersListTable.header'),
      shortDescription: t('customersListTable.shortDescription'),
      liveLink: 'https://customers-api-sgd5.onrender.com/',
      readMore: true,
    },

    {
      image: KamCodeImg,
      modalName: ModalNames.bazaarPage,
      listSkillArray: techStackKamcode,
      title: t('kamcodeCard.header'),
      shortDescription: t('kamcodeCard.shortDescription'),
      liveLink: 'https://kamcode.pl/',
    },
    {
      image: palette.mode == 'light' ? PortfolioLightImg : PortfolioImg,
      modalName: ModalNames.portfolio,
      source: 'https://github.com/KamilaDyn/portfolio',
      listSkillArray: techStackPortfolio,
      title: t('portfolioCard.header'),
      shortDescription: t('portfolioCard.shortDescription'),
    },
    {
      image: LandingPage,
      listSkillArray: techRekPage,
      source: 'https://github.com/KamilaDyn/rek-task-landing-page',
      title: t('rekLandingPage.header'),
      shortDescription: t('rekLandingPage.shortDescription'),
      readMore: false,
      liveLink: 'https://kamiladyn.github.io/rek-task-landing-page/',
    },
    {
      image: MtcPage,
      listSkillArray: mtcStackPage,
      source: 'https://github.com/KamilaDyn/mtc-free-trail-task',
      title: t('mtcPage.header'),
      shortDescription: t('mtcPage.shortDescription'),
      readMore: false,
      liveLink: 'https://mtc-free-trail-task.onrender.com/',
    },
    {
      image: FlickThroughEnglish,
      modalName: ModalNames.englishPage,
      listSkillArray: techStackEnglishPage,
      source: 'https://github.com/KamilaDyn/rara-academic-child',
      title: t('englishCard.header'),
      shortDescription: t('englishCard.shortDescription'),
      readMore: true,
    },
    {
      image: BaazarImg,
      source: 'https://github.com/KamilaDyn/react-buy-products',
      modalName: ModalNames.bazaarPage,
      listSkillArray: techStackBazaar,
      title: t('bazaarCard.header'),
      shortDescription: t('bazaarCard.shortDescription'),
      liveLink: 'https://react-buy-products.netlify.app/',
      readMore: true,
    },
  ]
  return containerContent
}

export default useContainerContent
