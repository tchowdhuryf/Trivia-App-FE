import { useEffect, useState } from "react";
import apiServices from "../../services/apiServices";
import "./CategorySelect.css";

/**
 * Props for the `CategorySelect` component.
 */
interface CategorySelectProps {
  /**
   * The currently selected category value.
   */
  value: string;

  /**
   * Event handler triggered when the selected category changes.
   *
   * @param e - The change event for the select element.
   */
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

  /**
   * The name attribute for the select element.
   */
  name: string;
}

/**
 * `CategorySelect` Component
 *
 * This component renders a dropdown menu for selecting a category.
 * The list of categories is **dynamically fetched** from an API upon mounting.
 *
 * @component
 * @example
 * ```tsx
 * <CategorySelect
 *   name="category"
 *   value={selectedCategory}
 *   onChange={(e) => setSelectedCategory(e.target.value)}
 * />
 * ```
 */
const CategorySelect: React.FC<CategorySelectProps> = ({
  value,
  onChange,
  name,
}) => {
  /**
   * State to store the list of fetched categories.
   */
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches categories from the API when the component mounts.
   */
  useEffect(() => {
    const fetchCategories = async () => {
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
