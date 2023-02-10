import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const headerStyles = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  };
  return (
    <div className="header-content" style={headerStyles}>
      <NavLink to="/">
        <span className="material-symbols-outlined">
          arrow_back_ios
        </span>
      </NavLink>
      <h2 className="app-title"> AU Countries</h2>
      <div style={headerStyles}>
        <span className="material-symbols-outlined">
          keyboard_voice
        </span>
        <span className="material-symbols-outlined">
          settings
        </span>
      </div>
    </div>
  );
}
