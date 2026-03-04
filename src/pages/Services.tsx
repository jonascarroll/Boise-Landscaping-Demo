import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import servicesHero from "@/assets/services-hero.jpg";
import { TreePine, Mountain, Shovel, Droplets, Snowflake, Sun, Fence, Lightbulb } from "lucide-react";

const services = [
  {
    icon: TreePine,
    title: "Landscape Design & Installation",
    desc: "Custom landscape designs tailored to McCall's mountain environment. We incorporate native Idaho plants, natural stone, and sustainable materials to create outdoor spaces that are both beautiful and low-maintenance.",
  },
  {
    icon: Mountain,
    title: "Hardscaping & Stone Work",
    desc: "From natural stone patios and retaining walls to custom fire pits and outdoor kitchens, our hardscaping services add structure, function, and value to your McCall property.",
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    desc: "Efficient irrigation design and installation optimized for Idaho's climate. We install smart systems that conserve water while keeping your landscape lush and healthy.",
  },
  {
    icon: Shovel,
    title: "Lawn Care & Maintenance",
    desc: "Year-round lawn care including mowing, fertilization, aeration, and seasonal cleanups. Keep your McCall property looking pristine all season long.",
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    desc: "Reliable residential and commercial snow removal throughout the McCall and Donnelly area. Keep your driveways and walkways safe all winter.",
  },
  {
    icon: Sun,
    title: "Native & Xeriscape Plantings",
    desc: "Drought-tolerant and native plant installations that thrive in Idaho's mountain climate while reducing water usage and maintenance requirements.",
  },
  {
    icon: Fence,
    title: "Fencing & Privacy Screens",
    desc: "Custom wood, metal, and natural fencing solutions that blend with McCall's mountain aesthetic while providing privacy and property definition.",
  },
  {
    icon: Lightbulb,
    title: "Landscape Lighting",
    desc: "Professional outdoor lighting design that highlights your landscape's best features, extends usable hours, and enhances security.",
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <img src={servicesHero} alt="Luxury outdoor patio with fire pit in McCall Idaho" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container relative z-10 text-center">
          <FadeIn>
            <p className="text-warm-gold text-sm tracking-[0.3em] uppercase mb-4">Our Services</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-charcoal-foreground mb-4">Landscaping Services in McCall, Idaho</h1>
            <p className="text-charcoal-foreground/80 text-lg max-w-2xl mx-auto">Complete outdoor solutions from design to maintenance—built for Idaho's mountain climate.</p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.05}>
                <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow h-full flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svc.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2">{svc.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Need a Service Not Listed?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">We handle all types of outdoor projects in McCall and Valley County. Contact us to discuss your needs.</p>
            <Link to="/contact">
              <Button variant="cta" size="xl">Get a Free Estimate</Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Services;
