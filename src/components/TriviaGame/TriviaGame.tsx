// React imports
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Component imports
import TriviaQuestionCard from "../TriviaQuestionCard/TriviaQuestionCard";
import TriviaNextButton from "../TriviaNextButton/TriviaNextButton";
import TriviaOptionButtonsList from "../TriviaOptionButtonsList/TriviaOptionButtonsList";

// Service imports
import apiServices from "../../services/apiServices";

// Styles import
import "./TriviaGame.css";

interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: string;
}

interface TriviaGameProps {
  category: string;
}

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 *
 * @param {T[]} array - The array to shuffle.
 * @returns {T[]} The shuffled array.
 */
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

/**
 * `TriviaGame` component that renders a trivia game based on the selected category.
 * Fetches questions from an API, shuffles them, and handles user interactions.
 *
 * @param {TriviaGameProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `TriviaGame` component.
 */
const TriviaGame: React.FC<TriviaGameProps> = ({ category }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await apiServices.getAllQuestions(category);
        const shuffledQuestions = shuffleArray(data).map((question) => ({
          ...question,
          options: shuffleArray(question.options),
        }));
        setQuestions(shuffledQuestions);
      } catch (error) {
        setError("Failed to load categories.");
        console.error("Error fetching categories:", error);
      }
    };

    fetchQuestions();
  }, [category]);

  /**
   * Handles moving to the next question or navigating to the score page when the game ends.
   */
  const handleNextQuestion = () => {
    const isCorrect =
      selectedAnswer === questions[currentQuestionIndex]?.answer;
    const newScore = isCorrect ? score + 1 : score;

    if (currentQuestionIndex + 1 < questions.length) {
      setSelectedAnswer("");
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setScore(newScore);
    } else {
      navigate("/score-page", {
        state: { score: newScore, totalQuestions: questions.length },
      });
    }
  };

  /**
   * Handles selection of an answer option.
   *
   * @param {string} option - The selected answer option.
   */
  const handleOptionClick = (option: string) => {
    setSelectedAnswer(option);
  };

  if (error) return <p className="error-message">{error}</p>;
  if (questions.length === 0) return <p>Loading questions...</p>;

  const currentQuestion = questions[currentQuestionIndex];

  const formattedOptions = currentQuestion.options.map((option) => ({
    option,
    correctAnswer: currentQuestion.answer,
    selectedAnswer,
    checkAnswer: selectedAnswer !== "",
    onClick: () => handleOptionClick(option),
  }));

  return (
    <div className="trivia-game">
      <TriviaQuestionCard
        category={category.charAt(0).toUpperCase() + category.slice(1)}
        question={currentQuestion.question}
        options={
          <TriviaOptionButtonsList
            options={formattedOptions}
            correctAnswer={currentQuestion.answer}
            selectedAnswer={selectedAnswer}
            checkAnswer={selectedAnswer !== ""}
            onOptionClick={handleOptionClick}
          />
        }
      />
      {selectedAnswer && <TriviaNextButton onClick={handleNextQuestion} />}
    </div>
  );
};

export default TriviaGame;
