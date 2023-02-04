import { Box, Drawer, List, ListItem, Typography } from '@mui/material'
import ProfileImg from 'assets/pics2.webp'
import { routes } from 'routes'
import { SocialMedia } from '../common'
import { StyledButton, StyledNavLink } from './index.style'
import { useTranslation } from 'react-i18next'

const Sidebar = () => {
  const { t } = useTranslation('common')

  const sidebarLinks = [
    { name: t('sidebar.home'), path: routes.home },
    { name: t('sidebar.about'), path: routes.about },
    { name: t('sidebar.myProjects'), path: routes.myProjects },
  ]
  return (
    <Drawer
      variant="persistent"
      open={true}
      PaperProps={{
        style: {
          padding: '5rem 1rem 5rem 2rem',
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
      </Box>
      <List sx={{ paddingBottom: 5 }}>
        {sidebarLinks.map(({ name, path }, index) => (
          <ListItem key={index}>
            <StyledNavLink to={path}>
              <StyledButton variant="text" size="small" fullWidth>
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
