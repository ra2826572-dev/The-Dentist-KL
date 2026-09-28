import { MessageSquare, Phone, Calendar, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const waLink = "https://wa.me/60129492467?text=Hi!%20I%20would%20like%20to%20schedule%20an%20appointment%20at%20The%20Dentist@KL.";

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-br from-teal-900 via-teal-950 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-teal-200 mb-6">
          <Calendar className="w-3.5 h-3.5" />
          <span>Appointment-Based Care in KL</span>
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">
          Ready for a Healthier, <br className="hidden sm:inline" />
          More Confident Smile?
        </h2>

        <p className="text-base sm:text-lg text-teal-100/90 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
          Book your private consultation with our gentle, experienced dental team at Menara Hap Seng, Jalan P. Ramlee.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-teal-50 text-teal-900 font-bold text-base shadow-xl transition-all transform active:scale-95"
          >
            <MessageSquare className="w-5 h-5 text-teal-800" />
            <span>Book Appointment on WhatsApp</span>
            <ArrowRight className="w-4 h-4 text-teal-800" />
          </a>

          <a
            href="tel:+60129492467"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base transition-colors"
          >
            <Phone className="w-4 h-4 text-teal-300" />
            <span>Call +60 12-949 2467</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-teal-300/80">
          Unit 1-06, Level 1, Menara Hap Seng, Jalan P. Ramlee, 50250 Kuala Lumpur
        </p>
      </div>
    </section>
  );
}
