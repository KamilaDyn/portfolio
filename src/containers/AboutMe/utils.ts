import { useTranslation } from 'react-i18next'

export const useAboutMe = () => {
  const { t } = useTranslation('aboutMePage')
  const currentTechStack = [
    {
      name: t('currentStack.name1'),
      stack: 'JavaScript, React, Redux, React-native',
    },
    { name: t('currentStack.name2'), stack: 'Gitlab, BitBucket' },
    {
      name: t('currentStack.name3'),
      stack: 'Material Ui, Chakra Ui, Bootstrap (Reactstrap)',
    },
    { name: t('currentStack.name4'), stack: 'Figma, VSC, xcode, npm' },
    { name: t('currentStack.name5'), stack: 'Wordpress, PHP, jQuery' },
  ]
  const freeTime = [
    `${t('afterCode.text1')} 🇵🇹`,
    `${t('afterCode.text2')} 🧵`,
    `${t('afterCode.text3')}  🏔`,
    `${t('afterCode.text4')}  📚`,
    `${t('afterCode.text5')}  🏃‍♀️ 🏊‍♀️`,
  ]

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
  return { currentTechStack, curriculum, freeTime }
}
