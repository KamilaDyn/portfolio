import { useTranslation } from 'react-i18next'

import { useSwitchOpenModal } from '../../useSwitchOpenModal'
import { kamcodeTechStack } from './utils'
import { ListBox, ListSkillsBox } from 'components/common'

const KamcodeWorkContent = () => {
  const { t } = useTranslation('aboutMePage')

  const { kamcodeResponsibilities } = useSwitchOpenModal()
  return (
    <>
      <ListBox
        title={t('kamcodeModal.duties.header')}
        listArray={kamcodeResponsibilities}
      />
      <ListSkillsBox listArray={kamcodeTechStack} />
    </>
  )
}

export default KamcodeWorkContent
