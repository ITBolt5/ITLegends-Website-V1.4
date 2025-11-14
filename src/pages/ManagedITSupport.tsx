import { ArrowRight, AlertTriangle, Clock, DollarSign, Shield, Zap, CheckCircle, TrendingUp, Phone, Mail, Headphones, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import MicroDivider from '../components/MicroDivider';
import logoNavbar from '../img/logo-navbar.png';

interface PainPointCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function PainPointCard({ icon, title, description }: PainPointCardProps) {
  return (
    <div className="group relative bg-[#0A0A0A]/95 backdrop-blur-sm border border-it-red/40 rounded-xl p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(199,0,57,0.5)] hover:border-it-red/80 overflow-hidden transform hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-it-red/0 via-transparent to-it-red/0 group-hover:from-it-red/15 group-hover:to-it-red/10 transition-all duration-300"></div>

      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center p-3 bg-gradient-to-br from-it-red/30 to-it-red/20 rounded-lg group-hover:shadow-[0_0_25px_rgba(199,0,57,0.6)] transition-all duration-300 text-it-red drop-shadow-[0_0_15px_rgba(199,0,57,0.4)]">
          {icon}
        </div>

        <h3 className="font-montserrat text-lg font-bold text-white mb-2 tracking-tight uppercase">
          {title}
        </h3>

        <p className="font-montserrat text-it-silver text-sm leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SolutionCard({ icon, title, description }: SolutionCardProps) {
  return (
    <div className="group relative bg-[#0A0A0A]/95 backdrop-blur-sm border border-it-blue/40 rounded-xl p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_rgba(0,123,255,0.5)] hover:border-it-blue/80 overflow-hidden transform hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-it-blue/0 via-transparent to-it-blue/0 group-hover:from-it-blue/15 group-hover:to-it-blue/10 transition-all duration-300"></div>

      <div className="relative z-10">
        <div className="mb-4 inline-flex items-center justify-center p-3 bg-gradient-to-br from-it-blue/30 to-it-blue/20 rounded-lg group-hover:shadow-[0_0_25px_rgba(0,123,255,0.6)] transition-all duration-300 text-it-blue drop-shadow-[0_0_15px_rgba(0,123,255,0.4)]">
          {icon}
        </div>

        <h3 className="font-montserrat text-lg font-bold text-white mb-2 tracking-tight uppercase">
          {title}
        </h3>

        <p className="font-montserrat text-it-silver text-sm leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="relative bg-white/5 backdrop-blur-sm border border-it-silver/30 rounded-xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-it-silver/50">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 text-it-blue drop-shadow-[0_0_15px_rgba(0,123,255,0.4)]">
          {icon}
        </div>
        <div>
          <h3 className="font-montserrat text-lg font-bold text-white mb-2 tracking-tight uppercase">
            {title}
          </h3>
          <p className="font-montserrat text-it-silver text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-it-blue to-it-red rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,123,255,0.4)]">
          <span className="font-montserrat text-2xl font-bold text-white">{number}</span>
        </div>

        <div className="flex-1">
          <h3 className="font-montserrat text-xl font-bold text-white mb-2 tracking-tight uppercase">
            {title}
          </h3>
          <p className="font-montserrat text-it-silver leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });

    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-it-silver/30">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-montserrat font-semibold text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-it-silver/40 rounded-xl bg-white/10 text-white placeholder-it-silver/50 focus:outline-none focus:ring-2 focus:ring-it-blue focus:border-transparent transition-all duration-200 font-montserrat"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-montserrat font-semibold text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-it-silver/40 rounded-xl bg-white/10 text-white placeholder-it-silver/50 focus:outline-none focus:ring-2 focus:ring-it-blue focus:border-transparent transition-all duration-200 font-montserrat"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-montserrat font-semibold text-white mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-it-silver/40 rounded-xl bg-white/10 text-white placeholder-it-silver/50 focus:outline-none focus:ring-2 focus:ring-it-blue focus:border-transparent transition-all duration-200 font-montserrat"
              placeholder="+27 XX XXX XXXX"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-montserrat font-semibold text-white mb-2">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-it-silver/40 rounded-xl bg-white/10 text-white placeholder-it-silver/50 focus:outline-none focus:ring-2 focus:ring-it-blue focus:border-transparent transition-all duration-200 font-montserrat"
              placeholder="Your company"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-montserrat font-semibold text-white mb-2">
            Tell us about your IT needs
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-it-silver/40 rounded-xl bg-white/10 text-white placeholder-it-silver/50 focus:outline-none focus:ring-2 focus:ring-it-blue focus:border-transparent transition-all duration-200 resize-none font-montserrat"
            placeholder="Describe your current IT challenges..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-gradient-to-r from-it-red to-it-blue hover:from-it-red/80 hover:to-it-blue/80 text-white font-montserrat font-semibold rounded-xl shadow-[0_0_25px_rgba(199,0,57,0.5),0_0_15px_rgba(0,123,255,0.4)] hover:shadow-[0_0_35px_rgba(199,0,57,0.8),0_0_25px_rgba(0,123,255,0.7)] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Sending...' : 'Request Quote'}
        </button>

        {submitStatus === 'success' && (
          <div className="text-center text-green-400 font-montserrat font-semibold animate-fade-in">
            Quote request sent! We'll contact you within 24 hours.
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

export default function ManagedITSupport() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.title = 'Managed IT Support | IT Legends';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Proactive managed IT support for South African businesses, including remote and onsite help, monitoring, and maintenance.');
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://www.itlegends.co.za/services/managed-it-support';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-it-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 pl-4 sm:pl-4 md:pl-6">
            <img
              src={logoNavbar}
              alt="IT Legends Logo"
              className="h-9 sm:h-[36px] md:h-12 w-auto transition-all duration-300 hover:drop-shadow-[0_0_6px_rgba(0,123,255,0.25)]"
              style={{ filter: 'none', opacity: 1, mixBlendMode: 'normal' }}
            />
            <span className={`font-montserrat font-bold text-lg tracking-widest uppercase transition-colors hidden sm:inline ${isScrolled ? 'text-white' : 'text-white'}`}>IT LEGENDS</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/" className={`font-montserrat font-medium transition-colors hover:text-it-red ${isScrolled ? 'text-it-silver' : 'text-white/90'}`}>Home</a>
            <a href="/#services" className={`font-montserrat font-medium transition-colors hover:text-it-red ${isScrolled ? 'text-it-silver' : 'text-white/90'}`}>Services</a>
            <a href="/#contact" className={`font-montserrat font-medium transition-colors hover:text-it-red ${isScrolled ? 'text-it-silver' : 'text-white/90'}`}>Contact</a>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden section-fade" style={{backgroundImage: 'url(/src/img/hero-bg.jpg)'}}>
        <div className="absolute inset-0 bg-[#0A0A0A]/70"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-it-blue/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-it-red/15 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight uppercase">
            Managed IT Support
          </h1>

          <p className="font-montserrat text-it-silver text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            24/7 proactive monitoring and expert support for your entire IT infrastructure
          </p>

          <button
            onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-gradient-to-r from-it-red to-it-blue hover:from-it-red/80 hover:to-it-blue/80 text-white font-montserrat font-semibold rounded-xl shadow-[0_0_25px_rgba(199,0,57,0.5),0_0_15px_rgba(0,123,255,0.4)] hover:shadow-[0_0_35px_rgba(199,0,57,0.8),0_0_25px_rgba(0,123,255,0.7)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <MicroDivider />

      <div className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 relative section-fade" style={{backgroundImage: 'url(/src/img/about-bg.jpg)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/60 to-[#0A0A0A]/50"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Who This Service Is For
          </h2>

          <p className="font-montserrat text-white text-lg md:text-xl mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] leading-relaxed">
            Our Managed IT Support is designed for South African businesses that want to focus on growth without worrying about technology failures, security threats, or system downtime.
          </p>

          <p className="font-montserrat text-it-silver text-base md:text-lg max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] leading-relaxed">
            Whether you're a small business without an IT team, a growing company needing reliable tech support, or an established enterprise looking for proactive monitoring and maintenance, we've got you covered.
          </p>
        </div>
      </div>

      <MicroDivider />

      <div className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 relative section-fade" style={{backgroundImage: 'url(/src/img/services-bg.jpg)'}}>
        <div className="absolute inset-0 bg-[#0A0A0A]/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white text-center mb-6 tracking-tight uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Common IT Pain Points
          </h2>
          <p className="font-montserrat text-it-silver text-center text-lg mb-12 max-w-3xl mx-auto">
            These are the challenges that keep business owners up at night
          </p>

          <div className="max-w-3xl mx-auto space-y-5">
            <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-it-red/30 rounded-lg hover:bg-white/10 hover:border-it-red/50 transition-all duration-300">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-it-red text-white font-bold text-sm drop-shadow-[0_0_15px_rgba(199,0,57,0.6)]">
                  •
                </div>
              </div>
              <div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-1 tracking-tight">
                  Unplanned downtime and slow tech response
                </h3>
                <p className="font-montserrat text-it-silver text-sm font-medium">
                  System failures disrupt operations and cost you money every minute
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-it-red/30 rounded-lg hover:bg-white/10 hover:border-it-red/50 transition-all duration-300">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-it-red text-white font-bold text-sm drop-shadow-[0_0_15px_rgba(199,0,57,0.6)]">
                  •
                </div>
              </div>
              <div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-1 tracking-tight">
                  Hidden costs from reactive IT maintenance
                </h3>
                <p className="font-montserrat text-it-silver text-sm font-medium">
                  Emergency IT fixes and reactive support drain your budget unpredictably
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm border border-it-red/30 rounded-lg hover:bg-white/10 hover:border-it-red/50 transition-all duration-300">
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-it-red text-white font-bold text-sm drop-shadow-[0_0_15px_rgba(199,0,57,0.6)]">
                  •
                </div>
              </div>
              <div>
                <h3 className="font-montserrat text-lg font-bold text-white mb-1 tracking-tight">
                  Staff frustration due to recurring computer issues
                </h3>
                <p className="font-montserrat text-it-silver text-sm font-medium">
                  Repeated technical problems reduce productivity and employee satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MicroDivider />

      <div className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 relative section-fade" style={{backgroundImage: 'url(/src/img/whyus-bg.jpg)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-[#000000] opacity-75"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white text-center mb-6 tracking-tight uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Our Solution
          </h2>
          <p className="font-montserrat text-it-silver text-center text-lg mb-12 max-w-3xl mx-auto">
            Comprehensive managed IT support that keeps your systems running smoothly
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative bg-white/5 backdrop-blur-sm border border-it-blue/30 rounded-xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-it-blue/50 group">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-it-blue/30 to-it-blue/20 mb-6 group-hover:shadow-[0_0_25px_rgba(0,123,255,0.6)] transition-all duration-300 text-it-blue drop-shadow-[0_0_15px_rgba(0,123,255,0.4)] mx-auto">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-it-blue text-center mb-3 tracking-tight uppercase">
                24/7 Remote & Onsite Support
              </h3>
              <p className="font-montserrat text-white text-center leading-relaxed font-medium">
                Guaranteed SLAs with response times tailored to your business needs. Our team is always ready to help, whenever you need us.
              </p>
            </div>

            <div className="relative bg-white/5 backdrop-blur-sm border border-it-blue/30 rounded-xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-it-blue/50 group">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-it-blue/30 to-it-blue/20 mb-6 group-hover:shadow-[0_0_25px_rgba(0,123,255,0.6)] transition-all duration-300 text-it-blue drop-shadow-[0_0_15px_rgba(0,123,255,0.4)] mx-auto">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-it-blue text-center mb-3 tracking-tight uppercase">
                Proactive Monitoring & Maintenance
              </h3>
              <p className="font-montserrat text-white text-center leading-relaxed font-medium">
                We catch problems before they happen, preventing failures and keeping your infrastructure running smoothly 24/7.
              </p>
            </div>

            <div className="relative bg-white/5 backdrop-blur-sm border border-it-blue/30 rounded-xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-it-blue/50 group">
              <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-it-blue/30 to-it-blue/20 mb-6 group-hover:shadow-[0_0_25px_rgba(0,123,255,0.6)] transition-all duration-300 text-it-blue drop-shadow-[0_0_15px_rgba(0,123,255,0.4)] mx-auto">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-it-blue text-center mb-3 tracking-tight uppercase">
                Flat-Rate Managed Packages
              </h3>
              <p className="font-montserrat text-white text-center leading-relaxed font-medium">
                Predictable monthly costs that simplify budgeting. No hidden fees, no surprise bills—just transparent pricing you can count on.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MicroDivider />

      <div className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 relative section-fade" style={{backgroundImage: 'url(/src/img/contact-bg.jpg)'}}>
        <div className="absolute inset-0 bg-[#0B0B22]/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white text-center mb-6 tracking-tight uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Key Benefits
          </h2>
          <p className="font-montserrat text-it-silver text-center text-lg mb-12 max-w-3xl mx-auto">
            What you gain when you partner with IT Legends
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <BenefitCard
              icon={<Clock className="w-8 h-8" />}
              title="Minimize Downtime"
              description="Proactive maintenance and rapid response keep your business running without interruption"
            />
            <BenefitCard
              icon={<DollarSign className="w-8 h-8" />}
              title="Reduce IT Costs"
              description="Fixed monthly pricing is more affordable than hiring full-time IT staff"
            />
            <BenefitCard
              icon={<Shield className="w-8 h-8" />}
              title="Enhanced Security"
              description="Multi-layered protection against cyber threats and data breaches"
            />
            <BenefitCard
              icon={<TrendingUp className="w-8 h-8" />}
              title="Focus on Growth"
              description="Spend your time on business strategy instead of IT problems"
            />
            <BenefitCard
              icon={<CheckCircle className="w-8 h-8" />}
              title="Expert Guidance"
              description="Access to certified technicians and strategic IT advice"
            />
            <BenefitCard
              icon={<Zap className="w-8 h-8" />}
              title="Scalable Support"
              description="Services that grow and adapt as your business expands"
            />
          </div>
        </div>
      </div>

      <MicroDivider />

      <div className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 relative section-fade" style={{backgroundImage: 'url(/src/img/services-bg.jpg)'}}>
        <div className="absolute inset-0 bg-[#0A0A0A]/70"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white text-center mb-6 tracking-tight uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Our Process
          </h2>
          <p className="font-montserrat text-it-silver text-center text-lg mb-16 max-w-3xl mx-auto">
            How we deliver legendary managed IT support
          </p>

          <div className="space-y-12">
            <ProcessStep
              number="1"
              title="Discovery & Assessment"
              description="We audit your current IT infrastructure, identify vulnerabilities, and understand your business needs."
            />
            <ProcessStep
              number="2"
              title="Customized Plan"
              description="Based on the assessment, we design a tailored support plan with clear service levels and pricing."
            />
            <ProcessStep
              number="3"
              title="Onboarding & Setup"
              description="We implement monitoring tools, configure security systems, and integrate our support team with your operations."
            />
            <ProcessStep
              number="4"
              title="24/7 Monitoring & Support"
              description="Our team actively monitors your systems, responds to issues, and provides ongoing maintenance and updates."
            />
            <ProcessStep
              number="5"
              title="Regular Reviews"
              description="Quarterly business reviews ensure our services align with your evolving needs and growth plans."
            />
          </div>
        </div>
      </div>

      <MicroDivider />

      <div id="quote" className="w-full bg-cover bg-center bg-no-repeat py-20 px-6 relative section-fade" style={{backgroundImage: 'url(/src/img/contact-bg.jpg)'}}>
        <div className="absolute inset-0 bg-[#0B0B22]/70"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-white text-center mb-6 tracking-tight uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            Ready for Legendary Support?
          </h2>
          <p className="font-montserrat text-it-silver text-center text-lg mb-12">
            Request a quote and let's discuss how we can transform your IT experience
          </p>

          <QuoteForm />

          <div className="mt-12 flex flex-col items-center gap-6">
            <div className="flex flex-wrap justify-center gap-6 text-it-silver">
              <a href="tel:+27846348144" className="font-montserrat font-medium flex items-center gap-2 hover:text-it-red transition-colors">
                <Phone className="w-5 h-5" />
                <span>(+27) 84 634 8144</span>
              </a>
              <a href="mailto:info@itlegends.co.za" className="font-montserrat font-medium flex items-center gap-2 hover:text-it-red transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@itlegends.co.za</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <MicroDivider />

      <footer className="w-full bg-it-dark py-8 px-6 border-t border-it-blue/30 section-fade">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-montserrat text-it-silver text-sm md:text-base font-medium">
            © 2025 IT Legends — Providing You with LEGENDARY Services.
          </p>
        </div>
      </footer>
    </div>
  );
}
