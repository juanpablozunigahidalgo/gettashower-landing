import Image from 'next/image';
import Link from 'next/link';
import { MapPin, QrCode } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section — 50% texto izquierda, 50% móvil derecha, misma alineación que el resto */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center bg-[#FFFFFF] overflow-hidden">
        <div className="w-full py-8 lg:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Mitad izquierda: texto */}
            <div className="z-10 lg:pl-8 xl:pl-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 leading-[1.15] text-[#1A2B70]">
                Shower Network
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-[#1A2B70] mb-4">
                Make the city liveable.
              </h2>
              <p className="text-base sm:text-lg text-[#4A5F9E] leading-relaxed max-w-lg mb-6">
                Unlock premium gym and hotel facilities in seconds. No bookings, no friction—just find your nearest Refresh Node, get directions, and go. Take a shower. Save time. Get ready for your next activity. Enjoy the city on your terms.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="https://www.prototype.gettashower.com/" target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 bg-[#1A2B70] text-white font-bold rounded-xl hover:bg-[#253580] transition-all shadow-lg shadow-[#fffff]/20 text-sm">
                    Live
                  </button>
                </Link>
              </div>
            </div>

            {/* Mitad derecha: móvil, alineado a la derecha */}
            <div className="relative flex justify-center lg:justify-end bg-white lg:pr-8 xl:pr-12">
              <div className="relative transform hover:scale-[1.02] transition-transform duration-500 ease-out">
                <Image
                  src="/phone-app.png"
                  alt="GettaShower App — map with Refresh Nodes in Barcelona"
                  width={310}
                  height={620}
                  className="w-full max-w-[260px] h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Engine — mismo contenedor que layout (consistencia) */}
      <section id="discovery" className="py-24 bg-[#FFFFFF]">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 leading-[1.15] text-[#1A2B70]">
              The Discovery Engine
            </h2>
            <p className="text-xl text-[#4A5F9E]">
              Real Refresh Nodes across cities and countries
            </p>
          </div>

          {/* App Mockup Showcase */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#FFFFFF] rounded-3xl p-5 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Left: Mobile Mockup */}
                <div className="flex-shrink-0">
                  <Image
                    src="/mockup-iphone-3d.png"
                    alt="GettaShower Discovery Interface"
                    width={350}
                    height={700}
                    className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[350px] h-auto"
                  />
                </div>

                {/* Right: Feature Explanation */}
                <div className="flex-1 space-y-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-[#1A2B70]">Find Premium Nodes Instantly</h3>
                    <p className="text-lg text-[#4A5F9E] leading-relaxed">
                      Our map-based discovery shows real-time showers and lockers availability across cities and countries.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1A2B70] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">€10</span>
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1 text-[#1A2B70]">Private Rental Shower</div>
                        <div className="text-[#4A5F9E]">Premium shower facility. Gym, Hostel, Hotel. Towels and toiletries optional.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1A2B70] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1 text-[#1A2B70]">One-Tap Directions</div>
                        <div className="text-[#4A5F9E]">Instant navigation to your nearest node</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#1A2B70] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <QrCode className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1 text-[#1A2B70]">Friction Less Payment</div>
                        <div className="text-[#4A5F9E]">No bookings. Just nearest node. Refresh any time.</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break: Video */}
      <section className="py-16 sm:py-24 bg-[#FFFFFF]">
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/aYSAal_miC4?si=MeCFnn6-AhVrdnye"
              title="GettaShower — Barcelona"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full min-h-[220px] sm:min-h-[320px] md:min-h-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}