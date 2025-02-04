// React imports
import { useState, ChangeEvent, FormEvent } from "react";

// Component imports
import CategorySelect from "../CategorySelect/CategorySelect";
import QuestionFields from "../QuestionFields/QuestionFields";
import FormContainer from "../FormContainer/FormContainer";
import FormFieldQuestionPreview from "../FormFieldQuestionPreview/FormFieldQuestionPreview";

// Service imports
import apiServices from "../../services/apiServices";

// Styles import
import "./EditQuestionForm.css";

/**
 * Represents the structure of form data for editing a trivia question.
 */
interface EditQuestionFormData {
  /** The category of the question being edited. */
  category: string;
  /** The unique ID of the question to be edited. */
  questionId: number | null;
  /** The text of the question. */
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
 * `EditQuestionForm` Component
 *
 * This component renders a form for editing an existing trivia question.
 * Users can:
 * - Select a category
 * - Pick a question to edit
 * - Modify the question and answer options
 * - Submit the updated data to the API
 *
 * @component
 * @example
 * ```tsx
 * <EditQuestionForm />
 * ```
 */
const EditQuestionForm: React.FC = () => {
  /**
   * Manages the state of the form, storing the selected category, question ID,
   * question text, answer options, and the correct answer.
   */
  const [formData, setFormData] = useState<EditQuestionFormData>({
    category: "",
    questionId: null,
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
  });

  /** The title displayed on the form. */
  const title = "Edit Question";

  /** The text displayed on the submit button. */
  const buttonText = "Edit Question";

  /**
   * Stores the status message, which updates when a question is successfully edited or an error occurs.
   */
  const [status, setStatus] = useState<string>("");

  /**
   * Handles changes in input and select fields and updates the `formData` state accordingly.
   *
   * @param event - The change event triggered by an input or select element.
   */
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  /**
   * Handles selection of a question and fetches its details to populate the form fields.
   *
   * @param questionId - The ID of the selected question.
   */
  const handleQuestionSelect = async (questionId: number) => {
    try {
      // Fetch question details from the API
      const questionData = await apiServices.getQuestionById(
        formData.category,
        questionId
      );

      // Populate form fields with retrieved data
      setFormData({
        category: formData.category,
        questionId: questionData.id,
        question: questionData.question,
        option1: questionData.options[0],
        option2: questionData.options[1],
        option3: questionData.options[2],
        option4: questionData.options[3],
        answer: questionData.answer,
      });

      setStatus(""); // Reset status message
    } catch (error) {
      setStatus("Failed to load question. Please try again.");
      console.error("Error fetching question:", error);
    }
  };

  /**
   * Handles form submission, validates input, and updates the selected question.
   *
   * @param event - The form submission event.
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate that a category and question ID are selected
    if (!formData.category || formData.questionId === null) {
      setStatus("Please select a category and question to update.");
      return;
    }

    // Prepare the updated question data
    const updatedData = {
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
      // Send updated question data to the API
      await apiServices.updateQuestion(
        formData.category,
        formData.questionId,
        updatedData
      );
      setStatus("Question updated successfully!");
    } catch (error) {
      setStatus("Failed to update question. Please try again.");
      console.error("Error updating question:", error);
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

          <FormFieldQuestionPreview
            category={formData.category}
            onSelectQuestion={handleQuestionSelect}
          />

          <QuestionFields formData={formData} handleChange={handleChange} />
        </>
      }
    />
  );
};

export default EditQuestionForm;
