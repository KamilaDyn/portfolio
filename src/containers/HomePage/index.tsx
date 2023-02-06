import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from 'components/common'

import { Item } from './index.style'
import { techStack } from './utils'

const HomePage = () => {
  const { t } = useTranslation(['homePage', 'common'])
  const openTOWork = true

  return (
    <Box>
      <SectionHeader text={`${t('introduction.hello')},`} />
      <Box pt={2}>
        <Typography variant={'h5'}>
          {t('me.text1', { ns: 'common' })}
          <Typography color="primary" variant={'h5'} component="span">
            {t('me.text2', { ns: 'common' })}
          </Typography>
        </Typography>
        {openTOWork && (
          <Typography py={2} variant="h6" sx={{ color: 'warning.main' }}>
            {t('openToWork', { ns: 'common' })}
          </Typography>
        )}
        <Box pt={3} pb={5}>
          <Typography>{t('introduction.meDescription.text1')}</Typography>
          <Typography pt={2}>
            {t('introduction.meDescription.text2')}
          </Typography>
        </Box>
      </Box>
      <SectionHeader text={t('techStackTitle')} />

      <Box
        display="flex"
        justifyContent={'center'}
        flexDirection="column"
        alignItems={'center'}
      >
        <Box display="flex" flexWrap="wrap" pt={3}>
          {techStack.map(value => (
            <Item key={value}>{value}</Item>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
