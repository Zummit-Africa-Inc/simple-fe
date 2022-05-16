import React, { useState } from 'react'
import { Button, Stack, ThemeProvider, Typography } from '@mui/material'

import { Textbox, ItemContainer, Modal, Navbar, LoadingSpinner } from './components'
import { theme } from './theme'
import { useFetch } from './hooks/fetch-hook'

const apiUrl = import.meta.env.VITE_API_ENDPOINT

const App = () => {
  const [data, setData] = useState([])

  const { loading, error, clearError, sendRequest } = useFetch()

  const handleApiFetch = async () => {
    try {
      const data = await sendRequest(apiUrl)
      setData(data)
    } catch (err) {}
  }

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
        <Stack direction='row' alignItems='center' spacing={2}>
          <Button variant='contained' onClick={handleApiFetch}>
            Enter API hub
          </Button>
          <Button variant='contained' onClick={() => setData([])}>
            Refresh
          </Button>
        </Stack>

        <ItemContainer>
          {loading && <LoadingSpinner />}
          {error && <Modal message={error.message} onClear={clearError} />}
          {data && data.map(item => 
            <Textbox key={item.id} data={item} />
          )}
        </ItemContainer>
      </main>
    </ThemeProvider>
  )
}

export default App