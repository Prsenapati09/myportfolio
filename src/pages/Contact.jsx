
import { useState } from "react";
import { Send, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const details = [
  { icon: Mail, label: "prsenapati595@gmail.com", href: "mailto:you@email.com", sub: "Direct Mail" },
  { icon: Phone, label: "+91 98615 73263", href: "tel:+91 9861573263", sub: "WhatsApp / Call" },
  { icon: MapPin, label: "odisha, India", href: null, sub: "Based in" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(false);

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxExUJfJ1-CqZSG0c0uHvih9CJ3X8Cl0yYPwiaRDKrek1nu1ts8Aw81XhC96GQTFlvoWQ/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setLoading(false);
      setError(true);
    }
  };

  const field =
    "w-full border-b border-edge bg-transparent py-3 outline-none transition-colors duration-200 placeholder:text-ash/70 focus:border-flare ";

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-edge/60 pb-12">
        <div>
          <p className="font-mono text-xs text-ash">06 / contact</p>
          <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-wide sm:text-8xl">
            Say, hello
          </h1>
        </div>
        <p className="mt-6 md:mt-0 font-mono text-sm text-ash max-w-sm">
          Have a project in mind, a question, or just want to chat? Send a message and let&apos;s build something exceptional.
        </p>
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[380px_1fr] items-start">
        {/* Left Column: Contact Details */}
        <div className="space-y-4">
          <p className="font-mono text-xs text-ash tracking-widest uppercase mb-6">Direct Information</p>
          {details.map(({ icon: Icon, label, href, sub }) => {
            const inner = (
              <div className="group relative flex items-center justify-between border border-edge bg-void px-6 py-5 transition-all duration-300 hover:border-flare">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-edge/20 p-3 text-flare transition-colors group-hover:bg-flare group-hover:text-void">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-ash">{sub}</span>
                    <span className="font-mono text-sm font-medium text-white">{label}</span>
                  </div>
                </div>
                {href && (
                  <ArrowUpRight size={18} className="text-edge transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-flare" />
                )}
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        {/* Right Column: Form */}
        <div className="border border-edge bg-void/30 p-8 sm:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-white">
                  Your name <span className="text-flare">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={update}
                  required
                  placeholder="Name"
                  className={field}
                />
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-xs text-white">
                  Your email <span className="text-flare">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  required
                  placeholder="jane@company.com"
                  className={field}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-xs text-white">
                What&apos;s this about <span className="text-flare">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={update}
                required
                placeholder="Tell me about the project, the timeline, the budget."
                className={`${field} resize-none`}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="group flex items-center gap-3 rounded-full bg-flare px-8 py-4 font-medium text-void transition-transform duration-200 hover:scale-[1.03] cursor-pointer disabled:opacity-50"
              >
                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
                {loading ? "Sending..." : "Send message"}
              </button>

              {sent && (
                <p className="font-mono text-sm text-flare animate-fade-in">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              )}

              {error && (
                <p className="font-mono text-sm text-red-400 animate-fade-in">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}