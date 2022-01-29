import React from 'react';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

export default function ToggleSwitch({ lightMode, setLightMode}) {
  const handleChange = () => {
    setLightMode(!lightMode);
  };


  return <div className='toggleWrapper'>
            <input type="checkbox" id="switch" className='toggleInput' checked={lightMode} onChange={handleChange}/>
            
            <label for="switch" className='toggleLabel'><div className='iconWrapper'><FaSun className='sunIcon'/> <FaMoon className='moonIcon'/></div></label>
        </div>
  
  
}
