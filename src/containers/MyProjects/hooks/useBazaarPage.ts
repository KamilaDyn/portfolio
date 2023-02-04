import { useTranslation } from 'react-i18next'

export const useBazaarPage = () => {
  const { t } = useTranslation('projectsPage')

  const description = [
    { item: t('projectsModal.bazaarContent.item1'), subItems: [] },
    { item: t('projectsModal.bazaarContent.item2'), subItems: [] },
    { item: t('projectsModal.bazaarContent.item3'), subItems: [] },
    { item: t('projectsModal.bazaarContent.item4'), subItems: [] },
    {
      item: t('projectsModal.bazaarContent.item5'),
      subItems: [
        t('projectsModal.bazaarContent.subItems.text1'),
        t('projectsModal.bazaarContent.subItems.text2'),
        t('projectsModal.bazaarContent.subItems.text3'),
      ],
    },
    { item: t('projectsModal.bazaarContent.item6'), subItems: [] },

    {
      item: t('projectsModal.bazaarContent.item7'),
      subItems: [
        t('projectsModal.bazaarContent.subItems2.text1'),
        t('projectsModal.bazaarContent.subItems2.text2'),
        t('projectsModal.bazaarContent.subItems2.text3'),
        t('projectsModal.bazaarContent.subItems2.text4'),
      ],
    },
  ]
  return description
}
