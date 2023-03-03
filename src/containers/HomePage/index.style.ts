import { styled, Paper, Box } from '@mui/material'

export const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  ...theme.typography.body2,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.primary.light
      : theme.palette.primary.contrastText,
  padding: theme.spacing(1),
  textAlign: 'center',
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.primary.contrastText
      : theme.palette.primary.dark,
  boxShadow: `0px 0px 0px 2px ${theme.palette.primary.light}`,
  margin: theme.spacing(2),
  fontSize: '1.2rem',
}))

export const FlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginBottom: theme.spacing(1),
}))
