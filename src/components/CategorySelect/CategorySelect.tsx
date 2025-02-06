// React imports
import { useEffect, useState } from "react";

// Service imports
import apiServices from "../../services/apiServices";

// Styles import
import "./CategorySelect.css";

interface CategorySelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

/**
 * `CategorySelect` component that renders a dropdown menu for selecting a category.
 * The list of categories is dynamically fetched from an API upon mounting.
 *
 * @returns {JSX.Element} The rendered `CategorySelect` component.
 */
const CategorySelect: React.FC<CategorySelectProps> = ({
  value,
  onChange,
  name,
}) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches categories from the API when the component mounts.
   *
   * @throws Will log an error and set an error message if the API request fails.
   */
  useEffect(() => {
    const fetchCategories = async (): Promise<void> => {
      try {
        const data = await apiServices.getAllCategories();
        setCategories(data);
      } catch (error) {
        setError("Failed to load categories.");
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="category-select-container">
      <label className="category-select-label">Category</label>
      <select
        className="category-select"
        name={name}
        value={value}
        onChange={onChange}
        required>
        <option className="category-select-option-select" value="">
          Select a category
        </option>
        {categories.map((category, index) => (
          <option
            className="category-select-option"
            key={index}
            value={category}>
            {category}
          </option>
        ))}
      </select>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CategorySelect;
