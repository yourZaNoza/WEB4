import React from "react";

const Button = ({
  children,
  variant = "red",
  href,
  onClick,
  type = "button",
}) => {
  const className = `button button_${variant}`;

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
