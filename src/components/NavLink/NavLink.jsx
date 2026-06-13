import React, { useState } from 'react'
import { BookIcon, Camera, FileUser, GithubIcon, Instagram, Linkedin, Twitter, Youtube, Store} from 'lucide-react';
import Profile from './Profile/Profile';
import './NavLink.css';
import Modal from './Modal/Modal'
import LinkButtom from './LinkButtom/LinkButtom'
import linksData from '../../data/links.json'

const iconMap = {
  BookIcon,
  Camera,
  FileUser,
  GithubIcon,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Store
};

const NavLink = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { profile, about, projects, links } = linksData;

  return (
    <>
      <Profile
        src={profile.photo}
        alt={profile.photoAlt}
        user={profile.username}
        description={profile.description}
        frases={profile.highlights}
      />
      <nav className='Nav__link'>

      <div>
          <LinkButtom
            Icon={iconMap.BookIcon}
            text={links[0].name}
            href={links[0].href}
            onClick={() => setIsModalOpen(true)}
          />

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 id="modal-title">{about.title}</h2>
            
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
              
            <div className="LinkDivContainer">

              <h2>Proyectos</h2>
              {projects.map((project) => (
                <div className="LinkDivContainer__img" key={project.name}>
                  <img src={project.image} alt={project.imageAlt} loading="lazy" />
                  <div className='LinkDivHeader'>
                  <LinkButtom
                    Icon={iconMap[project.icon]}
                    text={project.name}
                    href={project.href}
                  />
                  </div>
                </div>
              ))}
            </div>
          </Modal>
        </div>

        {links.slice(1).map((link) => (
          <LinkButtom
            key={link.name}
            Icon={iconMap[link.icon]}
            text={link.name}
            href={link.href}
          />
        ))}

      </nav>

    </>
  )
}

export default NavLink
