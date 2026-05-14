import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Layers, 
  Camera, 
  Mail, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Download, 
  ChevronRight,
  Monitor,
  Video,
  Aperture,
  Palette,
  Layout,
  Menu,
  X,
  ArrowLeft,
  Clock,
  User,
  Calendar
} from 'lucide-react';

// --- Types ---
interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  desc: string;
  fullDesc: string;
  image: string;
  accent: 'brand-cyan' | 'brand-crimson';
  videoUrl: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Cyberpunk 2077 Fan Film",
    category: "Motion Graphics",
    client: "Arasaka Corp (Concept)",
    year: "2024",
    duration: "2:45",
    desc: "A stylized cinematic sequence with heavy neon effects and dynamic transitions.",
    fullDesc: "This project explores the aesthetic of Night City, focusing on volumetric lighting and glitch transitions. Every frame was meticulously color graded to achieve the high-contrast 'cyber-green' and 'electric-pink' look representative of the genre.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-cyan",
    videoUrl: "#"
  },
  {
    id: "p2",
    title: "Podcast Hooks",
    category: "Commercial",
    client: "Value Talks",
    year: "2026",
    duration: "1:25",
    desc: "রিসোর্টে ভিজিটর আসে কিন্তু প্রফিট হয় না কেন?",
    fullDesc: "The goal was to communicate breathless speed. Using frantic jump-cuts, speed ramping, and custom foley sound design, we created a commercial that feels like a heartbeat racing at 180 BPM.",
    image: "https://i.postimg.cc/xjP22QzL/GFJRe0Pkjhk-HD.jpg",
    accent: "brand-crimson",
    videoUrl: "https://www.youtube.com/embed/ujeSkJvKYtk?si=Xu1wwRBqvkGFHGcz"
  },
  {
    id: "p3",
    title: "Abstract Rhythm",
    category: "Reels",
    client: "Synthese Records",
    year: "2024",
    duration: "4:20",
    desc: "An experimental exploration of sound visualization through particles.",
    fullDesc: "A music video for 'Synthese'. We used Houdini to simulate millions of particles responding dynamically to the track's sub-frequencies, creating a visual landscape that breathes with the music.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b25272a7?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-cyan",
    videoUrl: "#"
  },
  {
    id: "p4",
    title: "Luxury Watch Commercial",
    category: "Commercial",
    client: "Vacheron (Spec)",
    year: "2023",
    duration: "0:45",
    desc: "Elegance defined through precise macro shots and smooth camera motion.",
    fullDesc: "Focusing on the micro-movements of a high-end timepiece. The lighting setup was designed to emphasize every polished surface and mechanical heartbeat without distracting from the watch's simple elegance.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-crimson",
    videoUrl: "#"
  },
  {
    id: "p5",
    title: "Mountain Odyssey",
    category: "YouTube",
    client: "National Geographic (Spec)",
    year: "2022",
    duration: "3:15",
    desc: "A breathtaking journey through the Swiss Alps using drone technology.",
    fullDesc: "A collaborative project showcasing the scale of the Alps. We used FPV drones to capture proximity shots that traditional aircraft couldn't reach, paired with a soaring orchestral score.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-cyan",
    videoUrl: "#"
  },
  {
    id: "p6",
    title: "Static Flow",
    category: "Motion Graphics",
    client: "Personal Project",
    year: "2024",
    duration: "1:30",
    desc: "Merging analog artifacts with digital perfection.",
    fullDesc: "An exploration of digital decay. We used analog video synthesizers and circuit-bent hardware to generate unique glitch patterns, which were then layered and masked in After Effects.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-crimson",
    videoUrl: "#"
  },
  {
    id: "p7",
    title: "Nike: Speed Reimagined",
    category: "Reels",
    client: "Nike Global",
    year: "2023",
    duration: "0:60",
    desc: "High-octane commercial edit for Nike's latest runner series.",
    fullDesc: "The goal was to communicate breathless speed. Using frantic jump-cuts, speed ramping, and custom foley sound design, we created a commercial that feels like a heartbeat racing at 180 BPM.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-crimson",
    videoUrl: "#"
  },
  {
    id: "p8",
    title: "Nike: Speed Reimagined",
    category: "Commercial",
    client: "Nike Global",
    year: "2023",
    duration: "0:60",
    desc: "High-octane commercial edit for Nike's latest runner series.",
    fullDesc: "The goal was to communicate breathless speed. Using frantic jump-cuts, speed ramping, and custom foley sound design, we created a commercial that feels like a heartbeat racing at 180 BPM.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-crimson",
    videoUrl: "#"
  },
  {
    id: "p9",
    title: "Nike: Speed Reimagined",
    category: "YouTube",
    client: "Nike Global",
    year: "2023",
    duration: "0:60",
    desc: "High-octane commercial edit for Nike's latest runner series.",
    fullDesc: "The goal was to communicate breathless speed. Using frantic jump-cuts, speed ramping, and custom foley sound design, we created a commercial that feels like a heartbeat racing at 180 BPM.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-crimson",
    videoUrl: "#"
  },
  {
    id: "p10",
    title: "Nike: Speed Reimagined",
    category: "Motion Graphics",
    client: "Nike Global",
    year: "2023",
    duration: "0:60",
    desc: "High-octane commercial edit for Nike's latest runner series.",
    fullDesc: "The goal was to communicate breathless speed. Using frantic jump-cuts, speed ramping, and custom foley sound design, we created a commercial that feels like a heartbeat racing at 180 BPM.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-crimson",
    videoUrl: "#"
  },
  {
    id: "p11",
    title: "Nike: Speed Reimagined",
    category: "Reels",
    client: "Nike Global",
    year: "2023",
    duration: "0:60",
    desc: "High-octane commercial edit for Nike's latest runner series.",
    fullDesc: "The goal was to communicate breathless speed. Using frantic jump-cuts, speed ramping, and custom foley sound design, we created a commercial that feels like a heartbeat racing at 180 BPM.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-crimson",
    videoUrl: "#"
  },
  {
    id: "p12",
    title: "Nike: Speed Reimagined",
    category: "Commercial",
    client: "Nike Global",
    year: "2023",
    duration: "0:60",
    desc: "High-octane commercial edit for Nike's latest runner series.",
    fullDesc: "The goal was to communicate breathless speed. Using frantic jump-cuts, speed ramping, and custom foley sound design, we created a commercial that feels like a heartbeat racing at 180 BPM.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-crimson",
    videoUrl: "#"
  },
];

const SKILLS = [
  { 
    name: "Premiere Pro", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobepremierepro.svg",
    glow: "rgba(212, 163, 115, 0.4)"
  },
  { 
    name: "After Effects", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeaftereffects.svg",
    glow: "rgba(188, 108, 37, 0.2)"
  },
  { 
    name: "Photoshop", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg",
    glow: "rgba(212, 163, 115, 0.2)"
  },
  { 
    name: "DaVinci Resolve", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/davinciresolve.svg",
    glow: "rgba(188, 108, 37, 0.3)"
  },
  { 
    name: "Cinema 4D", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cinema4d.svg",
    glow: "rgba(212, 163, 115, 0.2)"
  },
  { 
    name: "Figma", 
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg",
    glow: "rgba(188, 108, 37, 0.2)"
  },
];

const SOCIAL_PLATFORMS = [
  {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg',
    url: 'https://linkedin.com/in/yourprofile',
    glow: 'rgba(212, 163, 115, 0.4)'
  },
  {
    name: 'Instagram',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg',
    url: 'https://www.instagram.com/mehedihasan300502?igsh=djg1dTJjZnY4ZXk0',
    glow: 'rgba(188, 108, 37, 0.3)'
  },
  {
    name: 'WhatsApp',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg',
    url: 'https://wa.me/+8801404395783',
    glow: 'rgba(212, 163, 115, 0.4)'
  },
  {
    name: 'Facebook',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg',
    url: 'https://www.facebook.com/share/18koB1kANc/',
    glow: 'rgba(188, 108, 37, 0.3)'
  }
];

const EXPERIENCE = [
  { company: "Mehedi Production", role: "Sr. Motion Designer", period: "2025 - Present", desc: "Leading visual effects for premium brand campaigns." },
  { company: "Freelance", role: "Visual Artist", period: "2024 - 2025", desc: "Collaborated with global artists on music videos and digital installs." },
  { company: "Creative Forge", role: "Video Editor", period: "2023 - 2024", desc: "Crafted narratives for documentaries and short films." },
];

// --- Components ---

function Navbar({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  const handleLinkClick = (link: string) => {
    const targetId = link === 'Skills' ? 'journey' : link.toLowerCase();

    if (currentPage !== 'home' && link === 'Home') {
      onNavigate('home');
    } else if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-8 h-8 rounded bg-brand-cyan glow-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Play size={18} className="text-brand-black ml-0.5" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-brand-cyan transition-colors duration-500">MEHEDI HASAN</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.button
              key={link}
              onClick={() => handleLinkClick(link)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-xs font-bold tracking-[0.2em] uppercase hover:text-brand-cyan transition-colors"
            >
              {link}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden w-10 h-10 rounded-full flex items-center justify-center glass hover:bg-brand-cyan hover:text-brand-black transition-all duration-300"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] md:hidden bg-brand-black/95 backdrop-blur-2xl z-[90]"
          >
            <div className="flex flex-col items-center justify-center h-[calc(100vh-72px)] p-10 gap-10">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleLinkClick(link)}
                  className="text-3xl font-display font-bold uppercase tracking-[0.2em] text-white hover:text-brand-cyan transition-colors"
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-0 sm:py-0 lg:py-0 px-0 sm:px-0 lg:px-0">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-crimson/5 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-brand-cyan text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-8 bg-white/[0.03]">
            Motion Designer & Video Editor
          </span>
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[clamp(4.5rem,7vw,7.5rem)] font-bold mb-8 leading-[1.1] text-white mix-blend-difference tracking-tight uppercase"
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="block"
            >
              WHERE BRANDS
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="block"
            >
              LOOK THEIR
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="text-gradient block"
            >
              BEST
            </motion.span>
          </motion.h1>
          <p className="max-w-3xl mx-auto text-muted-gray text-base md:text-lg lg:text-xl font-light leading-relaxed mb-12 px-4">
            I transform complex concepts into clean and compelling visuals, which make brands more engaging and credible. My visual content is designed to capture attention, build trust, and give your brand a special status.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <motion.button
              onClick={() => onNavigate('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-brand-cyan text-brand-black font-bold text-xs uppercase tracking-widest rounded-sm glow-cyan flex items-center justify-center gap-3 group transition-all"
            >
              VIEW GALLERY
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:border-brand-cyan/50 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center justify-center"
            >
              GET IN TOUCH
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-muted-gray hidden sm:flex w-[182px] h-[50px] pl-0"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-medium">Scroll to explore</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-brand-cyan to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index, onSelect }: { project: Project, index: number, onSelect: (p: Project) => void, key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg aspect-[11/14] md:aspect-[16/10] cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-50 group-hover:brightness-75"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent p-8 flex flex-col justify-end">
        <div className="flex justify-between items-start mb-2">
           <span className={`text-[10px] font-bold uppercase tracking-widest ${project.accent === 'brand-cyan' ? 'text-brand-cyan' : 'text-brand-crimson'}`}>
            {project.category}
          </span>
          <span className="text-white/40 text-[10px] font-mono">{project.duration}</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-gray text-sm mb-6 max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {project.desc}
        </p>
        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-brand-black transition-all`}>
              <Play size={16} fill="currentColor" />
           </div>
           <span className="text-[10px] font-bold uppercase tracking-widest text-white">Play Reel</span>
        </div>
      </div>

      {/* Glow Effect */}
      <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity ${project.accent === 'brand-cyan' ? 'bg-brand-cyan' : 'bg-brand-crimson'}`} />
    </motion.div>
  );
}

function ProjectDetailsModal({ project, onClose }: { project: any, onClose: () => void }) {
  const [isPlaying, setIsPlaying] = React.useState(false);

  // Function to ensure the YouTube URL is in the correct embed format
  const getSafeVideoUrl = (url: string) => {
    if (!url || url === "#") return "";
    let embedUrl = url;
    
    // Convert watch link to embed link if necessary
    if (url.includes("watch?v=")) {
      embedUrl = url.replace("watch?v=", "embed/");
    }
    
    const connector = embedUrl.includes('?') ? '&' : '?';
    return `${embedUrl}${connector}autoplay=1&mute=0&rel=0&modestbranding=1`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-md" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-6xl glass rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl h-fit max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-brand-black transition-all"
        >
          <X size={24} />
        </button>

        {/* Media Side */}
        <div className="w-full md:w-2/3 aspect-video relative bg-black flex items-center justify-center overflow-hidden">
          {!isPlaying ? (
            <div className="relative w-full h-full group">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover brightness-50" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-cyan flex items-center justify-center text-brand-black glow-cyan z-10 transition-all"
                >
                  <Play size={32} fill="currentColor" className="ml-1" />
                </motion.button>
              </div>
            </div>
          ) : (
            <iframe
              src={getSafeVideoUrl(project.videoUrl)}
              title="Project Video"
              className="absolute inset-0 w-full h-full z-20"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              frameBorder="0"
            ></iframe>
          )}
        </div>

        {/* Info Side */}
        <div className="w-full md:w-1/3 p-6 md:p-10 flex flex-col overflow-y-auto bg-brand-black/40 backdrop-blur-sm">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-3 text-brand-cyan">
            {project.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{project.title}</h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between py-3 border-b border-white/5 text-xs">
              <span className="text-muted-gray uppercase tracking-widest flex items-center gap-2"><User size={12}/> Client</span>
              <span className="text-white font-medium">{project.client}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/5 text-xs">
              <span className="text-muted-gray uppercase tracking-widest flex items-center gap-2"><Calendar size={12}/> Year</span>
              <span className="text-white font-medium">{project.year}</span>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-[10px] text-muted-gray uppercase tracking-widest font-bold mb-3">Project Brief</h4>
            <p className="text-silver text-sm leading-relaxed font-light line-clamp-6">
              {project.fullDesc}
            </p>
          </div>

          <div className="mt-auto space-y-3">
            <button 
              onClick={() => setIsPlaying(true)}
              className="w-full py-4 bg-white text-brand-black font-bold uppercase tracking-widest hover:bg-brand-cyan transition-all text-xs"
            >
              Play Full Reel
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GalleryView({ onBack, onSelectProject }: { onBack: () => void, onSelectProject: (p: Project) => void, key?: string }) {
  const [filter, setFilter] = useState('Reels');
  const categories = ['Reels', 'Commercial', 'YouTube', 'Motion Graphics'];

  const filteredProjects = PROJECTS.filter(p => p.category === filter);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 sm:pt-40 pb-24 px-6 sm:px-10 lg:px-20 bg-brand-black"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
           <div className="space-y-6 text-center lg:text-left">
              <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 text-muted-gray hover:text-brand-cyan transition-colors text-[10px] font-bold uppercase tracking-[0.4em] group"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none">GALLERY <br className="md:hidden"/><span className="text-gradient">WORKS</span></h2>
           </div>
           
           <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-brand-cyan text-brand-black glow-cyan' : 'bg-white/5 text-muted-gray hover:bg-white/10 border border-white/5'}`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={idx} 
                onSelect={onSelectProject} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}

function Journey() {
  return (
    <section id="journey" className="py-24 md:py-40 px-6 sm:px-10 lg:px-20 relative bg-brand-black">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-24 text-center md:text-left">
          <span className="text-brand-cyan text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">The Evolution</span>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-none">THE <span className="text-gradient">JOURNEY</span></h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-[160px] top-4 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-white/10 to-transparent" />

          <div className="space-y-24 md:space-y-32">
            {EXPERIENCE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-24 pl-12 md:pl-0"
              >
                {/* Year range on the left */}
                <div className="md:w-[120px] md:text-right shrink-0">
                   <span className="text-brand-cyan font-mono text-sm md:text-base font-bold tracking-tighter">{item.period}</span>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-[160px] top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-black border border-brand-cyan glow-cyan z-10" />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-none">{item.role}</h3>
                  <p className="text-brand-crimson text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-6">{item.company}</p>
                  <p className="text-muted-gray leading-relaxed font-light text-base md:text-lg lg:text-xl max-w-2xl font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [homeFilter, setHomeFilter] = useState('Reels');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="bg-brand-black min-h-screen selection:bg-brand-cyan/30 text-silver font-sans">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Hero onNavigate={setCurrentPage} />
            
            <div className="max-w-7xl mx-auto px-6">
               <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <section id="about" className="py-24 md:py-40 px-6 sm:px-10 lg:px-20 overflow-hidden">
              <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative group order-2 lg:order-1"
                >
                  <div className="absolute -inset-4 bg-brand-cyan/20 rounded-2xl blur-[100px] group-hover:bg-brand-cyan/30 transition-all duration-700 opacity-50" />
                  <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden border border-white/5 glow-cyan">
                    <img 
                      src="https://i.postimg.cc/pdyQ8Nzr/Generated-Image-May-14-2026-3-55PM.jpg" 
                      alt="Mehedi Hasan Portrait" 
                      className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
                    />
                  </div>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="order-1 lg:order-2 text-center lg:text-left"
                >
                  <span className="text-brand-cyan text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">The Visionary</span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-[1.1]">MEHEDI <span className="text-brand-cyan">HASAN</span></h2>
                  <p className="text-muted-gray text-lg md:text-xl mb-10 leading-relaxed font-light font-sans max-w-2xl mx-auto lg:mx-0">
                    I am a dedicated visual storyteller with over 3 years of experience in the creative industry. My work focuses on the intersection of cutting-edge technology and raw human emotion.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-12 max-w-md mx-auto lg:mx-0">
                     <div className="p-6 glass border-white/5 rounded-lg flex flex-col items-center lg:items-start">
                        <p className="text-4xl font-display font-bold text-brand-cyan mb-1">03+</p>
                        <p className="text-[10px] text-muted-gray uppercase tracking-[0.2em] font-bold">Years Experience</p>
                     </div>
                     <div className="p-6 glass border-white/5 rounded-lg flex flex-col items-center lg:items-start">
                        <p className="text-4xl font-display font-bold text-brand-cyan mb-1">100%</p>
                        <p className="text-[10px] text-muted-gray uppercase tracking-[0.2em] font-bold">Passion Driven</p>
                     </div>
                  </div>
                  <button className="inline-flex items-center gap-3 text-white text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-cyan transition-all group p-1">
                     LEARN MORE ABOUT ME
                     <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-cyan group-hover:bg-brand-cyan/10 transition-all">
                        <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                     </div>
                  </button>
                </motion.div>
              </div>
            </section>

            <section id="projects" className="py-24 md:py-40 px-6 sm:px-10 lg:px-20">
              <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
                  <div className="text-center lg:text-left">
                    <span className="text-brand-cyan text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">Recent Works</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9]">FEATURED <span className="text-gradient">STORIES</span></h2>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      {['Reels', 'Commercial', 'YouTube', 'Motion Graphics'].map(cat => (
                        <button
                          key={cat}
                          onClick={() => setHomeFilter(cat)}
                          className={`px-5 py-2.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all ${homeFilter === cat ? 'bg-brand-cyan text-brand-black glow-cyan' : 'bg-white/5 text-muted-gray hover:bg-white/10 border border-white/5'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <button 
                      onClick={() => setCurrentPage('projects')}
                      className="px-6 py-3 glass glass-hover text-white text-[9px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                    >
                      FULL GALLERY
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
                >
                  <AnimatePresence mode="popLayout">
                    {PROJECTS.filter(p => p.category === homeFilter).slice(0, 4).map((project, idx) => (
                      <ProjectCard key={project.id} project={project} index={idx} onSelect={setSelectedProject} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>

            <section id="skills" className="py-24 px-6 sm:px-10 lg:px-20 relative bg-brand-navy/10 overflow-hidden">
               <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
               <div className="max-w-[1400px] mx-auto text-center">
                  <span className="text-brand-cyan text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">Toolkit</span>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 uppercase tracking-widest leading-none">The Arsenal</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
                    {SKILLS.map((skill, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="p-8 sm:p-10 glass glass-hover rounded-xl group relative overflow-hidden"
                      >
                         {/* Dynamic Glow Layer */}
                         <div 
                           className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                           style={{ background: `radial-gradient(circle at center, ${skill.glow} 0%, transparent 80%)` }}
                         />
                         
                         <div className="relative z-10 flex flex-col items-center">
                            <div className="relative mb-8 p-1">
                               <div 
                                 className="w-12 h-12 md:w-16 md:h-16 bg-brand-cyan transition-all duration-500 group-hover:bg-white group-hover:scale-110"
                                 style={{
                                   maskImage: `url(${skill.logo})`,
                                   WebkitMaskImage: `url(${skill.logo})`,
                                   maskSize: 'contain',
                                   WebkitMaskSize: 'contain',
                                   maskRepeat: 'no-repeat',
                                   WebkitMaskRepeat: 'no-repeat',
                                   maskPosition: 'center',
                                   WebkitMaskPosition: 'center'
                                 }}
                               />
                               {/* Reflection Effect */}
                               <div className="absolute top-[110%] left-0 right-0 h-10 pointer-events-none overflow-hidden opacity-10 group-hover:opacity-30 transition-opacity flex justify-center">
                                  <div 
                                    className="w-12 h-12 md:w-16 md:h-16 bg-brand-cyan blur-[2px] scale-y-[-1]"
                                    style={{
                                      maskImage: `url(${skill.logo})`,
                                      WebkitMaskImage: `url(${skill.logo})`,
                                      maskSize: 'contain',
                                      WebkitMaskSize: 'contain',
                                      maskRepeat: 'no-repeat',
                                      WebkitMaskRepeat: 'no-repeat',
                                      maskPosition: 'center',
                                      WebkitMaskPosition: 'center'
                                    }}
                                  />
                               </div>
                            </div>
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-brand-cyan transition-colors duration-500">{skill.name}</span>
                         </div>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </section>

            <Journey />

            <section id="contact" className="py-24 md:py-40 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none" />
              <div className="max-w-[1400px] mx-auto text-center relative z-10">
                 <span className="text-brand-cyan text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-8 block">Ready to collaborate?</span>
                 <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-bold text-white mb-16 leading-[0.9] uppercase tracking-tighter">LET'S BUILD <br /> SOMETHING <span className="text-gradient">ICONIC</span></h2>
                 <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16">
                   {SOCIAL_PLATFORMS.map((platform, idx) => (
                     <motion.a
                       key={idx}
                       href={platform.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       whileHover={{ scale: 1.1, y: -8 }}
                       whileTap={{ scale: 0.95 }}
                       className="relative group flex flex-col items-center"
                     >
                        {/* Cinematic Glow Layer */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 rounded-full" 
                          style={{ background: platform.glow }}
                        />
                        
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full glass border border-brand-cyan/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10">
                           {/* Official Icon masked with coffee color */}
                           <div 
                             className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-brand-cyan transition-all duration-500 group-hover:scale-110 group-hover:bg-white"
                             style={{
                               maskImage: `url(${platform.logo})`,
                               WebkitMaskImage: `url(${platform.logo})`,
                               maskSize: 'contain',
                               WebkitMaskSize: 'contain',
                               maskRepeat: 'no-repeat',
                               WebkitMaskRepeat: 'no-repeat',
                               maskPosition: 'center',
                               WebkitMaskPosition: 'center'
                             }}
                           />
                           
                           {/* Subtle Reflection with mask */}
                           <div className="absolute top-[80%] left-0 right-0 h-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity flex justify-center">
                              <div 
                                className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-cyan blur-[2px] scale-y-[-1]"
                                style={{
                                  maskImage: `url(${platform.logo})`,
                                  WebkitMaskImage: `url(${platform.logo})`,
                                  maskSize: 'contain',
                                  WebkitMaskSize: 'contain',
                                  maskRepeat: 'no-repeat',
                                  WebkitMaskRepeat: 'no-repeat',
                                  maskPosition: 'center',
                                  WebkitMaskPosition: 'center'
                                }}
                              />
                           </div>
                        </div>
                        
                        <span className="mt-4 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-brand-cyan transition-colors duration-500">
                           {platform.name}
                        </span>
                     </motion.a>
                   ))}
                </div>
              </div>
            </section>
          </motion.main>
        ) : (
          <GalleryView key="gallery" onBack={() => setCurrentPage('home')} onSelectProject={setSelectedProject} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProject && <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>

      <footer className="py-12 border-t border-white/5 bg-brand-navy/10 px-6 sm:px-10">
         <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded bg-brand-cyan flex items-center justify-center">
                  <Play size={16} className="text-brand-black ml-0.5" fill="currentColor" />
               </div>
               <span className="font-display font-bold text-white tracking-widest uppercase">MEHEDI HASAN</span>
            </div>
            <p className="text-muted-gray text-[10px] tracking-[0.3em] uppercase font-bold">© 2026 MEHEDI HASAN. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-gray">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
