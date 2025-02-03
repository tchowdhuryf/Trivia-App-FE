import FormFieldText from "../FormFieldText/FormFieldText";
import "./QuestionFields.css";

/**
 * Props for the `QuestionFields` component.
 */
interface QuestionFieldsProps {
  /**
   * The current form data containing the question and possible answer options.
   */
  formData: {
    /**
     * The question text.
     */
    question: string;

    /**
     * The first possible answer option.
     */
    option1: string;

    /**
     * The second possible answer option.
     */
    option2: string;

    /**
     * The third possible answer option.
     */
    option3: string;

    /**
     * The fourth possible answer option.
     */
    option4: string;

    /**
     * The correct answer for the question.
     */
    answer: string;
  };

  /**
   * Event handler for input changes, updating the form data.
   *
   * @param e - The input change event.
   */
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * `QuestionFields` Component
 *
 * This component renders a set of text input fields for a trivia question.
 * It includes fields for the question text, four possible answers, and the correct answer.
 *
 * @component
 * @example
 * ```tsx
 * <QuestionFields
 *   formData={{
 *     question: "",
 *     option1: "",
 *     option2: "",
 *     option3: "",
 *     option4: "",
 *     answer: "",
 *   }}
 *   handleChange={(e) => console.log(e.target.name, e.target.value)}
 * />
 * ```
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
