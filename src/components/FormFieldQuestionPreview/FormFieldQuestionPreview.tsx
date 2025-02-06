// React imports
import { useState } from "react";

// Component imports
import FormFieldText from "../FormFieldText/FormFieldText";

// Service imports
import apiServices from "../../services/apiServices";

// Styles import
import "./FormFieldQuestionPreview.css";

interface QuestionData {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: string;
}

interface FormFieldQuestionPreviewProps {
  category: string;
  onSelectQuestion: (questionId: number) => void;
}

/**
 * `FormFieldQuestionPreview` component that allows users to enter a question ID,
 * retrieve question details from an API, and display the fetched question along with its answer options.
 *
 * @param {FormFieldQuestionPreviewProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `FormFieldQuestionPreview` component.
 */
const FormFieldQuestionPreview: React.FC<FormFieldQuestionPreviewProps> = ({
  category,
  onSelectQuestion,
}) => {
  const [questionId, setQuestionId] = useState<string>("");
  const [questionData, setQuestionData] = useState<QuestionData | null>(null);
  const [error, setError] = useState<string>("");

  /**
   * Fetches question data based on the provided question ID and category.
   * If the fetch is successful, updates `questionData` state; otherwise, sets an error message.
   *
   * @throws Will display an error message if the API request fails.
   */
  const handlePreview = async (): Promise<void> => {
    if (!questionId.trim() || !category.trim()) {
      setError("Please provide a valid category and question ID.");
      setQuestionData(null);
      return;
    }

    try {
      setError("");

      const data = await apiServices.getQuestionById(
        category,
        Number(questionId)
      );

      setQuestionData(data);
      onSelectQuestion(data.id);
    } catch (err) {
      setError("Error fetching question. Please check the ID and category.");
      setQuestionData(null);
      console.error("Error fetching question:", err);
    }
  };

  return (
    <div className="form-field-container">
      <FormFieldText
        label="Question ID"
        name="questionId"
        value={questionId}
        onChange={(e) => setQuestionId(e.target.value)}
      />

      <button
        type="button"
        id="previewButton"
        onClick={handlePreview}
        className="form-button">
        Preview Question
      </button>

      {error && <div className="form-error">{error}</div>}

      {questionData && (
        <div id="preview" className="form-preview">
          <div className="preview-question-container">
            <label className="preview-question-label">Question:</label>{" "}
            <span className="preview-question">{questionData.question}</span>
          </div>
          <div className="preview-options-container">
            <label className="preview-options-label">Options:</label>
            <ul className="preview-options-list">
              {questionData.options.map((option, index) => (
                <li className="preview-options-list-item" key={index}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="preview-answer-container">
            <label className="preview-answer-label">Correct Answer:</label>{" "}
            <span className="preview-answer">{questionData.answer}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormFieldQuestionPreview;
