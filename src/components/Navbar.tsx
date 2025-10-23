import { Link, useLocation } from "react-router-dom";
import { PaintBucket, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary shadow-lg py-3"
          : "bg-primary/95 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
              <PaintBucket className="h-8 w-8 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-montserrat font-bold text-xl leading-tight">
                CENTRO
              </span>
              <span className="text-white/90 font-montserrat text-sm tracking-wider">
                PAINTING
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-white font-montserrat font-semibold text-sm tracking-wide relative group ${
                  isActive(link.to) ? "text-white" : "text-white/80"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 bottom-[-4px] h-0.5 bg-white transition-all duration-300 ${
                    isActive(link.to) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <a href="tel:4802273473">
              <Button
                variant="default"
                className="bg-white text-primary hover:bg-white/90 font-montserrat font-bold shadow-lg"
              >
                (480) 227-3473
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-white font-montserrat font-semibold py-2 px-4 rounded transition-colors ${
                  isActive(link.to)
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:4802273473" className="block">
              <Button
                variant="default"
                className="w-full bg-white text-primary hover:bg-white/90 font-montserrat font-bold"
              >
                (480) 227-3473
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
