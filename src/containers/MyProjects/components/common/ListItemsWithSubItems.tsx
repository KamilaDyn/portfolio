import { FC } from 'react'
import { List } from '@mui/material'
import ListItem from '@mui/material/ListItem/ListItem'

interface IProps {
  description: { item: string; subItems: string[] }[]
}
const ListItemsWithSubItems: FC<IProps> = ({ description }) => {
  return (
    <List>
      {description.map(({ item, subItems }, index) => (
        <ListItem
          key={index}
          sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
        >
          {index + 1}. {item}
          {!!subItems.length && (
            <List>
              {subItems.map((value, index) => (
                <ListItem
                  key={index}
                  sx={{ '&::before': { content: '"⭒"', paddingX: '2px' } }}
                >
                  {value}
                </ListItem>
              ))}
            </List>
          )}
        </ListItem>
      ))}
    </List>
  )
}

export default ListItemsWithSubItems
