import React from 'react';

const CustomNode = ({ data }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid black' }}>
      <strong>{data.label}</strong>
    </div>
  );
};

export default CustomNode;
