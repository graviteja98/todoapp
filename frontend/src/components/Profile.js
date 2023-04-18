import React from 'react'

function Profile() {

  return (
    <div className='text-white'>Welcome, {localStorage.getItem('user')}</div>
  )
}

export default Profile