import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    itemContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
        margin: '2rem 0 0',
    }
})

const ItemContainer = ({ children }) => {
    const classes = useStyles()

  return (
    <div className={classes.itemContainer}>
        {children}
    </div>
  )
}

export default ItemContainer