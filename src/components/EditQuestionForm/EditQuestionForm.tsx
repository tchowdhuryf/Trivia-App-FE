// React imports
import { useState, ChangeEvent, FormEvent } from "react";

// Component imports
import CategorySelect from "../CategorySelect/CategorySelect";
import FormContainer from "../FormContainer/FormContainer";
import FormFieldQuestionPreview from "../FormFieldQuestionPreview/FormFieldQuestionPreview";
import QuestionFields from "../QuestionFields/QuestionFields";

// Service imports
import apiServices from "../../services/apiServices";

interface EditQuestionFormData {
  category: string;
  questionId: number | null;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

/**
 * `EditQuestionForm` component that renders a form for editing an existing trivia question.
 * Users can select a category, choose a question to edit, modify the details, and submit the changes.
 *
 * @returns {JSX.Element} The rendered `EditQuestionForm` component.
 */
const EditQuestionForm: React.FC = () => {
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

  const [status, setStatus] = useState<string>("");

  const title = "Edit Question";
  const buttonText = "Edit Question";

  /**
   * Handles changes in input and select fields and updates the `formData` state accordingly.
   *
   * @param {ChangeEvent<HTMLInputElement | HTMLSelectElement>} event - The change event triggered by an input or select element.
   */
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  /**
   * Handles selection of a question and fetches its details to populate the form fields.
   *
   * @param {number} questionId - The ID of the selected question.
   * @throws Will display an error message if the API request fails.
   */
  const handleQuestionSelect = async (questionId: number): Promise<void> => {
    try {
      const questionData = await apiServices.getQuestionById(
        formData.category,
        questionId
      );
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

      setStatus("");
    } catch (error) {
      setStatus("Failed to load question. Please try again.");
      console.error("Error fetching question:", error);
    }
  };

  /**
   * Handles form submission, validates input, and updates the selected question.
   *
   * @param {FormEvent<HTMLFormElement>} event - The form submission event.
   * @throws Will display an error message if the API request fails.
   */
  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!formData.category || formData.questionId === null) {
      setStatus("Please select a category and question to update.");
      return;
    }

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
