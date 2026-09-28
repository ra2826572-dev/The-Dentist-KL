import { CheckCircle2, Heart, Award, Sparkles } from 'lucide-react';

export default function About() {
  const waLink = "https://wa.me/60129492467?text=Hi!%20I%20would%20like%20to%20consult%20with%20the%20dentist%20at%20The%20Dentist@KL.";

  const values = [
    "Gentle, stress-free clinical approach tailored to your comfort",
    "Clear, honest consultations with no hidden procedures",
    "Modern diagnostic dental equipment and sterilization standards",
    "Peaceful, contemporary clinic lounge in Menara Hap Seng"
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Clinic Photo Container with pill shape */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-stone-100 bg-stone-100">
              <img
                src="/src/assets/images/clinic_reception_interior_1790590787201.jpg"
                alt="The Dentist@KL modern clinic reception counter and patient lounge at Menara Hap Seng"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-800/80 backdrop-blur-md text-xs font-semibold text-teal-100 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Clinic Atmosphere
                </span>
                <p className="text-base font-semibold">Designed for calm, relaxed dental visits</p>
                <p className="text-xs text-slate-200">Level 1, Menara Hap Seng, KL</p>
              </div>
            </div>

            {/* Overlapping Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -right-4 bg-teal-900 text-white p-4 rounded-2xl shadow-xl border-2 border-white items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-800 flex items-center justify-center text-teal-200">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <p className="text-xs text-teal-200 font-medium">Patient Satisfaction</p>
                <p className="text-sm font-bold">4.9 / 5.0 Rated Clinic</p>
              </div>
            </div>
          </div>

          {/* Text and Introduction */}
          <div id="dentist" className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>About The Clinic</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Comfortable, Caring Dentistry <br />
              <span className="text-teal-800">Right in Central KL.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At <strong className="text-slate-900 font-semibold">The Dentist@KL</strong>, we believe dental visits should be relaxing, transparent, and built on trust. Conveniently located on Level 1 of Menara Hap Seng on Jalan P. Ramlee, our clinic provides dedicated, appointment-based dental care tailored to your unique smile.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are visiting for routine scaling and polishing, restorative crowns, or cosmetic teeth whitening, our focus is always on your long-term oral health and peace of mind.
            </p>

            {/* Value checklist */}
            <div className="space-y-3 pt-2">
              {values.map((v, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700 font-medium">{v}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-teal-800 hover:bg-teal-900 text-white font-medium text-sm sm:text-base shadow-md transition-all"
              >
                Meet Our Dentist & Team
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm sm:text-base transition-colors"
              >
                View Treatments
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
