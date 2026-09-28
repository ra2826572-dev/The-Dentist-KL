import { MapPin, Phone, MessageSquare, Clock, Navigation, Car, Train, Accessibility, ExternalLink } from 'lucide-react';

export default function Location() {
  const waLink = "https://wa.me/60129492467?text=Hi!%20I%20need%20directions%20or%20would%20like%20to%20visit%20The%20Dentist@KL.";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Menara+Hap+Seng+Jalan+P+Ramlee+Kuala+Lumpur";
  const wazeUrl = "https://waze.com/ul?q=Menara%20Hap%20Seng%20Kuala%20Lumpur";

  return (
    <section id="contact" className="py-20 bg-stone-50/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/70 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kuala Lumpur Golden Triangle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Location & Contact
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Conveniently situated on Level 1 of Menara Hap Seng on Jalan P. Ramlee, easily reachable from KLCC, Bukit Bintang, and central transit lines.
          </p>
        </div>

        {/* Main Grid: Details on Left, Interactive Map on Right */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Clinic Address, Contact, Operating Hours & Transit */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-800 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Clinic Address</h3>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    Unit 1-06, Level 1, Menara Hap Seng,<br />
                    Jalan P. Ramlee, 50250 Kuala Lumpur,<br />
                    Malaysia.
                  </p>
                  <p className="mt-2 text-xs text-teal-800 font-semibold bg-teal-50 inline-block px-2.5 py-1 rounded-md">
                    Near KL Tower & Bukit Nanas
                  </p>
                </div>
              </div>

              {/* Navigation Action Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-teal-600" />
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-900 text-xs font-semibold transition-colors"
                >
                  <Car className="w-3.5 h-3.5 text-sky-700" />
                  <span>Waze App</span>
                  <ExternalLink className="w-3 h-3 text-sky-600" />
                </a>
              </div>
            </div>

            {/* Direct Contact & WhatsApp */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-700" />
                <span>Appointments & Inquiries</span>
              </h3>

              <div className="space-y-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp: +60 12-949 2467</span>
                  </div>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded text-white font-medium">Fast Reply</span>
                </a>

                <a
                  href="tel:+60129492467"
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 text-slate-800 text-sm font-semibold transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-teal-700" />
                    <span>Call: +60 12-949 2467</span>
                  </div>
                  <span className="text-xs text-slate-500 font-normal">Direct Line</span>
                </a>
              </div>
            </div>

            {/* Clinic Opening Hours */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-700" />
                <span>Operating Hours</span>
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Monday – Friday</span>
                  <span className="font-semibold text-slate-900">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-600">Saturday</span>
                  <span className="font-semibold text-slate-900">9:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5 text-slate-500">
                  <span>Sunday & Public Holidays</span>
                  <span className="font-medium text-teal-800">By Prior Appointment</span>
                </div>
              </div>
            </div>

            {/* Accessibility Highlights */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <Accessibility className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span>Wheelchair & lift accessible</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                <Train className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span>4-min walk to Monorail</span>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
              {/* Map Header Bar */}
              <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-sm font-bold text-slate-900">Interactive Map: Menara Hap Seng, KL</span>
                </div>
                <span className="text-xs text-slate-500 hidden sm:inline">Jalan P. Ramlee, 50250 KL</span>
              </div>

              {/* Live Google Maps Iframe */}
              <div className="relative w-full h-[460px] sm:h-[520px] rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  title="The Dentist@KL Location Map - Menara Hap Seng"
                  src="https://maps.google.com/maps?q=Menara+Hap+Seng,+Jalan+P.+Ramlee,+50250+Kuala+Lumpur,+Federal+Territory+of+Kuala+Lumpur,+Malaysia&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Overlaid Floating Info Tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200/80 text-xs font-semibold text-slate-800 flex items-center gap-2 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-teal-700" />
                  <span>The Dentist@KL · Level 1 (Unit 1-06)</span>
                </div>
              </div>

              {/* Transit & Parking Details below the map */}
              <div className="p-4 bg-slate-50 rounded-xl mt-3 grid sm:grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <Train className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">By Transit</strong>
                    Bukit Nanas Monorail (350m) or Dang Wangi LRT (650m).
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Car className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">By Car / Grab</strong>
                    Set destination to "Menara Hap Seng Lobby, Jalan P. Ramlee".
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Accessibility className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Parking & Access</strong>
                    Basement parking inside building with direct elevator to Level 1.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
