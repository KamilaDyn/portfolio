import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Typography } from '@mui/material'

interface IListProps {
  listArray: string[]
}

const ListSkillsBox: FC<IListProps> = ({ listArray }) => {
  const { t } = useTranslation('common')
  return (
    <>
      <Typography variant="h6">{t('techStack')}</Typography>
      <Box display="flex" flexWrap="wrap">
        {listArray.map((value, index) => (
          <Typography
            key={index}
            sx={{
              '&::after': { content: '"🟌"', paddingX: '2px' },
              '&:last-child': {
                '&:after': {
                  content: '" "',
                },
              },
            }}
          >
            {value}
          </Typography>
        ))}
      </Box>
    </>
  )
}

export default ListSkillsBox
