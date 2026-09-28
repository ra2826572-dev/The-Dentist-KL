import { useState } from 'react';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const waLink = "https://wa.me/60129492467?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Dentist@KL.";

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Our Dentist', href: '#dentist' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact & Map', href: '#contact' },
  ];

  return (
    <>
      <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-slate-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          {/* Logo & Clinic Branding */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-900 to-teal-700 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-teal-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
                The Dentist<span className="text-teal-700">@KL</span>
              </span>
              <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                Menara Hap Seng · KL
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-teal-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+60129492467"
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-teal-800 px-3 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>+60 12-949 2467</span>
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4 text-teal-200" />
              <span>WhatsApp Appointment</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-4 space-y-3 shadow-xl">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 text-base font-medium text-slate-700 hover:text-teal-800 border-b border-slate-50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-teal-800 text-white font-semibold text-sm shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment (WhatsApp)</span>
              </a>
              <a
                href="tel:+60129492467"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-slate-100 text-slate-800 font-semibold text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>Call Clinic: +60 12-949 2467</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Fixed Bottom Appointment Bar on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 flex items-center gap-2.5 sm:hidden shadow-2xl">
        <a
          href="tel:+60129492467"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs font-bold active:bg-slate-100"
        >
          <Phone className="w-3.5 h-3.5 text-teal-700" />
          <span>Call</span>
        </a>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-800 text-white text-xs font-bold shadow-md active:bg-teal-900"
        >
          <Calendar className="w-3.5 h-3.5 text-teal-200" />
          <span>WhatsApp Booking</span>
        </a>
      </div>
    </>
  );
}
