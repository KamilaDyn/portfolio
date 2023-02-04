import { Box, styled } from '@mui/material'

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.background.default,
  borderRadius: 10,
  boxShadow: `0 0 0.15em 0.15em ${theme.palette.primary.light}`,
  maxHeight: '80vh',
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
}))

export const StyledHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
}))
