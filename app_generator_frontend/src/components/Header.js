import React from 'react';
import { Bell, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="user-profile">
        <div className="btn-icon">
          <Menu size={20} />
        </div>
        <div>
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>Location</div>
          <div style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
            New York, USA
          </div>
        </div>
      </div>
      
      <div className="avatar">
        <img src="https://via.placeholder.com/40" alt="User" />
      </div>
    </header>
  );
};

export default Header;
