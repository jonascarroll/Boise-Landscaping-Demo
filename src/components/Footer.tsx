import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Landscape Idaho</h3>
            <p className="text-charcoal-foreground/70 text-sm leading-relaxed mb-4">
              Licensed, insured, and locally owned in McCall, Idaho. Transforming mountain properties into stunning outdoor spaces since 2010.
            </p>
            <div className="flex items-center gap-2 text-warm-gold text-xs font-semibold uppercase tracking-widest">
              ★★★★★ 5-Star Rated
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Our Services", to: "/services" },
                { label: "Project Gallery", to: "/gallery" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-charcoal-foreground/70 hover:text-charcoal-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <ul className="flex flex-col gap-2 text-sm text-charcoal-foreground/70">
              <li>Landscape Design</li>
              <li>Hardscaping & Patios</li>
              <li>Irrigation Systems</li>
              <li>Lawn Maintenance</li>
              <li>Snow Removal</li>
              <li>Native Plantings</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:+12089541234"
                className="flex items-center gap-2 text-charcoal-foreground/70 hover:text-charcoal-foreground transition-colors"
              >
                <Phone className="w-4 h-4 text-warm-gold" />
                (208) 954-1234
              </a>
              <a
                href="mailto:info@landscapeidaho.com"
                className="flex items-center gap-2 text-charcoal-foreground/70 hover:text-charcoal-foreground transition-colors"
              >
                <Mail className="w-4 h-4 text-warm-gold" />
                info@landscapeidaho.com
              </a>
              <div className="flex items-center gap-2 text-charcoal-foreground/70">
                <MapPin className="w-4 h-4 text-warm-gold" />
                1234 W Mcall St, McCall, Idaho
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-charcoal-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-charcoal-foreground/50 text-xs">
            © {new Date().getFullYear()} Landscape Idaho LLC. All rights reserved. Licensed & Insured.
          </p>
          <p className="text-charcoal-foreground/50 text-xs">
            Proudly serving McCall, Donnelly, Cascade & Valley County, Idaho
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
