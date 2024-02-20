import { FC } from 'react'
import { Box, IconButton, useTheme, Tooltip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import LanguageIcon from '@mui/icons-material/Language'
import { openInNewTab } from 'utils'

interface IProps {
  size: 'small' | 'large' | 'medium'
}

const socialMedia = [
  {
    name: 'my website',
    icon: <LanguageIcon color={'inherit'} />,
    link: 'https://kamcode.pl/',
  },
  {
    name: 'github',
    icon: <GitHubIcon color={'inherit'} />,
    link: 'https://github.com/KamilaDyn',
  },
  {
    name: 'linkedin',
    icon: <LinkedInIcon color={'inherit'} />,
    link: 'https://www.linkedin.com/in/kamila-d-489849180/',
  },
]

const SocialMedia: FC<IProps> = ({ size }) => {
  const { palette } = useTheme()

  return (
    <Box display="flex">
      {socialMedia.map(({ icon, link, name }, index) => (
        <Tooltip title={name} key={index}>
          <IconButton
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
        </Tooltip>
      ))}
    </Box>
  )
}

export default SocialMedia
