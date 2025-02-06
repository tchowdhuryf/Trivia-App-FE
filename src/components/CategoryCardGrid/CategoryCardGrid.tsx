// React imports
import React from "react";
import { useNavigate } from "react-router-dom";

// Component imports
import CategoryCard from "../CategoryCard/CategoryCard";

// Service imports
import categoryImageMap from "../../utils/categoryImageMap";

// Styles import
import "./CategoryCardGrid.css";

/**
 * `CategoryCardGrid` component that displays a 3x3 grid of `CategoryCard` components.
 *
 * @returns {JSX.Element} The rendered `CategoryCardGrid` component.
 */
const CategoryCardGrid: React.FC = () => {
  const navigate = useNavigate();

  /**
   * Handles navigation to the trivia page with the selected category.
   *
   * @param {string} categoryTitle - The title of the selected category.
   */
  const handleNavigate = (categoryTitle: string): void => {
    navigate(`/trivia?=${categoryTitle.toLowerCase()}`, {
      state: { category: categoryTitle.toLowerCase() },
    });
  };

  return (
    <div className="category-card-grid">
      {categoryImageMap.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          img={category.path}
          onClick={() => handleNavigate(category.title)}
        />
      ))}
    </div>
  );
};

export default CategoryCardGrid;
