import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { useState } from "react";
import { Linkedin, Mail, Send } from "lucide-react";

export default function ContactSection() {
  const { ref, inView } = useInView(0.1);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.h2
          className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>
        <p className="text-center text-muted-foreground mb-12">
          Open to Founding Engineer opportunities
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.form
            className="space-y-5"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full gradient-bg gradient-bg-hover py-3.5 rounded-lg font-heading font-semibold text-foreground transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
            >
              {submitted ? "Message Sent! ✓" : <><Send className="w-4 h-4" /> Send Message</>}
            </button>
          </motion.form>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="card-surface p-6">
              <h3 className="font-heading font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/jerry-l-y-b628803b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href="mailto:contact@jerryyang.dev"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>

            <div className="card-surface p-6">
              <h3 className="font-heading font-semibold mb-2">Looking For</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Founding Engineer / Lead Engineer roles at startups building ambitious products. I bring 11+ years of full-stack experience, a proven track record scaling platforms from 0 to millions of users, and a passion for shipping fast in resource-constrained environments.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
