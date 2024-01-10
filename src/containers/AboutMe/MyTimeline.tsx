import { useTranslation } from 'react-i18next'
import Timeline from '@mui/lab/Timeline'
import SchoolIcon from '@mui/icons-material/School'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import CodeIcon from '@mui/icons-material/Code'
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import BadgeIcon from '@mui/icons-material/Badge'
import { Button } from '@mui/material'
import { useContextProvider } from 'context'

import TimLineItem from './TimeLineItem'
import { ModalNames } from 'enum'

const MyTimeline = () => {
  const { isMobile, isTablet } = useContextProvider()
  const { setModalName } = useContextProvider()
  const { t } = useTranslation(['aboutMePage', 'common'])
  return (
    <Timeline position="alternate">
      <TimLineItem
        year="2015"
        icon={<SchoolIcon />}
        text={t('timeLine.item1.text')}
        header={t('timeLine.item1.header')}
      />
      <TimLineItem
        year="2015-2016"
        icon={<Diversity3Icon />}
        text={t('timeLine.item2.text')}
        header={t('timeLine.item2.header')}
        isTablet={isMobile || isTablet}
      />

      <TimLineItem
        year="2016-2018"
        icon={<WheelchairPickupIcon />}
        text={t('timeLine.item3.text')}
        header={t('timeLine.item3.header')}
      />

      <TimLineItem
        year="2018-2021"
        icon={<CodeIcon color="primary" />}
        text={t('timeLine.item4.text')}
        header={t('timeLine.item4.header')}
        color="primary"
        variant="outlined"
        isTablet={isMobile || isTablet}
        button={
          <Button onClick={() => setModalName(ModalNames.studyPrograming)}>
            {t('buttons.seeMore', { ns: 'common' })}
          </Button>
        }
      />

      <TimLineItem
        year="2021-2023"
        icon={<ImportantDevicesIcon />}
        text={t('timeLine.item5.text')}
        header={t('timeLine.item5.header')}
        color="primary"
        button={
          <Button onClick={() => setModalName(ModalNames.workAtBcf)}>
            {t('buttons.seeMore', { ns: 'common' })}
          </Button>
        }
      />
      <TimLineItem
        year="2023-2024"
        icon={<BadgeIcon />}
        text={t('timeLine.item6.text')}
        header={t('timeLine.item6.header')}
        color="primary"
        isTablet={isMobile || isTablet}
        button={
          <Button onClick={() => setModalName(ModalNames.selfEmployment)}>
            {t('buttons.seeMore', { ns: 'common' })}
          </Button>
        }
      />
      <TimLineItem
        year="2024-..."
        icon={<QuestionMarkIcon color="primary" />}
        text={t('timeLine.item7.text')}
        header={t('timeLine.item7.header')}
        color="primary"
        variant="outlined"
      />
    </Timeline>
  )
}

export default MyTimeline
