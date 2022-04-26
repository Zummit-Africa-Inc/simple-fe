import React from 'react'
import {  } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    backdrop: {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1
    },
})

const LoadingSpinner = () => {
    const classes = useStyles()

  return (
    <div className={classes.backdrop}>

    </div>
  )
}

export default LoadingSpinner