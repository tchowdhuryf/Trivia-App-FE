// React imports
import { useState, ChangeEvent, FormEvent } from "react";

// Component imports
import CategorySelect from "../CategorySelect/CategorySelect";
import FormContainer from "../FormContainer/FormContainer";
import QuestionFields from "../QuestionFields/QuestionFields";

// Service imports
import apiServices from "../../services/apiServices";

/**
 * `AddQuestionForm` component that renders a form for adding new trivia questions.
 * It includes:
 * - A category selector
 * - Input fields for the question and answer options
 * - A submit button
 *
 * When submitted, the form sends the question data to an API and updates
 * the status message accordingly.
 *
 * @returns {JSX.Element} The rendered `AddQuestionForm` component.
 */
const AddQuestionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    category: "",
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  const [status, setStatus] = useState<string>("");

  const title = "Add a New Question";
  const buttonText = "Add Question";

  /**
   * Handles changes in input and select fields and updates the `formData` state accordingly.
   *
   * @param {ChangeEvent<HTMLInputElement | HTMLSelectElement>} event - The event triggered when an input or select field changes.
   */
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  /**
   * Handles form submission, validates input, sends the new question data to the API,
   * and updates the UI with a success or failure message.
   *
   * @param {FormEvent<HTMLFormElement>} event - The form submission event.
   * @throws Will throw an error if the API request fails.
   */
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const questionData = {
      category: formData.category,
      question: formData.question,
      options: [
        formData.option1,
        formData.option2,
        formData.option3,
        formData.option4,
      ],
      answer: formData.answer,
    };

    try {
      await apiServices.createQuestion(formData.category, questionData);
      setStatus("Question added successfully!");

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
