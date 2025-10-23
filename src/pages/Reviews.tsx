import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Jonathan Garcia",
      rating: 5,
      text: "Great service and great work!",
      date: "2 months ago",
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
              Customer Reviews
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              See what our satisfied customers have to say about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-montserrat font-bold text-primary text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="max-w-2xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-muted p-8 rounded-xl shadow-lg hover-scale mb-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-primary">
                      {review.name}
                    </h3>
                    <div className="flex gap-1 my-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <p className="text-lg text-foreground">{review.text}</p>
              </div>
            ))}
            <div className="text-center mt-8">
              <p className="text-2xl font-montserrat font-semibold text-primary mb-6">
                More to come!
              </p>
              <a
                href="https://www.google.com/maps/place/Centro+Painting/@33.240396,-111.6769283,17z/data=!4m18!1m9!4m8!1m0!1m6!1m2!1s0xa3f54dd1d2bd6fb5:0x19fb6f1444292ac4!2s18927+E+Vía+Del+Verde,+Queen+Creek,+AZ+85142!2m2!1d-111.674348!2d33.240396!3m7!1s0xa3f54dd1d2bd6fb5:0x19fb6f1444292ac4!8m2!3d33.240396!4d-111.674348!9m1!1b1!16s%2Fg%2F11vyj4551s?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="font-montserrat font-semibold hover-scale"
                >
                  View All Reviews on Google Maps
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-montserrat font-bold text-primary mb-6">
              Had a Great Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We'd love to hear from you! Share your experience and help others find quality painting services.
            </p>
            <a
              href="https://www.google.com/maps/place/Centro+Painting/@33.240396,-111.6769283,17z/data=!4m18!1m9!4m8!1m0!1m6!1m2!1s0xa3f54dd1d2bd6fb5:0x19fb6f1444292ac4!2s18927+E+Vía+Del+Verde,+Queen+Creek,+AZ+85142!2m2!1d-111.674348!2d33.240396!3m7!1s0xa3f54dd1d2bd6fb5:0x19fb6f1444292ac4!8m2!3d33.240396!4d-111.674348!9m1!1b1!16s%2Fg%2F11vyj4551s?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 font-montserrat font-bold text-lg px-8 py-6 shadow-lg hover-scale"
              >
                Leave a Google Review
              </Button>
            </a>
          </div>
          
          {/* Embedded Google Map */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-montserrat font-bold text-primary text-center mb-6">
              Find Us Here
            </h3>
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-primary/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.8537846191896!2d-111.6769283!3d33.240396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa3f54dd1d2bd6fb5%3A0x19fb6f1444292ac4!2sCentro%20Painting!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Centro Painting Location"
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4">
              18927 E Vía Del Verde, Queen Creek, AZ 85142
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
