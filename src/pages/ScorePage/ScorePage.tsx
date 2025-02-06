import { useLocation, useNavigate } from "react-router-dom";
import "./ScorePage.css";

const ScorePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || {
    score: 0,
    totalQuestions: 0,
  };

  return (
    <div className="score-page">
      <h1 className="score-page__title">Game Over!</h1>
      <p className="score-page__text">
        You scored <span className="score-page__score">{score}</span> out of{" "}
        <span className="score-page__total">{totalQuestions}</span>
      </p>
      <button className="score-page__button" onClick={() => navigate("/")}>
        Play Again
      </button>
    </div>
  );
};

export default ScorePage;
