import { useState } from "react";

function useForm<T>(initialValues: T, onSubmit: (values: T) => void) {
  const [formValues, setFormValues] = useState<T>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name: key, value } = e.target;
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
    setFormValues(initialValues);
  };

  return {
    formValues,
    handleChange,
    handleSubmit,
    resetForm: () => setFormValues(initialValues),
  };
}

export default useForm;
