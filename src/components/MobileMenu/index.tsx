import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useState, MouseEvent } from 'react'
import { Avatar, Box, MenuItem, IconButton, Typography } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseIcon from '@mui/icons-material/Close'
import { routes } from 'routes'
import ProfileImg from 'assets/pics2.webp'
import ModeIcon from 'components/ModeIcon'
import { SocialMedia, TranslationIcon } from '../common'

import { StyledMenu } from './index.style'

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { t } = useTranslation('common')
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const sidebarLinks = [
    { name: t('sidebar.home'), path: routes.home },
    { name: t('sidebar.about'), path: routes.about },
    { name: t('sidebar.myProjects'), path: routes.myProjects },
  ]

  return (
    <Box p={3}>
      <Box display="flex" justifyContent={'space-between'}>
        <IconButton
          size="large"
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {open ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuRoundedIcon fontSize="large" />
          )}
        </IconButton>
        <Box display="flex" alignItems={'center'}>
          <TranslationIcon />
          <ModeIcon />
        </Box>
      </Box>

      <StyledMenu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Avatar alt="Kamila Dynysiuk" src={ProfileImg} />
        </MenuItem>

        {sidebarLinks.map(({ name, path }, index) => (
          <MenuItem
            onClick={() => {
              navigate(path)
              handleClose()
            }}
            key={index}
          >
            {name}
          </MenuItem>
        ))}
        <MenuItem>
          <SocialMedia size="small" />
        </MenuItem>
        <MenuItem>
          <Typography variant={'body2'} lineHeight={'3rem'}>
            kamila.dynysiuk@gmail.com
          </Typography>
        </MenuItem>
      </StyledMenu>
    </Box>
  )
}

export default MobileMenu
