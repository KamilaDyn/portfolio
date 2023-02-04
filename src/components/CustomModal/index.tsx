import { FC } from 'react'
import { Box, Fade, Modal, Divider, useTheme } from '@mui/material'
import { useContextProvider } from 'context'

import { StyledBox } from './index.style'
import ModalHeader from './ModalHeader'

interface IProps {
  content: JSX.Element | undefined
  title: string | undefined
}

const CustomModal: FC<IProps> = ({ content, title }) => {
  const { isModalOpen, handleCloseModal } = useContextProvider()
  const theme = useTheme()
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isModalOpen}
      onClose={handleCloseModal}
      closeAfterTransition
      sx={{ overflow: 'auto' }}
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
