import { useTranslation } from 'react-i18next'

export const useEnglishPage = () => {
  const { t } = useTranslation('projectsPage')
  const description = [
    { item: t('projectsModal.englishPageContent.item1'), subItems: [] },
    {
      item: t('projectsModal.englishPageContent.item2'),
      subItems: [
        t('projectsModal.englishPageContent.subItems.text1'),
        t('projectsModal.englishPageContent.subItems.text2'),
        t('projectsModal.englishPageContent.subItems.text3'),
        t('projectsModal.englishPageContent.subItems.text4'),
        t('projectsModal.englishPageContent.subItems.text5'),
        t('projectsModal.englishPageContent.subItems.text6'),
      ],
    },
    {
      item: t('projectsModal.englishPageContent.item3'),
      subItems: [],
    },
    {
      item: t('projectsModal.englishPageContent.item4'),
      subItems: [],
    },
  ]
  return description
}
