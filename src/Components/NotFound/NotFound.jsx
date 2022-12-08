import React from 'react';
import './NotFound.css';
import notFoundImg from '../../Icons/notFound.png'

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className="image-box">
        <img src={notFoundImg} alt="" />
      </div>
      <h4>Oops Page not Found</h4>
    </div>
  )
}

export default NotFound;