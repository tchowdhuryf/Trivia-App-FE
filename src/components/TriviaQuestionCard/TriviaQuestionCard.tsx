// Component imports
import TriviaQuestion from "../TriviaQuestion/TriviaQuestion";

// Styles import
import "./TriviaQuestionCard.css";

interface TriviaQuestionCardProps {
  category: string;
  question: string;
  options: React.ReactNode;
}

/**
 * `TriviaQuestionCard` component that displays a trivia question along with its category and answer options.
 *
 * @param {TriviaQuestionCardProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `TriviaQuestionCard` component.
 */
const TriviaQuestionCard: React.FC<TriviaQuestionCardProps> = ({
  category,
  question,
  options,
}) => {
  return (
    <div className="trivia-question-card">
      <div className="trivia-question-header">
        <h1 className="trivia-question-heading">{category}</h1>
      </div>

      <div className="trivia-question">
        <TriviaQuestion question={question} />
      </div>

      <div className="trivia-question-options">
        <form className="trivia-question-options-form">{options}</form>
      </div>
    </div>
  );
};

export default TriviaQuestionCard;
