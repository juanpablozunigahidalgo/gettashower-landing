const LIVE_PROTOTYPE_URL = 'https://www.prototype.gettashower.com/#/explore';

export default function Prototype() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <div className="w-20 h-20 bg-[#0066FF] rounded-2xl flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>

          <h1 className="text-5xl font-bold tracking-tight mb-6">
            GettaShower Prototype
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            This is the prototype page for GettaShower. The interactive prototype
            of our urban infrastructure platform is available live.
          </p>

          {/* Prominent link to the live version */}
          <a
            href={LIVE_PROTOTYPE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Open live prototype</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Opens in a new tab
          </p>

          <div className="mt-14 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">What to expect:</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                <span>Real-time node discovery across Barcelona</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                <span>Interactive booking system</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                <span>Partner dashboard for gym owners</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                <span>Urban mobility simulation</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-500">
              Check back soon or{' '}
              <a href="/joinus" className="text-[#0066FF] hover:underline font-medium">
                join our founding team
              </a>{' '}
              to help build it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}