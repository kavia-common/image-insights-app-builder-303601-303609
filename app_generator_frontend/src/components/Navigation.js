import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Search, User, Plus } from 'lucide-react';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Don't show nav on home page (splash screen)
  if (location.pathname === '/') return null;

  return (
    <div className="bottom-nav">
      <div 
        className={`nav-item ${isActive('/gallery') ? 'active' : ''}`}
        onClick={() => navigate('/gallery')}
      >
        <Home size={24} />
      </div>
      
      <div 
        className={`nav-item ${isActive('/search') ? 'active' : ''}`}
        onClick={() => {}}
      >
        <Search size={24} />
      </div>

      <div 
        className="nav-fab"
        onClick={() => navigate('/gallery')}
      >
        <Plus size={28} strokeWidth={3} />
      </div>

      <div 
        className={`nav-item ${isActive('/checkout') ? 'active' : ''}`}
        onClick={() => navigate('/checkout')}
      >
        <ShoppingBag size={24} />
      </div>

      <div 
        className={`nav-item ${isActive('/profile') ? 'active' : ''}`}
        onClick={() => {}}
      >
        <User size={24} />
      </div>
    </div>
  );
};

export default Navigation;
