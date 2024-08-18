import React from 'react'

import { VideoPlayer } from '../../components'

export const Video: React.FC = () => {
  return (
    <div className='px-2 py-4'>
      <h1 className='mb-5 border-b-2 border-green-700 text-6xl font-bold'>Video</h1>
      <VideoPlayer />
    </div>
  )
}
