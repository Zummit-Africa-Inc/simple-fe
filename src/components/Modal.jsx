import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    modal: {
        width: '35vw',
        height: '30vh',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'var(--light)',
        borderRadius: '5px',
        borderBottom: '3px solid var(--error)',
        padding: '0 1rem',
        textAlign: 'center'
    },
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
    }
})

const Modal = ({ message, onClear }) => {
    const classes = useStyles()

  return (
    <div className={classes.backdrop}>
        <div className={classes.modal}>
            <Typography variant='h6' color='error' marginTop={5}>
                {message}
            </Typography>

            <Stack direction='row' alignItems='center' spacing={2}>
                <Button variant='contained' onClick={() => location.reload()}>
                    Reload
                </Button>
                <Button variant='outlined' onClick={onClear}>
                Close
                </Button>
            </Stack>
        </div>
    </div>
  )
}

export default Modal