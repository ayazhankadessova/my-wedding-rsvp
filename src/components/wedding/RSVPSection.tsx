import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import flowerDecor from "@/assets/flower-.png";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";

const RSVPSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!GOOGLE_SCRIPT_URL) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus("success");
      setFormData({ name: "", email: "", attending: "", guests: "1", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section-cream py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.img
        src={flowerDecor}
        alt=""
        className="absolute top-10 left-10 w-24 md:w-32 opacity-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={flowerDecor}
        alt=""
        className="absolute bottom-10 right-10 w-24 md:w-32 opacity-20 rotate-180"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-brown text-5xl md:text-6xl lg:text-7xl mb-4">
            RSVP
          </h2>
          <div className="elegant-divider mb-6" />
          <p className="font-body text-brown-light text-sm tracking-wide">
            We would be honored by your presence. Please let us know if your plans change.
          </p>
        </motion.div>

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {status === "success" ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-script text-brown text-3xl md:text-4xl mb-4">
                Thank You!
              </h3>
              <p className="font-body text-brown-light text-sm">
                We've received your RSVP. We can't wait to celebrate with you!
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="rsvp-name"
                  className="block font-script text-brown text-lg mb-2"
                >
                  Your Name
                </label>
                <input
                  id="rsvp-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full px-4 py-3 bg-transparent border border-brown/20 font-body text-brown text-sm placeholder:text-brown-light/50 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="rsvp-email"
                  className="block font-script text-brown text-lg mb-2"
                >
                  Email
                  <span className="font-body text-brown-light text-xs ml-2">(optional)</span>
                </label>
                <input
                  id="rsvp-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-transparent border border-brown/20 font-body text-brown text-sm placeholder:text-brown-light/50 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Attending */}
              <div>
                <label className="block font-script text-brown text-lg mb-3">
                  Will you be attending?
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      required
                      checked={formData.attending === "yes"}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[hsl(43,35%,55%)]"
                    />
                    <span className="font-body text-brown text-sm">
                      Joyfully accepts
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === "no"}
                      onChange={handleChange}
                      className="w-4 h-4 accent-[hsl(43,35%,55%)]"
                    />
                    <span className="font-body text-brown text-sm">
                      Regretfully declines
                    </span>
                  </label>
                </div>
              </div>

              {/* Number of guests */}
              {formData.attending === "yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <label
                    htmlFor="rsvp-guests"
                    className="block font-script text-brown text-lg mb-2"
                  >
                    Number of Guests
                  </label>
                  <select
                    id="rsvp-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-brown/20 font-body text-brown text-sm focus:outline-none focus:border-gold transition-colors"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </motion.div>
              )}

              {/* Message */}
              <div>
                <label
                  htmlFor="rsvp-message"
                  className="block font-script text-brown text-lg mb-2"
                >
                  Message
                  <span className="font-body text-brown-light text-xs ml-2">(optional)</span>
                </label>
                <textarea
                  id="rsvp-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Dietary restrictions, song requests, or a sweet note..."
                  className="w-full px-4 py-3 bg-transparent border border-brown/20 font-body text-brown text-sm placeholder:text-brown-light/50 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <p className="font-body text-sm text-red-600 text-center">
                  {GOOGLE_SCRIPT_URL
                    ? "Something went wrong. Please try again."
                    : "RSVP is not yet connected. Please contact us directly."}
                </p>
              )}

              {/* Submit */}
              <div className="text-center pt-4">
                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-12 py-3 bg-gold text-on-gold font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300 disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === "sending" ? "Sending..." : "Send RSVP"}
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
