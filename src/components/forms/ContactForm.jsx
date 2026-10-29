import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Field from './Field.jsx';
import { useForm } from './useForm.js';
import { EASE } from '../../lib/motion.js';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  topic: 'general',
  message: '',
};

const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!v.email.trim()) e.email = 'Please enter an email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email.';
  if (!v.message.trim()) e.message = 'Please include a message.';
  return e;
};

export default function ContactForm({ defaultTopic = 'general' }) {
  const { values, errors, status, setField, submit, reset } = useForm({
    initialValues: { ...initialValues, topic: defaultTopic },
    validate,
    onSubmit: async () => { await new Promise((r) => setTimeout(r, 700)); },
  });

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="card p-10 text-center"
      >
        <CheckCircle2 size={40} className="mx-auto text-forest" />
        <h3 className="mt-4 font-display text-2xl">Thank you.</h3>
        <p className="mt-2 text-ink-600">Your message has been received.</p>
        <button onClick={reset} className="mt-6 link-underline">Send another message</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" value={values.name} onChange={setField} error={errors.name} required />
        <Field label="Email" name="email" type="email" value={values.email} onChange={setField} error={errors.email} required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Phone (optional)" name="phone" type="tel" value={values.phone} onChange={setField} />
        <Field
          label="Topic"
          name="topic"
          as="select"
          value={values.topic}
          onChange={setField}
          options={[
            { value: 'general', label: 'General enquiries' },
            { value: 'sales', label: 'Sales' },
            { value: 'distributor', label: 'Distributor enquiries' },
            { value: 'careers', label: 'Careers' },
            { value: 'media', label: 'Media & press' },
          ]}
        />
      </div>
      <Field
        label="Message"
        name="message"
        as="textarea"
        rows={5}
        value={values.message}
        onChange={setField}
        error={errors.message}
        required
      />

      {status === 'error' && (
        <div className="flex items-start gap-2 text-sm text-wine">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary min-w-[180px] justify-center disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <><Loader2 size={16} className="animate-spin" /> Sending…</>
        ) : 'Send message'}
      </button>
    </form>
  );
}