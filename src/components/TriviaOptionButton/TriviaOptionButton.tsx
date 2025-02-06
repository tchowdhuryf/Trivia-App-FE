// Styles import
import "./TriviaOptionButton.css";

interface TriviaOptionButtonProps {
  option: string;
  correctAnswer: string;
  selectedAnswer: string;
  checkAnswer: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * `TriviaOptionButton` component that renders an answer option button for the trivia game.
 * Highlights correct and incorrect answers based on the selected option.
 *
 * @param {TriviaOptionButtonProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `TriviaOptionButton` component.
 */
const TriviaOptionButton: React.FC<TriviaOptionButtonProps> = ({
  option,
  correctAnswer,
  selectedAnswer,
  checkAnswer,
  onClick,
}) => {
  let backgroundColor = "#eeeef0";

  if (checkAnswer) {
    if (option === correctAnswer) {
      backgroundColor = "#63c132";
    } else if (option === selectedAnswer && option !== correctAnswer) {
      backgroundColor = "#f70123";
    }
  }

  return (
    <button
      style={{ backgroundColor }}
      className="trivia-option-button"
      onClick={onClick}
      disabled={checkAnswer}>
      {option}
    </button>
  );
};

export default TriviaOptionButton;
