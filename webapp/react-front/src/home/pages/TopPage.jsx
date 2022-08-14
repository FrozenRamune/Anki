import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom"

export default () => {
  const navigation = useNavigate()

  const handleMoveToCreateContents = () => {
    navigation('/create_contents')
  }

  const handleMoveToPrev = () => {
    navigation(-1)
  }

  return (
    <>
      <Button variant="outlined" onClick={handleMoveToCreateContents}>create contents</Button>
      <Button variant="outlined" onClick={handleMoveToPrev}>prev</Button>
    </>
  )

}