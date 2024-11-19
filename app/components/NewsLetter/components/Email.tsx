import React from 'react'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'

const Email = () => {
  return (
    <div className='mt-5 flex w-full max-w-sm items-center space-x-2'>
      <Input type='email' placeholder='Email' />
      <Button type='submit' className='bg-[#01473c] text-[#fff]'>
        Subscribe
      </Button>
    </div>
  )
}

export default Email
