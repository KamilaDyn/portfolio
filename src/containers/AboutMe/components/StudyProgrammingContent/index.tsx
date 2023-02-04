import { useTranslation } from 'react-i18next'

import { useSwitchOpenModal } from '../../useSwitchOpenModal'
import { ListBox } from 'components/common'

const StudyProgrammingContent = () => {
  const { t } = useTranslation('aboutMePage')
  const { curriculum, udemyCourses } = useSwitchOpenModal()
  return (
    <>
      <ListBox
        title={t('studyModal.studyProgram.header')}
        listArray={curriculum}
      />
      <ListBox
        title={t('studyModal.udemyCourses.header')}
        listArray={udemyCourses}
      />
    </>
  )
}

export default StudyProgrammingContent
