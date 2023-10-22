import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ListSkillsBox } from 'components/common'
import { techStackBlogList } from '../utils'
import { ListItemsWithSubItems } from './common'
import { useBlogsList } from '../hooks'

const BlogList = () => {
  const { t } = useTranslation('projectsPage')
  const description = useBlogsList()
  return (
    <Box>
      <ListSkillsBox listArray={techStackBlogList} />
      <Typography variant="h6">{t('projectsModal.header')}</Typography>
      <Typography paragraph>{t('projectsModal.blogListApp.text1')}</Typography>
      <Typography paragraph>{t('projectsModal.blogListApp.text2')}</Typography>
      <ListItemsWithSubItems description={description} />
    </Box>
  )
}

export default BlogList
