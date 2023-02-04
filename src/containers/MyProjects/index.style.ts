import { Box, Card, CardMedia, styled } from '@mui/material'

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  width: '80%',
  //   height: 300,
  //   backgroundColor: '#fff',
  marginBottom: 10,

  [theme.breakpoints.down('md')]: {
    // height: 200,
    flexDirection: 'column',
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
