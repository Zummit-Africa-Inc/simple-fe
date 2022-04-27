import React from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import { AccessTimeOutlined, BookmarkBorderOutlined, DangerousOutlined, DoneOutlined, ShowChartOutlined, VerifiedOutlined } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  paperOuter: {
    width: '300px',
  },
  paperInner: {
    padding: '0.5rem 1rem'
  }
})

const TextWrapper = styled('div')(({ theme }) => ({
  width: '30px',
  display: 'grid',
  placeItems: 'center',
  backgroundColor: 'var(--base)',
  fontFamily: 'var(--leck)',
  color: 'var(--light)',
  fontSize: '1.25rem',
  padding: '0.25rem',
  borderRadius: '5px'
}))

const Textbox = ({ data }) => {
  const classes = useStyles()

  return (
    <div className={classes.paperOuter}>
      <Paper elevation={3}>
        <div className={classes.paperInner}>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
          <TextWrapper>
            T
          </TextWrapper>
          <BookmarkBorderOutlined />
          </Stack>
          <Typography variant='h6' color='textPrimary' marginY={2}>
            {data.title}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary' gutterBottom>
            {data.description}
          </Typography>
          <Stack direction='row' alignItems='center' marginY={2}>
            <Typography variant='subtitle2' color='textSecondary' marginRight={3}>
              Status:
            </Typography>
            {data.status === 'live' ?
            <>
            <Typography variant='subtitle2' color='textAlternate' marginX={2}>
              Verified
            </Typography>
            <VerifiedOutlined htmlColor='#0CBD1E' />
            </> :
            <>
            <Typography variant='subtitle2' color='textAlternate' marginX={2}>
              Not Verified
            </Typography>
            <DangerousOutlined htmlColor='#F02525' />
            </>}
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <ShowChartOutlined />
              <Typography variant='subtitle1' color='textPrimary'>9.9</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <AccessTimeOutlined />
              <Typography variant='subtitle1' color='textPrimary'>300ms</Typography>
            </Stack>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <DoneOutlined />
              <Typography variant='subtitle1' color='textPrimary'>100%</Typography>
            </Stack>
          </Stack>
        </div>
      </Paper>
    </div>
  )
}

export default Textbox