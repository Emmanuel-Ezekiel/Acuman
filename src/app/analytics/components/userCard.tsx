import React from 'react'
import { cardTypes } from '@/constants/types'
const UserCard = ({name, number}: cardTypes) => {
  return (
    <div className='card'>
        <p>{name}</p>
        <h2>{number}</h2>
    </div>
  )
}

export default UserCard