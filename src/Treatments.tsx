import { Stethoscope, Sparkles, Smile, ShieldCheck, Zap, HeartHandshake, ArrowRight } from 'lucide-react';

export default function Treatments() {
  const waLink = "https://wa.me/60129492467?text=Hi!%20I%20would%20like%20to%20inquire%20about%20dental%20treatments%20at%20The%20Dentist@KL.";

  const treatments = [
    {
      icon: Stethoscope,
      title: 'General Dentistry',
      tag: 'Essential Care',
      desc: 'Comprehensive oral examinations, diagnostic assessments, and proactive oral health care for healthy teeth and gums.'
    },
    {
      icon: Sparkles,
      title: 'Scaling & Polishing',
      tag: 'Preventive',
      desc: 'Gentle removal of plaque, tartar, and surface stains to maintain clean teeth, healthy gums, and fresh breath.'
    },
    {
      icon: Smile,
      title: 'Teeth Whitening',
      tag: 'Cosmetic',
      desc: 'Professional in-clinic teeth whitening treatment to safely brighten discoloured teeth with controlled clinical technology.'
    },
    {
      icon: ShieldCheck,
      title: 'Dental Crowns',
      tag: 'Restorative',
      desc: 'Custom-crafted dental crowns to protect, restore, and strengthen damaged, fractured, or weakened natural teeth.'
    },
    {
      icon: Zap,
      title: 'Braces Consultation',
      tag: 'Orthodontics',
      desc: 'Thorough assessment and personalised consultation regarding alignment options and teeth straightening solutions.'
    },
    {
      icon: HeartHandshake,
      title: 'Cosmetic Dentistry',
      tag: 'Smile Design',
      desc: 'Aesthetic smile enhancements designed to bring harmony, natural proportion, and confidence to your smile.'
    },
  ];

  return (
    <section id="treatments" className="py-20 sm:py-24 bg-stone-50/60 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Clinical Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Dental Services
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Personalised, gentle dental procedures designed to maintain, restore, and enhance your smile with comfort and clinical precision.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treatments.map((t, index) => {
            const Icon = t.icon;
            return (
              <div
                key={index}
                className="group bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 group-hover:scale-105 group-hover:bg-teal-800 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {t.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-900 transition-colors">
                    {t.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {t.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-950 transition-colors"
                  >
                    <span>Inquire About Treatment</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
