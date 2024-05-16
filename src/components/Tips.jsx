import React from "react";

const Tips = () => {
  const containerStyle = {
    width: '244px',
    height: '332px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '8px 8px 6px 2px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px', // Add padding to create space inside the container
    boxSizing: 'border-box' // Ensure padding is included in the element's total width and height
  };

  const topSectionStyle = {
    height: '30%',
    marginBottom: '10px', // Add margin to create space between sections
    borderBottom: '1px solid rgba(0, 0, 0, 1)', // Inner border color for the top section
    fontSize: '20px', // Change text size
    color: '#204E51',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center', // Center align text vertically
    justifyContent: 'center', // Center align text horizontally
    //paddingTop: '10px',
    paddingBottom: '5px',
    paddingLeft: '10px',
  };

  const bottomSectionStyle = {
    height: '70%',
    fontWeight:250,
    marginBottom: '10px',
    fontSize: '16px',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '0px',
    paddingLeft: '10px',
  };

  return (
    <div>
      <div style={containerStyle}>
        <div style={topSectionStyle}>
          Cách trồng cây theo đúng mùa vụ
        </div>
        <div style={bottomSectionStyle}>
        If it's true, components will have colors and style so you won't need to design anything. If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton. ...
        </div>
      </div>
    </div>
  );
};

export default Tips;
