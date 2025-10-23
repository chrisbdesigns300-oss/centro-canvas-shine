import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Centro Painting did an amazing job on our home exterior. The crew was professional, on time, and the quality is outstanding. Highly recommend!",
      date: "2 weeks ago",
    },
    {
      name: "John D.",
      rating: 5,
      text: "Excellent service from start to finish. They helped us choose the perfect colors and the final result exceeded our expectations.",
      date: "1 month ago",
    },
    {
      name: "Maria L.",
      rating: 5,
      text: "Very pleased with the interior painting of our living room and kitchen. Clean work, great attention to detail. Will definitely use them again.",
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
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              See what our satisfied customers have to say about our work.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-white text-white" />
                ))}
              </div>
              <span className="text-2xl font-bold">5.0</span>
            </div>
            <p className="text-white/80">Based on Google Reviews</p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-muted p-8 rounded-xl hover-scale"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-montserrat font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-primary">
                      {review.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-primary mb-6">
            Had a Great Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to hear from you! Share your experience and help others find quality painting services.
          </p>
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK/review"
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
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;
