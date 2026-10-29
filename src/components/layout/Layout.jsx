import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream-50">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-cream-50 focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to content
      </a>
      <Navbar />
      <div id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </div>
      <Footer />
    </div>
  );
}