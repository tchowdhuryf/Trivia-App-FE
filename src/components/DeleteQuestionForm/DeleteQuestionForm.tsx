// React imports
import { useState, ChangeEvent, FormEvent } from "react";

// Component imports
import CategorySelect from "../CategorySelect/CategorySelect";
import FormContainer from "../FormContainer/FormContainer";
import FormFieldQuestionPreview from "../FormFieldQuestionPreview/FormFieldQuestionPreview";

// Service imports
import apiServices from "../../services/apiServices";

interface DeleteQuestionFormData {
  category: string;
  questionId: number | null;
}

/**
 * `DeleteQuestionForm` component that provides a form for deleting a trivia question.
 * Users can select a category, choose a specific question, and delete it via an API call.
 *
 * @returns {JSX.Element} The rendered `DeleteQuestionForm` component.
 */
const DeleteQuestionForm: React.FC = () => {
  const [formData, setFormData] = useState<DeleteQuestionFormData>({
    category: "",
    questionId: null,
  });

  const [status, setStatus] = useState<string>("");

  const title = "Delete Question";
  const buttonText = "Delete Question";

  /**
   * Handles changes in the category selection input and updates the state.
   *
   * @param {ChangeEvent<HTMLInputElement | HTMLSelectElement>} event - The change event triggered by the select or input element.
   */
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setStatus("");
  };

  /**
   * Handles selection of a question from the preview component.
   *
   * @param {number} questionId - The ID of the selected question.
   */
  const handleQuestionSelect = (questionId: number): void => {
    setFormData((prev) => ({ ...prev, questionId }));
  };

  /**
   * Handles form submission, validates input, and triggers the API call to delete the selected question.
   *
   * @param {FormEvent<HTMLFormElement>} event - The form submission event.
   * @throws Will display an error message if the API request fails.
   */
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!formData.category || formData.questionId === null) {
      setStatus("Please select a category and question to delete.");
      return;
    }

    try {
      await apiServices.deleteQuestion(formData.category, formData.questionId);
      setStatus("Question deleted successfully!");
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
