import { ShieldCheck, UserCheck, HeartHandshake, MapPin } from 'lucide-react';

export default function TrustBar() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Safe & Sterile",
      subtitle: "Strict hospital-grade hygiene & disinfection protocols"
    },
    {
      icon: UserCheck,
      title: "Experienced Dental Care",
      subtitle: "Professional practitioners focused on gentle clinical precision"
    },
    {
      icon: HeartHandshake,
      title: "Patient-Focused Service",
      subtitle: "Transparent consultations with stress-free care"
    },
    {
      icon: MapPin,
      title: "Convenient KL Location",
      subtitle: "Level 1, Menara Hap Seng on Jalan P. Ramlee"
    }
  ];

  return (
    <section className="bg-teal-900 text-white pt-6 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 border-t border-teal-800/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-teal-800/50 hover:bg-teal-800/80 border border-teal-700/50 hover:border-teal-500/50 rounded-2xl p-5 transition-all duration-300 shadow-sm flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-700/70 border border-teal-600/40 flex items-center justify-center text-teal-200 mb-4 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed font-light">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
