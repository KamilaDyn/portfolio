import { useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ColorModeContext } from 'context/ColorContext'

const ModeIcon = () => {
  const colorContext = useContext(ColorModeContext)
  const theme = useTheme()

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorContext.toggleColorMode}
      color="inherit"
    >
      {theme.palette.mode === 'dark' ? (
        <Brightness7Icon color="warning" />
      ) : (
        <Brightness4Icon sx={{ color: 'warning.light' }} />
      )}
    </IconButton>
  )
}

export default ModeIcon
