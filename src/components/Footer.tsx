import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0d1533] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">GettaShower</h3>
            <p className="text-white leading-relaxed max-w-md">
              Global shower and locker network for urban cyclists, commuters, and tourists.
              Refresh yourself, save time, and live the city on your terms.
            </p>
            <div className="flex items-center gap-2 mt-6 text-white">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Göteborg, Sweden</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Organization</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-white hover:opacity-90 transition-opacity">Home</Link>
              <Link href="/prototype" className="block text-white hover:opacity-90 transition-opacity">Prototype</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:info@gettashower.com" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
                <Mail className="w-4 h-4" />
                <span className="text-sm">info@gettashower.com</span>
              </a>
              <a href="tel:+34931234567" className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+46729971641</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © 2026 GettaShower. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white hover:opacity-90 text-sm transition-opacity">Privacy Policy</a>
            <a href="#" className="text-white hover:opacity-90 text-sm transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}