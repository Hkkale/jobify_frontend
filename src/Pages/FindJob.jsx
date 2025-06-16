import React from 'react'
import SearchBar from '../FindJobs/SearchBar'
import { Divider } from '@mantine/core'


const FindJob = () => {
  return (
    <div className='min-h-[100vh] bg-mine-shaft-950 font-[poppins] w-screen  border-white box-border overflow-x-hidden'>

      <Divider mx="md" size="xs" orientation="horizontal" />
    

    <SearchBar/>
   
    
    

    </div>
  )
}

export default FindJob
