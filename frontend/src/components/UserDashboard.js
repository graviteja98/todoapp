import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function UserDashboard() {
  return (<>
    <div className='d-flex justify-content-around bg-info p-1 border-2 border-dark rounded'>
        <Link to="todopage" className='p-3 bg-danger text-decoration-none text-white rounded-pill '>Todo List</Link>
        <Link to="Profile" className='p-3 bg-danger text-decoration-none text-white rounded-pill'>Profile</Link>
    </div>
    <div className='container bg-dark p-4'>
     <Outlet/>
    </div>
    </>
  )
}

export default UserDashboard