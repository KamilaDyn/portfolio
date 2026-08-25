import { useTranslation } from 'react-i18next'

export const useAboutMe = () => {
  const { t } = useTranslation('aboutMePage')
  const currentTechStack = [
    {
      name: t('currentStack.name1'),
      stack: 'JavaScript, React, Redux, React Native, jQuery, React Query',
    },
    {
      name: t('currentStack.name2'),
      stack:
        '(C# and .NET) - entry level, (Node.js, Express, MongoDB) - self-taught',
    },

    {
      name: t('currentStack.name8'),
      stack: 'Apex, Lightning Web Components (LWC)',
    },

    { name: t('currentStack.name3'), stack: 'GitLab, Bitbucket' },
    {
      name: t('currentStack.name4'),
      stack: 'Material UI, Chakra UI, Bootstrap (Reactstrap)',
    },
    { name: t('currentStack.name5'), stack: 'Figma, VS Code, Xcode, npm' },
    { name: t('currentStack.name6'), stack: 'E2E - Cypress, Jest' },
    {
      name: t('currentStack.name7'),
      stack: 'WordPress, PHP, Gutenberg, Astro',
    },
  ]
  const freeTime = [
    `${t('afterCode.text2')} 🧵`,
    `${t('afterCode.text3')}  🏔`,
    `${t('afterCode.text4')}  📚`,
    `${t('afterCode.text5')}  🏃‍♀️ 🏊‍♀️`,
  ]

  const curriculum = [
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
