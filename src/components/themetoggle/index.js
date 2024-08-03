// src/components/Themetoggle.js
import React from 'react';
import { WiMoonAltWaningCrescent4 } from 'react-icons/wi';
import { useTheme } from '../../context/ThemeContext';

const Themetoggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="nav_ac" onClick={toggleTheme}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
