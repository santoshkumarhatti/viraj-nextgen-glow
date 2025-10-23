import { Cloud, Container, Database, Boxes } from "lucide-react";

const technologies = [
  {
    name: "AWS",
    icon: Cloud,
    color: "text-orange-500"
  },
  {
    name: "Azure",
    icon: Cloud,
    color: "text-blue-500"
  },
  {
    name: "React",
    icon: Boxes,
    color: "text-cyan-500"
  },
  {
    name: "Python",
    icon: Database,
    color: "text-yellow-500"
  },
  {
    name: "Kubernetes",
    icon: Container,
    color: "text-blue-600"
  },
  {
    name: "Docker",
    icon: Container,
    color: "text-blue-400"
  }
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-24 px-4 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technologies We Master
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leveraging industry-leading tools and platforms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-card/50 backdrop-blur-md border border-border hover:border-primary/50 transition-all duration-300 hover:scale-110 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 rounded-2xl transition-all duration-300"></div>
              
              <tech.icon className={`w-12 h-12 ${tech.color} mb-3 group-hover:scale-125 transition-transform duration-300`} />
              <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-gradient-to-r from-primary/20 to-accent/20"></div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack Info */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-muted-foreground text-sm">
            And many more cutting-edge technologies including TensorFlow, Node.js, PostgreSQL, MongoDB, Redis, and more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
