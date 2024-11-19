import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const Search = () => {
  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input placeholder='Search' />
      <Button type='submit' className='bg-[#01473c] text-[#fff]'>
        Search
      </Button>
    </div>
  )
}

export default Search
