Minimalistic wedding website for Ayazhan & Shokan with elegant florals and elephant motifs. The inspiration shows a romantic cream/gold palette with botanical illustrations and elegant script typography.

**Design approach:**
- Warm ivory/cream base with sage green and dusty rose accents
- Elegant script font (Cormorant Garamond) for headings
- Clean serif for body text
- Botanical line-art florals and elephant illustrations
- Smooth scroll animations

**Sections:**
1. Hero with names & date
2. Venue & Time details
3. Dress Code
4. Schedule (Games, Dancing)
5. Accommodation info
6. Gift Registry
7. Contact

Let me build this for you:

\\n\\n  \\n    \\n    \\n    Lovable Generated Project\\n    \\n    \\n  \\n  \\n    \\n    \", \"replace\": \"\\n\\n  \\n    \\n    \\n    Ayazhan & Shokan - Wedding\\n    \\n    \\n    \\n    \\n    \\n  \\n  \\n    \\n    \"}">

Now I have the files. Let me create the design system and all components:
\\n\\n  \\n    \\n    \\n    Ayazhan & Shokan - Wedding\\n    \\n    \\n\\n    \\n    \\n    \\n\\n    \\n    \\n    \\n    \\n    \\n  \\n\\n  \\n    \\n    \\n  \\n\\n\"}">

Now let me generate the decorative images (florals and elephants) and create all the components:

Beautiful images! Now let me create all the components for the wedding website:
 {\\n  return (\\n    \\n      {/* Decorative florals - top left */}\\n      \\n      \\n      {/* Decorative florals - top right (flipped) */}\\n      \\n\\n      {/* Elephant decorations - sides */}\\n      \\n      \\n      \\n\\n      {/* Main content */}\\n      \\n        \\n          You're Invited to the Wedding of\\n        \\n\\n        \\n          Ayazhan\\n        \\n        \\n        \\n          &\\n        \\n        \\n        \\n          Shokan\\n        \\n\\n        \\n\\n        \\n          Save the Date\\n        \\n\\n        \\n          View Details\\n        \\n      \\n\\n      {/* Decorative florals - bottom */}\\n      \\n      \\n      \\n    \\n  );\\n};\\n\\nexport default HeroSection;\\n\"}">

 {\\n  const ref = useRef(null);\\n  const isInView = useInView(ref, { once: true, margin: \\\"-100px\\\" });\\n\\n  const details = [\\n    {\\n      title: \\\"The Venue\\\",\\n      description: \\\"Venue details will be shared soon. Stay tuned for the exact location and directions.\\\",\\n      icon: \\\"📍\\\",\\n    },\\n    {\\n      title: \\\"The Time\\\",\\n      description: \\\"The celebration time will be announced. Please check back for updates.\\\",\\n      icon: \\\"🕐\\\",\\n    },\\n    {\\n      title: \\\"Dress Code\\\",\\n      description: \\\"We'd love to see you in pastel colors! Anything soft and beautiful works — but ultimately, wear whatever makes you feel wonderful.\\\",\\n      icon: \\\"👗\\\",\\n    },\\n  ];\\n\\n  return (\\n    \\n      \\n        {/* Section title */}\\n        \\n          \\n            The Celebration\\n          \\n          \\n        \\n\\n        {/* Details cards */}\\n        \\n          {details.map((detail, index) => (\\n            \\n              \\n              \\n                {detail.title}\\n              \\n              \\n                {detail.description}\\n              \\n            \\n          ))}\\n        \\n      \\n    \\n  );\\n};\\n\\nexport default DetailsSection;\\n\"}">

 {\\n  const ref = useRef(null);\\n  const isInView = useInView(ref, { once: true, margin: \\\"-100px\\\" });\\n\\n  const events = [\\n    { time: \\\"TBA\\\", event: \\\"Arrival & Welcome\\\" },\\n    { time: \\\"TBA\\\", event: \\\"Ceremony\\\" },\\n    { time: \\\"TBA\\\", event: \\\"Games & Fun\\\" },\\n    { time: \\\"TBA\\\", event: \\\"Dancing & Celebration\\\" },\\n    { time: \\\"TBA\\\", event: \\\"Dinner\\\" },\\n  ];\\n\\n  return (\\n    \\n      \\n        \\n          {/* Photo */}\\n          \\n            \\n              \\n            \\n          \\n\\n          {/* Schedule */}\\n          \\n            \\n              Schedule of Events\\n            \\n            \\n              The Day's Timeline\\n            \\n\\n            \\n              {events.map((item, index) => (\\n                \\n                  \\n                    {item.time}\\n                  \\n                  \\n                    {item.event}\\n                  \\n                \\n              ))}\\n            \\n          \\n        \\n      \\n    \\n  );\\n};\\n\\nexport default ScheduleSection;\\n\"}">

 {\\n  const ref = useRef(null);\\n  const isInView = useInView(ref, { once: true, margin: \\\"-100px\\\" });\\n\\n  return (\\n    \\n      {/* Decorative elements */}\\n      \\n\\n      \\n        \\n          \\n            Accommodation\\n          \\n          \\n          \\n          \\n            \\n              We're planning to arrange special accommodation for our guests!\\n            \\n            \\n            \\n              \\n                For Our Female Guests\\n              \\n              \\n                We're looking into renting a lovely place where our female friends can stay together. \\n                It'll be like a little gathering of its own!\\n              \\n            \\n\\n            \\n              \\n                Additional Apartments\\n              \\n              \\n                We may also have one or two apartments available for other guests. \\n                More details will follow as we finalize the arrangements.\\n              \\n            \\n\\n            \\n              Stay tuned — we'll share all the specifics soon!\\n            \\n          \\n        \\n      \\n    \\n  );\\n};\\n\\nexport default AccommodationSection;\\n\"}">

 {\\n  const ref = useRef(null);\\n  const isInView = useInView(ref, { once: true, margin: \\\"-100px\\\" });\\n\\n  return (\\n    \\n      {/* Decorative florals */}\\n      \\n      \\n\\n      \\n        \\n          \\n            \\n              Gift Registry\\n            \\n            \\n          \\n\\n          \\n            \\n              Your presence is truly the greatest gift we could ask for.\\n            \\n            \\n            \\n              However, if you wish to honor us with a gift, we've created a small registry \\n              with some items we'd love for our new home together.\\n            \\n\\n             {\\n                e.preventDefault();\\n                alert(\\\"Registry link will be added here!\\\");\\n              }}\\n            >\\n              View Our Registry\\n            \\n\\n            \\n              The registry link will be added soon\\n            \\n          \\n        \\n      \\n    \\n  );\\n};\\n\\nexport default GiftRegistrySection;\\n\"}">

 {\\n  const ref = useRef(null);\\n  const isInView = useInView(ref, { once: true, margin: \\\"-100px\\\" });\\n\\n  const faqs = [\\n    {\\n      question: \\\"What should I wear?\\\",\\n      answer: \\\"We'd love to see you in pastel colors — think soft pinks, lavenders, mint greens, or baby blues. But honestly, wear whatever makes you feel comfortable and beautiful!\\\",\\n    },\\n    {\\n      question: \\\"Where will the wedding be?\\\",\\n      answer: \\\"The venue location will be shared soon. We'll send you all the details including directions and parking information as the date approaches.\\\",\\n    },\\n    {\\n      question: \\\"What time should I arrive?\\\",\\n      answer: \\\"Please arrive at least 30 minutes before the ceremony starts so you have time to settle in. Exact times will be announced soon!\\\",\\n    },\\n  ];\\n\\n  return (\\n    \\n      \\n        \\n          \\n            Questions & Answers\\n          \\n          \\n        \\n\\n        \\n          {faqs.map((faq, index) => (\\n            \\n              \\n              \\n                {faq.question}\\n              \\n              \\n                {faq.answer}\\n              \\n            \\n          ))}\\n        \\n      \\n    \\n  );\\n};\\n\\nexport default FAQSection;\\n\"}">

 {\\n  const ref = useRef(null);\\n  const isInView = useInView(ref, { once: true, margin: \\\"-50px\\\" });\\n\\n  return (\\n    \\n      {/* Decorative elements */}\\n      \\n      \\n\\n      \\n        \\n          \\n            We Can't Wait to See You!\\n          \\n          \\n        \\n\\n        \\n          \\n        \\n\\n        \\n          \\n            Ayazhan & Shokan\\n          \\n          \\n            With love and excitement\\n          \\n        \\n\\n        {/* Bottom florals */}\\n        \\n      \\n    \\n  );\\n};\\n\\nexport default FooterSection;\\n\"}">

 {\\n  const [isScrolled, setIsScrolled] = useState(false);\\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\\n\\n  useEffect(() => {\\n    const handleScroll = () => {\\n      setIsScrolled(window.scrollY > 50);\\n    };\\n    window.addEventListener(\\\"scroll\\\", handleScroll);\\n    return () => window.removeEventListener(\\\"scroll\\\", handleScroll);\\n  }, []);\\n\\n  const navLinks = [\\n    { label: \\\"Details\\\", href: \\\"#details\\\" },\\n    { label: \\\"Schedule\\\", href: \\\"#schedule\\\" },\\n    { label: \\\"Stay\\\", href: \\\"#accommodation\\\" },\\n    { label: \\\"Registry\\\", href: \\\"#registry\\\" },\\n    { label: \\\"FAQ\\\", href: \\\"#faq\\\" },\\n  ];\\n\\n  return (\\n    <>\\n      \\n        \\n          \\n            {/* Logo */}\\n            \\n              A & S\\n            \\n\\n            {/* Desktop navigation */}\\n            \\n              {navLinks.map((link) => (\\n                \\n                  {link.label}\\n                \\n              ))}\\n            \\n\\n            {/* Mobile menu button */}\\n             setIsMobileMenuOpen(!isMobileMenuOpen)}\\n              aria-label=\\\"Toggle menu\\\"\\n            >\\n              \\n                \\n                \\n                \\n              \\n            \\n          \\n        \\n      \\n\\n      {/* Mobile menu overlay */}\\n      \\n        {isMobileMenuOpen && (\\n          \\n            \\n              {navLinks.map((link, index) => (\\n                 setIsMobileMenuOpen(false)}\\n                  initial={{ opacity: 0, y: 20 }}\\n                  animate={{ opacity: 1, y: 0 }}\\n                  exit={{ opacity: 0, y: 20 }}\\n                  transition={{ duration: 0.3, delay: index * 0.1 }}\\n                >\\n                  {link.label}\\n                \\n              ))}\\n            \\n          \\n        )}\\n      \\n    \\n  );\\n};\\n\\nexport default Navigation;\\n\"}">

Now let me update the Index page to bring it all together:
 {\\n  return (\\n    \\n      \\n      \\n      \\n      \\n        \\n      \\n      \\n        \\n      \\n      \\n        \\n      \\n      \\n        \\n      \\n      \\n    \\n  );\\n};\\n\\nexport default Index;\\n\", \"file_path\": \"src/pages/Index.tsx\"}">

 {\\n  return (\\n    \\n      \\n      \\n      \\n      \\n        \\n      \\n      \\n        \\n      \\n      \\n        \\n      \\n      \\n        \\n      \\n      \\n    \\n  );\\n};\\n\\nexport default Index;\\n\", \"file_path\": \"src/pages/Index.tsx\"}">

I've created a beautiful minimalistic wedding website for Ayazhan & Shokan! 🎊

**Features included:**
- **Hero** – Elegant script typography with your names, floral & elephant decorations
- **The Celebration** – Venue, time, and dress code (pastel colors encouraged)
- **Schedule** – Timeline for games, dancing, and celebration (times TBA)
- **Accommodation** – Info about the place for female friends + potential apartments
- **Gift Registry** – Placeholder button for your registry link
- **FAQ** – Common questions about dress code, venue, arrival time
- **Footer** – Beautiful closing with decorative elements

**Design:** Warm ivory/gold palette, elegant Cormorant Garamond script font, botanical florals and ornate elephants throughout, smooth scroll animations with Framer Motion.

You can easily update the venue details, times, and registry link when ready!

Test the full website
Add wedding details
Add RSVP functionality
Add your couple photo
Update registry link