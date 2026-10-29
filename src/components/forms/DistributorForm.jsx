import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Field from './Field.jsx';
import { useForm } from './useForm.js';
import { EASE } from '../../lib/motion.js';

const initialValues = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  state: '',
  businessType: '',
  message: '',
};

const states = [
  'Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno','Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCT','Gombe','Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos','Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto','Taraba','Yobe','Zamfara',
];

const businessTypes = [
  { value: '', label: 'Select business type' },
  { value: 'distributor', label: 'Distributor' },
  { value: 'wholesaler', label: 'Wholesaler' },
  { value: 'retailer', label: 'Retailer' },
  { value: 'partnership', label: 'Partnership / Other' },
];

const validate = (v) => {
  const e = {};
  if (!v.fullName.trim()) e.fullName = 'Please enter your full name.';
  if (!v.company.trim()) e.company = 'Please enter your company name.';
  if (!v.email.trim()) e.email = 'Please enter an email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email.';
  if (!v.phone.trim()) e.phone = 'Please enter a phone number.';
  if (!v.state) e.state = 'Please select a state.';
  if (!v.businessType) e.businessType = 'Please select a business type.';
  if (!v.message.trim()) e.message = 'Please write a short message.';
  return e;
};

export default function DistributorForm() {
  const { values, errors, status, setField, submit, reset } = useForm({
    initialValues,
    validate,
    onSubmit: async () => {
      // Placeholder — replace with real endpoint.
      await new Promise((r) => setTimeout(r, 700));
    },
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
        <p className="mt-2 text-ink-600">
          Your enquiry has been received. Our team will be in touch.
        </p>
        <button onClick={reset} className="mt-6 link-underline">
          Submit another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full name" name="fullName" value={values.fullName} onChange={setField} error={errors.fullName} required placeholder="Your name" />
        <Field label="Company" name="company" value={values.company} onChange={setField} error={errors.company} required placeholder="Company name" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" value={values.email} onChange={setField} error={errors.email} required placeholder="you@company.com" />
        <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={setField} error={errors.phone} required placeholder="+234 ..." />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="State"
          name="state"
          as="select"
          value={values.state}
          onChange={setField}
          error={errors.state}
          required
          options={[{ value: '', label: 'Select state' }, ...states.map((s) => ({ value: s, label: s }))]}
        />
        <Field
          label="Business type"
          name="businessType"
          as="select"
          value={values.businessType}
          onChange={setField}
          error={errors.businessType}
          required
          options={businessTypes}
        />
      </div>

      <Field
        label="Message"
        name="message"
        as="textarea"
        rows={4}
        value={values.message}
        onChange={setField}
        error={errors.message}
        required
        placeholder="Tell us a little about your business and coverage."
      />

      {status === 'error' && (
        <div className="flex items-start gap-2 text-sm text-wine">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <p className="text-xs text-ink-500 max-w-sm">
          By submitting, you agree to be contacted about your enquiry.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary min-w-[180px] justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Submitting…
            </>
          ) : (
            'Submit Enquiry'
          )}
        </button>
      </div>
    </form>
  );
}