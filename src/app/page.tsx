import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Typography */}
            <div className="z-10">
              <h1 className="text-7xl font-bold tracking-tight mb-4 leading-[1.1] text-gray-900">
                Shower & Locker <br />
                <span className="text-[#0066FF]">Network.</span>
              </h1>
              <h2 className="text-3xl font-medium text-gray-800 mb-8">
                Make the city liveable.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg mb-10">
                Unlock premium gym facilities in seconds. No bookings, no friction—just
                find your nearest Refresh Node, get directions, and go.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/prototype">
                  <button className="px-8 py-4 bg-[#0066FF] text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                    Prototype
                  </button>
                </Link>
                {/* <button className="px-8 py-4 bg-white text-gray-700 border border-gray-200 font-bold rounded-2xl hover:bg-gray-50 transition-all">
                  How it works
                </button> */}
              </div>
            </div>

            {/* Right: Mobile App Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Decorative background blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

              <div className="relative z-10 transform hover:scale-105 transition-transform duration-700 ease-out">
                <Image
                  src="/Single-Mobil.jpg" // Usa la imagen generada aquí
                  alt="GettaShower App Discovery Interface"
                  width={450}
                  height={900}
                  className="w-full max-w-[420px] h-auto drop-shadow-[0_35px_35px_rgba(0,102,255,0.15)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Engine */}
      <section id="discovery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tight mb-4">
              The Discovery Engine
            </h2>
            <p className="text-xl text-gray-600">
              Real Refresh Nodes across cities and countries
            </p>
          </div>

          {/* App Mockup Showcase */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-100 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left: Mobile Mockup */}
                <div className="flex-shrink-0">
                  <Image
                    src="/mockup-iphone-3d.png"
                    alt="GettaShower Discovery Interface"
                    width={350}
                    height={700}
                    className="w-full max-w-[350px] h-auto drop-shadow-2xl"
                  />
                </div>

                {/* Right: Feature Explanation */}
                <div className="flex-1 space-y-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Find Premium Nodes Instantly</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our map-based discovery shows real-time showers and lockers availability across cities and countries.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0066FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">€8</span>
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">Private Rental Shower</div>
                        <div className="text-gray-600">Premium facilities with towels and toiletries included</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0066FF] rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">€3</span>
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">Secure Storage</div>
                        <div className="text-gray-600">Large lockers for bags and equipment</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#0066FF]" />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">One-Tap Directions</div>
                        <div className="text-gray-600">Instant navigation to your nearest node</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 italic">
                      Live data from Gym Eixample, Beach Center, Gothic Quarter Fitness, and more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Break: Barcelona Scene */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/Barcelona-City.jpg"
              alt="Barcelona Urban Architecture"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}