import React from "react";


function Main({image,title,about}) {
  return (
    <div className="banner1">
      <img src={image} alt="banner1" />
      <div className="banner1Title">
        <p>{title}</p>
        <h1>New</h1>
      </div>
      <p className="about">
       {about}
      </p>
    </div>
  );
}

export default Main;
