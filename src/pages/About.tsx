import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description: "We take pride in delivering exceptional results with every project, using premium materials and proven techniques.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We listen to your needs and work closely with you throughout the process.",
    },
    {
      icon: Clock,
      title: "Timely Completion",
      description: "We respect your time and commit to completing projects on schedule without compromising quality.",
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind, providing professional service you can trust.",
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
              About Centro Painting
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Your trusted partner for professional painting services in Queen Creek, Arizona.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-montserrat font-bold text-primary mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Centro Painting was founded with a simple mission: to provide exceptional painting 
                services that transform spaces and exceed expectations. Based in Queen Creek, Arizona, 
                we've built our reputation on quality craftsmanship, attention to detail, and 
                outstanding customer service.
              </p>
              <p>
                Our team of skilled professionals brings years of experience in both residential and 
                commercial painting. We understand that your property is a significant investment, 
                and we treat every project with the care and expertise it deserves.
              </p>
              <p>
                From surface preparation to the final coat, we use only premium materials and 
                proven techniques to ensure lasting, beautiful results. Whether you're refreshing 
                a single room or transforming an entire property, Centro Painting is committed to 
                bringing your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover-scale cursor-pointer"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
