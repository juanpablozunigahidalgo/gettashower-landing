import Image from 'next/image';
import { Play } from 'lucide-react';

export default function Vision() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Unlocking Urban{' '}
            <span className="text-[#0066FF]">Freedom.</span>
          </h1>
        </div>
      </section>

      {/* Editorial Layout: The Manifesto */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <article className="prose prose-lg max-w-none">
            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p className="text-2xl leading-relaxed text-gray-900">
                The future of cities isn't built on ownership—it's built on access.
              </p>

              <p>
                For too long, urban infrastructure has been locked behind walls: gym memberships,
                hotel rooms, private clubs. Meanwhile, the modern city dweller—the cyclist, the
                runner, the backpacker, the remote worker—moves fluidly through space, unbound
                by traditional schedules or locations.
              </p>

              <p>
                GettaShower believes in the <strong>15-minute city</strong>: a world where essential
                services are always within reach, where you can bike to a meeting, refresh at a
                nearby node, and continue your day without friction.
              </p>

              <div className="bg-gray-50 rounded-3xl p-10 my-12 border-l-4 border-[#0066FF]">
                <p className="text-xl italic text-gray-800 mb-0">
                  "We're not selling showers. We're selling freedom—the freedom to live actively
                  in your city, to move without constraints, to reclaim public space as your own."
                </p>
              </div>

              <h2 className="text-4xl font-bold tracking-tight mt-16 mb-6">
                The Active Mobility Revolution
              </h2>

              <p>
                Cities across Europe are transforming. Barcelona, Paris, Copenhagen—each is
                prioritizing bikes over cars, pedestrians over parking lots. But infrastructure
                hasn't caught up.
              </p>

              <p>
                You bike 10 kilometers to a client meeting. You arrive sweating. Where do you
                shower? You explore a city for 8 hours with a backpack. Where do you store it
                safely? You finish a morning run. Where do you clean up before work?
              </p>

              <p className="text-xl text-gray-900">
                <strong>GettaShower is the missing layer.</strong>
              </p>

              <p>
                We turn underutilized gym capacity into a distributed network of "Refresh Nodes"—
                accessible, affordable, and always nearby. It's infrastructure that adapts to how
                you actually live, not how cities were designed 50 years ago.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Video Integration */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">
            See the Vision
          </h2>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            <Image
              src="/Vision.jpg"
              alt="Barcelona Urban Vision"
              width={1200}
              height={500}
              className="w-full h-[500px] object-cover"
            />
            {/* Video Play Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-[#0066FF] ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6">
            A cinematic journey through Barcelona's transformation
          </p>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            The City is Your Infrastructure
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            GettaShower is building the invisible layer that makes urban life seamless.
            Join us in reimagining what cities can be.
          </p>
        </div>
      </section>
    </div>
  );
}