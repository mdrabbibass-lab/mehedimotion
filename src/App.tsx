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
    title: "Modern Real Estate",
    category: "Commercial",
    client: "Jack",
    year: "2025",
    duration: "0:31",
    desc: "High-octane commercial edit for premium property listings.",
    fullDesc: "The goal was to communicate breathless speed and luxury. Using frantic jump-cuts, speed ramping, and custom foley sound design, we created a commercial that feels like a heartbeat racing at 180 BPM while showcasing architectural beauty.",
    image: "https://i.postimg.cc/1zVHcsZ2/maxres1.webp",
    accent: "brand-crimson",
    videoUrl: "https://www.youtube.com/embed/SZoYThE4eJc?rel=0"
  },
  {
    id: "p3",
    title: "Abstract Rhythm",
    category: "Reels",
    client: "Synthese Records",
    year: "2024",
    duration: "0:50",
    desc: "An experimental exploration of sound visualization through particles.",
    fullDesc: "A short reel showcase for 'Synthese'. We used Houdini to simulate millions of particles responding dynamically to the track's sub-frequencies, creating a visual landscape that breathes with the music, optimized for vertical mobile viewing.",
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
    videoUrl: "https://www.youtube.com/embed/PLsVWIVVW7E?si=s3yJ8jCl2n5zdrbb"
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
    title: "Urban Velocity",
    category: "Reels",
    client: "Nike Global",
    year: "2023",
    duration: "0:15",
    desc: "High-octane vertical edit for social media storytelling.",
    fullDesc: "Designed for rapid engagement on mobile platforms. This reel features aggressive speed ramping and visual punchiness to stop the scroll and highlight the product's dynamic nature in urban environments.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-crimson",
    videoUrl: "#"
  },
  {
    id: "p8",
    title: "Automotive Precision",
    category: "Commercial",
    client: "BMW Group",
    year: "2023",
    duration: "0:45",
    desc: "Cinematic commercial highlighting engineering and design.",
    fullDesc: "A high-end commercial focus on the intersection of luxury and performance. We used motion control rigs and stylized lighting to emphasize the curves and technological advancements of the latest model.",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-cyan",
    videoUrl: "#"
  },
  {
    id: "p9",
    title: "The Creator Economy",
    category: "YouTube",
    client: "TechReview",
    year: "2023",
    duration: "12:30",
    desc: "Deep dive documentary-style edit for YouTube audiences.",
    fullDesc: "A comprehensive look at digital creation. The edit balances fast-paced information delivery with cinematic 'B-roll' and custom info-graphics to maintain viewer retention throughout the long-form content.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-cyan",
    videoUrl: "#"
  },
  {
    id: "p10",
    title: "Data Visualization",
    category: "Motion Graphics",
    client: "InfraCorp",
    year: "2024",
    duration: "1:15",
    desc: "Complex data turned into beautiful, digestible motion art.",
    fullDesc: "Turning raw network statistics into a fluid aesthetic experience. We used abstract geometry and neon lighting to represent data flow within a global infrastructure system.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-cyan",
    videoUrl: "#"
  },
  {
    id: "p11",
    title: "Street Style Showdown",
    category: "Reels",
    client: "Adidas (Concept)",
    year: "2024",
    duration: "0:12",
    desc: "Snappy, music-driven reel for youth culture engagement.",
    fullDesc: "Focused on rhythm and attitude. Every cut is synced to the beat, using whip-pans and digital zoom effects to create an energetic loopable experience for social media platforms.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-crimson",
    videoUrl: "#"
  },
  {
    id: "p12",
    title: "Liquid Motion Tech",
    category: "Reels",
    client: "Razor (Spec)",
    year: "2023",
    duration: "0:09",
    desc: "Satisfying product loop for vertical mobile feeds.",
    fullDesc: "An exploration of texture and lighting on metallic surfaces. This minimalist reel uses slow-motion macro shots and subtle light sweeps to create a premium, high-tech feel for the product reveal.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-cyan",
    videoUrl: "#"
  },
  {
    id: "p13",
    title: "Summer Vibes",
    category: "Reels",
    client: "Visit Bali",
    year: "2023",
    duration: "0:15",
    desc: "Vibrant travel highlights optimized for quick consumption.",
    fullDesc: "A fast-paced journey through tropical landscapes. Using warm color grading and seamless transitions, we captured the essence of a summer getaway in a format perfect for mobile sharing.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200",
    accent: "brand-cyan",
    videoUrl: "#"
  },
  {
    id: "p14",
    title: "Organic Skincare",
    category: "Commercial",
    client: "Lumia Organics",
    year: "2023",
    duration: "0:30",
    desc: "Soft-focus commercial edit emphasizing purity and nature.",
    fullDesc: "A commercial that breathes calmness. The editing style is deliberate and slow, focusing on the organic textures of the ingredients and the refreshing feeling of the final product application.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200",
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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-7 h-7 rounded bg-brand-cyan glow-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Play size={14} className="text-brand-black ml-0.5" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-brand-cyan transition-colors duration-500">MEHEDI HASAN</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.button
              key={link}
              onClick={() => handleLinkClick(link)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-[10px] font-bold tracking-[0.2em] uppercase hover:text-brand-cyan transition-colors"
            >
              {link}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="md:hidden w-9 h-9 rounded-full flex items-center justify-center glass hover:bg-brand-cyan hover:text-brand-black transition-all duration-300"
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[60px] md:hidden bg-brand-black/98 backdrop-blur-2xl z-[90]"
          >
            <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] p-10 gap-8">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => handleLinkClick(link)}
                  className="text-2xl font-display font-bold uppercase tracking-[0.15em] text-white hover:text-brand-cyan transition-colors"
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
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-12 px-5 sm:px-10">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-crimson/5 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-brand-cyan text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-6 bg-white/[0.03]">
            Motion Designer & Video Editor
          </span>
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] text-white tracking-tight uppercase"
          >
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="block"
            >
              WHERE BRANDS
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="block"
            >
              LOOK THEIR
            </motion.span>
            <motion.span 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="text-gradient block"
            >
              BEST
            </motion.span>
          </motion.h1>
          <p className="max-w-2xl mx-auto text-muted-gray text-sm md:text-base lg:text-lg font-light leading-relaxed mb-10 px-4">
            I transform complex concepts into clean and compelling visuals, which make brands more engaging and credible. My visual content is designed to capture attention, build trust, and give your brand a special status.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <motion.button
              onClick={() => onNavigate('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-brand-cyan text-brand-black font-bold text-[10px] uppercase tracking-widest rounded-sm glow-cyan flex items-center justify-center gap-2 group transition-all"
            >
              VIEW GALLERY
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-brand-cyan/50 text-white font-bold text-[10px] uppercase tracking-widest rounded-sm transition-all flex items-center justify-center"
            >
              GET IN TOUCH
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-gray hidden sm:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-medium">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-cyan to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index, onSelect }: { project: Project, index: number, onSelect: (p: Project) => void, key?: string }) {
  const isReel = project.category === 'Reels';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className={`relative overflow-hidden rounded-xl mb-6 shadow-2xl transition-all duration-500 group-hover:shadow-brand-cyan/10 ${
        isReel 
          ? 'aspect-[9/16]' 
          : 'aspect-video'
      }`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Subtle Hover State */}
        <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white"
          >
            <Play size={24} fill="currentColor" className="ml-1" />
          </motion.div>
        </div>

        {/* Glow Effect Corner */}
        <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full ${project.accent === 'brand-cyan' ? 'bg-brand-cyan' : 'bg-brand-crimson'}`} />
      </div>
      
      <div className="px-1">
        <div className="flex items-center justify-between mb-1.5">
           <span className={`text-[8px] font-black uppercase tracking-[0.3em] ${project.accent === 'brand-cyan' ? 'text-brand-cyan' : 'text-brand-crimson'}`}>
            {project.category}
          </span>
          <div className="flex items-center gap-1.5 text-white/30 text-[8px] font-mono">
             <Clock size={9} />
             {project.duration}
          </div>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-brand-cyan transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
        <div className="mt-3 overflow-hidden">
           <div className="w-0 group-hover:w-full h-px bg-gradient-to-r from-brand-cyan/50 to-transparent transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
}

function ProjectDetailsModal({ project, onClose }: { project: Project, onClose: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper to get YouTube embed URL or handle direct embed codes
  const getEmbedUrl = (url: string) => {
    if (!url || url === '#' || url === '') return null;
    
    // If user pasted a full iframe, extract the src
    if (url.includes('<iframe')) {
      const srcMatch = url.match(/src="([^"]+)"/);
      if (srcMatch) {
         let src = srcMatch[1];
         // Force autoplay if requested
         if (!src.includes('autoplay=1')) {
            src += (src.includes('?') ? '&' : '?') + 'autoplay=1';
         }
         return src;
      }
    }

    // Handle regular youtube links (including unlisted)
    const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const youtubeMatch = url.match(youtubeRegExp);

    if (youtubeMatch && youtubeMatch[2].length === 11) {
      return `https://www.youtube.com/embed/${youtubeMatch[2]}?autoplay=1&rel=0&modestbranding=1`;
    }

    // Handle Vimeo
    const vimeoRegExp = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^\/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
    const vimeoMatch = url.match(vimeoRegExp);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
    }

    return url;
  };

  const embedUrl = getEmbedUrl(project.videoUrl);

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
        className="relative w-full max-w-6xl glass rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(0,0,0,0.5)] bg-brand-black"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-brand-black transition-all"
        >
          <X size={20} />
        </button>

        {/* Media Side */}
        <div className="w-full md:w-2/3 aspect-video relative group bg-black overflow-hidden flex items-center justify-center">
          {isPlaying && embedUrl ? (
            <iframe
              src={embedUrl}
              className="w-full h-full absolute inset-0"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              title={project.title}
              frameBorder="0"
            ></iframe>
          ) : (
            <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-brand-cyan flex items-center justify-center text-brand-black glow-cyan translate-y-2 group-hover:translate-y-0 opacity-100 transition-all duration-500"
                >
                  <Play size={24} fill="currentColor" className="ml-1" />
                </motion.button>
              </div>
            </div>
          )}
          
          {!isPlaying && (
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-brand-black to-transparent pointer-events-none">
               <div className="flex gap-3 items-center">
                  <div className="flex items-center gap-1.5 text-[10px] text-brand-cyan font-bold uppercase tracking-widest">
                     <Clock size={12} /> {project.duration}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="flex items-center gap-1.5 text-[10px] text-white/60 font-bold uppercase tracking-widest">
                     <Video size={12} /> 4K 60FPS
                  </div>
               </div>
            </div>
          )}
        </div>

        {/* Info Side */}
        <div className="w-full md:w-1/3 p-6 md:p-10 flex flex-col overflow-y-auto max-h-[40vh] md:max-h-none bg-brand-black/50">
          <span className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-3 ${project.accent === 'brand-cyan' ? 'text-brand-cyan' : 'text-brand-crimson'}`}>
            {project.category}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">{project.title}</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between py-3 border-b border-white/5">
               <div className="flex items-center gap-2.5 text-muted-gray text-[10px] uppercase tracking-widest">
                  <User size={12} /> Client
               </div>
               <span className="text-white text-xs font-medium">{project.client}</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-white/5">
               <div className="flex items-center gap-2.5 text-muted-gray text-[10px] uppercase tracking-widest">
                  <Calendar size={12} /> Year
               </div>
               <span className="text-white text-xs font-medium">{project.year}</span>
            </div>
          </div>

          <div className="mb-8">
             <h4 className="text-[10px] text-muted-gray uppercase tracking-widest font-bold mb-3">Project Brief</h4>
             <p className="text-silver/70 leading-relaxed font-light text-xs md:text-sm">
                {project.fullDesc}
             </p>
          </div>

          <div className="mt-auto space-y-3">
             <button 
               onClick={() => setIsPlaying(true)}
               className="w-full py-3.5 bg-white text-brand-black font-bold text-[10px] uppercase tracking-widest hover:bg-brand-cyan transition-colors"
             >
                Play Full Reel
             </button>
             <button className="w-full py-3.5 border border-white/10 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-white/5 transition-colors">
                Behind the Scenes
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
      className="min-h-screen pt-24 sm:pt-32 pb-16 px-5 sm:px-10 lg:px-20 bg-brand-black"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
           <div className="space-y-4 text-center lg:text-left">
              <button 
                onClick={onBack}
                className="inline-flex items-center gap-2 text-muted-gray hover:text-brand-cyan transition-colors text-[9px] font-bold uppercase tracking-[0.4em] group"
              >
                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-none">GALLERY <br className="md:hidden"/><span className="text-gradient">WORKS</span></h2>
           </div>
           
           <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-brand-cyan text-brand-black glow-cyan' : 'bg-white/5 text-muted-gray hover:bg-white/10 border border-white/5'}`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        <motion.div 
          layout
          className={`grid grid-cols-1 ${filter === 'Reels' ? 'grid-cols-2 sm:grid-cols-3' : 'sm:grid-cols-2'} ${filter === 'Reels' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4 sm:gap-8`}
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
    <section id="journey" className="py-16 md:py-32 px-5 sm:px-10 lg:px-20 relative bg-brand-black">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-16 text-center md:text-left">
          <span className="text-brand-cyan text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">The Evolution</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-none">THE <span className="text-gradient">JOURNEY</span></h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-[140px] top-4 bottom-0 w-px bg-gradient-to-b from-brand-cyan via-white/10 to-transparent" />

          <div className="space-y-16 md:space-y-24">
            {EXPERIENCE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="relative flex flex-col md:flex-row gap-4 md:gap-20 pl-10 md:pl-0"
              >
                {/* Year range on the left */}
                <div className="md:w-[100px] md:text-right shrink-0">
                   <span className="text-brand-cyan font-mono text-xs md:text-sm font-bold tracking-tighter">{item.period}</span>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-[140px] top-1.5 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-black border border-brand-cyan glow-cyan z-10" />

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-none">{item.role}</h3>
                  <p className="text-brand-crimson text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-4">{item.company}</p>
                  <p className="text-muted-gray leading-relaxed font-light text-sm md:text-base lg:text-lg max-w-2xl">
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

            <section id="about" className="py-16 md:py-32 px-5 sm:px-10 lg:px-20 overflow-hidden">
              <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative group order-2 lg:order-1"
                >
                  <div className="absolute -inset-4 bg-brand-cyan/10 rounded-2xl blur-[80px] group-hover:bg-brand-cyan/20 transition-all duration-700 opacity-50" />
                  <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] rounded-lg overflow-hidden border border-white/5 glow-cyan max-w-lg mx-auto">
                    <img 
                      src="https://i.postimg.cc/pdyQ8Nzr/Generated-Image-May-14-2026-3-55PM.jpg" 
                      alt="Mehedi Hasan Portrait" 
                      className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000" 
                    />
                  </div>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   className="order-1 lg:order-2 text-center lg:text-left"
                >
                  <span className="text-brand-cyan text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">The Visionary</span>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-[1.1]">MEHEDI <span className="text-brand-cyan">HASAN</span></h2>
                  <p className="text-muted-gray text-base md:text-lg mb-8 leading-relaxed font-light font-sans max-w-2xl mx-auto lg:mx-0">
                    I am a dedicated visual storyteller with over 3 years of experience in the creative industry. My work focuses on the intersection of cutting-edge technology and raw human emotion.
                  </p>
                  <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-10 max-w-sm mx-auto lg:mx-0">
                     <div className="p-4 glass border-white/5 rounded-lg flex flex-col items-center lg:items-start">
                        <p className="text-3xl font-display font-bold text-brand-cyan mb-1">03+</p>
                        <p className="text-[9px] text-muted-gray uppercase tracking-[0.2em] font-bold">Years Experience</p>
                     </div>
                     <div className="p-4 glass border-white/5 rounded-lg flex flex-col items-center lg:items-start">
                        <p className="text-3xl font-display font-bold text-brand-cyan mb-1">100%</p>
                        <p className="text-[9px] text-muted-gray uppercase tracking-[0.2em] font-bold">Passion Driven</p>
                     </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-cyan transition-all group">
                     LEARN MORE ABOUT ME
                     <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/5 transition-all">
                        <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                     </div>
                  </button>
                </motion.div>
              </div>
            </section>

            <section id="projects" className="py-16 md:py-32 px-5 sm:px-10 lg:px-20">
              <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
                  <div className="text-center lg:text-left">
                    <span className="text-brand-cyan text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">Recent Works</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9]">FEATURED <span className="text-gradient">STORIES</span></h2>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {['Reels', 'Commercial', 'YouTube', 'Motion Graphics'].map(cat => (
                        <button
                          key={cat}
                          onClick={() => setHomeFilter(cat)}
                          className={`px-4 py-2 rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-widest transition-all ${homeFilter === cat ? 'bg-brand-cyan text-brand-black glow-cyan' : 'bg-white/5 text-muted-gray hover:bg-white/10 border border-white/5'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    <button 
                      onClick={() => setCurrentPage('projects')}
                      className="px-5 py-2.5 glass glass-hover text-white text-[8px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                    >
                      FULL GALLERY
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                <motion.div 
                  layout
                  className={`grid grid-cols-1 sm:grid-cols-2 ${homeFilter === 'Reels' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 sm:gap-8`}
                >
                  <AnimatePresence mode="popLayout">
                    {PROJECTS.filter(p => p.category === homeFilter).slice(0, homeFilter === 'Reels' ? 4 : 3).map((project, idx) => (
                      <ProjectCard key={project.id} project={project} index={idx} onSelect={setSelectedProject} />
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>
            </section>

            <section id="skills" className="py-16 md:py-32 px-5 sm:px-10 lg:px-20 relative bg-brand-navy/5 overflow-hidden">
               <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/10 to-transparent" />
               <div className="max-w-[1400px] mx-auto text-center">
                  <span className="text-brand-cyan text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-3 block">Toolkit</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 uppercase tracking-widest leading-none">The Arsenal</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {SKILLS.map((skill, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ y: -5, scale: 1.01 }}
                        className="p-6 sm:p-8 glass glass-hover rounded-xl group relative overflow-hidden"
                      >
                         {/* Dynamic Glow Layer */}
                         <div 
                           className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
                           style={{ background: `radial-gradient(circle at center, ${skill.glow} 0%, transparent 80%)` }}
                         />
                         
                         <div className="relative z-10 flex flex-col items-center">
                            <div className="relative mb-6 p-1">
                               <div 
                                 className="w-10 h-10 md:w-12 md:h-12 bg-brand-cyan transition-all duration-500 group-hover:bg-white group-hover:scale-110"
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
                            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.15em] text-white/40 group-hover:text-brand-cyan transition-colors duration-500">{skill.name}</span>
                         </div>
                      </motion.div>
                    ))}
                  </div>
               </div>
            </section>

            <Journey />

            <section id="contact" className="py-16 md:py-32 px-5 sm:px-10 lg:px-20 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
              <div className="max-w-[1400px] mx-auto text-center relative z-10">
                 <span className="text-brand-cyan text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">Ready to collaborate?</span>
                 <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-12 leading-[0.9] uppercase tracking-tight">LET'S BUILD <br /> SOMETHING <span className="text-gradient">ICONIC</span></h2>
                 <div className="flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-12 lg:gap-16">
                   {SOCIAL_PLATFORMS.map((platform, idx) => (
                     <motion.a
                       key={idx}
                       href={platform.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       whileHover={{ scale: 1.05, y: -5 }}
                       whileTap={{ scale: 0.98 }}
                       className="relative group flex flex-col items-center"
                     >
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full glass border border-brand-cyan/20 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-brand-cyan/50 group-hover:bg-brand-cyan/10">
                           <div 
                             className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-brand-cyan transition-all duration-500 group-hover:scale-110 group-hover:bg-white"
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
                        
                        <span className="mt-3 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-brand-cyan transition-colors duration-500">
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
