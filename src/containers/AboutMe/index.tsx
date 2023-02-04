import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { useContextProvider } from 'context'
import { CustomModal } from 'components'

import MyTimeline from './MyTimeline'
import { useAboutMe } from './utils'
import { useSwitchOpenModal } from './useSwitchOpenModal'
import { useTranslation } from 'react-i18next'
import { SectionHeader } from 'components/common'
const AboutMe = () => {
  const { selectingModal } = useSwitchOpenModal()
  const { t } = useTranslation(['aboutMePage', 'common'])
  const { currentTechStack, freeTime } = useAboutMe()
  return (
    <>
      <Box display="flex" flexDirection="column" pb={10}>
        <Box pb={5}>
          <SectionHeader text={t('introduction.header')} />
          <Typography variant="h6">
            {t('me.text1', { ns: 'common' })}{' '}
            <Typography variant="h6" component="span" color="primary">
              {t('me.text2', { ns: 'common' })}
            </Typography>
          </Typography>
          <Box pt={2}>
            <Typography paragraph>{t('introduction.text1')} </Typography>
            <Typography paragraph>
              {t('introduction.text2')}{' '}
              <Typography component="span" color="primary">
                {t('introduction.span')}
              </Typography>
              {t('introduction.text3')}
            </Typography>
            <Typography paragraph> {t('introduction.text4')}</Typography>
          </Box>
        </Box>
        <Box pb={10}>
          <SectionHeader text={t('timeLine.header')} />
          <Box pt={3}>
            <MyTimeline />
          </Box>
        </Box>
        <Box>
          <SectionHeader text={t('currentStack.header')} />
          <List>
            {currentTechStack.map(({ name, stack }) => (
              <ListItemText key={name}>
                <Typography variant="h6" fontWeight="bold" component="span">
                  {name}:{' '}
                </Typography>
                {stack}
              </ListItemText>
            ))}
          </List>
        </Box>
        <Box pt={5}>
          <SectionHeader text={t('afterCode.header')} />

          <List>
            {freeTime.map((value, index) => (
              <ListItemText key={index}>{value}</ListItemText>
            ))}
          </List>
        </Box>
      </Box>
      <CustomModal
        content={selectingModal()?.content}
        title={selectingModal()?.title}
      />
    </>
  )
}

export default AboutMe
