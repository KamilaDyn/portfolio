import { Box, Card, CardMedia, styled } from '@mui/material'

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  marginBottom: 10,
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    // height: 200,
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    // height: 200,
    width: '90%',
  },
}))

export const FlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    // height: 200,
    paddingTop: theme.spacing(2),
  },
}))

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '40%',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))
