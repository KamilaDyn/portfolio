import { Container, styled } from '@mui/material'

export const StyledContainer = styled(Container)(({ theme }) => ({
  borderRadius: 1,
  px: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  paddingBottom: theme.spacing(5),
}))
