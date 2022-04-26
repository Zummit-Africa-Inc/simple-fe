import React, { useState } from 'react'
import { IconButton, Stack, TextField, Toolbar, Typography } from '@mui/material'
import { AccountCircleOutlined } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    nav: {
        width: '100%',
        borderBottom: '2px solid var(--mid)'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '1rem 0'
    }
})

const Navbar = () => {
    const classes = useStyles()
    const [value, setValue] = useState('')

  return (
    <nav className={classes.nav}>
       <Toolbar className={classes.toolbar}>
            <Stack direction='row' alignItems='center' width='30%'>
                <img src='/LOGO.svg' width='20%' />
                <Typography variant='h5' marginLeft={2}>
               Z-API
                </Typography>
            </Stack>

           <TextField value={value} onChange={(e) => setValue(e.target.value)} size='small' placeholder='Search...' disabled />
           
           <IconButton>
               <AccountCircleOutlined />
           </IconButton>
       </Toolbar>
    </nav>
  )
}

export default Navbar