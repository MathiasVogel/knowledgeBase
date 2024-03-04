import React from 'react';

const HighlightBox = ({ children }) => (
  <div style={{ backgroundColor: '#FFF9C4', padding: '3px', margin: '0 auto 20px auto', border: '2px solid #ccc', borderRadius: '5px', textAlign: 'center', width:'95%' }}>
    {children}
  </div>
);

export default HighlightBox;