import React from "react";
import "./FormFieldText.css";

/**
 * Props for the FormFieldText component.
 */
interface FormFieldTextProps {
  /**
   * The label for the input field.
   */
  label: string;

  /**
   * The name attribute for the input field.
   */
  name: string;

  /**
   * The current value of the input field.
   */
  value: string;

  /**
   * Event handler for when the input value changes.
   *
   * @param e - The change event for the input field.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * `FormFieldText` Component
 *
 * This component renders a labeled text input field.
 *
 * @component
 * @example
 * ```tsx
 * <FormFieldText
 *   label="Username"
 *   name="username"
 *   value={username}
 *   onChange={(e) => setUsername(e.target.value)}
 * />
 * ```
 */
const FormFieldText: React.FC<FormFieldTextProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="form-field-text">
      <label className="form-field-text-label">{label}</label>
      <input
        className="form-field-text-input"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder=""
        required
      />
    </div>
  );
};

export default FormFieldText;
