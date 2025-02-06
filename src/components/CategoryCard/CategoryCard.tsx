// React imports
import React from "react";

// Styles import
import "./CategoryCard.css";

interface CategoryCardProps {
  title: string;
  img: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * `CategoryCard` component that renders a category card with an image, title, and a click handler.
 *
 * @param {CategoryCardProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `CategoryCard` component.
 */
const CategoryCard: React.FC<CategoryCardProps> = ({ title, img, onClick }) => {
  return (
    <div className="category-card" onClick={onClick}>
      <div className="category-card__image-container">
        <img src={img} alt={title} className="category-card__image" />
      </div>
      <div className="category-card__details">
        <h2 className="category-card__title">{title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
