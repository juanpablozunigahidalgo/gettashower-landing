'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CircleDollarSign,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';

const WEEKS_PER_MONTH = 4.33;

export default function HostPage() {
  const [showersPerDay, setShowersPerDay] = useState(12);
  const [pricePerShower, setPricePerShower] = useState(10);
  const [daysOpenPerWeek, setDaysOpenPerWeek] = useState(6);

  const monthlyHostRevenue = useMemo(() => {
    const monthlyGross = showersPerDay * pricePerShower * daysOpenPerWeek * WEEKS_PER_MONTH;
    return monthlyGross * 0.7;
  }, [showersPerDay, pricePerShower, daysOpenPerWeek]);

  const annualHostRevenue = monthlyHostRevenue * 12;

  const formattedMonthlyRevenue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(monthlyHostRevenue);

  const formattedAnnualRevenue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(annualHostRevenue);

  return (
    <div className="pt-20 bg-[#FFFFFF]">
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#EEF1F8] text-[#1A2B70] text-xs sm:text-sm font-semibold mb-5">
                For gyms, hostels, hotels and sport facilities
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1A2B70] leading-[1.1] mb-5">
                Turn underused showers into recurring revenue.
              </h1>
              <p className="text-base sm:text-lg text-[#4A5F9E] leading-relaxed max-w-xl mb-7">
                GettaShower helps hosts monetize existing shower capacity with low operational friction.
                We drive demand from tourists and city users who need to refresh now, then help you convert
                that demand into predictable monthly income.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#D0D8EB] p-4 bg-white">
                  <div className="text-2xl font-extrabold text-[#1A2B70] mb-1">747M</div>
                  <p className="text-sm text-[#4A5F9E]">International tourist arrivals in Europe in 2024.</p>
                </div>
                <div className="rounded-2xl border border-[#D0D8EB] p-4 bg-white">
                  <div className="text-2xl font-extrabold text-[#1A2B70] mb-1">3.0B+</div>
                  <p className="text-sm text-[#4A5F9E]">Tourist accommodation nights in the EU in 2024.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#F6F8FE] border border-[#D0D8EB] p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1A2B70] mb-2">Host revenue simulator</h2>
              <p className="text-sm sm:text-base text-[#4A5F9E] mb-6">
                Hosts keep <span className="font-bold text-[#1A2B70]">70%</span> of each completed shower.
                Set your assumptions and estimate your monthly host revenue.
              </p>

              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="showersRange" className="text-sm font-semibold text-[#1A2B70]">
                      Showers per day
                    </label>
                    <span className="text-sm font-bold text-[#1A2B70]">{showersPerDay}</span>
                  </div>
                  <input
                    id="showersRange"
                    type="range"
                    min={1}
                    max={120}
                    value={showersPerDay}
                    onChange={(event) => setShowersPerDay(Number(event.target.value))}
                    className="w-full accent-[#1A2B70]"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pricePerShower" className="block text-sm font-semibold text-[#1A2B70] mb-2">
                      Price per shower (EUR)
                    </label>
                    <input
                      id="pricePerShower"
                      type="number"
                      min={3}
                      max={50}
                      value={pricePerShower}
                      onChange={(event) => setPricePerShower(Number(event.target.value) || 0)}
                      className="w-full border border-[#D0D8EB] rounded-xl px-3 py-2 text-[#1A2B70] font-medium focus:outline-none focus:ring-2 focus:ring-[#1A2B70]/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="daysOpenPerWeek" className="block text-sm font-semibold text-[#1A2B70] mb-2">
                      Days open per week
                    </label>
                    <input
                      id="daysOpenPerWeek"
                      type="number"
                      min={1}
                      max={7}
                      value={daysOpenPerWeek}
                      onChange={(event) => setDaysOpenPerWeek(Number(event.target.value) || 0)}
                      className="w-full border border-[#D0D8EB] rounded-xl px-3 py-2 text-[#1A2B70] font-medium focus:outline-none focus:ring-2 focus:ring-[#1A2B70]/30"
                    />
                  </div>
                </div>

                <div className="rounded-2xl bg-[#1A2B70] text-white p-5">
                  <p className="text-sm text-white/85 mb-1">Estimated monthly host revenue</p>
                  <p className="text-3xl sm:text-4xl font-extrabold mb-2">{formattedMonthlyRevenue}</p>
                  <p className="text-sm text-white/85">Estimated yearly host revenue: {formattedAnnualRevenue}</p>
                </div>

                <p className="text-xs text-[#6B7DB8]">
                  Split policy per completed shower: 70% host, 20% platform, 10% growth channel.
                  Revenue output above shows host share only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1A2B70] mb-10">
            How we help hosts grow with lower risk
          </h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-[#D0D8EB] p-5 bg-[#F6F8FE]">
              <Users className="w-7 h-7 text-[#1A2B70] mb-3" />
              <h3 className="text-lg font-bold text-[#1A2B70] mb-2">Demand already exists</h3>
              <p className="text-[#4A5F9E] text-sm leading-relaxed">
                We target high-density and high-tourism zones where people already need shower access between activities.
              </p>
            </div>
            <div className="rounded-2xl border border-[#D0D8EB] p-5 bg-[#F6F8FE]">
              <CircleDollarSign className="w-7 h-7 text-[#1A2B70] mb-3" />
              <h3 className="text-lg font-bold text-[#1A2B70] mb-2">Revenue from existing assets</h3>
              <p className="text-[#4A5F9E] text-sm leading-relaxed">
                No new facility build required. You monetize showers you already operate with a clear host-first payout model.
              </p>
            </div>
            <div className="rounded-2xl border border-[#D0D8EB] p-5 bg-[#F6F8FE]">
              <ShieldCheck className="w-7 h-7 text-[#1A2B70] mb-3" />
              <h3 className="text-lg font-bold text-[#1A2B70] mb-2">Lower operational friction</h3>
              <p className="text-[#4A5F9E] text-sm leading-relaxed">
                Digital flow, tracked sessions, and clear rules reduce manual coordination and improve service consistency.
              </p>
            </div>
            <div className="rounded-2xl border border-[#D0D8EB] p-5 bg-[#F6F8FE]">
              <TrendingUp className="w-7 h-7 text-[#1A2B70] mb-3" />
              <h3 className="text-lg font-bold text-[#1A2B70] mb-2">Designed to scale</h3>
              <p className="text-[#4A5F9E] text-sm leading-relaxed">
                As city coverage and repeat usage grow, hosts benefit from stronger utilization and compounding monthly returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A2B70] mb-3">Host video overview</h2>
            <p className="text-[#4A5F9E] text-base sm:text-lg">
              See how GettaShower helps hosts transform demand into revenue.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/H5Ie-3cwajU?si=CZ8uLWsanJWoxsvl"
              title="GettaShower host overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full min-h-[220px] sm:min-h-[320px] md:min-h-[420px]"
            />
          </div>
          <div className="mt-5 text-center">
            <a
              href="https://youtu.be/H5Ie-3cwajU?si=CZ8uLWsanJWoxsvl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1A2B70] font-semibold hover:opacity-80 transition-opacity"
            >
              Watch on YouTube
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-[#1A2B70]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to become a GettaShower host?</h2>
          <p className="text-[#DCE4FF] text-base sm:text-lg max-w-3xl mx-auto mb-8">
            Join the network and start converting underused shower capacity into recurring city revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="mailto:info@gettashower.com?subject=Become%20a%20Host"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-[#1A2B70] font-bold hover:opacity-90 transition-opacity"
            >
              Talk to our team
            </Link>
            <Link
              href="/getapp"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
            >
              See the app experience
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#6B7DB8] text-center">
            Market signals referenced from the GettaShower business concept: international tourism flows,
            urbanization trends, and warm-season demand concentration in dense cities.
          </p>
        </div>
      </section>
    </div>
  );
}
