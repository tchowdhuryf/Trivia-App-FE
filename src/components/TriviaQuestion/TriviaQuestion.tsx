// Styles import
import "./TriviaQuestion.css";

interface TriviaQuestionProps {
  question: React.ReactNode;
}

/**
 * `TriviaQuestion` component that displays a trivia question.
 *
 * @param {TriviaQuestionProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `TriviaQuestion` component.
 */
const TriviaQuestion: React.FC<TriviaQuestionProps> = ({ question }) => {
  return (
    <div className="trivia-question">
      <div className="question">{question}</div>
    </div>
  );
};

export default TriviaQuestion;
