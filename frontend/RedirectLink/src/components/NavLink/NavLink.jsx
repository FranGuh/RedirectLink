import React, { useState } from 'react'
import LinkButtom from './LinkButtom/LinkButtom'
import { BookIcon, Camera, FileUser, GithubIcon, Instagram, Linkedin, Twitter, Youtube, Store} from 'lucide-react';
import Profile from './Profile/Profile';
import './NavLink.css';
import Modal from './Modal/Modal'


const NavLink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Profile
        src="/images/user/Profilepic.png"
        alt="Foto de perfil de @FranGuh"
        user="@FranGuh"
        description="Soy Gustavo Francisco, Programador Web en React."
        frases={[
          'Programador Web',
          'React'
        ]}
      />
      <nav className='Nav__link'>

      <div>
          {/* Botón que abre el modal en lugar de redirigir */}
          <LinkButtom
            Icon={BookIcon}
            text="Sobre Mí"
            href="#" // Puede ser "#" o cualquier valor (se anula con onClick)
            onClick={() => setIsModalOpen(true)}
          />

          {/* Modal */}
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2>Soy Gustavo Salgado</h2>
            
            <p>Estudiante avanzado de Ingeniería en Sistemas Computacionales
              con experiencia en <b>desarrollo web fullstack, bases de datos y despliegue en la nube.</b></p>

            <p>Me especializo en <b>construir soluciones reales</b> que integran frontend en React, APIs RESTful,
            almacenamiento en la nube (AWS, Firebase) y bases de datos escalables como MongoDB Atlas y DynamoDB.</p>
              
            <p>He creado herramientas personales como un <b>clon de Linktree</b> y una app web llamada <b>Memories</b>, con integración de login por Google, manejo de sesiones seguras con JWT,
              consumo de Google Photos API y personalización por usuario. También desarrollé un chatbot usando Grok, y una app de inventario para mi negocio familiar, usando
              tecnologías serverless en AWS.</p>

            <p>
              Me apasiona aprender con el apoyo de la inteligencia artificial, pero siempre aplico y adapto el conocimiento con lógica propia.
              <b>Busco oportunidades como desarrollador junior o freelance</b>, donde pueda aportar soluciones funcionales, escalar productos 
              reales y seguir aprendiendo en equipo.
            </p>
            
            
            <div className="LinkDivContainer">

              <h2>Proyectos</h2>
              <div className="LinkDivContainer__img">
                <img src="/images/ContainerGrid/Memories/Landing.png" alt="" />
                <div className='LinkDivHeader'>
                <LinkButtom
                  Icon={Camera}
                  text="Memories"
                  href="https://memories-app-red.vercel.app/"
                />
                </div>
              </div>
              


              <div className="LinkDivContainer__img">
                <img src="/images/ContainerGrid/Cacao/Products.png" alt="" />
                <div className='LinkDivHeader'>
                <LinkButtom
                  Icon={Store}
                  text="Cacao"
                  href="http://cacaococoa-dev.s3-website-us-east-1.amazonaws.com/"
                />
                </div>
              </div>


              <div className="LinkDivContainer__img">
                <img src="/images/ContainerGrid/ComputerSelectorHelper/Landing.png" alt="" />
                <div className='LinkDivHeader'>
                <LinkButtom
                  Icon={Store}
                  text="C.S.Help"
                  href="https://computer-selector-helper.vercel.app/"
                />
                </div>
              </div>

              <div className="LinkDivContainer__img">
                <img src="/images/ContainerGrid/RedirectLink/Landing.png" alt="" />
                <div className='LinkDivHeader'>
                <LinkButtom
                  Icon={Store}
                  text="RedirectLink"
                  href=""
                />
                </div>
              </div>

              
             
            </div>
          </Modal>
        </div>

        <LinkButtom
                  Icon={Store}
                  text="C.S.Help"
                  href="https://computer-selector-helper.vercel.app/"
                />
        <LinkButtom
          Icon={Camera}
          text="Memories"
          href="https://memories-app-red.vercel.app/"
        />
        <LinkButtom
          Icon={Linkedin}
          text="LinkedIn"
          href="https://www.linkedin.com/in/gustavo-francisco-salgado-andrade-496553337/"
        />
        <LinkButtom
          Icon={GithubIcon}
          text="Github"
          href="https://github.com/FranGuh"
        />
        <LinkButtom
          Icon={FileUser}
          text="Portfolio"
          href="https://portfolio-fran-six.vercel.app/"
        />
        <LinkButtom
          Icon={Instagram}
          text="Instagram"
          href="https://www.instagram.com/saland_gus"
        />

        

      </nav>

    </>
  )
}

export default NavLink
