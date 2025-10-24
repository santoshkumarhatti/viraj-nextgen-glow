import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp Solutions",
    content: "VaroTech transformed our entire infrastructure. Their cloud migration strategy was flawless, and the AI automation they implemented saved us countless hours. Truly exceptional service.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateLabs",
    content: "Working with VaroTech has been a game-changer. Their cybersecurity audit uncovered vulnerabilities we didn't know existed, and their solutions were both comprehensive and easy to implement.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "VP Engineering, DataFlow Inc",
    content: "The team's expertise in DevOps and cloud architecture is outstanding. They helped us achieve 99.99% uptime and reduced our infrastructure costs by 40%. Highly recommend!",
    rating: 5,
    avatar: "ER"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from businesses we've helped transform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative p-8 bg-card/50 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />

              {/* Avatar */}
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Glow Effect */}
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
