import React from "react";
import Tips from "../../../components/Tips";

const FTip = () => {
  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // Create a grid with 4 columns
    gap: '10px', // Adjust gap between grid items as needed
    padding: '10px'
  };

  return (
    <div style={gridContainerStyle}>
      <Tips />
      <Tips />
      <Tips />
      <Tips />
    </div>
  );
};

export default FTip;
