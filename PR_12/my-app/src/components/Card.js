import React from "react";

const Card = ({
  icon,
  imageUrl,
  title,
  description,
  features = [],
  price,
  variant = "default",
  children,
}) => {
  if (variant === "team") {
    return (
      <div className="team__card">
        {imageUrl && <img src={imageUrl} alt={title} />}
        {title && <h3 className="title title_lt text_black">{title}</h3>}
        {description && <p className="desc desc_sm text_red">{description}</p>}
      </div>
    );
  }

  if (variant === "left" || variant === "main" || variant === "right") {
    return (
      <div className={`service__card service__card_${variant}`}>
        {title && <h3 className="title title_lt text_black">{title}</h3>}
        {description && (
          <h2 className="title title_md text_black">{description}</h2>
        )}

        {features.length > 0 && (
          <ul className="service__list-items">
            {features.map((feature, index) => (
              <li key={index} className="service__item">
                {feature}
              </li>
            ))}
          </ul>
        )}

        {price && (
          <h3 className="title title_lt text_red service__price">{price}</h3>
        )}

        {children}
      </div>
    );
  }

  return (
    <div className="care__card">
      {icon && <img src={icon} alt={title} />}
      {title && <h4 className="title title_lt text_black">{title}</h4>}
      {description && <p className="desc desc_md text_gray">{description}</p>}
    </div>
  );
};

export default Card;
