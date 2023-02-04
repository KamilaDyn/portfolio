import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ListSkillsBox } from 'components/common'

import { techStackBazaar } from '../utils'
import { useBazaarPage } from '../hooks'
import { ListItemsWithSubItems } from './common'

const BazaarPageModalContent = () => {
  const { t } = useTranslation('projectsPage')

  const description = useBazaarPage()
  return (
    <Box>
      <ListSkillsBox listArray={techStackBazaar} />
      <Typography variant="h6">{t('projectsModal.header')}</Typography>
      <Typography paragraph>
        {t('projectsModal.bazaarContent.text1')}
      </Typography>
      <ListItemsWithSubItems description={description} />
    </Box>
  )
}

export default BazaarPageModalContent
