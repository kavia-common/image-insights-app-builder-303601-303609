import React from 'react';
import { Star, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TemplateCard = ({ template }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="template-card"
      onClick={() => navigate(`/editor/${template.id}`)}
    >
      <div className="card-image-container">
        <img src={template.image} alt={template.title} className="card-image" />
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{template.title}</h3>
        <div className="card-meta" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Star size={12} fill="#F59E0B" stroke="none" />
          <span>{template.rating}</span>
          <span>•</span>
          <span>20min</span>
        </div>
        
        <div className="card-footer">
          <div className="price">
            <span style={{ color: '#3b82f6', fontSize: '12px' }}>$</span>
            {template.price}
          </div>
          <button className="add-btn">
            <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
