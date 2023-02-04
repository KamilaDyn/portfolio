import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ListSkillsBox } from 'components/common'

import { techStackActOuts } from '../utils'
import { useActOuts } from '../hooks'
import { ListItemsWithSubItems } from './common'

const ActOutsModalContent = () => {
  const { t } = useTranslation('projectsPage')

  const description = useActOuts()
  return (
    <Box>
      <ListSkillsBox listArray={techStackActOuts} />
      <Typography variant="h6">{t('projectsModal.header')}</Typography>
      <Typography paragraph>
        {t('projectsModal.actoutsContent.text1')}
      </Typography>
      <Typography>{t('projectsModal.actoutsContent.text2')}</Typography>
      <ListItemsWithSubItems description={description} />
    </Box>
  )
}

export default ActOutsModalContent
