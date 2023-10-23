import React from 'react'
import Recent from './Recent'
import Player from './Player'
import Content from './Content'

const Main = () => {
  return (
    <div className='h-screen overflow-y-hidden'>
      <Recent/>
      <Content/>
      <Player/>
    </div>
  )
}

export default Main
