import AddQuestionForm from "../../components/AddQuestionForm/AddQuestionForm";
import "./AddQuestionPage.css";

/**
 * `AddQuestionPage` Component
 *
 * This component renders a page for adding a new trivia question.
 * It contains the `AddQuestionForm` component, which provides the actual form fields
 * and submission logic.
 *
 * @component
 * @example
 * ```tsx
 * <AddQuestionPage />
 * ```
 */
const AddQuestionPage: React.FC = () => {
  return (
    <div className="add-question-page">
      <AddQuestionForm />
    </div>
  );
};

export default AddQuestionPage;
