import { sum } from "lodash";

export default function FormField({
  name,
  type,
  value,
  labelText,
  isRequired = true,
  onChange,
}) {
  return (
    <>
      <label
        htmlFor={name}
        className="font-link text-gray-70 font-light"
      >
        {labelText}
        {isRequired && (
          <span className="text-messaging-warning">
            *
          </span>
        )}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="bg-transparent border-b border-gray-70 focus:outline-none focus:border-none focus:ring-1 ring-primary-dark focus:rounded-sm px-1 py-1 mt-1 mb-4"
      />
    </>
  );
}
