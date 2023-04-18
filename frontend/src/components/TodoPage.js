import React from 'react';

import { useNavigate } from 'react-router-dom'

import chkAuthHelper from './Helpers/chkAuthHelper';
const TodoPage= () => {

const navigate = useNavigate()
  return (
     <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Task 1</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="card-text">Due date: 2023-04-19</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-secondary text-white">
            <div className="card-body">
              <h5 className="card-title">Task 2</h5>
              <p className="card-text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p className="card-text">Due date: 2023-04-22</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Task 3</h5>
              <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="card-text">Due date: 2023-04-25</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h5 className="card-title">Task 4</h5>
              <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p className="card-text">Due date: 2023-04-28</p>
            </div>
          </div>
        </div>
      </div>
    </div> );
}

export default TodoPage;
