// React imports
import { useState, ChangeEvent, FormEvent } from "react";

// Component imports
import CategorySelect from "../CategorySelect/CategorySelect";
import QuestionFields from "../QuestionFields/QuestionFields";
import FormContainer from "../FormContainer/FormContainer";

// Service imports
import apiServices from "../../services/apiServices";

// Styles import
import "./AddQuestionForm.css";

/**
 * Represents the structure of form data for adding a new trivia question.
 */
interface AddQuestionFormData {
  /** The selected category for the question. */
  category: string;
  /** The text of the question to be displayed. */
  question: string;
  /** The first possible answer option. */
  option1: string;
  /** The second possible answer option. */
  option2: string;
  /** The third possible answer option. */
  option3: string;
  /** The fourth possible answer option. */
  option4: string;
  /** The correct answer for the question. */
  answer: string;
}

/**
 * `AddQuestionForm` Component
 *
 * This component renders a form for adding new trivia questions.
 * It includes:
 * - A category selector
 * - Input fields for the question and answer options
 * - A submit button
 *
 * When submitted, the form sends the question data to an API and updates
 * the status message accordingly.
 *
 * @component
 * @example
 * ```tsx
 * <AddQuestionForm />
 * ```
 */
const AddQuestionForm: React.FC = () => {
  /**
   * Manages the state of the form fields, including category, question, and answer options.
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

  /** The title displayed on the form. */
  const title = "Add a New Question";

  /** The text displayed on the submit button. */
  const buttonText = "Add Question";

  /**
   * Stores the status message, which updates when a question is successfully added or an error occurs.
   */
  const [status, setStatus] = useState<string>("");

  /**
   * Handles changes in input and select fields and updates the `formData` state accordingly.
   *
   * @param event - The event triggered when an input or select field changes.
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  /**
   * Handles form submission, validates input, sends the new question data to the API,
   * and updates the UI with a success or failure message.
   *
   * @param event - The form submission event.
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Prepare the question data to be sent to the API
    const questionData = {
      category: formData.category,
      question: formData.question,
      options: [formData.option1, formData.option2, formData.option3, formData.option4],
      answer: formData.answer,
    };

    try {
      // Send request to create the new question
      await apiServices.createQuestion(formData.category, questionData);
      setStatus("Question added successfully!");

      // Reset form fields
      setFormData({
        category: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        answer: "",
      });
    } catch (error) {
      setStatus("Failed to add question. Please try again.");
      console.error("Error adding question:", error);
    }
  };

  return (
    <FormContainer
      title={title}
      statusMessage={status}
      onSubmit={handleSubmit}
      buttonText={buttonText}
      content={
        <>
          <CategorySelect value={formData.category} onChange={handleChange} name="category" />
          
          <QuestionFields formData={formData} handleChange={handleChange} />
        </>
      }
    />
  );
};

export default AddQuestionForm;
