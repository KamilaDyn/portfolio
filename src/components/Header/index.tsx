import { useTranslation } from 'react-i18next'
import { Box, Divider, Grid, Typography } from '@mui/material'
import ModeIcon from '../ModeIcon'
import PL from 'assets/poland.png'
import EN from 'assets/united-kingdom.png'

const Header = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <Grid
      container
      justifyContent={'space-between'}
      alignItems="center"
      p={3}
      pb={5}
    >
      <Grid item xs={9}>
        <Typography variant="h5" sx={{ color: 'primary.main' }} align="center">
          {t('header')}
        </Typography>
      </Grid>
      <Grid
        item
        xs={3}
        sx={{
          textAlign: 'right',
          paddingRight: 10,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {i18n.resolvedLanguage === 'en' ? (
          <Box
            display={'flex'}
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              i18n.changeLanguage('pl')
            }}
          >
            <img src={PL} width={'20'} height={'20'} />
          </Box>
        ) : (
          <Box
            display={'flex'}
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              i18n.changeLanguage('en')
            }}
          >
            <img src={EN} width={'20'} height={'20'} />
          </Box>
        )}
        <ModeIcon />
      </Grid>
      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>
    </Grid>
  )
}

export default Header
