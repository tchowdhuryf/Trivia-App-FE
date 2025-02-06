// Styles import
import "./TriviaGameScore.css";

interface TriviaGameScoreProps {
  score: number;
}

/**
 * `TriviaGameScore` component that displays the current trivia game score.
 *
 * @param {TriviaGameScoreProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `TriviaGameScore` component.
 */
const TriviaGameScore: React.FC<TriviaGameScoreProps> = ({ score }) => {
  return <h2 className="trivia-game-score">Score: {score}</h2>;
};

export default TriviaGameScore;
