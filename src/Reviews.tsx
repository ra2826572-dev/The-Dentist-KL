import { Star, CheckCircle, ExternalLink, ThumbsUp } from 'lucide-react';

export default function Reviews() {
  const reviewsUrl = "https://www.google.com/maps/search/?api=1&query=The+Dentist+KL+Menara+Hap+Seng";

  const feedbackThemes = [
    {
      theme: "Gentle & Attentive Care",
      quote: "Very gentle during the scaling and cleaning procedure. The dentist took time to explain every step clearly, which relieved all my dental anxiety.",
      patient: "Verified Patient",
      date: "Recent Visit",
      highlight: "Pain-free experience"
    },
    {
      theme: "Punctual & Transparent",
      quote: "Smooth appointment-based scheduling with zero waiting time at Menara Hap Seng. Honest advice without pushing unnecessary treatments.",
      patient: "Verified Patient",
      date: "Recent Visit",
      highlight: "No waiting time"
    },
    {
      theme: "Clean & Modern Clinic",
      quote: "Prisinte, modern clinic with a relaxing ambiance. Highly recommend The Dentist@KL for anyone working around the Jalan P. Ramlee area.",
      patient: "Verified Patient",
      date: "Recent Visit",
      highlight: "Comfortable clinic"
    }
  ];

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Google Rating Banner */}
        <div className="bg-gradient-to-br from-teal-900 via-teal-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-14">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-teal-200 text-xs font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Google Business Reviews</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Trusted by 440+ Patients in Kuala Lumpur
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We are proud to uphold a consistent 4.9-star rating based on genuine patient feedback for gentle care, professional communication, and comfortable treatment.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col items-center md:items-end justify-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center w-full max-w-xs shadow-inner">
                <div className="text-5xl font-black text-white tracking-tight mb-2">
                  4.9
                  <span className="text-2xl font-light text-teal-200"> / 5.0</span>
                </div>
                <div className="flex justify-center gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-200 font-semibold uppercase tracking-wider">
                  446 Total Google Reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {feedbackThemes.map((item, index) => (
            <div
              key={index}
              className="bg-stone-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800">
                    {item.highlight}
                  </span>
                </div>

                <p className="text-slate-700 text-sm italic leading-relaxed mb-6 font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <ThumbsUp className="w-3.5 h-3.5 text-teal-700" />
                  <span>{item.patient}</span>
                </div>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Read more button */}
        <div className="mt-10 text-center">
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-colors"
          >
            <span>Read All 446 Reviews on Google Business Profile</span>
            <ExternalLink className="w-4 h-4 text-slate-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
