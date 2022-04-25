import React, { useState } from 'react'
import { Button, Stack, ThemeProvider, Typography } from '@mui/material'

import { Navbar, Textbox } from './components'
import { theme } from './theme'

const App = () => {
  const [isShown, setIsShown] = useState(false)

  const toggle = () => setIsShown(!isShown)

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <main>
        <Stack>
          <Typography variant='h4'>
            Welcome to the API hub,
          </Typography>
          <Typography variant='subtitle1'>
            Here you will find our collection of APIs for developers.
          </Typography>
        </Stack>
        <Button variant='contained' onClick={toggle}>
          Enter API hub
        </Button>

        {isShown &&
        <Stack direction={{ xs: 'column', md: 'row'}} spacing={3}>
          <Textbox />
          <Textbox />
          <Textbox />
        </Stack>}
      </main>
    </ThemeProvider>
  )
}

export default App