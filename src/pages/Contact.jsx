import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Building2, Briefcase, Truck } from 'lucide-react';
import { useSEO } from '../lib/seo.js';
import PageHeader from '../components/PageHeader.jsx';
import Eyebrow from '../components/primitives/Eyebrow.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';
import { company } from '../data/company.js';
import { fadeUp, stagger } from '../lib/motion.js';

const cards = [
  { key: 'general',    icon: MessageSquare, title: 'General enquiries', text: 'For general questions about Niger Biscuit.', email: company.contact.email },
  { key: 'sales',      icon: Building2,     title: 'Sales',              text: 'For sales-related enquiries and trade.',      email: company.contact.email },
  { key: 'distributor',icon: Truck,         title: 'Distributor enquiries', text: 'For distribution partnerships.',          email: company.contact.email },
  { key: 'careers',    icon: Briefcase,     title: 'Careers',            text: 'For careers, CVs and internships.',           email: company.contact.email },
];

export default function Contact() {
  useSEO({
    title: 'Contact — Niger Biscuit',
    description: 'Get in touch with Niger Biscuit — general enquiries, sales, distributors, careers.',
    canonical: '/contact',
  });

  const [topic, setTopic] = useState('general');

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        description="Reach the right team. Select a topic or use the form below."
      />

      <section className="container-x pb-16">
        <motion.div
          variants={stagger(0, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {cards.map(({ key, icon: Icon, title, text, email }) => (
            <motion.button
              key={key}
              variants={fadeUp}
              onClick={() => {
                setTopic(key);
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className={`text-left card p-6 transition-colors ${
                topic === key ? 'border-ink/50 bg-cream-200/50' : 'hover:border-ink/25'
              }`}
            >
              <div className="h-10 w-10 rounded-full bg-ink text-cream-50 inline-flex items-center justify-center">
                <Icon size={16} />
              </div>
              <h3 className="mt-4 font-display text-lg">{title}</h3>
              <p className="mt-1 text-sm text-ink-600 text-pretty">{text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-ink-500">
                <Mail size={12} /> {email}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Form + Locations */}
      <section id="contact-form" className="bg-cream-100 border-y border-ink/10">
        <div className="container-x py-20 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Message</Eyebrow>
            <h2 className="mt-4 font-display text-display-md text-balance">
              Send us a message.
            </h2>
            <p className="mt-5 text-ink-600 text-pretty">
              Placeholder copy — indicate typical response times and what to
              expect after submitting.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-3 text-sm text-ink-700">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-ink-500">Head Office</div>
                  <div className="mt-1">{company.locations.headOffice}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-ink-700">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-ink-500">Manufacturing</div>
                  <div className="mt-1">{company.locations.manufacturing}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-ink-700">
                <Phone size={16} className="mt-0.5 text-gold shrink-0" />
                <a href={`tel:${company.contact.phone}`} className="hover:text-ink">
                  {company.contact.phone}
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 aspect-[4/3] rounded-2xl border border-dashed border-ink/20 bg-cream-50 flex items-center justify-center">
              <div className="text-center text-ink-400">
                <MapPin size={24} className="mx-auto" />
                <p className="mt-2 text-xs uppercase tracking-[0.18em]">Map placeholder</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="card p-6 sm:p-8">
              <ContactForm defaultTopic={topic} key={topic} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}