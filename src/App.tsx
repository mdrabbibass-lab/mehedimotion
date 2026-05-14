import { useState, useEffect } from 'react';
import React from 'react'; // React import add kora hoyeche state handle korar jonno
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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Eikhane apnar YouTube Embed Link diben
  },
  {
    id: "p2",
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
  // ... Baki sob Projects data ager motoi thakbe
];

// --- SKILLS & SOCIAL_PLATFORMS Data (Ager moto thakbe) ---
const SKILLS = [
  { name: "Premiere Pro", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobepremierepro.svg", glow: "rgba(212, 163, 115, 0.4)" },
  { name: "After Effects", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobeaftereffects.svg", glow: "rgba(188, 108, 37, 0.2)" },
  { name: "Photoshop", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobephotoshop.svg", glow: "rgba(212, 163, 115, 0.2)" },
  { name: "DaVinci Resolve", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/davinciresolve.svg", glow: "rgba(188, 108, 37, 0.3)" },
  { name: "Cinema 4D", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cinema4d.svg", glow: "rgba(212, 163, 115, 0.2)" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/figma.svg", glow: "rgba(188, 108, 37, 0.2)" },
];

const SOCIAL_PLATFORMS = [
  { name: 'LinkedIn', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg', url: '#', glow: 'rgba(212, 163, 115, 0.4)' },
  { name: 'Instagram', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg', url: '#', glow: 'rgba(188, 108, 37, 0.3)' },
  { name: 'WhatsApp', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg', url: '#', glow: 'rgba(212, 163, 115, 0.4)' },
  { name: 'Facebook', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg', url: '#', glow: 'rgba(188, 108, 37, 0.3)' }
];

const EXPERIENCE = [
  { company: "Mehedi Production", role: "Sr. Motion Designer", period: "2025 - Present", desc: "Leading visual effects for premium brand campaigns." },
  { company: "Freelance", role: "Visual Artist", period: "2024 - 2025", desc: "Collaborated with global artists on music videos and digital installs." },
  { company: "Creative Forge", role: "Video Editor", period: "2023 - 2024", desc: "Crafted narratives for documentaries and short films." },
];

// --- Navbar, Hero, ProjectCard Components (Ager moto thakbe) ---

function Navbar({ onNavigate, currentPage }: { onNavigate: (page: string) => void, currentPage: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleLinkClick = (link: string) => {
    const targetId = link === 'Skills' ? 'journey' : link.toLowerCase();
    if (currentPage !== 'home') onNavigate('home');
    setTimeout(() => { document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' }); }, 100);
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className="w-8 h-8 rounded bg-brand-cyan glow-cyan flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            <Play size={18} className="text-brand-black ml-0.5" fill="currentColor" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-brand-cyan">MEHEDI HASAN</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <button key={link} onClick={() => handleLinkClick(link)} className="text-xs font-bold tracking-[0.2em] uppercase hover:text-brand-cyan transition-colors">{link}</button>
          ))}
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden w-10 h-10 rounded-full flex items-center justify-center glass"><Menu size={20} /></button>
      </div>
    </nav>
  );
}

function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto text-center px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-brand-cyan text-[10px] font-bold uppercase tracking-[0.4em] mb-8 bg-white/[0.03]">Motion Designer & Video Editor</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] text-white tracking-tight uppercase">WHERE BRANDS LOOK THEIR <span className="text-gradient">BEST</span></h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => onNavigate('projects')} className="px-10 py-5 bg-brand-cyan text-brand-black font-bold text-xs uppercase tracking-widest rounded-sm glow-cyan flex items-center gap-3">VIEW GALLERY <ChevronRight size={18} /></button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onSelect }: { project: Project, index: number, onSelect: (p: Project) => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group relative overflow-hidden rounded-lg aspect-[16/10] cursor-pointer" onClick={() => onSelect(project)}>
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent p-8 flex flex-col justify-end">
        <span className={`text-[10px] font-bold uppercase tracking-widest ${project.accent === 'brand-cyan' ? 'text-brand-cyan' : 'text-brand-crimson'}`}>{project.category}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
        <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"><div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white"><Play size={16} fill="currentColor" /></div><span className="text-[10px] font-bold uppercase tracking-widest text-white">Play Reel</span></div>
      </div>
    </motion.div>
  );
}

// ==========================================
// UPDATED PROJECT DETAILS MODAL (VIDEO FIX)
// ==========================================
function ProjectDetailsModal({ project, onClose }: { project: Project, onClose: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube URL format fix korar jonno helper
  const getEmbedUrl = (url: string) => {
    if (!url || url === "#") return "";
    if (url.includes("youtube.com/embed/")) return `${url}?autoplay=1&rel=0`;
    if (url.includes("watch?v=")) return `https://www.youtube.com/embed/${url.split('v=')[1].split('&')[0]}?autoplay=1&rel=0`;
    if (url.includes("youtu.be/")) return `https://www.youtube.com/embed/${url.split('youtu.be/')[1]}?autoplay=1&rel=0`;
    return url;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-brand-black/95 backdrop-blur-md" onClick={onClose} />
      <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-6xl glass rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        <button onClick={onClose} className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white hover:text-brand-black transition-all"><X size={24} /></button>

        {/* Media Side - Video Logic Updated */}
        <div className="w-full md:w-2/3 aspect-video md:aspect-auto relative group bg-black overflow-hidden flex items-center justify-center">
          {!isPlaying ? (
            <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover brightness-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button whileHover={{ scale: 1.1 }} className="w-24 h-24 rounded-full bg-brand-cyan flex items-center justify-center text-brand-black glow-cyan z-10">
                  <Play size={32} fill="currentColor" className="ml-1" />
                </motion.button>
              </div>
            </div>
          ) : (
            <iframe 
              src={getEmbedUrl(project.videoUrl)} 
              title={project.title} 
              className="absolute inset-0 w-full h-full z-20 border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen 
            />
          )}
        </div>

        {/* Info Side (Ager motoi thakbe) */}
        <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col overflow-y-auto max-h-[500px] md:max-h-none">
          <span className={`text-[10px] font-bold uppercase tracking-[0.4em] mb-4 ${project.accent === 'brand-cyan' ? 'text-brand-cyan' : 'text-brand-crimson'}`}>{project.category}</span>
          <h2 className="text-4xl font-bold text-white mb-6 leading-tight">{project.title}</h2>
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between py-4 border-b border-white/5">
               <div className="flex items-center gap-3 text-muted-gray text-xs uppercase tracking-widest"><User size={14} /> Client</div>
               <span className="text-white text-sm font-medium">{project.client}</span>
            </div>
          </div>
          <p className="text-silver leading-relaxed font-light mb-12">{project.fullDesc}</p>
          <div className="mt-auto space-y-4">
             <button onClick={() => setIsPlaying(true)} className="w-full py-4 bg-white text-brand-black font-bold uppercase tracking-widest hover:bg-brand-cyan transition-colors">Play Full Reel</button>
             <button className="w-full py-4 border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">Behind the Scenes</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// --- GalleryView, Journey, App (Baki sob section ager motoi thakbe) ---

function GalleryView({ onBack, onSelectProject }: { onBack: () => void, onSelectProject: (p: Project) => void }) {
  const [filter, setFilter] = useState('Reels');
  const filteredProjects = PROJECTS.filter(p => p.category === filter);
  return (
    <section className="min-h-screen pt-40 pb-24 px-10 bg-brand-black">
      <div className="max-w-[1400px] mx-auto">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-muted-gray hover:text-brand-cyan mb-10"><ArrowLeft size={14} /> Back to Home</button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => <ProjectCard key={project.id} project={project} index={idx} onSelect={onSelectProject} />)}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="py-40 px-10 bg-brand-black text-center">
      <h2 className="text-7xl font-bold text-white mb-24">THE <span className="text-gradient">JOURNEY</span></h2>
      <div className="max-w-[1000px] mx-auto space-y-24">
        {EXPERIENCE.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-10 items-center justify-between border-l border-brand-cyan pl-10 text-left">
            <div><h3 className="text-4xl font-bold text-white">{item.role}</h3><p className="text-brand-cyan uppercase tracking-widest">{item.company}</p></div>
            <p className="text-muted-gray max-w-xl">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [homeFilter, setHomeFilter] = useState('Reels');

  return (
    <div className="bg-brand-black min-h-screen text-silver">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <AnimatePresence mode="wait">
        {currentPage === 'home' ? (
          <motion.main key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero onNavigate={setCurrentPage} />
            <section id="projects" className="py-40 px-10">
               <h2 className="text-7xl font-bold text-white mb-16">FEATURED <span className="text-gradient">STORIES</span></h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 {PROJECTS.filter(p => p.category === homeFilter).slice(0, 4).map((p, i) => <ProjectCard key={p.id} project={p} index={i} onSelect={setSelectedProject} />)}
               </div>
            </section>
            <Journey />
          </motion.main>
        ) : <GalleryView onBack={() => setCurrentPage('home')} onSelectProject={setSelectedProject} />}
      </AnimatePresence>
      <AnimatePresence>{selectedProject && <ProjectDetailsModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
    </div>
  );
}
