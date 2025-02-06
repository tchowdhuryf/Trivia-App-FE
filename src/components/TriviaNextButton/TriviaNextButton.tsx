// Styles import
import "./TriviaNextButton.css";

interface TriviaNextButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * `TriviaNextButton` component that renders a button to proceed to the next question in the trivia game.
 *
 * @param {TriviaNextButtonProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `TriviaNextButton` component.
 */
const TriviaNextButton: React.FC<TriviaNextButtonProps> = ({ onClick }) => {
  return (
    <div className="trivia-next-button-container">
      <button className="trivia-next-button" onClick={onClick}>
        Next
      </button>
    </div>
  );
};

export default TriviaNextButton;
