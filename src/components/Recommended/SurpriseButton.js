import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';

const SurpriseButton = ({ disabled }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/recetas'); 
    window.scrollTo(0, 0); 
  };

  return (
    <Button onClick={handleClick} disabled={disabled}>
      Sorpréndeme
    </Button>
  );
};

export default SurpriseButton;
