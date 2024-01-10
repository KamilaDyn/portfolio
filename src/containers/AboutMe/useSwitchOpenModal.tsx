import { useTranslation } from 'react-i18next'
import { useContextProvider } from 'context'
import { ModalNames } from 'enum'

import {
  StudyProgrammingContent,
  BcfWorkContent,
  SelfEmploymentContent,
} from './components'

export const useSwitchOpenModal = () => {
  const { modalName } = useContextProvider()
  const { t } = useTranslation('aboutMePage')
  const selectingModal = () => {
    switch (modalName) {
      case ModalNames.studyPrograming:
        return {
          title: t('studyModal.header'),
          content: <StudyProgrammingContent />,
        }
      case ModalNames.workAtBcf:
        return {
          title: t('bcfModal.header'),
          content: <BcfWorkContent />,
        }
      case ModalNames.selfEmployment:
        return {
          title: t('selfEmploymentModal.header'),
          content: <SelfEmploymentContent />,
        }
      default:
        null
    }
  }

  const curriculum = [
    t('studyModal.studyProgram.item1'),
    t('studyModal.studyProgram.item2'),
    t('studyModal.studyProgram.item3'),
    t('studyModal.studyProgram.item4'),
    t('studyModal.studyProgram.item5'),
    t('studyModal.studyProgram.item6'),
    t('studyModal.studyProgram.item7'),
    t('studyModal.studyProgram.item8'),
    t('studyModal.studyProgram.item9'),
    t('studyModal.studyProgram.item10'),
  ]

  const udemyCourses = [
    t('studyModal.udemyCourses.fe'),
    t('studyModal.udemyCourses.js'),
    t('studyModal.udemyCourses.react'),
    t('studyModal.udemyCourses.reactQuery'),
    t('studyModal.udemyCourses.testing'),
    t('studyModal.udemyCourses.typescript'),
  ]

  const bcfResponsibilities = [
    t('bcfModal.duties.item1'),
    t('bcfModal.duties.item2'),
    t('bcfModal.duties.item3'),
    t('bcfModal.duties.item4'),
    t('bcfModal.duties.item5'),
    t('bcfModal.duties.item6'),
    t('bcfModal.duties.item7'),
    t('bcfModal.duties.item8'),
    t('bcfModal.duties.item9'),
    t('bcfModal.duties.item10'),
  ]
  const selfEmployment = [
    t('selfEmploymentModal.duties.item1'),
    t('selfEmploymentModal.duties.item2'),
    t('selfEmploymentModal.duties.item3'),
    t('selfEmploymentModal.duties.item4'),
    t('selfEmploymentModal.duties.item5'),
    t('selfEmploymentModal.duties.item6'),
  ]

  return {
    bcfResponsibilities,
    curriculum,
    selectingModal,
    udemyCourses,
    selfEmployment,
  }
}
