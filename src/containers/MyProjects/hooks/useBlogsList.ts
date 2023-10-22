import { useTranslation } from 'react-i18next'

export const useBlogsList = () => {
  const { t } = useTranslation('projectsPage')
  const description = [
    {
      item: t('projectsModal.blogListApp.item1'),
      subItems: [
        t('projectsModal.blogListApp.subItems1.text1'),
        t('projectsModal.blogListApp.subItems1.text2'),
      ],
    },
    {
      item: t('projectsModal.blogListApp.item2'),
      subItems: [
        t('projectsModal.blogListApp.subItems2.text1'),
        t('projectsModal.blogListApp.subItems2.text2'),
        t('projectsModal.blogListApp.subItems2.text3'),
      ],
    },
    {
      item: t('projectsModal.blogListApp.item3'),
      subItems: [t('projectsModal.blogListApp.subItems3.text1')],
    },
    {
      item: t('projectsModal.blogListApp.item4'),
      subItems: [t('projectsModal.blogListApp.subItems4.text1')],
    },
    {
      item: t('projectsModal.blogListApp.item5'),
      subItems: [],
    },
  ]
  return description
}
