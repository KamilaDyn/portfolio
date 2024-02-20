import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Divider, Typography, useTheme } from '@mui/material'
import CardProject from './CardProject'
import { CustomModal } from 'components'
import { SectionHeader } from 'components/common'

import { useSwitchModal } from './useSwitchModal'

import useContainerContent from './useContainerContent'

const MyProjects = () => {
  const { selectingModal } = useSwitchModal()
  const { t } = useTranslation('projectsPage')

  const containerContent = useContainerContent()
  return (
    <>
      <SectionHeader text={t('page.header')} />
      <Box mt={2}>
        <Typography paragraph>{t('page.text1')}</Typography>
        <Typography>{t('page.text2')}</Typography>
        <Typography>{t('page.text3')}</Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection="column"
        gap={5}
        alignItems="center"
        mt={10}
      >
        {containerContent.map(
          (
            {
              image,
              modalName,
              listSkillArray,
              title,
              shortDescription,
              liveLink,
              readMore,
              source,
            },
            index
          ) => (
            <Fragment key={`${title}-${index}`}>
              {' '}
              <CardProject
                img={image}
                modalName={modalName}
                listSkillArray={listSkillArray}
                title={title}
                shortDescription={shortDescription}
                liveLink={liveLink}
                readMore={readMore}
                source={source}
              />
              <Divider sx={{ width: '90%' }} />
            </Fragment>
          )
        )}
      </Box>
      <CustomModal
        content={selectingModal()?.content}
        title={selectingModal()?.title}
      />
    </>
  )
}

export default MyProjects
