import React from 'react'
import {  } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Oval } from 'react-loader-spinner'

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
        <Oval height={100} width={100} strokeWidth={5} strokeWidthSecondary={1} color='#081F4A' secondaryColor="white" />
    </div>
  )
}

export default LoadingSpinner