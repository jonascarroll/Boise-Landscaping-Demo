import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import LeadForm from "@/components/LeadForm";
import heroImg from "@/assets/hero-home.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import servicesImg from "@/assets/services-hero.jpg";
import { Phone, Shield, Star, Users, TreePine, Mountain, Shovel, Droplets } from "lucide-react";

const services = [
  { icon: TreePine, title: "Landscape Design", desc: "Custom designs that complement McCall's natural mountain beauty." },
  { icon: Mountain, title: "Hardscaping", desc: "Stone patios, retaining walls, and pathways built to last." },
  { icon: Shovel, title: "Lawn & Garden", desc: "Installation, maintenance, and seasonal cleanups." },
  { icon: Droplets, title: "Irrigation", desc: "Efficient systems designed for Idaho's climate." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Beautiful landscaped property in McCall Idaho with mountain views" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>
        <div className="container relative z-10 py-32">
          <FadeIn>
            <p className="text-warm-gold font-body text-sm tracking-[0.3em] uppercase mb-4">McCall, Idaho's Premier Landscaping Company</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal-foreground max-w-3xl leading-tight mb-6">
              Boise's Premier Landscaping Experts
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-charcoal-foreground/80 text-lg max-w-xl mb-8 leading-relaxed">
              Licensed, insured, and locally owned. We create stunning outdoor spaces that honor Idaho's natural beauty. Serving McCall, Donnelly, and Valley County.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">Get a Free Estimate</Button>
              </Link>
              <a href="tel:+12089541234">
                <Button variant="hero-outline" size="xl">
                   <Phone className="w-5 h-5" /> Call (208) 954-1234
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-primary py-6">
        <div className="container flex flex-wrap justify-center gap-8 md:gap-16 text-primary-foreground text-sm">
          <div className="flex items-center gap-2"><Shield className="w-5 h-5" /> Licensed & Insured</div>
          <div className="flex items-center gap-2"><Star className="w-5 h-5" /> 5-Star Google Rating</div>
          <div className="flex items-center gap-2"><Users className="w-5 h-5" /> 200+ Projects Completed</div>
          <div className="flex items-center gap-2"><Mountain className="w-5 h-5" /> Locally Owned Since 2010</div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container">
          <FadeIn>
            <p className="text-accent text-sm tracking-[0.3em] uppercase text-center mb-2">What We Do</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-4">Professional Landscaping Services in McCall, Idaho</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              From custom landscape design to year-round maintenance, we handle every aspect of your outdoor space.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                    <svc.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="default" size="lg">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-cream">
        <div className="container">
          <FadeIn>
            <p className="text-accent text-sm tracking-[0.3em] uppercase text-center mb-2">Our Work</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-16">Recent McCall Idaho Landscaping Projects</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: gallery1, title: "Mountain Garden Pathway" },
              { img: gallery2, title: "Stone Retaining Walls" },
              { img: gallery3, title: "Native Xeriscape Design" },
            ].map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-lg aspect-square">
                  <img src={project.img} alt={`${project.title} - Landscape Idaho project in McCall`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="font-heading text-xl text-charcoal-foreground font-semibold">{project.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button variant="default" size="lg">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview with Image */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <img src={servicesImg} alt="Outdoor living space by Landscape Idaho in McCall" className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover" />
            </FadeIn>
            <FadeIn direction="left">
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">Why Choose Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">McCall's Most Trusted Landscaping Team</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When you choose Landscape Idaho, you're choosing a team that understands the unique challenges and beauty of mountain landscaping. We use native plants, sustainable practices, and expert craftsmanship to create outdoor spaces that thrive in Idaho's climate.
              </p>
              <ul className="space-y-3 mb-8">
                {["Locally owned and operated in McCall since 2010", "Fully licensed, bonded, and insured", "Expert knowledge of Idaho-native plants", "Free consultations and transparent pricing"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="default" size="lg">Learn More About Us</Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Referral CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Love Your Yard? Refer a Neighbor!</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
              Our best projects come from referrals. If you love what we've done for your property, spread the word! Refer a friend or neighbor and both of you receive a special thank-you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="cta" size="xl">Refer a Friend</Button>
              </Link>
              <a href="https://g.page/review" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="xl">Leave Us a Google Review ★</Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-24 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <p className="text-accent text-sm tracking-[0.3em] uppercase mb-2">Get Started</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your McCall Property?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need a complete landscape redesign or seasonal maintenance, we're here to help. Get your free, no-obligation estimate today.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+12089541234" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">(208) 954-1234</a>
                </div>
                <p className="text-muted-foreground text-sm">Mon–Sat: 7:00 AM – 6:00 PM</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <LeadForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
