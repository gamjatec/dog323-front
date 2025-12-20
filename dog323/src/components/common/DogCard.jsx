import { Icon } from "@iconify/react";
import { useState } from "react";

const DogCard = ({
  image,
  badgeType,
  badgeLabel,
  title,
  subtitle,
  description,
  showFavorite = false,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className="dog-card">
      <div className="img-wrap">
        <img src={image} alt={title} />

        <p className={`badge ${badgeType}`}>{badgeLabel}</p>

        {showFavorite && (
          <button
            type="button"
            className="favorite-btn"
            onClick={() => setActive((prev) => !prev)}
          >
            <Icon
              icon={active ? "ph:heart-fill" : "ph:heart"}
              className={active ? "click" : "default"}
            />
          </button>
        )}
      </div>

      <div className="contents-wrap">
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DogCard;
