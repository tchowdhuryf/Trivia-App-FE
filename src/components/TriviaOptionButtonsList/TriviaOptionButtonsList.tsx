// Component imports
import TriviaOptionButton from "../TriviaOptionButton/TriviaOptionButton";

interface TriviaOptionButtonProps {
  option: string;
  correctAnswer: string;
  selectedAnswer: string;
  checkAnswer: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface TriviaOptionButtonsListProps {
  options: TriviaOptionButtonProps[];
  correctAnswer: string;
  selectedAnswer: string;
  checkAnswer: boolean;
  onOptionClick: (option: string) => void;
}

/**
 * `TriviaOptionButtonsList` component that renders a list of trivia option buttons.
 *
 * @param {TriviaOptionButtonsListProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `TriviaOptionButtonsList` component.
 */
const TriviaOptionButtonsList: React.FC<TriviaOptionButtonsListProps> = ({
  options,
  correctAnswer,
  selectedAnswer,
  checkAnswer,
  onOptionClick,
}) => {
  return (
    <div className="trivia-option-buttons-list">
      {options.map((option, index) => (
        <TriviaOptionButton
          key={index}
          option={option.option}
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          checkAnswer={checkAnswer}
          onClick={() => onOptionClick(option.option)}
        />
      ))}
    </div>
  );
};

export default TriviaOptionButtonsList;
