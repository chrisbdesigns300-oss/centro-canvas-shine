import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";

const Index = () => {
  const [activeElements, setActiveElements] = useState<string[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveElements(["hero-title", "hero-subtitle"]);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    "Expert Residential & Commercial Painting",
    "Premium Quality Materials",
    "Professional Surface Preparation",
    "Color Consultation Services",
    "Timely Project Completion",
    "Licensed & Insured",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSlider />
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1
            className={`text-5xl md:text-7xl font-montserrat font-bold text-white mb-6 animate-underline ${
              activeElements.includes("hero-title") ? "active" : ""
            } text-shadow`}
          >
            Transform Your Space
          </h1>
          <p
            className={`text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto animate-underline ${
              activeElements.includes("hero-subtitle") ? "active" : ""
            }`}
          >
            Professional Painting Services in Queen Creek, Arizona
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-montserrat font-bold text-lg px-8 py-6 shadow-2xl hover-scale"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:4802273473">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-montserrat font-bold text-lg px-8 py-6 bg-white/10 backdrop-blur-sm hover-scale"
              >
                <Phone className="mr-2 h-5 w-5" />
                (480) 227-3473
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-4">
              Why Choose Centro Painting?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver excellence in every brushstroke with premium materials and expert craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-muted rounded-xl hover-scale cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-lg font-open-sans font-semibold text-primary">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today for a free consultation and quote. Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-montserrat font-bold text-lg px-8 py-6 shadow-lg hover-scale"
              >
                Contact Us Now
              </Button>
            </Link>
            <a
              href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-montserrat font-bold text-lg px-8 py-6 bg-white/10 backdrop-blur-sm hover-scale"
              >
                Leave Us a Review
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
