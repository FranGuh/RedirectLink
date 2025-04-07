import React from 'react'
import './ImgContainer.css'

const ImgContainer = ({src}) => {
  return (
    <>
      <img className='ImgContainer' src={src} alt=""/>
    </>
  )
}

export default ImgContainer
