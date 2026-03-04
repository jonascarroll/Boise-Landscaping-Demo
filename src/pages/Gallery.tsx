import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import servicesImg from "@/assets/services-hero.jpg";
import heroImg from "@/assets/hero-home.jpg";
import aboutImg from "@/assets/about-team.jpg";
import { X } from "lucide-react";

const projects = [
  { img: gallery1, title: "Wildflower Garden Path", category: "Design", desc: "Custom stone walkway with native Idaho wildflowers in McCall." },
  { img: gallery2, title: "Tiered Retaining Walls", category: "Hardscaping", desc: "Natural stone walls with integrated planting beds." },
  { img: gallery3, title: "Modern Xeriscape Entry", category: "Xeriscape", desc: "Drought-tolerant front yard with decorative boulders." },
  { img: servicesImg, title: "Outdoor Living Room", category: "Hardscaping", desc: "Fire pit patio with built-in seating and mountain views." },
  { img: heroImg, title: "Lakefront Estate", category: "Design", desc: "Full property landscaping on Payette Lake in McCall." },
  { img: aboutImg, title: "Stone Wall Installation", category: "Hardscaping", desc: "Structural retaining wall with native plantings." },
];

const categories = ["All", "Design", "Hardscaping", "Xeriscape"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 md:py-40">
        <div className="absolute inset-0">
          <img src={gallery1} alt="Landscape project in McCall Idaho" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/70" />
        </div>
        <div className="container relative z-10 text-center">
          <FadeIn>
            <p className="text-warm-gold text-sm tracking-[0.3em] uppercase mb-4">Our Portfolio</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-charcoal-foreground mb-4">McCall Idaho Landscaping Projects</h1>
            <p className="text-charcoal-foreground/80 text-lg max-w-2xl mx-auto">Browse our completed work across McCall, Donnelly, and Valley County.</p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] w-full text-left"
                >
                  <img
                    src={project.img}
                    alt={`${project.title} - Landscape Idaho project`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-warm-gold text-xs tracking-widest uppercase mb-1">{project.category}</span>
                    <h3 className="font-heading text-xl text-charcoal-foreground font-semibold">{project.title}</h3>
                    <p className="text-charcoal-foreground/70 text-sm mt-1">{project.desc}</p>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 bg-charcoal/90 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-charcoal-foreground">
            <X className="w-8 h-8" />
          </button>
          <img
            src={filtered[lightbox].img}
            alt={filtered[lightbox].title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Want Results Like These?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">Let's discuss your vision. Free estimates for all McCall area properties.</p>
            <Link to="/contact">
              <Button variant="cta" size="xl">Get a Free Estimate</Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
