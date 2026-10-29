import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Briefcase, MapPin, Clock, GraduationCap, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useSEO } from '../lib/seo.js';
import Eyebrow from '../components/primitives/Eyebrow.jsx';
import ImageReveal from '../components/primitives/ImageReveal.jsx';
import Field from '../components/forms/Field.jsx';
import { useForm } from '../components/forms/useForm.js';
import { fadeUp, stagger, EASE } from '../lib/motion.js';
import { departments, openings } from '../data/careers.js';

function CVForm() {
  const { values, errors, status, setField, submit, reset } = useForm({
    initialValues: { name: '', email: '', role: '', linkedin: '', message: '', file: null },
    validate: (v) => {
      const e = {};
      if (!v.name.trim()) e.name = 'Please enter your name.';
      if (!v.email.trim()) e.email = 'Please enter your email.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Please enter a valid email.';
      if (!v.message.trim()) e.message = 'Please tell us a little about yourself.';
      return e;
    },
    onSubmit: async () => {
      await new Promise((r) => setTimeout(r, 700));
    },
  });

  const handleFile = (e) => {
    const file = e.target.files?.[0] || null;
    setField({ target: { name: 'file', value: file } });
  };

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
          Your CV has been received. We’ll be in touch if there’s a match.
        </p>
        <button onClick={reset} className="mt-6 link-underline">Submit another CV</button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" name="name" value={values.name} onChange={setField} error={errors.name} required placeholder="Your name" />
        <Field label="Email" name="email" type="email" value={values.email} onChange={setField} error={errors.email} required placeholder="you@example.com" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Role of interest" name="role" value={values.role} onChange={setField} placeholder="e.g. Production Supervisor" />
        <Field label="LinkedIn (optional)" name="linkedin" value={values.linkedin} onChange={setField} placeholder="linkedin.com/in/…" />
      </div>
      <Field
        label="Cover message"
        name="message"
        as="textarea"
        rows={4}
        value={values.message}
        onChange={setField}
        error={errors.message}
        required
        placeholder="Tell us a little about yourself and what you're looking for."
      />

      <div>
        <label htmlFor="cv-file" className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
          Attach CV (PDF, optional)
        </label>
        <div className="mt-2">
          <input
            id="cv-file"
            name="file"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFile}
            className="block w-full text-sm text-ink-600 file:mr-4 file:rounded-full file:border-0 file:bg-ink file:text-cream-50 file:px-5 file:py-2.5 file:text-sm file:font-medium hover:file:bg-ink-800 file:cursor-pointer"
          />
          {values.file && (
            <p className="mt-2 text-xs text-ink-500">Attached: {values.file.name}</p>
          )}
        </div>
      </div>

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
          <><Loader2 size={16} className="animate-spin" /> Submitting…</>
        ) : (
          'Submit CV'
        )}
      </button>
    </form>
  );
}

export default function Careers() {
  useSEO({
    title: 'Careers — Niger Biscuit',
    description: 'Build your future with Niger Biscuit. Explore careers, culture and current opportunities.',
    canonical: '/careers',
  });

  const [activeDept, setActiveDept] = useState('All');
  const visible = activeDept === 'All' ? openings : openings.filter((o) => o.department === activeDept);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-10 md:pt-16">
          <motion.div
            variants={stagger(0, 0.09)}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}><Eyebrow>Careers</Eyebrow></motion.div>
            <motion.h1 variants={fadeUp} className="mt-6 font-display text-display-xl text-balance">
              Build your future
              <br />
              <span className="italic text-gold">with us.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-xl text-ink-600 max-w-2xl text-pretty">
              Placeholder introduction — describe what it’s like to work at Niger
              Biscuit and what the company looks for in its people.
            </motion.p>
          </motion.div>
        </div>

        <div className="container-x mt-12">
          <ImageReveal
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=2000&q=80&auto=format&fit=crop"
            alt="Team at work"
            ratio="21/9"
            className="rounded-3xl"
            loading="eager"
          />
        </div>
      </section>

      {/* WHY */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            variants={stagger(0, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <motion.div variants={fadeUp}><Eyebrow>Why Niger Biscuit</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-display-md text-balance">
              A place to build a career.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-ink-600 text-pretty">
              Placeholder — describe culture, purpose and the opportunity to work
              in Nigerian manufacturing.
            </motion.p>
          </motion.div>
          <motion.div
            variants={stagger(0, 0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-5"
          >
            {[
              { t: 'Purpose', d: 'Placeholder — how work at Niger Biscuit connects to everyday Nigerian life.' },
              { t: 'Growth', d: 'Placeholder — training, development and progression.' },
              { t: 'People', d: 'Placeholder — what colleagues are like and how teams work.' },
              { t: 'Stability', d: 'Placeholder — long-term thinking and career paths.' },
            ].map(({ t, d }) => (
              <motion.div key={t} variants={fadeUp} className="card p-6">
                <h3 className="font-display text-lg">{t}</h3>
                <p className="mt-2 text-sm text-ink-600 text-pretty">{d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="bg-cream-100 border-y border-ink/10">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-3xl">
            <Eyebrow>Departments</Eyebrow>
            <h2 className="mt-4 font-display text-display-md text-balance">
              Where you could work.
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((d) => (
              <div key={d.title} className="card p-6">
                <Briefcase size={18} className="text-gold" />
                <h3 className="mt-4 font-display text-lg">{d.title}</h3>
                <p className="mt-2 text-sm text-ink-600 text-pretty">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPENINGS */}
      <section className="container-x py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Eyebrow>Current opportunities</Eyebrow>
            <h2 className="mt-4 font-display text-display-md text-balance">
              Open roles.
            </h2>
            <p className="mt-4 text-ink-600 max-w-xl text-pretty">
              Placeholder listings — replace with verified vacancies or remove
              when none are open.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', ...new Set(openings.map((o) => o.department))].map((d) => (
              <button
                key={d}
                onClick={() => setActiveDept(d)}
                className={`px-3.5 py-2 rounded-full text-[13px] border transition-colors ${
                  activeDept === d
                    ? 'bg-ink text-cream-50 border-ink'
                    : 'border-ink/15 text-ink-700 hover:border-ink/40'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-3">
          {visible.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-ink/20 p-10 text-center">
              <p className="text-ink-500">No roles currently open in this department.</p>
              <Link to="/contact" className="mt-3 link-underline inline-flex">
                Send a speculative CV →
              </Link>
            </div>
          ) : (
            visible.map((o, i) => (
              <motion.div
                key={o.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  to="#apply"
                  className="group card flex flex-col sm:flex-row sm:items-center gap-4 p-6 hover:border-ink/25 transition-colors"
                >
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-ink-500">
                      {o.department}
                    </div>
                    <h3 className="mt-1 font-display text-xl">{o.title}</h3>
                    <p className="mt-1 text-sm text-ink-600">{o.summary}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-ink-500">
                      <span className="inline-flex items-center gap-1.5"><MapPin size={12} />{o.location}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock size={12} />{o.type}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-ink shrink-0">
                    View role
                    <span className="h-9 w-9 rounded-full border border-ink/15 inline-flex items-center justify-center group-hover:bg-ink group-hover:text-cream-50 transition">
                      <ArrowUpRight size={14} />
                    </span>
                  </span>
                </Link>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* INTERNSHIP */}
      <section className="bg-cream-100 border-y border-ink/10">
        <div className="container-x py-16">
          <div className="card p-8 sm:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="h-12 w-12 rounded-full bg-ink text-cream-50 inline-flex items-center justify-center shrink-0">
              <GraduationCap size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-2xl">Internship & SIWES</h3>
              <p className="mt-2 text-ink-600 text-pretty">
                Placeholder — describe internship and SIWES opportunities for
                students and graduates.
              </p>
            </div>
            <a href="#apply" className="btn-secondary shrink-0">Submit interest</a>
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Submit your CV</Eyebrow>
            <h2 className="mt-4 font-display text-display-md text-balance">
              Don’t see your role?
            </h2>
            <p className="mt-5 text-ink-600 text-pretty">
              Placeholder — invite speculative applications and describe what
              happens after submission. Endpoint is a placeholder.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-8">
              <CVForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}