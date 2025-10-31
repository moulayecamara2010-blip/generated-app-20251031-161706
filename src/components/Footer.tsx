import { Link } from "react-router-dom";
import { Briefcase, Linkedin, Twitter } from "lucide-react";
import { siteConfig, footerContent } from "@/lib/content";
export function Footer() {
  return (
    <footer className="bg-baara-dark text-baara-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Briefcase className="h-8 w-8 text-baara-gold" />
              <span className="text-2xl font-serif font-bold">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-gray-400">{footerContent.motto}</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white">Sitemap</h3>
              <ul className="mt-4 space-y-2">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-gray-400 hover:text-baara-gold transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>123 Maude Street</li>
                <li>Sandton, Johannesburg</li>
                <li>South Africa</li>
                <li className="pt-2">
                  <a href="mailto:connect@baara.co.za" className="hover:text-baara-gold transition-colors">connect@baara.co.za</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="flex mt-4 space-x-4">
                <a href="#" className="text-gray-400 hover:text-baara-gold transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-baara-gold transition-colors">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>{footerContent.copyright}</p>
          <p className="text-sm mt-2">Built with ❤️ by Matogen Digital</p>
        </div>
      </div>
    </footer>
  );
}