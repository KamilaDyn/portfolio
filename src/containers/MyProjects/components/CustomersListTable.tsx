import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ListSkillsBox } from 'components/common'

import { techStackCustomerList } from '../utils'
import { useCustomerPage } from '../hooks'
import { ListItemsWithSubItems } from './common'

const CustomersListTable = () => {
  const { t } = useTranslation('projectsPage')

  const description = useCustomerPage()
  return (
    <Box>
      <ListSkillsBox listArray={techStackCustomerList} />
      <Typography variant="h6">{t('projectsModal.header')}</Typography>
      <Typography paragraph>
        {t('projectsModal.customerListTable.text1')}
      </Typography>
      <Typography paragraph>
        {t('projectsModal.customerListTable.text2')}
      </Typography>
      <ListItemsWithSubItems description={description} />
    </Box>
  )
}

export default CustomersListTable
