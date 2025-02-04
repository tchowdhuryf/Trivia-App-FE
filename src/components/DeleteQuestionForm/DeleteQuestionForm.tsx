// React imports
import { useState, ChangeEvent, FormEvent } from "react";

// Component imports
import FormContainer from "../FormContainer/FormContainer";
import CategorySelect from "../CategorySelect/CategorySelect";
import FormFieldQuestionPreview from "../FormFieldQuestionPreview/FormFieldQuestionPreview";

// Service imports
import apiServices from "../../services/apiServices";

// Styles import
import "./DeleteQuestionForm.css";

/**
 * Represents the form data structure for deleting a trivia question.
 */
interface DeleteQuestionFormData {
  /** The selected category for the question to be deleted. */
  category: string;
  /** The unique ID of the question to be deleted. */
  questionId: number | null;
}

/**
 * `DeleteQuestionForm` Component
 *
 * This component provides a form for deleting a trivia question.
 * It allows users to select a category and choose a specific question to delete.
 * Upon submission, the selected question is removed from the database via an API call.
 *
 * @component
 * @example
 * ```tsx
 * <DeleteQuestionForm />
 * ```
 */
const DeleteQuestionForm: React.FC = () => {
  /**
   * Manages the state of the form, storing the selected category and question ID.
   */
  const [formData, setFormData] = useState<DeleteQuestionFormData>({
    category: "",
    questionId: null,
  });

  /** The title displayed on the form. */
  const title = "Delete Question";

  /** The text displayed on the submit button. */
  const buttonText = "Delete Question";

  /**
   * Stores the status message, which updates when a question is successfully deleted or an error occurs.
   */
  const [status, setStatus] = useState<string>("");

  /**
   * Handles changes in the category selection input and updates the state.
   *
   * @param event - The change event triggered by the select or input element.
   */
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setStatus(""); // Reset status message on category change
  };

  /**
   * Handles selection of a question from the preview component.
   *
   * @param questionId - The ID of the selected question.
   */
  const handleQuestionSelect = (questionId: number) => {
    setFormData((prev) => ({ ...prev, questionId }));
  };

  /**
   * Handles form submission, validates input, and triggers the API call to delete the selected question.
   *
   * @param event - The form submission event.
   */
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate that a category and question ID are selected
    if (!formData.category || formData.questionId === null) {
      setStatus("Please select a category and question to delete.");
      return;
    }

    try {
      // Call API to delete the question
      await apiServices.deleteQuestion(formData.category, formData.questionId);
      setStatus("Question deleted successfully!");

      // Reset form fields after successful deletion
      setFormData({ category: "", questionId: null });
    } catch (error) {
      setStatus("Failed to delete question. Please try again.");
      console.error("Error deleting question:", error);
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
        </>
      }
    />
  );
};

export default DeleteQuestionForm;
