import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <div className="editor-page">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
        <button className="btn-icon" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <h3>Checkout</h3>
      </div>

      <div style={{ background: '#f9fafb', padding: '24px', borderRadius: '20px', marginBottom: '24px' }}>
        <h4 style={{ marginBottom: '16px' }}>Order Summary</h4>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span>Subtotal</span>
          <span>$49.00</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span>Tax</span>
          <span>$4.90</span>
        </div>
        <div style={{ borderTop: '1px solid #e5e7eb', margin: '12px 0' }}></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '18px' }}>
          <span>Total</span>
          <span>$53.90</span>
        </div>
      </div>

      <h4 style={{ marginBottom: '16px' }}>Payment Method</h4>
      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
        <div style={{ 
          padding: '16px', 
          border: '2px solid #3b82f6', 
          borderRadius: '16px', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          width: '100px',
          background: '#eff6ff'
        }}>
          <CreditCard size={24} color="#3b82f6" />
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#3b82f6' }}>Card</span>
        </div>
        <div style={{ 
          padding: '16px', 
          border: '1px solid #e5e7eb', 
          borderRadius: '16px', 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          width: '100px'
        }}>
          <div style={{ width: '24px', height: '24px', background: '#e5e7eb', borderRadius: '4px' }}></div>
          <span style={{ fontSize: '12px', color: '#6b7280' }}>PayPal</span>
        </div>
      </div>

      <button className="btn btn-primary" style={{ width: '100%', padding: '20px' }}>
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
