// Component imports
import FormFieldText from "../FormFieldText/FormFieldText";

// Styles import
import "./QuestionFields.css";

interface QuestionFieldsProps {
  formData: {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * `QuestionFields` component that renders a set of text input fields for a trivia question.
 * It includes fields for the question text, four possible answers, and the correct answer.
 *
 * @param {QuestionFieldsProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `QuestionFields` component.
 */
const QuestionFields: React.FC<QuestionFieldsProps> = ({
  formData,
  handleChange,
}) => {
  return (
    <div className="question-fields">
      <FormFieldText
        label="Question"
        name="question"
        value={formData.question}
        onChange={handleChange}
      />
      <FormFieldText
        label="Option 1"
        name="option1"
        value={formData.option1}
        onChange={handleChange}
      />
      <FormFieldText
        label="Option 2"
        name="option2"
        value={formData.option2}
        onChange={handleChange}
      />
      <FormFieldText
        label="Option 3"
        name="option3"
        value={formData.option3}
        onChange={handleChange}
      />
      <FormFieldText
        label="Option 4"
        name="option4"
        value={formData.option4}
        onChange={handleChange}
      />
      <FormFieldText
        label="Correct Answer"
        name="answer"
        value={formData.answer}
        onChange={handleChange}
      />
    </div>
  );
};

export default QuestionFields;
