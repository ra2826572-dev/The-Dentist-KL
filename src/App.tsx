/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './Header';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Treatments from './Treatments';
import About from './About';
import Reviews from './Reviews';
import WhyUs from './WhyUs';
import Location from './Location';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <TrustBar />
      <Treatments />
      <About />
      <Reviews />
      <WhyUs />
      <Location />
      <FinalCTA />
      <Footer />
    </div>
  );
}
