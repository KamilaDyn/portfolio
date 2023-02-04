import { FC } from 'react'
import { Typography } from '@mui/material'

interface IProps {
  text: string
}
const SectionHeader: FC<IProps> = ({ text }) => {
  return (
    <Typography variant="h4" lineHeight={'3rem'}>
      {text}
    </Typography>
  )
}

export default SectionHeader
