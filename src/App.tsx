import { ArrowRight, Shield, Headphones, Cpu, Lock, Cloud, Server, Users, Zap, Award, Expand, Phone, Mail, Globe, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-it-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className={`w-8 h-8 transition-colors ${isScrolled ? 'text-it-blue' : 'text-white'}`} />
            <span className={`font-montserrat font-bold text-lg tracking-widest uppercase transition-colors ${isScrolled ? 'text-white' : 'text-white'}`}>IT LEGENDS</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className={`font-montserrat font-medium transition-colors hover:text-it-red ${isScrolled ? 'text-it-silver' : 'text-white/90'}`}>Home</button>
            <button onClick={() => scrollToSection('about')} className={`font-montserrat font-medium transition-colors hover:text-it-red ${isScrolled ? 'text-it-silver' : 'text-white/90'}`}>About</button>
            <button onClick={() => scrollToSection('services')} className={`font-montserrat font-medium transition-colors hover:text-it-red ${isScrolled ? 'text-it-silver' : 'text-white/90'}`}>Services</button>
            <button onClick={() => scrollToSection('why-us')} className={`font-montserrat font-medium transition-colors hover:text-it-red ${isScrolled ? 'text-it-silver' : 'text-white/90'}`}>Why Us</button>
            <button onClick={() => scrollToSection('contact')} className={`font-montserrat font-medium transition-colors hover:text-it-red ${isScrolled ? 'text-it-silver' : 'text-white/90'}`}>Contact</button>
          </div>
        </div>
      </nav>

      <div id="home" className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden" style={{backgroundImage: 'url(/src/img/hero-bg.jpg)'}}>
        <div className="absolute inset-0 bg-[#0A0A0A]/60"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-it-blue/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-it-red/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-it-blue/50 to-transparent"></div>
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-it-red/30 to-transparent"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-it-blue/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8 inline-flex items-center justify-center">
            <Shield className="w-16 h-16 text-it-blue drop-shadow-[0_0_25px_rgba(0,123,255,0.6)]" />
          </div>

          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight uppercase">
            Providing You with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-it-blue via-it-red to-it-blue drop-shadow-[0_0_40px_rgba(199,0,57,0.6)]">
              LEGENDARY
            </span>{' '}
            I.T. Services
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group px-8 py-4 bg-it-blue hover:bg-it-blue/80 text-white font-montserrat font-semibold rounded-xl shadow-[0_0_20px_rgba(0,123,255,0.4)] hover:shadow-[0_0_30px_rgba(0,123,255,0.7)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Get Support
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-it-red hover:bg-it-red/80 text-white font-montserrat font-semibold rounded-xl shadow-[0_0_20px_rgba(199,0,57,0.4)] hover:shadow-[0_0_30px_rgba(199,0,57,0.7)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Our Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="font-montserrat text-it-silver text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Empowering South African businesses with reliable IT solutions
          </p>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-it-dark to-it-silver/20 py-20">
        <div className="h-px bg-gradient-to-r from-it-red via-it-blue to-it-red shadow-[0_0_10px_rgba(199,0,57,0.5)]"></div>
      </div>

      <div id="about" className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 relative" style={{backgroundImage: 'url(/src/img/about-bg.jpg)'}}>
        <div className="absolute inset-0 bg-[#E0E0E0]/30"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-12 tracking-tight uppercase">
            WHO WE ARE
          </h2>

          <p className="font-montserrat text-[#1A1A1A] text-lg md:text-xl mb-6 max-w-3xl mx-auto">
            Our mission is to protect, maintain, and enhance your technology infrastructure so you can focus on what truly matters — your business growth.
          </p>

          <p className="font-montserrat text-[#2A2A2A] text-base md:text-lg max-w-3xl mx-auto">
            We deliver innovative, reliable, and efficient IT support for businesses of all sizes.
          </p>
        </div>
      </div>

      <div id="services" className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 relative" style={{backgroundImage: 'url(/src/img/services-bg.jpg)'}}>
        <div className="absolute inset-0 bg-[#0033AA]/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight uppercase">
            OUR SERVICES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Headphones className="w-12 h-12" />}
              title="Managed IT Support"
              description="24/7 proactive monitoring and support for your systems"
            />
            <ServiceCard
              icon={<Cpu className="w-12 h-12" />}
              title="Hardware & Network Setup"
              description="Professional installation and configuration of IT infrastructure"
            />
            <ServiceCard
              icon={<Lock className="w-12 h-12" />}
              title="Cybersecurity & Protection"
              description="Advanced security solutions to protect your business data"
            />
            <ServiceCard
              icon={<Cloud className="w-12 h-12" />}
              title="Cloud & Backup Solutions"
              description="Secure cloud services and reliable data backup systems"
            />
            <ServiceCard
              icon={<Server className="w-12 h-12" />}
              title="Server Maintenance & Monitoring"
              description="Continuous server health checks and preventive maintenance"
            />
            <ServiceCard
              icon={<Users className="w-12 h-12" />}
              title="Helpdesk & Remote Assistance"
              description="Quick technical support and remote issue resolution"
            />
          </div>
        </div>
      </div>

      <div id="why-us" className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 relative" style={{backgroundImage: 'url(/src/img/whyus-bg.jpg)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] to-[#000000] opacity-65"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight uppercase">
            WHY PARTNER WITH US
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title="Rapid Response Times"
              description="Get immediate support when you need it. Our team responds to critical issues within minutes, minimizing downtime for your business."
              delay="0"
            />
            <FeatureCard
              icon={<Award className="w-10 h-10" />}
              title="Certified Technicians"
              description="Our team comprises highly skilled professionals with industry-leading certifications ensuring expert-level IT solutions."
              delay="100"
            />
            <FeatureCard
              icon={<Expand className="w-10 h-10" />}
              title="Scalable Solutions for All Business Sizes"
              description="From startups to enterprises, we provide flexible IT solutions that grow and adapt with your business needs."
              delay="200"
            />
          </div>
        </div>
      </div>

      <div id="contact" className="w-full bg-gradient-to-b from-white to-it-silver/30 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-it-dark text-center mb-4 tracking-tight uppercase">
            LET'S BUILD SOMETHING LEGENDARY
          </h2>

          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex flex-wrap justify-center gap-6 text-gray-700">
              <a href="tel:+27846348144" className="font-montserrat font-medium flex items-center gap-2 hover:text-it-red transition-colors">
                <Phone className="w-5 h-5" />
                <span>(+27) 84 634 8144</span>
              </a>
              <a href="mailto:info@itlegends.co.za" className="font-montserrat font-medium flex items-center gap-2 hover:text-it-red transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@itlegends.co.za</span>
              </a>
              <a href="https://www.itlegends.co.za" target="_blank" rel="noopener noreferrer" className="font-montserrat font-medium flex items-center gap-2 hover:text-it-red transition-colors">
                <Globe className="w-5 h-5" />
                <span>www.itlegends.co.za</span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/27846348144"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-it-red hover:bg-it-red/80 text-white font-montserrat font-semibold rounded-xl shadow-[0_0_20px_rgba(199,0,57,0.4)] hover:shadow-[0_0_30px_rgba(199,0,57,0.7)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://facebook.com/itlegends"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-it-red hover:bg-it-red/80 text-white font-montserrat font-semibold rounded-xl shadow-[0_0_20px_rgba(199,0,57,0.4)] hover:shadow-[0_0_30px_rgba(199,0,57,0.7)] transition-all duration-300 transform hover:scale-105"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/itlegends"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-it-red hover:bg-it-red/80 text-white font-montserrat font-semibold rounded-xl shadow-[0_0_20px_rgba(199,0,57,0.4)] hover:shadow-[0_0_30px_rgba(199,0,57,0.7)] transition-all duration-300 transform hover:scale-105"
              >
                Instagram
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>

      <footer className="w-full bg-it-dark py-8 px-6 border-t border-it-blue/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-montserrat text-it-silver text-sm md:text-base font-medium">
            © 2025 IT Legends — Providing You with LEGENDARY Services.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group relative bg-white/95 backdrop-blur border border-white/50 rounded-xl p-8 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_rgba(199,0,57,0.4)] hover:border-it-red/80 overflow-hidden transform hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-it-blue/0 via-transparent to-it-red/0 group-hover:from-it-blue/10 group-hover:to-it-red/10 transition-all duration-300"></div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-it-blue to-it-red"></div>
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-it-red to-it-blue"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center p-3 bg-gradient-to-br from-it-blue/10 to-it-red/10 rounded-lg group-hover:shadow-[0_0_20px_rgba(199,0,57,0.4)] transition-all duration-300 text-it-blue group-hover:text-it-red">
          {icon}
        </div>

        <h3 className="font-montserrat text-xl font-bold text-it-dark mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-it-blue group-hover:to-it-red transition-all duration-300 tracking-tight uppercase">
          {title}
        </h3>

        <p className="font-montserrat text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: string }) {
  return (
    <div
      className="relative text-center opacity-0 animate-fade-in"
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
      }}
    >
      <div className="flex flex-col items-center h-full">
        <div className="mb-6 inline-flex items-center justify-center p-4 bg-gradient-to-br from-it-blue/20 to-it-red/20 rounded-full text-it-blue drop-shadow-[0_0_25px_rgba(0,123,255,0.5)] hover:drop-shadow-[0_0_40px_rgba(199,0,57,0.7)] transition-all duration-300">
          {icon}
        </div>

        <h3 className="font-montserrat text-2xl font-bold text-white mb-4 tracking-tight uppercase">
          {title}
        </h3>

        <p className="font-montserrat text-it-silver leading-relaxed text-base font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-it-blue/20">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-montserrat font-semibold text-it-dark mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-it-red focus:border-transparent transition-all duration-200 font-montserrat"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-montserrat font-semibold text-it-dark mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-it-red focus:border-transparent transition-all duration-200 font-montserrat"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-montserrat font-semibold text-it-dark mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-it-red focus:border-transparent transition-all duration-200 resize-none font-montserrat"
            placeholder="Tell us about your IT needs..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-it-red hover:bg-it-red/80 text-white font-montserrat font-semibold rounded-xl shadow-[0_0_20px_rgba(199,0,57,0.4)] hover:shadow-[0_0_30px_rgba(199,0,57,0.7)] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="text-center text-green-600 font-montserrat font-semibold animate-fade-in">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="text-center text-it-red font-montserrat font-semibold animate-fade-in">
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </form>
  );
}

export default App;
