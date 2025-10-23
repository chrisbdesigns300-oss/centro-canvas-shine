import { Mail, MapPin, Phone, PaintBucket } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded-full">
                <PaintBucket className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-lg">CENTRO</span>
                <span className="font-montserrat text-sm">PAINTING</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Expert residential and commercial painting services in Queen Creek, Arizona. 
              Quality finishes, surface prep, and color consultation with premium materials.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/80 hover:text-white transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:4802273473" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  (480) 227-3473
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:centropainting@gmail.com" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  centropainting@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-white/80 mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Queen Creek, Arizona
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Centro Painting. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a 
                href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                Leave a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
