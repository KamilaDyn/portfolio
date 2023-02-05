import { useTranslation } from 'react-i18next'
import {
  Button,
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from '@mui/material'
import { FC } from 'react'
import { ModalNames } from 'enum'
import { useContextProvider } from 'context'
import { ListSkillsBox } from 'components/common'
import { openInNewTab } from 'utils'
import { FlexBox, StyledCard } from './index.style'

interface ICardProject {
  img: string
  modalName: ModalNames
  listSkillArray: string[]
  title: string
  shortDescription: string
  source?: string
  liveLink?: string
  readMore?: boolean
}

const CardProject: FC<ICardProject> = ({
  img,
  modalName,
  source,
  listSkillArray,
  title,
  shortDescription,
  liveLink,
  readMore,
}) => {
  const theme = useTheme()
  const { setModalName } = useContextProvider()
  const { t } = useTranslation('common')
  return (
    <StyledCard>
      <CardMedia
        component="img"
        sx={{
          width: '40%',
          cursor: 'pointer',
          objectPosition: 'top left',
          minHeight: 250,
          [theme.breakpoints.down('md')]: {
            width: '100%',
            maxHeight: 330,
          },
          '&:hover': {
            transition: 'all 0.8s',
            transform: 'scale(1.1)',
          },
        }}
        image={img}
        alt={title}
      />
      <FlexBox>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5" color="primary" pb={2}>
            {title}{' '}
          </Typography>
          <ListSkillsBox listArray={listSkillArray} />

          <Box pt={[0, 3]}>
            <Typography>{shortDescription}</Typography>
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <CardActions
            sx={{
              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              },
            }}
          >
            {source && (
              <Button size="small" onClick={() => openInNewTab(source)}>
                {t('buttons.source')}
              </Button>
            )}
            {readMore && (
              <Button size="small" onClick={() => setModalName(modalName)}>
                {t('buttons.readMore')}
              </Button>
            )}
            {liveLink && (
              <Button size="small" onClick={() => openInNewTab(liveLink)}>
                {t('buttons.liveView')}
              </Button>
            )}
          </CardActions>
        </Box>
      </FlexBox>
    </StyledCard>
  )
}

export default CardProject
