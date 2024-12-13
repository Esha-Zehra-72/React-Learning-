import React, { useState } from 'react';

const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setDropDown(true)}
      onMouseLeave={() => setDropDown(false)}
    >
      <button style={{ padding: '10px' }}>Dropdown</button>

      {dropDown && (
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          position: 'absolute',
          top: '100%',
          left: 0,
          backgroundColor: '#fff',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          width: '100px'
        }}>
          <li style={{ padding: '10px' }}>First</li>
          <li style={{ padding: '10px' }}>Second</li>
          <li style={{ padding: '10px' }}>Third</li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
