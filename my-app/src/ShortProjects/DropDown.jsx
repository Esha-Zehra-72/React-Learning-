import React, { useState } from 'react';

const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(null);

  const data = [
    { id: 1, name: 'First' },
    { id: 2, name: 'Second' },
    { id: 3, name: 'Third' }
  ]


  const handleClick = (item) => {
    setSelected(item)
    setDropDown(false);
    console.log("item ", item)
  }
  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setDropDown(true)}
      onMouseLeave={() => setDropDown(false)}
    >
      <button style={{ padding: '10px' }}>{selected ?? 'Dropdown'}</button>

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
          {
            data?.map((item) => (

              <li style={{ padding: '10px' }} key={item?.id} onClick={() => handleClick(item?.name)}>{item?.name}</li>
            ))
          }
        </ul>
      )}
    </div>
  );
};

export default DropDown;
