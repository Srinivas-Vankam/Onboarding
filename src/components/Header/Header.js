import React from 'react';
import logo from '../../assets/icons/logo.png';
import './header.scss';
export const Header=() => {
  return (
    <div className='header'>
          <img src={logo} alt='Eden_Logo' />
          <span>Eden</span>
    </div>
  )
}