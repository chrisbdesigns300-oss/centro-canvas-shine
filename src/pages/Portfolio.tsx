import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Living Room Transformation",
      category: "Residential Interior",
      description: "Complete interior repaint with accent wall feature",
    },
    {
      title: "Exterior Home Refresh",
      category: "Residential Exterior",
      description: "Full exterior painting with weather-resistant coating",
    },
    {
      title: "Office Space Renovation",
      category: "Commercial Interior",
      description: "Professional office painting with custom color scheme",
    },
    {
      title: "Retail Store Front",
      category: "Commercial Exterior",
      description: "Eye-catching storefront transformation",
    },
    {
      title: "Kitchen Cabinet Refinishing",
      category: "Specialty",
      description: "Custom cabinet painting for modern kitchen update",
    },
    {
      title: "Historic Home Restoration",
      category: "Residential Exterior",
      description: "Careful restoration maintaining original character",
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
              Our Portfolio
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our recent projects and see the quality craftsmanship we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-muted rounded-xl overflow-hidden hover-scale cursor-pointer shadow-lg group"
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm px-4 text-center">
                    Project photos coming soon
                  </p>
                </div>
                <div className="p-6">
                  <span className="text-sm text-accent font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-montserrat font-bold text-primary mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-6">
            Want Your Project Featured?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Let us transform your space with the same quality and attention to detail.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-montserrat font-bold text-lg px-8 py-6 shadow-lg hover-scale"
            >
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
