import { Code2, Users, TrendingUp, Palette, Megaphone, Mail } from 'lucide-react';
import Image from 'next/image';

const roles = [
  {
    icon: Code2,
    title: 'Engineers',
    description: 'Build the real-time infrastructure. Frontend, backend, mobile—we need full-stack builders who ship fast and think in systems.',
    skills: 'React, Node.js, APIs, Mobile Development',
  },
  {
    icon: Users,
    title: 'Country Leaders',
    description: 'Own a city. Sign gyms, negotiate partnerships, build local networks. You are the boots on the ground turning nodes into reality.',
    skills: 'Sales, Partnership Building, Local Market Knowledge',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Marketing',
    description: 'Get users. SEO, paid ads, content strategy, virality. Find the channels that scale and make GettaShower the default choice.',
    skills: 'Growth Marketing, Analytics, User Acquisition',
  },
  {
    icon: Palette,
    title: 'Product Designers',
    description: 'Make it beautiful and intuitive. Design the interface that turns a complex marketplace into a 10-second experience.',
    skills: 'UI/UX, Figma, User Research, Design Systems',
  },
  {
    icon: Megaphone,
    title: 'Content & Media',
    description: 'Tell the story. Create content that makes people believe in the vision. Social, video, influencer partnerships—amplify the movement.',
    skills: 'Content Creation, Social Media, Storytelling, Community',
  },
];

export default function JoinUs() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Build This{' '}
            <span className="text-[#0066FF]">With Us.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
            We have a vision, mockups, and a plan. What we need are co-builders—
            self-driven people who see the opportunity and want to own a piece of it.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            This isn't a job. It's a founding opportunity. Equity, ownership, and the chance to
            build the infrastructure layer for urban hygiene from zero to global scale.
          </p>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-center">
            Who we are Looking For
          </h2>
          <p className="text-xl text-gray-600 mb-16 text-center">
            Founding team positions across every discipline
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-[#0066FF] rounded-2xl flex items-center justify-center mb-6">
                  <role.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{role.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{role.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Skills</div>
                  <div className="text-sm text-gray-700">{role.skills}</div>
                </div>
              </div>
            ))}

            {/* "Or Something Else" Card */}
            <div className="bg-gradient-to-br from-[#0066FF] to-[#0052CC] rounded-3xl p-8 text-white flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-3">Or Something Else?</h3>
              <p className="text-white/90 leading-relaxed">
                Have a unique skill set? See an angle we are missing? Bring your expertise and
                let's figure out how you fit into this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tight mb-12 text-center">
            What You're Joining
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">GettaShower is pre-launch.</strong> We have the vision,
              the mockups, and validation from the market. What we need now is a small, obsessed team
              to turn this into reality.
            </p>

            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">What We are Offering</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Equity & Ownership:</strong> You're not an employee—you're a co-founder or early team member with real skin in the game.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Autonomy:</strong> You own your domain. Country leaders own their city. Engineers own the stack. Marketers own growth.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Impact:</strong> Build something that changes how people move through cities. Real infrastructure at global scale.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Speed:</strong> No corporate bureaucracy. Ship fast, iterate faster, and build in public.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4">What We Need From You</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Self-Driven:</strong> We are not managing you. You see what needs to be done and you do it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Resourceful:</strong> We're lean. You solve problems with creativity, not cash.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Obsessed:</strong> This isn't a side project. You believe in the vision and you're all in.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2.5 flex-shrink-0" />
                  <span><strong>Builder Mentality:</strong> Talk is cheap. You ship, test, learn, and iterate.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Visual: Tech Workspace */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/JoinUs.jpg"
              alt="Modern Workspace"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Why */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            Why Now?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            15.6 million tourists visit Barcelona every year. Cyclists, runners, and digital nomads
            are redefining how we use cities. The infrastructure doesn't exist yet—but the demand
            is massive and growing.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            We're building the invisible layer that makes urban life seamless. The market is ready.
            The timing is perfect. All we need is the right team.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build</h2>
          <p className="text-xl text-gray-600 mb-8">
            If this resonates, reach out. Tell us who you are, what you bring, and why you want to build this.
          </p>
          <a
            href="mailto:founders@gettashower.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066FF] text-white rounded-3xl hover:bg-[#0052CC] transition-colors text-lg"
          >
            <Mail className="w-5 h-5" />
            founders@gettashower.com
          </a>
          <p className="text-sm text-gray-500 mt-6">
            Based in Göteborg or remote-friendly
          </p>
        </div>
      </section>
    </div>
  );
}