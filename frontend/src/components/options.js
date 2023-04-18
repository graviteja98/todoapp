import React from 'react'

import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { allList } from '../redux/todo/todoActions';
function Options() {
  const [value, setValue] = useState('date');
  const dispatch = useDispatch()
  const handleSortChange = (e) => {
  setValue(e.target.textContent);
  localStorage.setItem('sortby', e.target.textContent);
  dispatch(allList())
  };

  const options = [
    { label: 'By Date', value: 'By Date' },
    { label: 'By Last Added', value: 'By Last Added' },
  ];

  return (
    <ButtonGroup toggle style={{
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      margin:'20px',
      backgroundColor : 'white',
      borderRadius: '20px'
    }}>
      {options.map((option, idx) => (
        <ToggleButton
        key={idx}
        type="radio"
        variant="outline-danger"
        name="radio"
        value={option.value}
        defaultChecked = {value}
        checked={value === option.value}
        onClick={handleSortChange}
        >
          {option.label}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

export default Options