import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import portfolio1 from "@/assets/portfolio-1.png";
import portfolio2 from "@/assets/portfolio-2.png";
import portfolio3 from "@/assets/portfolio-3.png";
import portfolio4 from "@/assets/portfolio-4.png";
import portfolio5 from "@/assets/portfolio-5.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Southwestern Style Home Exterior",
      category: "Residential Exterior",
      description: "Complete exterior transformation with warm earth tones and modern stucco finish, featuring custom garage door painting and architectural detail enhancement",
      image: portfolio1,
    },
    {
      title: "Contemporary Garage Door Refinish",
      category: "Residential Exterior",
      description: "Premium garage door painting with sophisticated slate blue finish, perfectly complementing modern home architecture and landscaping",
      image: portfolio2,
    },
    {
      title: "Full Exterior Wall Renovation",
      category: "Residential Exterior",
      description: "Expert stucco painting with weather-resistant coating, providing long-lasting protection and a fresh, clean appearance to home exteriors",
      image: portfolio3,
    },
    {
      title: "Desert Home Exterior Refresh",
      category: "Residential Exterior",
      description: "Complete home exterior painting with UV-resistant paint, designed to withstand Arizona's harsh climate while maintaining curb appeal",
      image: portfolio4,
    },
    {
      title: "Modern Residential Transformation",
      category: "Residential Exterior",
      description: "Comprehensive exterior painting with neutral earth tones, enhancing property value and creating a welcoming first impression",
      image: portfolio5,
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
                className="bg-muted rounded-xl overflow-hidden hover-scale cursor-pointer shadow-lg group relative"
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-sm text-center leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-accent font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-montserrat font-bold text-primary mt-2 mb-3">
                    {project.title}
                  </h3>
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
