import { NavLink } from 'react-router-dom'
import { Button, styled } from '@mui/material'

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.dark,
  '&.active button': {
    color: theme.palette.primary.main,
  },
}))

export const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '1rem',
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.primary.contrastText
      : theme.palette.primary.dark,
  textTransform: 'capitalize',
}))
