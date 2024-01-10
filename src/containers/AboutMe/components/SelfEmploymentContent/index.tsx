import { useTranslation } from 'react-i18next'

import { useSwitchOpenModal } from '../../useSwitchOpenModal'
import { ListBox, ListSkillsBox } from 'components/common'
import { Link, Typography } from '@mui/material'

const SelfEmploymentContent = () => {
  const { t } = useTranslation('aboutMePage')

  const { selfEmployment } = useSwitchOpenModal()
  return (
    <>
      <ListBox
        title={t('selfEmploymentModal.duties.header')}
        listArray={selfEmployment}
      />
      <Typography>
        {' '}
        {t('selfEmploymentModal.other.item1')}:{' '}
        <Link href="https://kamcode.pl/" target="_blank" rel="noreferrer">
          kamcode.pl
        </Link>
      </Typography>
    </>
  )
}

export default SelfEmploymentContent
