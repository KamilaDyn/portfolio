import { useTranslation } from 'react-i18next'

import { useSwitchOpenModal } from '../../useSwitchOpenModal'
import { bcfTechStack } from './utils'
import { ListBox, ListSkillsBox } from 'components/common'

const BcfWorkContent = () => {
  const { t } = useTranslation('aboutMePage')

  const { bcfResponsibilities } = useSwitchOpenModal()
  return (
    <>
      <ListBox
        title={t('bcfModal.duties.header')}
        listArray={bcfResponsibilities}
      />
      <ListSkillsBox listArray={bcfTechStack} />
    </>
  )
}

export default BcfWorkContent
