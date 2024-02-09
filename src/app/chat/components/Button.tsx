import React from 'react';// Import CSS file for styling

interface ButtonProps {
  id: string;
  label: string;
  onClick: (id: string) => void;
  isActive: boolean;
}

const Button: React.FC<ButtonProps> = ({ id, label, onClick, isActive }) => {
  return (
    <button className={isActive ? 'active' : ''} onClick={() => onClick(id)}>
      {label}
    </button>
  );
};

export default Button;


