import { FC } from 'react'
import { IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { StyledHeader } from './index.style'
import { useContextProvider } from 'context'

interface IProps {
  title: string
}

const ModalHeader: FC<IProps> = ({ title }) => {
  const { handleCloseModal } = useContextProvider()

  return (
    <StyledHeader>
      <Typography id="transition-modal-title" variant="h6" component="h2">
        {title}
      </Typography>
      <IconButton onClick={handleCloseModal}>
        <CloseIcon sx={{ color: 'primary.contrastText' }} />
      </IconButton>
    </StyledHeader>
  )
}

export default ModalHeader
