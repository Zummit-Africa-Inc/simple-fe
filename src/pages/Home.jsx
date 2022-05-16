import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Stack, ThemeProvider, Typography } from '@mui/material'

import { Textbox, ItemContainer, Modal, LoadingSpinner } from '../components'
import { theme } from '../theme'
import { useFetch } from '../hooks/fetch-hook'

// const apiUrl = import.meta.env.VITE_API_ENDPOINT

const Home = () => {
  const [data, setData] = useState([])
  const { apis } = useSelector(store => store.apis)

  // const { loading, error, clearError, sendRequest } = useFetch()

  // const handleApiFetch = async () => {
  //   try {
  //     const data = await sendRequest(apiUrl)
  //     setData(data)
  //   } catch (err) {}
  // }

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Stack>
          <Typography variant='h4'>
            Welcome to the API hub,
          </Typography>
          <Typography variant='subtitle1'>
            Here you will find our collection of APIs for developers.
          </Typography>
        </Stack>
        {/* <Stack direction='row' alignItems='center' spacing={2}>
          <Button variant='contained'>
            Enter API hub
          </Button>
          <Button variant='contained' onClick={() => setData([])}>
            Refresh
          </Button>
        </Stack> */}

        <ItemContainer>
          {/* {loading && <LoadingSpinner />}
          {error && <Modal message={error.message} onClear={clearError} />} */}
          {/* {data && data.map(item => 
            <Textbox key={item.id} data={item} />
          )} */}
          {apis.map(api => (
            <Textbox key={api.id} {...api} />
          ))}
        </ItemContainer>
      </main>
    </ThemeProvider>
  )
}

export default Home