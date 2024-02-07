import React from 'react';

const HighlightBox = ({ children }) => (
  <div style={{ backgroundColor: '#f0f0f0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
    {children}
  </div>
);

export default HighlightBox;