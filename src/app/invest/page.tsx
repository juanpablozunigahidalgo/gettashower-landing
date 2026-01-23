'use client';

import { TrendingUp, Zap, Building2, Send } from 'lucide-react';
import { useState } from 'react';

const metrics = [
  {
    icon: TrendingUp,
    value: '15.6M',
    label: 'Annual Tourists',
    sublabel: 'Barcelona 2025',
  },
  {
    icon: Zap,
    value: '70%',
    label: 'Target Gross Margin',
    sublabel: 'Infrastructure-as-a-Service',
  },
  {
    icon: Building2,
    value: 'Zero',
    label: 'CAPEX Expansion',
    sublabel: 'Asset-light model',
  },
];

export default function Invest() {
  const [formData, setFormData] = useState({
    name: '',
    fund: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Pitch deck request received! We\'ll be in touch soon.');
    setFormData({ name: '', fund: '', email: '' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            The Urban Infrastructure{' '}
            <span className="text-[#0066FF]">Opportunity.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Transforming idle gym capacity into a global network of on-demand hygiene infrastructure.
            A capital-efficient play on the future of urban living.
          </p>
        </div>
      </section>

      {/* Bento Grid Metrics */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#0066FF] rounded-2xl flex items-center justify-center mb-6">
                  <metric.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-6xl font-bold tracking-tight mb-3 text-[#0066FF]">
                  {metric.value}
                </div>
                <div className="text-xl font-bold mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Analysis */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tight mb-12 text-center">
            Infrastructure-as-a-Service
          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              GettaShower is building the first urban hygiene infrastructure layer—a marketplace
              that unlocks dormant capacity in fitness centers and transforms it into accessible
              "Refresh Nodes" for the modern traveler and urban nomad.
            </p>

            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">The Model</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Zero CAPEX:</strong> We don't build gyms. We unlock existing infrastructure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Network Effects:</strong> Every new node increases discoverability for all partners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>High Margins:</strong> Pure software with transaction fees—minimal operational overhead.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">The Market</h3>
              <p className="mb-4">
                Barcelona sees 15.6 million tourists annually. European cities collectively host over
                700 million international arrivals. The market for on-demand urban services is massive
                and currently unaddressed.
              </p>
              <p>
                We're starting with showers, but the platform extends to lockers, co-working spaces,
                and micro-fulfillment—anywhere idle capacity exists in the urban fabric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Lead Gen */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Request Pitch Deck</h2>
            <p className="text-white/90 mb-8">
              Get detailed financials, market analysis, and our expansion roadmap.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="text"
                placeholder="Fund / Organization"
                value={formData.fund}
                onChange={(e) => setFormData({ ...formData, fund: e.target.value })}
                required
                className="w-full px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-6 py-4 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-[#0066FF] px-8 py-4 rounded-3xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Request Pitch Deck
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}