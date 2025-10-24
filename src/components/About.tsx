import { Building2, Sparkles, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground tracking-tight font-times uppercase">
            About VaroTech
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pioneering the future of enterprise technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Building2,
              title: "Enterprise-Grade",
              description: "Built for scale, designed for reliability"
            },
            {
              icon: Sparkles,
              title: "Innovation First",
              description: "Cutting-edge solutions for modern challenges"
            },
            {
              icon: TrendingUp,
              title: "Growth Focused",
              description: "Empowering your business transformation"
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card/30 backdrop-blur-md border border-border rounded-2xl p-8 md:p-12 animate-fade-in-up">
          <p className="text-lg leading-relaxed text-foreground/90">
            <span className="text-primary font-bold tracking-wider text-xl font-times">VaroTech</span> is a next-generation IT service provider dedicated to helping businesses innovate and scale through{" "}
            <span className="text-accent font-semibold">cloud computing</span>, intelligent automation, and{" "}
            <span className="text-accent font-semibold">AI-powered systems</span>. 
            We specialize in building robust, scalable infrastructure that transforms how organizations operate in the digital age. 
            From secure cloud migrations to custom AI integrations, our team delivers enterprise-grade solutions that drive measurable business outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
