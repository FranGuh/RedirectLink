import './App.css'
import NavLink from './components/NavLink/NavLink'
import ImgContainer from './components/ImgContainer/ImgContainer'
import { Analytics } from "@vercel/analytics/react"


function App() {
  return (
    <div className="app-root">
    <Analytics />
    <section className='background__content'>
      <ImgContainer src="/images/user/fondo2.jpg" alt="Fondo decorativo de perfil de Gustavo Francisco" />
    </section>

    <main className='main__content'>
      <NavLink />
    </main>
    </div>
  )
}

export default App
