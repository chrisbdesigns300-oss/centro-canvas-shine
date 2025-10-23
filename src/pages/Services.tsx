import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Building2, Palette, Sparkles, Shield, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Painting",
      description: "Transform your home with our expert interior and exterior painting services. From single rooms to entire houses, we deliver beautiful, lasting results.",
      features: ["Interior Painting", "Exterior Painting", "Trim & Molding", "Ceiling Painting"],
    },
    {
      icon: Building2,
      title: "Commercial Painting",
      description: "Professional painting solutions for businesses of all sizes. We work efficiently to minimize disruption while delivering exceptional quality.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Industrial Facilities"],
    },
    {
      icon: Palette,
      title: "Color Consultation",
      description: "Not sure what colors to choose? Our experts will help you select the perfect palette to match your style and enhance your space.",
      features: ["Color Matching", "Design Advice", "Sample Testing", "Trend Insights"],
    },
    {
      icon: Sparkles,
      title: "Surface Preparation",
      description: "Proper preparation is key to a flawless finish. We take the time to prepare surfaces correctly for optimal paint adhesion and longevity.",
      features: ["Wall Repairs", "Sanding", "Priming", "Cleaning"],
    },
    {
      icon: Shield,
      title: "Protective Coatings",
      description: "Extend the life of your paint job with specialized protective coatings designed to withstand the elements and daily wear.",
      features: ["Weather-Resistant", "UV Protection", "Stain-Resistant", "Easy Maintenance"],
    },
    {
      icon: Brush,
      title: "Specialty Finishes",
      description: "Add character and uniqueness to your space with custom finishes including textures, faux finishes, and decorative techniques.",
      features: ["Textured Walls", "Faux Finishes", "Accent Walls", "Custom Designs"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive painting solutions for residential and commercial properties.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-border rounded-xl p-8 hover-scale cursor-pointer shadow-lg"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote tailored to your specific needs.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 font-montserrat font-bold text-lg px-8 py-6 shadow-lg hover-scale"
            >
              Request Free Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
