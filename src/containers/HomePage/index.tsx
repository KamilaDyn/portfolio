import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from 'components/common'

import { Item, FlexBox } from './index.style'
import { frontEnd, backEnd, dataBase, other } from './utils'

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
      <SectionHeader text={t('techStack.title')} />
      <Typography variant="h5" style={{ marginTop: '1rem' }}>
        {t('techStack.frontEnd')}
      </Typography>
      <FlexBox>
        <Box display="flex" flexWrap="wrap" pt={3}>
          {frontEnd.map(({ icon, name }) => (
            <Item key={name}>
              <Box mr={0.5} display="flex" alignItems={'center'}>
                {icon}
              </Box>
              {name}
            </Item>
          ))}
        </Box>
      </FlexBox>
      <Typography variant="h5">{t('techStack.backEnd')}</Typography>

      <FlexBox>
        <Box display="flex" flexWrap="wrap" pt={3}>
          {backEnd.map(({ icon, name }) => (
            <Item key={name}>
              <Box mr={0.5} display="flex" alignItems={'center'}>
                {icon}
              </Box>
              {name}
            </Item>
          ))}
        </Box>
      </FlexBox>
      <Typography variant="h5">{t('techStack.dataBase')}</Typography>

      <FlexBox>
        <Box display="flex" flexWrap="wrap" pt={3}>
          {dataBase.map(({ icon, name }) => (
            <Item key={name}>
              <Box mr={0.5} display="flex" alignItems={'center'}>
                {icon}
              </Box>
              {name}
            </Item>
          ))}
        </Box>
      </FlexBox>
      <Typography variant="h5">{t('techStack.other')}</Typography>

      <FlexBox>
        <Box display="flex" flexWrap="wrap" pt={3}>
          {other.map(({ icon, name }) => (
            <Item key={name}>
              <Box mr={0.5} display="flex" alignItems={'center'}>
                {icon}
              </Box>
              {name}
            </Item>
          ))}
        </Box>
      </FlexBox>
    </Box>
  )
}

export default HomePage
