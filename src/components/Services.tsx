import { Cloud, Brain, Code, Shield, Settings, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    description: "Scalable cloud solutions with AWS, Azure, and GCP. Automated CI/CD pipelines and infrastructure as code.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Brain,
    title: "AI & ML Integration",
    description: "Custom machine learning models, predictive analytics, and intelligent automation solutions.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Code,
    title: "Web & Mobile App Development",
    description: "Modern, responsive applications built with React, Next.js, React Native, and cutting-edge frameworks.",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Shield,
    title: "Cybersecurity & Risk Management",
    description: "Comprehensive security audits, penetration testing, and compliance solutions to protect your assets.",
    gradient: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: Settings,
    title: "IT Consulting & Automation",
    description: "Strategic technology planning, process automation, and digital transformation consulting.",
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Application performance tuning, database optimization, and infrastructure scaling solutions.",
    gradient: "from-yellow-500/20 to-orange-500/20"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative p-6 z-10">
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Glow Effect */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
