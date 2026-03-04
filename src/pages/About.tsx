import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import aboutImg from "@/assets/about-team.jpg";
import heroImg from "@/assets/hero-home.jpg";
import { Shield, Award, Leaf, Clock } from "lucide-react";

const values = [
  { icon: Shield, title: "Licensed & Insured", desc: "Full liability coverage and proper licensing protect you and your property." },
  { icon: Award, title: "Quality Craftsmanship", desc: "Every project meets our rigorous standards for excellence." },
  { icon: Leaf, title: "Sustainable Practices", desc: "We prioritize native plants and eco-friendly methods." },
  { icon: Clock, title: "On Time, On Budget", desc: "We respect your time and deliver transparent pricing." },
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <img src={heroImg} alt="McCall Idaho mountain landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container relative z-10 text-center">
          <FadeIn>
            <p className="text-warm-gold text-sm tracking-[0.3em] uppercase mb-4">About Us</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-charcoal-foreground mb-4">McCall Idaho's Landscaping Experts</h1>
            <p className="text-charcoal-foreground/80 text-lg max-w-2xl mx-auto">Building beautiful outdoor spaces in the heart of Idaho's mountains since 2010.</p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <img src={aboutImg} alt="Landscape Idaho team building stone wall in McCall" className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover" />
            </FadeIn>
            <FadeIn direction="left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Landscape Idaho LLC was founded with a simple mission: to bring world-class landscaping to McCall and the surrounding communities. As lifelong Idaho residents, we understand the unique challenges of mountain landscaping—from harsh winters to rocky terrain.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the years, we've completed more than 200 projects across Valley County, earning a reputation for quality, reliability, and attention to detail. Our team combines modern design techniques with deep respect for Idaho's natural environment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every project we take on—whether it's a small garden refresh or a complete property transformation—receives the same level of care and professionalism. That's the Landscape Idaho promise.
              </p>
              <Link to="/contact">
                <Button variant="cta" size="lg">Work With Us</Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-center mb-16">What Sets Us Apart</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Start Your Project?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">Contact us for a free, no-obligation consultation. We'd love to discuss your vision.</p>
            <Link to="/contact">
              <Button variant="cta" size="xl">Get a Free Estimate</Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default About;
