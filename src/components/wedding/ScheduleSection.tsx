import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/hooks/use-language";
import couplePhoto from "@/assets/faq-1.png";

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const events = [
    { time: "17:00", event: t("schedule.event.arrival") },
    { time: "18:00", event: t("schedule.event.ceremony") },
    { time: "21:00", event: t("schedule.event.part2") },
    { time: "23:00", event: t("schedule.event.end") },
  ];

  return (
    <section className="section-gold py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-0 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="image-frame-thick inline-block">
              <img
                src={couplePhoto}
                alt="Ayazhan and Shokan"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </motion.div>

          {/* Schedule */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-script text-on-gold text-5xl md:text-6xl lg:text-7xl mb-2">
              {t("schedule.title")}
            </h2>
            <p className="font-body text-on-gold/80 tracking-widest uppercase text-sm mb-10">
              {t("schedule.subtitle")}
            </p>

            <div className="space-y-6">
              {events.map((item, index) => (
                <motion.div
                  key={item.event}
                  className="flex items-center gap-8 border-b border-cream/20 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <span className="font-body text-on-gold/70 text-sm w-20 shrink-0">
                    {item.time}
                  </span>
                  <span className="font-script text-on-gold text-xl md:text-2xl">
                    {item.event}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
