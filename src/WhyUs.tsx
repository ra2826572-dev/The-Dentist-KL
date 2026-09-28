import { MapPin, Accessibility, Clock, CreditCard, Check, Sparkles } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: MapPin,
      title: 'Convenient KL Location',
      desc: 'Prime position in Menara Hap Seng on Jalan P. Ramlee. Ideal for KL professionals, residents, and visitors with easy transit and highway links.',
      detail: 'Walking distance to Monorail & LRT'
    },
    {
      icon: Accessibility,
      title: 'Wheelchair & Barrier-Free Access',
      desc: 'Full wheelchair accessibility throughout Menara Hap Seng, with step-free entry, wide elevators, and dedicated accessible facilities.',
      detail: 'Step-free entrance & dedicated parking'
    },
    {
      icon: Clock,
      title: 'Appointment-Based Scheduling',
      desc: 'We value your schedule. Dedicated time slots ensure minimal waiting times, private consultations, and uninterrupted patient attention.',
      detail: 'Punctual & unhurried visits'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment Options',
      desc: 'Hassle-free settlement with support for major credit cards, debit cards, Malaysian online banking (FPX), and e-wallet mobile payments.',
      detail: 'Cards, e-wallets, & contactless accepted'
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-stone-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Patient Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Patients Choose The Dentist@KL
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Designed around your comfort, accessibility, and peace of mind from the moment you schedule your visit.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {r.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {r.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-teal-800">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>{r.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
