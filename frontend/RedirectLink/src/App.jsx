import { useState } from 'react'

import './App.css'
import NavLink from './components/NavLink/NavLink'
import ImgContainer from './components/ImgContainer/ImgContainer'
import { Analytics } from "@vercel/analytics/react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Analytics />
    <section className='background__content'>
      <ImgContainer src="/images/user/fondo2.jpg" />
    </section>

    <main className='main__content'>
      <NavLink />
    </main>
    </>
  )
}

export default App
