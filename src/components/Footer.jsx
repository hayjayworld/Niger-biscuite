import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import Logo from './Logo.jsx';
import { company } from '../data/company.js';

const cols = [
  {
    title: 'Company',
    links: [
      { to: '/story', label: 'Our Story' },
      { to: '/story#leadership', label: 'Leadership' },
      { to: '/careers', label: 'Careers' },
      { to: '/stories', label: 'News' },
    ],
  },
  {
    title: 'Products',
    links: [
      { to: '/products', label: 'All Products' },
      { to: '/products?category=Biscuits', label: 'Biscuits' },
      { to: '/products?category=Cookies', label: 'Cookies' },
      { to: '/products?category=Crackers', label: 'Crackers' },
      { to: '/products?category=Snacks', label: 'Snacks' },
    ],
  },
  {
    title: 'Business',
    links: [
      { to: '/distribution', label: 'Distribution' },
      { to: '/distribution#wholesale', label: 'Wholesale' },
      { to: '/distribution#partnerships', label: 'Partnerships' },
    ],
  },
  {
    title: 'Help',
    links: [
      { to: '/contact', label: 'Contact' },
      { to: '/contact#faqs', label: 'FAQs' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-50 mt-24 grain">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            <Logo onDark />
            <p className="text-cream-50/70 max-w-sm text-pretty">
              A Nigerian biscuit and FMCG manufacturer. Placeholder introduction — replace with verified company summary.
            </p>
            <div className="space-y-2 text-sm text-cream-50/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <span>{company.locations.headOffice}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a href={`mailto:${company.contact.email}`} className="hover:text-cream-50 transition">
                  {company.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a href={`tel:${company.contact.phone}`} className="hover:text-cream-50 transition">
                  {company.contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link (placeholder)"
                  className="h-9 w-9 rounded-full border border-cream-50/20 inline-flex items-center justify-center hover:bg-cream-50/10 transition"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-[11px] uppercase tracking-[0.22em] text-cream-50/50 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-cream-50/80 hover:text-gold transition inline-flex items-center gap-1 group"
                      >
                        {l.label}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream-50/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-cream-50/50">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {company.name}.</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="#" className="hover:text-cream-50 transition">Privacy Policy</Link>
            <Link to="#" className="hover:text-cream-50 transition">Terms</Link>
            <span className="hidden sm:inline">Made in Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}