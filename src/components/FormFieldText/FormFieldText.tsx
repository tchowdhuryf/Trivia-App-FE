// Styles import
import "./FormFieldText.css";

interface FormFieldTextProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * `FormFieldText` component that renders a labeled text input field.
 *
 * @param {FormFieldTextProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered `FormFieldText` component.
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
