import { useTranslation } from 'react-i18next'

export const useActOuts = () => {
  const { t } = useTranslation('projectsPage')
  const description = [
    { item: t('projectsModal.actoutsContent.item1'), subItems: [] },
    {
      item: t('projectsModal.actoutsContent.item2'),
      subItems: [
        t('projectsModal.actoutsContent.subItems.text1'),
        t('projectsModal.actoutsContent.subItems.text2'),
        t('projectsModal.actoutsContent.subItems.text3'),
        t('projectsModal.actoutsContent.subItems.text4'),
        t('projectsModal.actoutsContent.subItems.text5'),
        t('projectsModal.actoutsContent.subItems.text6'),
      ],
    },
    {
      item: t('projectsModal.actoutsContent.item3'),
      subItems: [],
    },
    {
      item: t('projectsModal.actoutsContent.item4'),
      subItems: [],
    },
    {
      item: t('projectsModal.actoutsContent.item5'),
      subItems: [],
    },
    {
      item: t('projectsModal.actoutsContent.item6'),
      subItems: [
        t('projectsModal.actoutsContent.subItems2.text1'),
        t('projectsModal.actoutsContent.subItems2.text2'),
        t('projectsModal.actoutsContent.subItems2.text3'),
      ],
    },
  ]
  return description
}
