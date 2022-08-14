import React from 'react'
import { Paper } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useNavigate } from "react-router-dom"

export default () => {
  const navigation = useNavigate()

  const handleMoveToTopPage = () => {
    navigation('/')
  }

  const handleMoveToPrev = () => {
    navigation(-1)
  }

  return (
    <Grid container spacing={2} sx={{ height: '85%' }}>
      <Grid xs display="flex" justifyContent="center" alignItems="center">
        <Paper elevation={5} onClick={handleMoveToTopPage} sx={{ height: { xs: '300px', md: '600px' }, width: { xs: '150px', md: '400px' } }}>top page</Paper>
      </Grid>
      <Grid xs display="flex" justifyContent="center" alignItems="center">
        <Paper elevation={5} onClick={handleMoveToPrev} sx={{ height: { xs: '300px', md: '600px' }, width: { xs: '150px', md: '400px' } }}>prev</Paper>
      </Grid>
    </Grid>
  )

}