import { Box } from '@mui/material'
import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { SearchExercise } from '../components/SearchExercise'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercises />
    </Box>
  )
}

export default Home