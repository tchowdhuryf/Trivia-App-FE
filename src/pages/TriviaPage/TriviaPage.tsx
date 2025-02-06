import { useLocation } from "react-router-dom";
import TriviaGame from "../../components/TriviaGame/TriviaGame";
import "./TriviaPage.css";

/**
 * `TriviaPage` component that renders the trivia game for a selected category.
 * The category is determined based on the navigation state or defaults to "history".
 *
 * @returns {JSX.Element} The rendered `TriviaPage` component.
 */
const TriviaPage: React.FC = () => {
  const location = useLocation();
  const category = location.state?.category || "history";

  return (
    <div className="trivia-page">
      <TriviaGame category={category} />
    </div>
  );
};

export default TriviaPage;
