import React from 'react'
import LinkButtom from './LinkButtom/LinkButtom'
import { Camera, FileUser, GithubIcon, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Profile from './Profile/Profile';
import './NavLink.css';


const NavLink = () => {
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
        text="CV"
        href="https://i1.sndcdn.com/artworks-CHUebWaaq6jdZi6t-plgC5A-t500x500.jpg"
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
