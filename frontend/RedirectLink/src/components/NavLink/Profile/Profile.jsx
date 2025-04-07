// Profile.jsx
import React from 'react';
import './Profile.css';
import highlightText from './highlightText';  // Importamos la función

const Profile = ({ src, alt, user, description, frases }) => {
  if (!description) return null;

  return (
    <div className="Profile">
      <img src={src} alt={alt} />
      <h2>{user}</h2>
      {/* Usamos la función highlightText para resaltar las frases dentro de la descripción */}
      <p>{highlightText(description, [], frases)}</p>
    </div>
  );
};

export default Profile;
