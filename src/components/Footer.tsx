import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16 px-4 border-t border-border/50 bg-card/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 tracking-wider hover:scale-105 transition-transform duration-300 font-times">
              ValorLink
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with scalable IT solutions. From cloud infrastructure to AI integration, we deliver enterprise-grade technology services.
            </p>
            <a 
              href="mailto:sndsanthosh74@gmail.com"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              sndsanthosh74@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["home", "about", "services", "technologies", "testimonials"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">AI Integration</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Web Development</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">Cybersecurity</li>
              <li className="hover:text-primary transition-colors duration-300 cursor-pointer">IT Consulting</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Mail, href: "mailto:sndsanthosh74@gmail.com" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm">
            Copyright © {currentYear} <span className="font-semibold text-primary font-times">ValorLink</span> Technologies. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
