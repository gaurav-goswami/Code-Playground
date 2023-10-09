import React from 'react'
import Avatar from 'react-avatar'
import { IMember } from '../../Interface/Interface'

const Member : React.FC <IMember> = (props) => {

  const {username} = props;

  return (
    <>
      <div className='w-[45%] flex flex-col items-center h-[100px]'>
        <Avatar name={username} size='40' round='10px'/>
        <span className='text-white text-center'>{username}</span>
      </div>
    </>
  )
}

export default Member
