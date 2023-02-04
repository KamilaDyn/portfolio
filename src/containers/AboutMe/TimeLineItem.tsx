import { FC } from 'react'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { Button, Box } from '@mui/material'
import { useContextProvider } from 'context'

interface TimLineItem {
  year: string
  header: string
  text: string
  icon: JSX.Element
  color?:
    | 'inherit'
    | 'grey'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
  variant?: 'filled' | 'outlined'
  isTablet?: boolean
  button?: JSX.Element
}

const TimLineItem: FC<TimLineItem> = ({
  year,
  header,
  text,
  icon,
  color,
  variant,
  isTablet,
  button,
}) => {
  const theme = useTheme()

  const { openModal, setModalName } = useContextProvider()

  return (
    <>
      <TimelineItem>
        {isTablet ? (
          <TimelineContent
            sx={{
              py: '12px',
              px: 2,
              [theme.breakpoints.down('sm')]: {
                textAlign: 'left !important',
              },
            }}
          >
            <Typography variant="h6" component="span">
              {header}
            </Typography>
            <>
              {' '}
              <Typography>{text}</Typography>
              {button && button}
            </>
          </TimelineContent>
        ) : (
          <TimelineOppositeContent
            sx={{
              m: 'auto 0',
              [theme.breakpoints.down('sm')]: {
                width: 78,
                wordBreak: 'break-word',
                paddingX: '10px',
                flex: 'unset',
              },
            }}
            align="right"
            variant="h6"
            color="text.secondary"
          >
            {year}
          </TimelineOppositeContent>
        )}

        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            color={color ? color : 'grey'}
            variant={variant ? variant : 'filled'}
          >
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        {isTablet ? (
          <TimelineOppositeContent
            sx={{
              m: 'auto 0',
              [theme.breakpoints.down('sm')]: {
                width: 78,
                wordBreak: 'break-word',
                paddingX: '10px',
                flex: 'unset',
              },
            }}
            align="left"
            variant="h6"
            color="text.secondary"
          >
            {year}
          </TimelineOppositeContent>
        ) : (
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              {header}
            </Typography>
            <Box>
              <Typography>{text}</Typography>
              {button && button}
            </Box>
          </TimelineContent>
        )}
      </TimelineItem>
    </>
  )
}

export default TimLineItem
