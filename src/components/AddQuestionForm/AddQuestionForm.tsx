import { useState, ChangeEvent, FormEvent } from "react";
import CategorySelect from "../CategorySelect/CategorySelect";
import QuestionFields from "../QuestionFields/QuestionFields";
import FormContainer from "../FormContainer/FormContainer";
import "./AddQuestionForm.css";

/**
 * Represents the form data structure for adding a trivia question.
 */
interface AddQuestionFormData {
  /**
   * The selected category for the question.
   */
  category: string;

  /**
   * The question text to be displayed.
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
}

/**
 * `AddQuestionForm` Component
 *
 * This component renders a form for adding new trivia questions.
 * It includes a category selector, input fields for the question and answer options,
 * and a submit button.
 *
 * The component handles form submission by updating the status message upon successful submission.
 *
 * @component
 * @example
 * ```tsx
 * <AddQuestionForm />
 * ```
 */
const AddQuestionForm: React.FC = () => {
  /**
   * Form data state, containing category, question, and answer options.
   */
  const [formData, setFormData] = useState<AddQuestionFormData>({
    category: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  /**
   * Title of the form.
   */
  const title = "Add a New Question";

  /**
   * Initial status message displayed after submission.
   */
  const statusMessage = "";

  /**
   * Text displayed on the submit button.
   */
  const buttonText = "Add Question";

  /**
   * Status message state, updated when a question is successfully added.
   */
  const [status, setStatus] = useState<string>(statusMessage);

  /**
   * Handles changes in form fields and updates the state accordingly.
   *
   * @param e - The event triggered when an input or select field changes.
   */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles form submission, updating the status message on success.
   *
   * @param e - The form submission event.
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Question added successfully!");
  };

  return (
    <FormContainer
      title={title}
      statusMessage={status}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      content={
        <>
          <CategorySelect
            value={formData.category}
            onChange={handleChange}
            name="category"
          />
          <QuestionFields formData={formData} handleChange={handleChange} />
        </>
      }
    />
  );
};

export default AddQuestionForm;
