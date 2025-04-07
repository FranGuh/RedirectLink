import React from 'react'
import LinkButtom from './LinkButtom/LinkButtom'
import { Camera, Twitter, Youtube } from 'lucide-react';
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
        Icon={Twitter}
        text="My X"
        href="https://twitter.com" 
        />
        <LinkButtom 
        Icon={Twitter}
        text="My X"
        href="https://twitter.com" 
        />
        <LinkButtom 
        Icon={Twitter}
        text="My X"
        href="https://twitter.com" 
        />
        <LinkButtom 
        Icon={Twitter}
        text="My X"
        href="https://twitter.com" 
        />
        <LinkButtom 
        Icon={Twitter}
        text="My X"
        href="https://twitter.com" 
        />
        <LinkButtom 
        Icon={Twitter}
        text="My X"
        href="https://twitter.com" 
        />
        <LinkButtom 
        Icon={Camera}
        text="Memories"
        href="https://memories-app-red.vercel.app/" 
        />
        
    </nav>
    
    </>
  )
}

export default NavLink
