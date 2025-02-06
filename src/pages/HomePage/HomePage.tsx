// Component imports
import CategoryCardGrid from "../../components/CategoryCardGrid/CategoryCardGrid";

/**
 * `HomePage` component that serves as the main entry point of the application.
 * Displays a grid of trivia categories for users to select from.
 *
 * @returns {JSX.Element} The rendered `HomePage` component.
 */
export default function HomePage(): JSX.Element {
  return <CategoryCardGrid />;
}
