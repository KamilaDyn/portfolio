import { useTranslation } from 'react-i18next'
import { useContextProvider } from 'context'
import { ModalNames } from 'enum'
import {
  ActOutsModalContent,
  BazaarPageModalContent,
  EnglishPageModalContent,
  CustomersListTable,
} from './components'

export const useSwitchModal = () => {
  const { modalName } = useContextProvider()
  const { t } = useTranslation('projectsPage')
  const selectingModal = () => {
    switch (modalName) {
      case ModalNames.actouts:
        return {
          title: t('projectsModal.actoutsContent.title'),
          content: <ActOutsModalContent />,
        }
      case ModalNames.englishPage:
        return {
          title: t('projectsModal.englishPageContent.title'),
          content: <EnglishPageModalContent />,
        }
      case ModalNames.bazaarPage:
        return {
          title: t('projectsModal.bazaarContent.title'),
          content: <BazaarPageModalContent />,
        }
      case ModalNames.customerList:
        return {
          title: t('projectsModal.customerListTable.title'),
          content: <CustomersListTable />,
        }
      default:
        null
    }
  }
  return { selectingModal }
}
