import { Box, Container, styled } from '@mui/material'

export const StyledContainer = styled(Container)(({ theme }) => ({
  borderRadius: 1,
  px: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  minHeight: 'calc(100vh - 50px)',
  paddingBottom: theme.spacing(5),
}))

export const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  paddingRight: 3,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  height: 50,
}))
