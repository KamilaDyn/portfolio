import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState, MouseEvent } from 'react'
import { Box, MenuProps, styled, alpha } from '@mui/material'
import Avatar from '@mui/material/Avatar/Avatar'
import ProfileImg from 'assets/pics2.webp'
import IconButton from '@mui/material/IconButton/IconButton'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import ModeIcon from 'components/ModeIcon'
import CloseIcon from '@mui/icons-material/Close'
import { SocialMedia } from '../common'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    minWidth: 200,
    padding: theme.spacing(1),
    border: theme.palette.mode === 'dark' ? '1px solid #fff' : 'inherit',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  },
}))

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

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
        <ModeIcon />
      </Box>

      <StyledMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Avatar alt="Kamila Dynysiuk" src={ProfileImg} />
        </MenuItem>

        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
        <MenuItem>
          <SocialMedia size="small" />
        </MenuItem>
      </StyledMenu>
    </Box>
  )
}

export default MobileMenu
