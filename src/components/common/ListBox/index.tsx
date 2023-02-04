import { FC } from 'react'
import { List, ListItem, Typography } from '@mui/material'

interface IListProps {
  title: string
  listArray: string[]
}
const ListBox: FC<IListProps> = ({ title, listArray }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <List>
        {listArray.map((value, index) => (
          <ListItem key={index}>
            {index + 1}. {value}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListBox
