import { useTranslation } from 'react-i18next'
import { Divider, Grid, Typography } from '@mui/material'
import ModeIcon from '../ModeIcon'
import { TranslationIcon } from '../common'
const Header = () => {
  const { t } = useTranslation('common')

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
        <TranslationIcon />
        <ModeIcon />
      </Grid>
      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>
    </Grid>
  )
}

export default Header
