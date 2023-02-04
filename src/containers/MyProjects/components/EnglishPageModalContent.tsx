import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ListSkillsBox } from 'components/common'

import { techStackEnglishPage } from '../utils'
import { useEnglishPage } from '../hooks'
import { ListItemsWithSubItems } from './common'

const EnglishPageModalContent = () => {
  const { t } = useTranslation('projectsPage')

  const description = useEnglishPage()
  return (
    <Box>
      <ListSkillsBox listArray={techStackEnglishPage} />
      <Typography variant="h6">{t('projectsModal.header')}</Typography>
      <Typography paragraph>
        {t('projectsModal.actoutsContent.text1')}
      </Typography>
      <Typography>{t('projectsModal.actoutsContent.text2')}</Typography>
      <ListItemsWithSubItems description={description} />
    </Box>
  )
}

export default EnglishPageModalContent
