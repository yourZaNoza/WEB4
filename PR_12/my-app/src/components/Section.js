import React from "react";

const Section = ({ children, title, subtitle, className = "", id }) => {
  return (
    <div className={className} id={id}>
      {children}
    </div>
  );
};

export default Section;
