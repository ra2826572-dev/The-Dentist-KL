import { MapPin, Phone, MessageSquare, Clock, Sparkles } from 'lucide-react';

export default function Footer() {
  const waLink = "https://wa.me/60129492467?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Dentist@KL.";

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-teal-800 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-teal-200" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                The Dentist<span className="text-teal-400">@KL</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Modern dental clinic providing personalized, gentle oral care in Menara Hap Seng, Jalan P. Ramlee, Kuala Lumpur.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-teal-300">
              <span>Verified 4.9 ★ Google Rating (446 Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-teal-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-300 transition-colors">About Clinic</a></li>
              <li><a href="#treatments" className="hover:text-teal-300 transition-colors">Dental Treatments</a></li>
              <li><a href="#reviews" className="hover:text-teal-300 transition-colors">Patient Reviews</a></li>
              <li><a href="#contact" className="hover:text-teal-300 transition-colors">Location & Map</a></li>
            </ul>
          </div>

          {/* Treatments List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Key Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#treatments" className="hover:text-teal-300 transition-colors">Teeth Whitening</a></li>
              <li><a href="#treatments" className="hover:text-teal-300 transition-colors">Scaling & Polishing</a></li>
              <li><a href="#treatments" className="hover:text-teal-300 transition-colors">Dental Crowns</a></li>
              <li><a href="#treatments" className="hover:text-teal-300 transition-colors">Braces Consultation</a></li>
              <li><a href="#treatments" className="hover:text-teal-300 transition-colors">General & Cosmetic Dentistry</a></li>
            </ul>
          </div>

          {/* Clinic Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact & Visit</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Unit 1-06, Level 1, Menara Hap Seng, Jalan P. Ramlee, 50250 KL</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:+60129492467" className="hover:text-white transition-colors">+60 12-949 2467</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 font-medium">WhatsApp Booking</a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Mon–Fri: 9am–6pm | Sat: 9am–4pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 The Dentist@KL. All rights reserved.</p>
          <p>1-06, Level 1, Menara Hap Seng, Jalan P. Ramlee, 50250 Kuala Lumpur, Malaysia.</p>
        </div>
      </div>
    </footer>
  );
}
