const LIVE_PROTOTYPE_URL = 'https://www.prototype.gettashower.com/#/explore';
const YOUTUBE_SHORTS_ID = 'd1FeOM856Dc';

export default function Prototype() {
  return (
    <div className="pt-20 min-h-screen bg-white overflow-x-hidden min-w-0">
      {/* Section: Video + botón — mismo ancho que la card de abajo para alineación */}
      <section className="flex items-center py-5 lg:py-6 bg-[#FFFFFF]">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 min-w-0">
          <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-5 lg:gap-8 min-w-0 lg:items-stretch">
            {/* Teléfono alineado a la izquierda (donde empieza la card azul) */}
            <div className="flex justify-center lg:justify-start items-center w-full">
              <div className="relative w-full max-w-[160px] sm:max-w-[170px] lg:max-w-[190px]">
                {/* Phone frame */}
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
            </div>

            {/* Desktop: alineado a la derecha (donde termina la card azul). Móvil: centrado */}
            <div className="flex flex-col justify-center items-center lg:items-end text-center lg:text-right w-full">
              <a
                href={LIVE_PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A2B70] hover:bg-[#253580] text-white text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Open live prototype</span>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="mt-2 text-xs text-[#6B7DB8]">
                Opens in a new tab
              </p>
              {/* Store badges un poco más pequeños */}
              <div className="flex flex-col sm:flex-row gap-3 mt-5 items-center justify-center lg:justify-end">
                <a
                  href="https://play.google.com/store/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity w-fit"
                  aria-label="Download on Google Play"
                >
                  <img src="/google-play-badge.svg" alt="Get it on Google Play" className="h-24 sm:h-28 w-auto object-contain max-w-[240px] sm:max-w-[280px]" />
                </a>
                <a
                  href="https://apps.apple.com/app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-90 transition-opacity w-fit"
                  aria-label="Download on the App Store"
                >
                  <img src="/app-store-badge.svg" alt="Download on the App Store" className="h-24 sm:h-28 w-auto object-contain max-w-[240px] sm:max-w-[280px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App features — mismo ancho que la sección de arriba para alineación */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-10 bg-[#FFFFFF] min-w-0">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 min-w-0">
          <div className="bg-[#1A2B70] rounded-2xl p-6 sm:p-8 text-white text-base sm:text-lg leading-relaxed">
            <p className="whitespace-pre-line">
              {`Showers & lockers map search. Premium gym and hotel shower facilities, amenities and price filter. Stripe-integrated payments for users and hosts. Secure transactions. Automatic tax payments. Frictionless QR code user usage, registration, time and payment synchronization. Hosts can register their company and facilities. Usage paid by transaction between users and facilities. Users can review and report facilities. Hosts can review and report users. We are constantly developing! More capabilities coming soon.`}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
