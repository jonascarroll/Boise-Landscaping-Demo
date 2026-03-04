import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-lg p-8 text-center shadow-lg border border-border"
      >
        <div className="text-4xl mb-4">🌿</div>
        <h3 className="font-heading text-2xl font-bold text-primary mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          We'll be in touch within 24 hours. In the meantime, feel free to call us at{" "}
          <a href="tel:+12085551234" className="text-primary font-semibold">(208) 555-1234</a>.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-lg border border-border space-y-5">
      <h3 className="font-heading text-2xl font-bold text-foreground">Get Your Free Estimate</h3>
      <p className="text-muted-foreground text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name *"
          required
          maxLength={100}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email Address *"
          required
          maxLength={255}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
        />
      </div>
      <input
        type="tel"
        placeholder="Phone Number"
        maxLength={20}
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none"
      />
      <textarea
        placeholder="Tell us about your project..."
        rows={4}
        required
        maxLength={1000}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-ring focus:outline-none resize-none"
      />
      <Button type="submit" variant="cta" size="lg" className="w-full">
        Request My Free Estimate
      </Button>
      <p className="text-xs text-muted-foreground text-center">No obligation. Licensed & insured in Idaho.</p>
    </form>
  );
};

export default LeadForm;
