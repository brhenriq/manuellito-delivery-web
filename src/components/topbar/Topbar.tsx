import React from 'react';

import { FiLogOut } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import "./topbar.css";

const Topbar: React.FC = () => {

  const { signOut } = useAuth();

  function handleLogOut() {
    signOut();
  }
  
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft">
        
        <span className="logo">Manuellito</span>
      </div>
      <div className="topLeft">
        
        <FiLogOut onClick={ handleLogOut } className="logout" color="#D93662"/>
      </div>
    </div>
  </div>
  );
  
}
 
export default Topbar;
