import React from 'react';

const HighlightBox = ({ children }) => (
  <div style={{ backgroundColor: '#FFF9C4', padding: '3px', marginBottom: '10px', border: '2px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
    {children}
  </div>
);

export default HighlightBox;