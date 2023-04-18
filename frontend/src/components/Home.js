import React from 'react'
import { useNavigate } from 'react-router-dom'
import chkAuthHelper from './Helpers/chkAuthHelper'
function Home() {
  const navigate = useNavigate()
  return (
    <div>
    <div className="jumbotron text-center bg-info m-1 p-3">
      <h1>Welcome to Todo App!</h1>
      <p>Keep track of your tasks and stay organized with our easy-to-use Todo app.</p>
      <p>Sign up now and start being productive today.</p>
      <button onClick={()=>{chkAuthHelper() ? navigate('userpage') : navigate('login') }} className="btn btn-danger">Be productive</button>
    </div>

    <div className="container p-2">
      <div className="row d-flex justify-content-around">
        <div className="col-md-4 border border-4 rounded bg-warning">
          <h2>Easy to use</h2>
          <p>Our Todo app is designed to be simple and intuitive, so you can start using it right away.</p>
        </div>
        <div className="col-md-4 border border-4 rounded bg-warning">
          <h2>Stay organized</h2>
          <p>With our app, you can keep track of all your tasks in one place, so you never forget anything important.</p>
        </div>
        <div className="col-md-4 border border-4 rounded bg-warning">
          <h2>Get things done</h2>
          <p>By using our app to manage your tasks, you'll be able to stay focused and get more done.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home