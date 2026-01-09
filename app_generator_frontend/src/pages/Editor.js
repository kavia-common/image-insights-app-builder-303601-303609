import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Minus, Plus } from 'lucide-react';
import { TEMPLATES } from '../data/mockData';

const Editor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const template = TEMPLATES.find(t => t.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!template) return <div>Template not found</div>;

  return (
    <div className="editor-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <button className="btn-icon" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <h3>Details</h3>
        <button className="btn-icon" style={{ color: '#ef4444' }}>
          <Heart size={20} fill="#ef4444" />
        </button>
      </div>

      <div className="editor-preview">
        <img src={template.image} alt={template.title} className="preview-image" />
      </div>

      <div className="editor-controls">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>{template.title}</h2>
            <div style={{ display: 'flex', gap: '16px', color: '#9ca3af', fontSize: '14px' }}>
              <span>⭐ {template.rating}</span>
              <span>🔥 100+ downloads</span>
            </div>
          </div>
        </div>

        <p style={{ marginTop: '20px', color: '#6b7280', lineHeight: '1.6' }}>
          {template.description} This template includes fully responsive layouts, dark mode support, and integrated analytics. Perfect for your next project.
        </p>

        <div className="quantity-control">
          <button 
            className="qty-btn" 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus size={16} />
          </button>
          <span className="qty-value">{quantity}</span>
          <button 
            className="qty-btn"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus size={16} />
          </button>
        </div>

        <div className="action-bar">
          <div className="price-display">
            <div className="price-label">Total Price</div>
            <div className="price-total">${template.price * quantity}</div>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ flex: 2, borderRadius: '20px' }}
            onClick={() => navigate('/checkout')}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
