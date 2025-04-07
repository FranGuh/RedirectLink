import React from 'react';
import './LinkButtom.css';

const LinkButtom = ({text, Icon, href}) => {
  return (
    <>
      <div className='LinkButtom'>
        <a href={href}>
        <img src="/" alt="" />
        <Icon className='LinkButtom__icon' />
        {text}
        </a>
      </div>
    </>
  )
}

export default LinkButtom
