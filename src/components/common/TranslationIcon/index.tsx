import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import PL from 'assets/poland.png'
import EN from 'assets/united-kingdom.png'

const TranslationIcon = () => {
  const { i18n } = useTranslation('common')

  return i18n.resolvedLanguage === 'en' ? (
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
  )
}

export default TranslationIcon
