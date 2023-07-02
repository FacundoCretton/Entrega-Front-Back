import React, { useState } from "react";
import styled from "styled-components";

const ExpandSpan = styled.span`
  cursor: pointer;
  color: #8c8c8c; 
  font-style: italic;
  font-size: 0.9rem; 
`;

const DescriptionToggle = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const getDescriptionText = () => {
    if (expanded) {
      return description; // Mostrar toda la descripción si está expandida
    } else {
      return description.substring(0, 100) + "..."; // Mostrar solo los primeros 100 caracteres
    }
  };

  return (
    <div>
      <span>{getDescriptionText()}</span>
      {description.length > 30 && (
        <ExpandSpan onClick={handleToggleExpand}>
          {expanded ? "Leer menos" : "Leer más"}
        </ExpandSpan>
      )}
    </div>
  );
};

export default DescriptionToggle;
