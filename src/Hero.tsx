import { Phone, ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react';
import dentalHeroImg from './assets/images/dental_procedure_hero_1790589947274.jpg';

export default function Hero() {
  const waLink = "https://wa.me/60129492467?text=Hi!%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20Dentist@KL.";

  return (
    <section className="relative bg-gradient-to-b from-stone-50 via-teal-50/30 to-white pt-12 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Your Smile, <br className="hidden sm:inline" />
              <span className="text-teal-800">Our Priority.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-xl font-normal">
              Personalised dental care in the heart of Kuala Lumpur. Comfortable, professional treatment tailored for every smile at Menara Hap Seng.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white font-medium text-base shadow-lg shadow-teal-900/15 hover:shadow-teal-900/25 transition-all transform active:scale-95"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+60129492467"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-teal-50 border border-teal-200 text-teal-900 font-semibold text-base shadow-sm hover:border-teal-300 transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-800">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+60 12-949 2467</span>
              </a>
            </div>

            {/* Trust badge */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-slate-200/80">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm font-semibold text-slate-800">
                <span className="font-bold text-slate-900">4.9 / 5</span> Google Rating
                <span className="text-slate-400 mx-2">·</span>
                <span className="text-teal-800 underline decoration-teal-300 font-medium">446 Verified Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Pill Border & Overlays */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Outer Glow / Soft Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal-600/10 via-teal-500/10 to-transparent rounded-[2.5rem] blur-2xl -z-10" />

              {/* Main Pill-Shaped Image Container */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src={dentalHeroImg}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith('/images/dental_hero.jpg')) {
                      target.src = '/images/dental_hero.jpg';
                    }
                  }}
                  alt="Professional teeth whitening and dental care at The Dentist@KL"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />


                {/* Floating Bottom Info Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl text-white flex items-center justify-between border border-white/10 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-700 flex items-center justify-center text-white flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Sterile & Gentle Care</p>
                      <p className="text-[11px] text-teal-200">Menara Hap Seng, Jalan P. Ramlee</p>
                    </div>
                  </div>
                  <div className="flex items-center text-teal-300 text-xs font-semibold">
                    <MapPin className="w-3.5 h-3.5 mr-1" />
                    <span>KL City</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Transition to Trust Bar */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-14 preserve-3d"
        >
          <path
            d="M0,32L80,42.7C160,53,320,75,480,69.3C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
            className="fill-teal-900"
          />
        </svg>
      </div>
    </section>
  );
}
