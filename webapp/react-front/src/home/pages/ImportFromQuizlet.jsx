import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useForm, Controller, ErrorMessage } from 'react-hook-form'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default () => {
  const navigation = useNavigate()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    criteriaMode: 'all',
    defaultValues: { url: '' },
  })

  const onSubmit = (data) => {
    console.log(`submit: ${data.url}`)
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
    axios.post('/api/import', {
      url: data.url
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <>
      <Box
        sx={{
          width: { xs: '90%', sm: 'max(500px, 80%)' },
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateY(-50%) translateX(-50%)',
          textAlign: 'center'
        }}
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography
          component='p'
          sx={{ fontSize: '19px', width: '100%', marginBottom: { xs: '0', sm: '10px'} }}
        >
          インポートしたい単語帳のURLを
          <Box component="br" sx={{ display: { xs: 'inline', sm: 'none' } }} />
          入力してください。
        </Typography>
        <Box
          sx={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            border: '1px solid gray',
            borderRadius: '5px',
            padding: { xs: '5px', sm: '5px 15px' },
            transform: { xs: 'none', sm: 'scale(1.3)' },
            marginTop: { xs: '0', sm: '10px' },
            width: { xs: 'auto', sm: '80%'}
          }}
        >
          <Typography component='p' sx={{ fontSize: '15px' }}>https://quizlet.com/</Typography>
          <TextField
            type="text"
            label="URL"
            size="small"
            sx={{ width: '190px', flexGrow: { xs: '0', sm: '1' } }}
            {...register('url', {
              required: '入力してください',
              pattern: { value: /(?<=^((https:\/\/)?quizlet\.com\/)?)[a-zA-Z0-9\-_\/?=&]+$/, message: 'URLの形式が有効ではありません' }
            })}
            onChange={(event) => {
              if(/^(https:\/\/)?quizlet\.com\//.test(event.target.value)) {
                setValue('url', event.target.value.replace(/^(https:\/\/)?quizlet\.com\//, ''))
              }
            }}
            error={errors.url !== undefined}
            helperText={errors.url?.message}
          />
        </Box>
        <Button
          variant="contained"
          type="submit"
          sx={{ position: 'absolute', right: '0', bottom: '-50px' }}
        >
          送信
        </Button>
      </Box>
      <iframe name="form_invisible" style={{ display: 'none' }} />
    </>
  )

}