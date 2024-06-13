import React from 'react'
import { USER_LOGO } from '../Utils/constants'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center'>
    <img alt='user' className='lg:h-8 sm:h-4 ml-2' src={USER_LOGO} />
    <span className='font-bold px-2 py-2'>{name}</span>
    <span>{message}</span>
    </div>
  )
}

export default ChatMessage