import React from 'react'
import {
  Box, Typography, Paper, Button, Card,
  CardMedia, CardContent, CardActionArea, CardActions
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useNavigate } from "react-router-dom"

import QuizletLogo_Mobile from '../assets/images/quizlet_mobile.png'
import QuizletLogo_PC from '../assets/images/quizlet_pc.png'
import CreateNewIcon from '../assets/images/create_new.png'

export default () => {
  const navigation = useNavigate()

  const handleClickImport = () => {
    navigation('import')
  }

  return (
    <Grid container spacing={2} sx={{ height: '85%' }}>
      <Grid xs display="flex" justifyContent="center" alignItems="center">
        <Card
         elevation={5}
         sx={{ height: { xs: '300px', sm: '600px' }, width: { xs: '150px', sm: '400px' } }}
        >
          <CardActionArea onClick={handleClickImport} sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="40%"
              sx={{
                content: {
                  xs: `url(${QuizletLogo_Mobile})`,
                  sm: `url(${QuizletLogo_PC})`,
                }
              }}
              alt="logo of quizlet"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Import from Quizlet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                クイズレットから既存の単語帳をインポートします。
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ position: 'relative' }}
      >
        <Card
          elevation={5}
          sx={{
            height: { xs: '300px', sm: '600px' },
            width: { xs: '150px', sm: '400px' },
            filter: 'brightness(50%)'
          }}
        >
          <CardActionArea disabled sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="40%"
              sx={{
                content: `url(${CreateNewIcon})`,
                objectFit: 'contain'
              }}
              alt="logo of quizlet"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Create New Contents
              </Typography>
              <Typography variant="body2" color="text.secondary">
                新規に単語帳を作成します。
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            component="div"
            color="white"
            sx={{ fontSize: { xs: '20px', sm: '55px' } }}
          >
            準備中です
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )

}