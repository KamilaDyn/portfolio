import { ThemeContext } from '@emotion/react'
import { Box, Fade, Modal, Typography, styled, Divider } from '@mui/material'
import Backdrop from '@mui/material/Backdrop'
import { useContextProvider } from 'context'
import { useState, FC } from 'react'
import { useTheme } from '@mui/material/styles'

import { StyledBox } from './index.style'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import ModalHeader from './ModalHeader'
interface IProps {
  content: JSX.Element | undefined
  title: string | undefined
}

const CustomModal: FC<IProps> = ({ content, title }) => {
  const { isModalOpen, openModal, handleCloseModal } = useContextProvider()
  const theme = useTheme()
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isModalOpen}
      onClose={handleCloseModal}
      closeAfterTransition
      sx={{ overflow: 'auto' }}

      //   backdrop={Backdrop2}
    >
      <Fade in={isModalOpen}>
        <StyledBox>
          <ModalHeader title={title || ''} />
          <Divider />
          <Box
            py={4}
            px={2}
            sx={{
              overflow: 'auto',
              flexGrow: 1,
              backgroundColor:
                theme.palette.mode === 'dark'
                  ? 'primary.medium'
                  : 'primary.contrastText',
            }}
          >
            {content}
          </Box>
        </StyledBox>
      </Fade>
    </Modal>
  )
}

export default CustomModal
