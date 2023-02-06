import { useTranslation } from 'react-i18next'
import { Box, Drawer, List, ListItem, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ListIcon from '@mui/icons-material/List'
import PersonIcon from '@mui/icons-material/Person'
import { routes } from 'routes'
import ProfileImg from 'assets/pics2.webp'
import { SocialMedia } from '../common'
import { StyledButton, StyledNavLink } from './index.style'

const Sidebar = () => {
  const { t } = useTranslation('common')

  const sidebarLinks = [
    {
      name: t('sidebar.home'),
      path: routes.home,
      icon: <HomeIcon />,
    },
    {
      name: t('sidebar.about'),
      path: routes.about,
      icon: <PersonIcon />,
    },
    {
      name: t('sidebar.myProjects'),
      path: routes.myProjects,
      icon: <ListIcon />,
    },
  ]
  return (
    <Drawer
      variant="persistent"
      open={true}
      PaperProps={{
        style: {
          padding: '5rem 1rem',
          width: '230px',
          overflow: 'hidden',
          height: '100%',
        },
      }}
    >
      <Box>
        <img
          src={ProfileImg}
          width={'150'}
          height={'200'}
          style={{ borderRadius: '5px' }}
        />
        <Typography variant={'h5'} color="primary" lineHeight={'3rem'}>
          Kamila Dynysiuk
        </Typography>
        <Typography>Front end developer (React)</Typography>
        <Typography variant={'body2'} lineHeight={'3rem'}>
          kamila.dynysiuk@gmail.com
        </Typography>
      </Box>
      <List sx={{ paddingBottom: 5 }}>
        {sidebarLinks.map(({ name, path, icon }, index) => (
          <ListItem key={index}>
            <StyledNavLink to={path}>
              <StyledButton
                variant="text"
                size="small"
                fullWidth
                startIcon={icon}
              >
                {name}
              </StyledButton>
            </StyledNavLink>
          </ListItem>
        ))}
      </List>
      <SocialMedia size={'medium'} />
    </Drawer>
  )
}

export default Sidebar
