import React from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export default function ToggleSwitch({ lightMode, setLightMode }) {
  const handleChange = () => {
    setLightMode(!lightMode);
  };

  return (
    <div className="toggleWrapper">
      <input
        type="checkbox"
        id="switch"
        className="toggleInput"
        checked={lightMode}
        onChange={handleChange}
      />

      <label htmlFor="switch" className="toggleLabel">
        <div className="iconWrapper">
          <FaMoon className="moonIcon" />
          <FaSun className="sunIcon" /> 
          
        </div>
      </label>
    </div>
  );
}
