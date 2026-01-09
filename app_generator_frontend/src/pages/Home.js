import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="splash-screen">
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="splash-logo">
          KAVIA<span style={{ color: '#06b6d4' }}>.</span>
        </div>
        <p style={{ opacity: 0.9, fontSize: '18px' }}>
          Build your dream app in minutes with AI-powered templates.
        </p>
        
        <img 
          src="https://via.placeholder.com/400x300/ffffff/3b82f6?text=App+Builder" 
          alt="Preview" 
          className="splash-image"
        />
      </div>

      <button className="btn splash-btn" onClick={() => navigate('/gallery')}>
        Get Started
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default Home;
