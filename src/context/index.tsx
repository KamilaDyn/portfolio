import { createContext, useContext, useEffect, useState } from 'react'

interface IContextProvider {
  openModal: () => void
  isModalOpen: boolean
  isMobile: boolean
  isTablet: boolean
  setModalName: any
  handleCloseModal: () => void
  modalName: number | null
}

const defaultContext: IContextProvider = {
  openModal: () => {},
  isModalOpen: false,
  isMobile: false,
  isTablet: false,
  setModalName: () => {},
  handleCloseModal: () => {},
  modalName: null,
}
export const AppContext = createContext<IContextProvider>(defaultContext)

export const ContextProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [modalName, setModalName] = useState(null)
  const [isTablet, setIsTablet] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const handleCloseModal = () => {
    setModalName(null)
    setModalOpen(false)
  }
  const appContextValues = {
    openModal,
    isModalOpen,
    isMobile,
    isTablet,
    setModalName,
    handleCloseModal,
    modalName,
  }

  useEffect(() => {
    if (modalName !== null) {
      openModal()
    }
  }, [modalName])

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state

      if (window.innerWidth <= 600) {
        setIsMobile(true)
      } else if (window.innerWidth <= 900) {
        setIsMobile(true)
        setIsTablet(true)
      } else {
        setIsMobile(false)
        setIsTablet(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <AppContext.Provider value={appContextValues}>
      {children}
    </AppContext.Provider>
  )
}

export function useContextProvider() {
  return useContext(AppContext)
}
