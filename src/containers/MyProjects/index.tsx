import { useTranslation } from 'react-i18next'
import { Box, Divider, Typography, useTheme } from '@mui/material'
import CardProject from './CardProject'
import { ModalNames } from 'enum'
import { CustomModal } from 'components'
import { SectionHeader } from 'components/common'
import ActoutsImg from 'assets/actouts.jpg'
import PortfolioLightImg from 'assets/portfolio-light.jpg'
import PortfolioImg from 'assets/portfolio.jpg'
import FlickThroughEnglish from 'assets/flichThroughEnglish.jpg'
import BaazarImg from 'assets/bazaarProject.jpg'
import CustomersList from 'assets/customersList.jpg'
import { useSwitchModal } from './useSwitchModal'
import {
  techStackCustomerList,
  techStackBazaar,
  techStackEnglishPage,
  techStackActOuts,
  techStackPortfolio,
} from './utils'

const MyProjects = () => {
  const { selectingModal } = useSwitchModal()
  const { t } = useTranslation('projectsPage')
  const { palette } = useTheme()
  return (
    <>
      <SectionHeader text={t('page.header')} />
      <Box mt={2}>
        <Typography paragraph>{t('page.text1')}</Typography>
        <Typography>{t('page.text2')}</Typography>
        <Typography>{t('page.text3')}</Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection="column"
        gap={5}
        alignItems="center"
        mt={10}
      >
        <CardProject
          img={palette.mode == 'light' ? PortfolioLightImg : PortfolioImg}
          modalName={ModalNames.portfolio}
          source="https://github.com/KamilaDyn/portfolio"
          listSkillArray={techStackPortfolio}
          title={t('portfolioCard.header')}
          shortDescription={t('portfolioCard.shortDescription')}
        />
        <Divider sx={{ width: '90%' }} />

        <CardProject
          img={BaazarImg}
          modalName={ModalNames.bazaarPage}
          listSkillArray={techStackBazaar}
          source="https://github.com/KamilaDyn/react-buy-products"
          title={t('bazaarCard.header')}
          shortDescription={t('bazaarCard.shortDescription')}
          liveLink="https://react-buy-products.netlify.app/"
          readMore={true}
        />
        <Divider sx={{ width: '90%' }} />

        <CardProject
          img={CustomersList}
          modalName={ModalNames.customerList}
          listSkillArray={techStackCustomerList}
          source="https://github.com/KamilaDyn/customers-list-react"
          title={t('customersListTable.header')}
          shortDescription={t('customersListTable.shortDescription')}
          liveLink="https://customers-api-sgd5.onrender.com/"
          readMore={true}
        />
        <Divider sx={{ width: '90%' }} />
        <CardProject
          img={ActoutsImg}
          modalName={ModalNames.actouts}
          listSkillArray={techStackActOuts}
          title={t('actOutsCard.header')}
          shortDescription={t('actOutsCard.shortDescription')}
          liveLink="https://actouts.com/"
          readMore={true}
          source="https://github.com/KamilaDyn/act-outs-theme"
        />
        <Divider sx={{ width: '90%' }} />

        <CardProject
          img={FlickThroughEnglish}
          modalName={ModalNames.englishPage}
          listSkillArray={techStackEnglishPage}
          source="https://github.com/KamilaDyn/rara-academic-child"
          title={t('englishCard.header')}
          shortDescription={t('englishCard.shortDescription')}
          liveLink="https://flick-through-english.com/"
          readMore={true}
        />
      </Box>
      <CustomModal
        content={selectingModal()?.content}
        title={selectingModal()?.title}
      />
    </>
  )
}

export default MyProjects
