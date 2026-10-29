import { useState } from 'react';

export function useForm({ initialValues, validate, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const setField = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const submit = async (e) => {
    e?.preventDefault?.();
    const nextErrors = validate ? validate(values) : {};
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setStatus('submitting');
    try {
      await onSubmit?.(values);
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, setField, submit, reset };
}