import React from 'react'
import './ImgContainer.css'

const ImgContainer = ({src, alt}) => {
  return (
    <>
      <img className='ImgContainer' src={src} alt={alt || "Imagen de fondo decorativa"} loading="eager" />
    </>
  )
}

export default ImgContainer
