import { Box, Divider } from '@mui/material'
import Typography from '@mui/material/Typography'
import CardProject from './CardProject'
import { CustomModal } from 'components'
import { useSwitchModal } from './useSwitchModal'
import { ModalNames } from 'enum'
import ActoutsImg from 'assets/actouts.jpg'
import PortfolioLightImg from 'assets/portfolio-light.jpg'
import PortfolioImg from 'assets/portfolio.jpg'
import FlickThroughEnglish from 'assets/flichThroughEnglish.jpg'
import BaazarImg from 'assets/bazaarProject.jpg'

import {
  techStackBazaar,
  techStackEnglishPage,
  techStackActOuts,
  techStackPortfolio,
} from './utils'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/system'

const Header = () => {
  return (
    <Box>
      <Typography variant="h4" color="primary">
        My projects
      </Typography>
    </Box>
  )
}
const MyProjects = () => {
  const { selectingModal } = useSwitchModal()
  const { t } = useTranslation('projectsPage')
  const { palette } = useTheme()
  return (
    <>
      <Header />
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
          img={ActoutsImg}
          modalName={ModalNames.actouts}
          listSkillArray={techStackActOuts}
          title={t('actOutsCard.header')}
          shortDescription={t('actOutsCard.shortDescription')}
          liveLink="https://actouts.com/"
          readMore={true}
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
      </Box>
      <CustomModal
        content={selectingModal()?.content}
        title={selectingModal()?.title}
      />
    </>
  )
}

export default MyProjects
