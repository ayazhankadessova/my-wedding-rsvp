import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { LANGUAGES, Language } from "@/lib/i18n";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showExtras = language === "en";
  const navLinks = [
    { label: t("nav.schedule"), href: "/#schedule" },
    ...(showExtras
      ? [
          { label: t("nav.stay"), href: "/#accommodation" },
          { label: t("nav.registry"), href: "/#registry" },
        ]
      : []),
    { label: t("nav.rsvp"), href: "/#rsvp" },
    { label: t("nav.faq"), href: "/#details" },
  ];

  const LanguageToggle = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-1 ${className}`}>
      {LANGUAGES.map((lang, i) => (
        <div key={lang.code} className="flex items-center gap-1">
          <button
            onClick={() => setLanguage(lang.code as Language)}
            className={`font-body text-xs tracking-wider transition-colors duration-300 ${
              language === lang.code
                ? "text-gold font-semibold"
                : "text-brown-light hover:text-gold"
            }`}
            aria-label={`Switch language to ${lang.label}`}
            aria-pressed={language === lang.code}
          >
            {lang.label}
          </button>
          {i < LANGUAGES.length - 1 && (
            <span className="text-brown-light/40 text-xs">|</span>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="font-script text-brown text-2xl">
              A & S
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-brown-light text-sm tracking-wider hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <LanguageToggle className="ml-2 pl-4 border-l border-brown-light/20" />
            </div>

            {/* Mobile right side: language toggle + menu button */}
            <div className="md:hidden flex items-center gap-4">
              <LanguageToggle />
              <button
                className="text-brown p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 flex flex-col gap-1.5">
                  <span
                    className={`block h-0.5 bg-brown transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-brown transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block h-0.5 bg-brown transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="font-script text-brown text-3xl hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
