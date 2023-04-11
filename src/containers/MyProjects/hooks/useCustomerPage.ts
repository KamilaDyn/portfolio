import { useTranslation } from 'react-i18next'

export const useCustomerPage = () => {
  const { t } = useTranslation('projectsPage')
  const description = [
    {
      item: t('projectsModal.customerListTable.item1'),
      subItems: [
        t('projectsModal.customerListTable.subItems.text1'),
        t('projectsModal.customerListTable.subItems.text2'),
        t('projectsModal.customerListTable.subItems.text3'),
      ],
    },
  ]
  return description
}
