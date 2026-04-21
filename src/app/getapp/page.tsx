import { Clock3, MapPin, ShieldCheck, Smartphone } from 'lucide-react';
import { VideoDragCarousel } from '@/components/VideoDragCarousel';

const LIVE_PROTOTYPE_URL = 'https://www.prototype.gettashower.com/#/explore';
const YOUTUBE_SHORTS_ID = 'd1FeOM856Dc';
const HERO_VIDEOS = [
  {
    id: 'tiktok-first',
    title: 'GettaShower TikTok demo 1',
    embedUrl: 'https://www.tiktok.com/player/v1/7630503253024787734?description=0&music_info=0&controls=1',
  },
  {
    id: 'app-exploration-reel',
    title: 'GettaShower app exploration reel',
    embedUrl: `https://www.youtube.com/embed/${YOUTUBE_SHORTS_ID}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${YOUTUBE_SHORTS_ID}`,
  },
  {
    id: 'tiktok-second',
    title: 'GettaShower TikTok demo 2',
    embedUrl: 'https://www.tiktok.com/player/v1/7631205489241591062?description=0&music_info=0&controls=1',
  },
  {
    id: 'tiktok-third',
    title: 'GettaShower TikTok demo 3',
    embedUrl: 'https://www.tiktok.com/player/v1/7631211758320897302?description=0&music_info=0&controls=1',
  },
  {
    id: 'helena-youtube',
    title: 'Helena GettaShower video',
    embedUrl: 'https://www.youtube.com/embed/aYSAal_miC4?autoplay=1&mute=1&playsinline=1',
  },
];

export default function GetApp() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-x-hidden min-w-0">
      {/* Hero: download first */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center bg-[#FFFFFF] overflow-hidden">
        <div className="w-full py-8 lg:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="relative flex justify-center lg:justify-start bg-white lg:pl-8 xl:pl-12">
              <div className="w-full max-w-[260px]">
                <VideoDragCarousel videos={HERO_VIDEOS} />
              </div>
            </div>

            <div className="z-10 lg:pr-8 xl:pr-12">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 leading-[1.15] text-[#1A2B70]">
                Find a shower in seconds.
              </h1>
              <p className="text-base sm:text-lg text-[#4A5F9E] leading-relaxed max-w-lg mb-6">
                Stay fresh between meetings, workouts, travel, and plans with friends. GettaShower helps you find nearby premium showers so you save time and keep moving to the next activity. Enjoy the city on your own terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-start">
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity w-fit"
                  aria-label="Download on Google Play"
                >
                  <img src="/google-play-badge.svg" alt="Get it on Google Play" className="h-14 sm:h-20 md:h-24 w-auto object-contain max-w-[190px] sm:max-w-[240px] md:max-w-[280px]" />
                </a>
                <a
                  href="https://apps.apple.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity w-fit"
                  aria-label="Download on the App Store"
                >
                  <img src="/app-store-badge.svg" alt="Download on the App Store" className="h-14 sm:h-20 md:h-24 w-auto object-contain max-w-[190px] sm:max-w-[240px] md:max-w-[280px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why users choose GettaShower */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 text-[#1A2B70] text-center">
            Why users choose GettaShower
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-[#F6F8FE] border border-[#D0D8EB] rounded-2xl p-6">
              <Clock3 className="w-7 h-7 text-[#1A2B70] mb-4" />
              <h3 className="text-xl font-bold text-[#1A2B70] mb-2">Save time every day</h3>
              <p className="text-[#4A5F9E] leading-relaxed">
                Avoid returning home just to refresh. Stay on schedule between work, training, and social plans.
              </p>
            </div>
            <div className="bg-[#F6F8FE] border border-[#D0D8EB] rounded-2xl p-6">
              <MapPin className="w-7 h-7 text-[#1A2B70] mb-4" />
              <h3 className="text-xl font-bold text-[#1A2B70] mb-2">Find nearby facilities fast</h3>
              <p className="text-[#4A5F9E] leading-relaxed">
                Discover trusted showers and lockers near your location in gyms, hostels, and hotels.
              </p>
            </div>
            <div className="bg-[#F6F8FE] border border-[#D0D8EB] rounded-2xl p-6">
              <ShieldCheck className="w-7 h-7 text-[#1A2B70] mb-4" />
              <h3 className="text-xl font-bold text-[#1A2B70] mb-2">Reliable and secure access</h3>
              <p className="text-[#4A5F9E] leading-relaxed">
                Use quality facilities with clear information, streamlined payments, and a frictionless check-in flow.
              </p>
            </div>
            <div className="bg-[#F6F8FE] border border-[#D0D8EB] rounded-2xl p-6">
              <Smartphone className="w-7 h-7 text-[#1A2B70] mb-4" />
              <h3 className="text-xl font-bold text-[#1A2B70] mb-2">Built for people on the move</h3>
              <p className="text-[#4A5F9E] leading-relaxed">
                Perfect for commuters, cyclists, travelers, and anyone who needs to stay at their best in the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 text-[#1A2B70] text-center">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-[#FFFFFF] border border-[#D0D8EB] rounded-2xl p-6">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-[#1A2B70] text-white font-bold rounded-xl mb-4">1</span>
              <h3 className="text-xl font-bold text-[#1A2B70] mb-2">Find your nearest node</h3>
              <p className="text-[#4A5F9E] leading-relaxed">
                Open the app and search nearby premium showers based on your location.
              </p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#D0D8EB] rounded-2xl p-6">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-[#1A2B70] text-white font-bold rounded-xl mb-4">2</span>
              <h3 className="text-xl font-bold text-[#1A2B70] mb-2">Access and pay quickly</h3>
              <p className="text-[#4A5F9E] leading-relaxed">
                Choose a facility, complete payment in seconds, and get ready to use it.
              </p>
            </div>
            <div className="bg-[#FFFFFF] border border-[#D0D8EB] rounded-2xl p-6">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-[#1A2B70] text-white font-bold rounded-xl mb-4">3</span>
              <h3 className="text-xl font-bold text-[#1A2B70] mb-2">Refresh and continue your day</h3>
              <p className="text-[#4A5F9E] leading-relaxed">
                Take a shower, get fix, and move to your next activity with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Repeat download CTA */}
      <section className="py-14 sm:py-16 bg-[#1A2B70]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to save time in the city?
          </h2>
          <p className="text-[#DCE4FF] text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Download GettaShower and find premium showers and lockers when and where you need them.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity w-fit"
              aria-label="Download on Google Play"
            >
              <img src="/google-play-badge.svg" alt="Get it on Google Play" className="h-14 sm:h-20 md:h-24 w-auto object-contain max-w-[190px] sm:max-w-[240px] md:max-w-[280px]" />
            </a>
            <a
              href="https://apps.apple.com/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity w-fit"
              aria-label="Download on the App Store"
            >
              <img src="/app-store-badge.svg" alt="Download on the App Store" className="h-14 sm:h-20 md:h-24 w-auto object-contain max-w-[190px] sm:max-w-[240px] md:max-w-[280px]" />
            </a>
          </div>
        </div>
      </section>

      {/* Video section: secondary and removable */}
      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A2B70] mb-3">
              See it in action
            </h2>
            <p className="text-[#4A5F9E] text-base sm:text-lg">
              Quick walkthrough of the app experience.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[260px]">
            <div className="rounded-[1.5rem] overflow-hidden shadow-md border-[6px] border-[#1a1a1a] bg-[#1a1a1a] p-0.5">
              <div className="rounded-[1.1rem] overflow-hidden bg-black aspect-[9/19] w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_SHORTS_ID}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${YOUTUBE_SHORTS_ID}`}
                  title="GettaShower app demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a
              href={LIVE_PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1A2B70] font-semibold hover:opacity-80 transition-opacity"
            >
              Try the live prototype
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
