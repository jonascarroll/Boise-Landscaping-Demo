import FadeIn from "@/components/FadeIn";
import LeadForm from "@/components/LeadForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-charcoal py-32 md:py-40">
        <div className="container text-center">
          <FadeIn>
            <p className="text-warm-gold text-sm tracking-[0.3em] uppercase mb-4">Contact Us</p>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-charcoal-foreground mb-4">Get in Touch With Landscape Idaho</h1>
            <p className="text-charcoal-foreground/80 text-lg max-w-2xl mx-auto">
              Ready for a free estimate? Have a question? We'd love to hear from you. Serving McCall, Donnelly, Cascade, and all of Valley County, Idaho.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <FadeIn>
              <h2 className="font-heading text-3xl font-bold mb-8">Let's Start Your Project</h2>
              <div className="space-y-6 mb-10">
                <a href="tel:+12089541234" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Phone</h3>
                    <p className="text-muted-foreground">(208) 954-1234</p>
                  </div>
                </a>
                <a href="mailto:info@landscapeidaho.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">Email</h3>
                    <p className="text-muted-foreground">info@landscapeidaho.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Service Area</h3>
                    <p className="text-muted-foreground">1234 W Mcall St, McCall, Idaho</p>
                    <p className="text-muted-foreground text-sm">Serving McCall, Donnelly, Cascade & Valley County</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Business Hours</h3>
                    <p className="text-muted-foreground">Monday – Saturday: 7:00 AM – 6:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.520015390498!2d-116.11869528451654!3d44.72377997909856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54a7e5d3e0f7c8b1%3A0x2b7b7b7b7b7b7b7b!2sMcCall%2C%20ID%2083638!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Landscape Idaho location in McCall, Idaho"
                  className="w-full h-full"
                />
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.2}>
              <LeadForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="py-20 bg-primary text-center">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Love Your Yard? Refer a Neighbor!</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Know someone who needs landscaping in McCall? Send them our way and we'll take great care of them.
            </p>
            <a href="https://g.page/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-md font-semibold text-sm uppercase tracking-wide hover:brightness-110 transition-all shadow-lg">
              Leave Us a Google Review ★
            </a>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Contact;
