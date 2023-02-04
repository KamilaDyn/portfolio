import { FC } from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { openInNewTab } from 'utils'

interface IProps {
  size: 'small' | 'large' | 'medium'
}

const socialMedia = [
  {
    icon: <GitHubIcon color={'inherit'} />,
    link: 'https://github.com/KamilaDyn',
  },
  {
    icon: <LinkedInIcon color={'inherit'} />,
    link: 'https://www.linkedin.com/in/kamila-d-489849180/',
  },
  {
    icon: <EmailIcon color={'inherit'} />,
    link: 'mailto:kamila.dynysiuk@gmil.com',
  },
]

const SocialMedia: FC<IProps> = ({ size }) => {
  const { palette } = useTheme()

  return (
    <Box display="flex">
      {socialMedia.map(({ icon, link }, index) => (
        <IconButton
          key={index}
          size={size}
          sx={{
            border: `1px solid ${
              palette.mode === 'light'
                ? palette.primary.main
                : palette.primary.contrastText
            }`,
            marginRight: 1,
          }}
          onClick={() => openInNewTab(link)}
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  )
}

export default SocialMedia
