import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 px-3 rounded-md m-2'>{name}</button>
    </div>
  )
}

export default Button