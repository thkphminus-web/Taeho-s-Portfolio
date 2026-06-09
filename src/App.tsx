import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  personalInfo, 
  researchInterests, 
  educationHistory, 
  professionalExperience, 
  selectedAwards, 
  selectedPublications, 
  patents, 
  researchGrants, 
  mentorshipAndAcademic, 
  skillsData, 
  Publication 
} from './data';
import { 
  Cpu, 
  BrainCircuit, 
  HeartPulse, 
  ShieldAlert, 
  GraduationCap, 
  Briefcase, 
  Award, 
  FileText, 
  Search, 
  Check, 
  Copy, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Activity, 
  ChevronRight, 
  ArrowUpRight, 
  Atom, 
  BookOpen, 
  Terminal, 
  Star, 
  Share2, 
  ExternalLink, 
  Info, 
  Download, 
  Code,
  Flame,
  Users,
  FileBadge,
  Linkedin,
  UploadCloud,
  Video
} from 'lucide-react';

interface PillarVideoCardProps {
  idx: number;
  interest: any;
  isSelected: boolean;
  onClick: () => void;
  videoSrc: string | null;
  onVideoChange: (src: string | null) => void;
  getIcon: (name: string) => React.ReactNode;
  key?: React.Key;
}

function PillarVideoCard({ idx, interest, isSelected, onClick, videoSrc, onVideoChange, getIcon }: PillarVideoCardProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [defaultLoadFailed, setDefaultLoadFailed] = useState(false);

  const defaultVideoPaths: Record<number, string> = {
    0: 'https://drive.google.com/file/d/1gjN5Dld_Xu9TJ6nMDOu6haQ8nxH1S39r/view?usp=drive_link',
    1: 'https://drive.google.com/file/d/1fPJ9gHqIG4HoAZ0fMkfPwavrj_ktBRqM/view?usp=drive_link',
    2: 'https://drive.google.com/file/d/1Muictc1Hi02LDT0rWioCrDyzkn_QtGqZ/view?usp=drive_link',
    3: 'https://drive.google.com/file/d/1Ecc7cRxycpTl81XyoTed5ZDnt90qNTHJ/view?usp=drive_link',
  };

  const defaultPath = defaultVideoPaths[idx];
  // Determine actual source: custom uploaded takes top priority; if none, try default path if it hasn't failed to load
  const activeVideoSrc = videoSrc || (!defaultLoadFailed ? defaultPath : null);

  const isGoogleDriveSpec = activeVideoSrc?.includes('drive.google.com');

  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://drive.google.com/file/d/${match[1]}/preview`;
      }
    }
    return url;
  };

  const processedVideoSrc = activeVideoSrc ? getEmbedUrl(activeVideoSrc) : null;

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      onVideoChange(url);
      setDefaultLoadFailed(false); // Reset error state on file upload
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div
      onClick={onClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between group h-full ${
        isSelected 
          ? 'bg-gradient-to-br from-indigo-950/40 to-slate-950 border-sky-400 shadow-md ring-1 ring-sky-500/20' 
          : 'bg-slate-950/20 hover:bg-slate-900/40 border-slate-900'
      } ${isDragOver ? 'border-sky-400 bg-sky-950/40 scale-[0.99] ring-2 ring-sky-500/30' : ''}`}
      id={`interest-card-${idx}`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/10 transition-all duration-300 pointer-events-none" />
      
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2 rounded-lg ${isSelected ? 'bg-sky-500/10' : 'bg-slate-900'}`}>
            {getIcon(interest.iconName)}
          </div>
          <span className="text-[10px] font-mono text-sky-400 font-bold bg-sky-950/30 px-2 py-0.5 rounded border border-sky-900/40">
            SYSTEM 0{idx + 1} // Research Demo
          </span>
        </div>

        <h4 className="font-bold text-white text-[13.5px] font-display tracking-tight leading-snug group-hover:text-sky-300 transition-colors">
          {interest.title}
        </h4>
        <p className="text-slate-400 text-xs leading-relaxed mt-1.5 mb-4">
          {interest.description}
        </p>
      </div>

      {/* Video Frame or Upload Drag-and-Drop Area */}
      <div 
        className="mt-2 bg-black/70 rounded-lg border border-slate-900 focus-within:border-sky-500/50 p-1 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {processedVideoSrc ? (
          <div className="relative group/player">
            {isGoogleDriveSpec ? (
              <iframe 
                src={processedVideoSrc} 
                className="w-full rounded h-[260px] sm:h-[300px] bg-black border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Google Drive Video Player"
              />
            ) : (
              <video 
                src={processedVideoSrc} 
                className="w-full rounded h-[260px] sm:h-[300px] object-contain bg-black shadow-inner"
                controls
                preload="auto"
                playsInline
                referrerPolicy="no-referrer"
                onError={() => {
                  // If the default path fails (e.g. 404 because file is not in public directory yet), trigger fallback
                  if (!videoSrc) {
                    setDefaultLoadFailed(true);
                  }
                }}
              />
            )}

          </div>
        ) : (
          <label 
            className="flex flex-col items-center justify-center p-5 border border-dashed border-slate-800/80 hover:border-sky-500/45 rounded cursor-pointer transition-all text-center bg-slate-950/50 hover:bg-slate-900/20 group/label"
          >
            <UploadCloud className="w-6 h-6 text-slate-500 group-hover/label:text-sky-400 mb-2 transition-colors duration-300 transform group-hover/label:-translate-y-0.5" />
            <span className="text-[11px] font-mono font-bold text-slate-300 group-hover/label:text-sky-300 transition-colors">
              {isDragOver ? "Drop Video to Play" : "Upload Video Demo"}
            </span>
            <span className="text-[9.5px] text-slate-500 mt-1 max-w-[200px] leading-snug">
              Drag & Drop video file here or click to browse
            </span>
            <input 
              type="file" 
              accept="video/*" 
              onChange={handleFileChange} 
              className="hidden" 
            />
          </label>
        )}
      </div>
    </div>
  );
}

export default function App() {
  // Main Tab Navigation: overview, journey, publications, grants, outreach
  const [activeTab, setActiveTab] = useState<'overview' | 'journey' | 'publications' | 'grants' | 'outreach'>('overview');
  
  // Journey Sub-Tabs (Education / Experience)
  const [journeySubTab, setJourneySubTab] = useState<'education' | 'experience'>('education');
  
  // Publication Filters
  const [pubCategoryFilter, setPubCategoryFilter] = useState<string>('all');
  const [pubSearchQuery, setPubSearchQuery] = useState('');
  
  // Citation copying feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Signal simulator active index (corresponds to researchInterests)
  const [simulatedPillarIndex, setSimulatedPillarIndex] = useState(0);

  // Pillar Videos storage mapped by interest index
  const [pillarVideos, setPillarVideos] = useState<Record<number, string | null>>({});

  // Time tracker for a live UTC dashboard clock
  const [timeStr, setTimeStr] = useState('02:28:09 UTC');



  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeStr(now.toUTCString().replace('GMT', 'UTC'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCitation = (pub: Publication) => {
    const bibtex = `@article{${pub.citationKey},
  author = {${pub.authors}},
  title = {${pub.title}},
  journal = {${pub.journal}},
  year = {${pub.year}},
  doi = {${pub.doi || 'N/A'}}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
      setCopiedId(pub.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const renderPubCard = (pub: Publication) => {
    const hasDoiLink = pub.doi && pub.doi !== "Accepted" && pub.doi !== "Under review";
    const resolvedDoiUrl = hasDoiLink 
      ? (pub.doi!.startsWith("http") ? pub.doi : `https://doi.org/${pub.doi}`)
      : null;

    return (
      <motion.div
        key={pub.id}
        layout
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        className="bg-slate-950/40 p-4 rounded-xl border border-slate-900 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-slate-800 transition-colors"
        id={`publication-card-${pub.id}`}
      >
        <div className="space-y-1.5 flex-1 select-text">
          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono leading-none">
            {pub.numberText && (
              <span className="font-extrabold text-[#7c3aed] text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                {pub.numberText}
              </span>
            )}
            <span className="px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
              {pub.year}
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300 font-bold leading-normal">{pub.journal}</span>
          </div>

          <h4 className="font-extrabold text-white text-sm sm:text-base font-display leading-snug tracking-tight">
            {pub.title}
          </h4>

          <p className="text-[11px] text-slate-400">
            {pub.authors}
          </p>

          {/* Tags cloud */}
          <div className="flex flex-wrap gap-1 pt-1">
            {pub.tags.map((tg, tgIdx) => (
              <span key={tgIdx} className="text-[9.5px] font-mono bg-slate-900/60 text-slate-400 border border-slate-900 px-2 py-0.5 rounded">
                {tg}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Citations exporter block */}
        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0 border-t sm:border-t-0 border-slate-900 pt-2.5 sm:pt-0 font-mono">
          {hasDoiLink && resolvedDoiUrl && (
            <a 
              href={resolvedDoiUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 transition-colors"
            >
              <ExternalLink className="w-3 h-3" /> DOI Link
            </a>
          )}
          {!hasDoiLink && pub.doi && (
            <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-900">
              {pub.doi}
            </span>
          )}
        </div>
      </motion.div>
    );
  };

  const filteredPublications = useMemo(() => {
    return selectedPublications.filter(pub => {
      const matchesCategory = pubCategoryFilter === 'all' || pub.category === pubCategoryFilter;
      const matchesSearch = pubSearchQuery === '' || 
        pub.title.toLowerCase().includes(pubSearchQuery.toLowerCase()) ||
        pub.authors.toLowerCase().includes(pubSearchQuery.toLowerCase()) ||
        pub.journal.toLowerCase().includes(pubSearchQuery.toLowerCase()) ||
        pub.tags.some(tag => tag.toLowerCase().includes(pubSearchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [pubCategoryFilter, pubSearchQuery]);



  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-400" />;
      default:
        return <Activity className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070a13] text-slate-100 flex flex-col font-sans antialiased selection:bg-sky-500/30 selection:text-sky-200" id="portal-root">
      
      {/* BACKGROUND GRAPHIC ORNAMENTS */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-indigo-950/20 via-sky-950/5 to-transparent pointer-events-none z-0" />
      <div className="absolute top-40 right-10 w-96 h-96 rounded-full bg-sky-500/5 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none z-0" />

      {/* 🚀 1. SYSTEM TOP HEADER BAR */}
      <header className="border-b border-slate-900 bg-[#070a13]/80 backdrop-blur-md sticky top-0 z-50 transition-all" id="app-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo / Brand */}
            <div className="flex items-center gap-3">
              <div>
                <span className="font-display font-bold text-base tracking-tight text-white block">
                  Tae-Ho Kim, Ph.D.
                </span>
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest block font-medium">
                  Mechatronic Systems Engineering
                </span>
              </div>
            </div>

            {/* Middle Quick Stat */}
            <div className="hidden md:flex items-center gap-6 text-xs text-slate-400 font-mono" id="header-time-and-telemetry">
              <div className="flex items-center gap-1.5 text-sky-400">
                <span>{timeStr}</span>
              </div>
            </div>

            {/* Quick Contact Action Button */}
            <div className="flex items-center gap-2">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
                id="header-email-btn"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" /> Contact
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* 🚀 2. METRIC HUB HERO BANNER */}
      <section className="relative z-10 pt-10 pb-8 border-b border-slate-900" id="hero-hub">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Main Title Block */}
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[1.52rem] xl:text-[1.88rem] font-extrabold text-white font-display tracking-tight leading-normal lg:whitespace-nowrap" id="hero-title">
                Hardware-Software Co-Design for Next-Gen Wearables & Embedded AI
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-4xl font-normal text-justify">
                A highly driven mechatronics engineer and researcher specializing in the system-level integration of sensing, actuation, control, and real-time adaptive algorithms into experimentally validated hardware systems for wearables and robot-based healthcare.
              </p>

              {/* Status Icons Line */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400 font-mono" id="hero-status-pills">
                <span className="flex items-center gap-1 bg-slate-950 py-1 px-2.5 rounded border border-slate-900">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {personalInfo.residency}
                </span>
              </div>
            </div>

            {/* Right Quantitative Highlights Column */}
            <div className="lg:col-span-4" id="hero-stats-panel">
              <div className="bg-slate-950/80 border border-slate-900 rounded-2xl p-5 space-y-4 shadow-xl shadow-black/40">
                <a 
                  href="https://scholar.google.com/citations?hl=en&user=cl3Ux58AAAAJ&view_op=list_works&sortby=pubdate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-sky-400 transition-colors font-mono uppercase tracking-wider border-b border-slate-900 pb-2 flex justify-between items-center cursor-pointer group"
                >
                  <span className="flex items-center gap-1.5">
                    <span>Academic Metrics</span>
                    <span className="text-[9px] text-sky-400 bg-sky-950/50 px-1.5 py-0.5 rounded border border-sky-900/40 font-semibold tracking-tight uppercase group-hover:border-sky-500/30 transition-colors">Google Scholar</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-500 group-hover:text-sky-450 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Stat 1 */}
                  <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-850 relative group hover:border-slate-800 transition-colors">
                    <span className="text-2xl font-extrabold text-white block tracking-tight font-display">
                      {personalInfo.metrics.totalJournals}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase">
                      Total Journals
                    </span>
                    <span className="text-[9px] text-emerald-400 font-mono block">
                      ({personalInfo.metrics.firstAuthorJournals} First-Author)
                    </span>
                  </div>

                  {/* Stat 2 */}
                  <a 
                    href="https://scholar.google.com/citations?hl=en&user=cl3Ux58AAAAJ&view_op=list_works&sortby=pubdate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900/50 p-3 rounded-xl border border-slate-850 block relative group hover:border-sky-500/30 hover:bg-slate-900/80 transition-all cursor-pointer"
                  >
                    <span className="text-2xl font-extrabold text-sky-400 block tracking-tight font-display">
                      {personalInfo.metrics.hIndex}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase group-hover:text-sky-400 transition-colors">
                      h-index
                    </span>
                    <span className="text-[9px] text-slate-500 group-hover:text-sky-300 font-mono flex items-center gap-0.5 transition-colors">
                      Google Scholar <ArrowUpRight className="w-2.5 h-2.5 inline opacity-60 group-hover:opacity-100" />
                    </span>
                  </a>

                  {/* Stat 3 */}
                  <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-850 relative group hover:border-slate-800 transition-colors">
                    <span className="text-2xl font-extrabold text-white block tracking-tight font-display">
                      {personalInfo.metrics.citations}+
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase">
                      Citations
                    </span>
                    <span className="text-[9px] text-indigo-400 font-mono block">
                      Active Citability
                    </span>
                  </div>

                  {/* Stat 4 */}
                  <div className="bg-slate-900/50 p-3 rounded-xl border border-slate-850 relative group hover:border-slate-800 transition-colors">
                    <span className="text-2xl font-extrabold text-amber-400 block tracking-tight font-display">
                      5
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono block mt-1 uppercase">
                      Patents
                    </span>
                    <span className="text-[9px] text-amber-500 font-mono block">
                      Canadian & US WO
                    </span>
                  </div>

                </div>

                {/* Direct download proxy trigger */}
                <div className="pt-2 border-t border-slate-900 flex justify-between items-center text-[11px]">
                  <span className="text-slate-400 font-mono">Curriculum Vitae</span>
                  <a 
                    href="https://drive.google.com/file/d/1tdGukikR4jJtstEdcVf-gJMfOFWnBCQE/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 inline" /> Download PDF CV
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 🚀 3. CENTRAL HUB TABS SELECTOR */}
      <nav className="sticky top-16 bg-[#070a13]/95 backdrop-blur-md z-45 border-b border-slate-900" id="tabs-navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-4 no-scrollbar font-display" id="main-tabs-scroller">
            {[
              { key: 'overview', label: 'Research Overview & Pillars', icon: <Cpu className="w-4 h-4" /> },
              { key: 'journey', label: 'Academic & Professional Journey', icon: <GraduationCap className="w-4 h-4" /> },
              { key: 'publications', label: 'Publications & Patents Library', icon: <FileText className="w-4 h-4" /> },
              { key: 'grants', label: 'Grants & Proposals Core', icon: <Atom className="w-4 h-4" /> },
              { key: 'outreach', label: 'Teaching & Outreach', icon: <Users className="w-4 h-4" /> }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`py-2 px-4 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/10 border-transparent'
                    : 'bg-slate-950/40 hover:bg-slate-900/80 hover:text-white text-slate-350 border border-slate-900'
                }`}
                id={`tab-nav-btn-${tab.key}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 🚀 4. CORE WRAPPER LAYOUT WITH DYNAMIC PAGES & SIDEBAR */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full" id="main-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* A. LEFT PORTFOLIO SECTION (col-span-8) */}
          <div className="lg:col-span-8 space-y-10" id="main-tab-content-area">
            
            <AnimatePresence mode="wait">
              
              {/* === OVERVIEW TAB === */}
              {activeTab === 'overview' && (
                <motion.div
                  key="tab-overview"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8"
                >
                  
                  {/* Professional summary overview */}
                  <div className="bg-slate-950/50 border border-slate-900 rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                      <Terminal className="w-32 h-32 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-bold font-display text-white mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5 text-sky-400" />
                      Executive Research Focus
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-sans font-normal text-slate-200">
                      {personalInfo.summary}
                    </p>
                  </div>

                  {/* CORE RESEARCH PILLARS & INTERACTIVE SIGNAL SIMULATOR */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold font-display text-white">
                        Dr. Kim's Mechatronic Pillars
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {researchInterests.map((interest, idx) => {
                        const isSimulated = simulatedPillarIndex === idx;
                        return (
                          <PillarVideoCard 
                            key={idx}
                            idx={idx}
                            interest={interest}
                            isSelected={isSimulated}
                            onClick={() => setSimulatedPillarIndex(idx)}
                            videoSrc={pillarVideos[idx] || null}
                            onVideoChange={(src) => setPillarVideos(prev => ({ ...prev, [idx]: src }))}
                            getIcon={getInterestIcon}
                          />
                        );
                      })}
                    </div>

                    {/* FEATURED LINKEDIN RESEARCH SHOWCASE */}
                    <div className="pt-2">
                      <a 
                        href="https://www.linkedin.com/posts/what-if-blood-pressure-monitoring-could-happen-ugcPost-7404975326377840640-jjb3/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlGX1kBrULsMuxDUay2iS03WoRysnWxlgo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-slate-950 hover:bg-slate-900/60 border border-slate-900 hover:border-sky-500/30 rounded-xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[185px] w-full transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-sky-500/5"
                      >
                        {/* Ambient Glowing Background Effect */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all duration-500 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-36 h-36 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all duration-500 pointer-events-none" />

                        <div className="flex items-center justify-between relative z-10 mb-4">
                          <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-sky-400 bg-sky-950/40 px-2.5 py-1 rounded border border-sky-900/30">
                            Featured Research Demo
                          </span>
                          <div className="flex items-center gap-1.5 text-slate-500 group-hover:text-blue-400 font-mono text-[10px] transition-colors duration-300">
                            <Linkedin className="w-3.5 h-3.5" />
                            <span className="font-semibold">LinkedIn Media</span>
                          </div>
                        </div>

                        <div className="space-y-2 my-auto py-2 relative z-10 text-left">
                          <h5 className="text-white font-display font-bold text-base sm:text-lg leading-snug tracking-tight group-hover:text-sky-300 transition-colors duration-300">
                            "What if blood pressure monitoring could happen seamlessly on a self-powered earphone neckband pulse sensor?"
                          </h5>
                          <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed">
                            Watch Dr. Kim's live mechatronic hardware demonstration: a breakthrough self-powered wearable biomedical solution for continuous, non-invasive health parameter tracking.
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-900/60 relative z-10 w-full animate-fade-in">
                          <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-tight">Active Demonstration Video</span>
                          </div>
                          <div className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-sky-400 group-hover:text-sky-300 transition-colors duration-300">
                            <span>Watch Video on LinkedIn</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          </div>
                        </div>
                      </a>
                    </div>



                  </div>

                </motion.div>
              )}

              {/* === JOURNEY TAB (EDUCATION & EXPERIENCE TIMELINE) === */}
              {activeTab === 'journey' && (
                <motion.div
                  key="tab-journey"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-8"
                >
                  
                  {/* Sliding timeline tabs */}
                  <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                    <h3 className="text-lg font-bold font-display text-white">
                      Chronological Timeline
                    </h3>
                    
                    <div className="inline-flex p-1 bg-slate-950 rounded-lg border border-slate-900">
                      <button
                        onClick={() => setJourneySubTab('education')}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                          journeySubTab === 'education'
                            ? 'bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <GraduationCap className="w-3.5 h-3.5" /> Education
                      </button>
                      <button
                        onClick={() => setJourneySubTab('experience')}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                          journeySubTab === 'experience'
                            ? 'bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow-md'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Briefcase className="w-3.5 h-3.5" /> Positions / Experience
                      </button>
                    </div>
                  </div>

                  <div className="relative border-l-2 border-slate-900 pl-6 space-y-8 ml-3" id="journey-timeline">
                    
                    {journeySubTab === 'education' && educationHistory.map((edu, idx) => (
                      <div key={idx} className="relative group" id={`education-node-${idx}`}>
                        {/* Dot indicator */}
                        <span className="absolute -left-[32.5px] top-1 h-3 w-3 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:scale-125 transition-all" />

                        <div className="flex flex-wrap items-center gap-2.5 text-xs">
                          <span className="px-2 py-0.5 rounded bg-sky-955 bg-sky-950 text-sky-300 border border-sky-900 font-mono text-[10px]">
                            {edu.period}
                          </span>
                          <h4 className="font-extrabold text-white text-base tracking-tight font-display group-hover:text-sky-400 transition-colors">
                            {edu.degree}
                          </h4>
                          {idx === 0 && (
                            <div className="inline-flex items-center gap-1.5 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full text-xs font-bold text-sky-450 text-sky-300 font-mono tracking-wide">
                              <Star className="w-3.5 h-3.5 fill-sky-400 text-sky-400 inline" />
                              <span>Mitacs Elevate National Innovation Winner</span>
                            </div>
                          )}
                        </div>

                        <div className="text-sm font-semibold text-slate-300 mt-1">{edu.institution}</div>
                        <div className="text-[11px] text-slate-500">{edu.department}</div>

                        {edu.details && (
                          <p className="text-xs text-slate-400 mt-1.5 max-w-2xl leading-relaxed">
                            {edu.details}
                          </p>
                        )}

                        {edu.award && (
                          <div className="block mt-2">
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-extrabold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                              <Award className="w-3 h-3 text-amber-400" /> {edu.award}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}

                    {journeySubTab === 'experience' && professionalExperience.map((exp, idx) => (
                      <div key={idx} className="relative group" id={`experience-node-${idx}`}>
                        {/* Dot indicator */}
                        <span className="absolute -left-[32.5px] top-1 h-3 w-3 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:scale-125 transition-all" />

                        <div className="flex flex-wrap items-center gap-2.5 text-xs">
                          <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-900/40 font-mono text-[10px]">
                            {exp.period}
                          </span>
                          <h4 className="font-extrabold text-white text-base tracking-tight font-display group-hover:text-emerald-400 transition-colors">
                            {exp.position}
                          </h4>
                        </div>

                        <div className="text-sm font-semibold text-slate-300 mt-1">{exp.institution}</div>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed max-w-2xl">
                          {exp.details}
                        </p>

                        {exp.impacts && (
                          <div className="mt-2 space-y-1.5 pl-3 border-l border-slate-800">
                            {exp.impacts.map((imp, impIdx) => (
                              <div key={impIdx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                                <span className="text-emerald-400">•</span>
                                <span>{imp}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}

                  </div>

                </motion.div>
              )}

              {/* === PUBLICATIONS & PATENTS TAB === */}
              {activeTab === 'publications' && (
                <motion.div
                  key="tab-publications"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  
                  {/* Top explanation and filter widgets */}
                  <div className="border-b border-slate-900 pb-4 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold font-display text-white">
                          Scientific Contribution Catalog
                        </h3>
                        <p className="text-xs text-slate-400">
                          {/* Removed publication sentence as requested */}
                        </p>
                      </div>

                      {/* Pill selectors */}
                      <div className="flex flex-wrap gap-1 border border-slate-900/60 p-1 bg-slate-950/80 rounded-xl max-w-full font-mono">
                        {[
                          { key: 'all', label: 'All' },
                          { key: 'soft-sensors', label: 'Robotic Sensors' },
                          { key: 'healthcare', label: 'Healthcare' },
                          { key: 'nanotech', label: 'Interfaces' },
                          { key: 'optoelectronics', label: 'Optoelectronics' },
                          { key: 'infrastructure', label: 'Infra' },
                          { key: 'conference', label: 'Conferences' }
                        ].map((fil) => (
                          <button
                            key={fil.key}
                            onClick={() => setPubCategoryFilter(fil.key)}
                            className={`px-2.5 py-1 rounded-lg text-[9.5px] font-extrabold transition-all cursor-pointer ${
                              pubCategoryFilter === fil.key
                                ? 'bg-gradient-to-tr from-sky-500 to-indigo-600 text-white shadow shadow-sky-550/20'
                                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                            }`}
                          >
                            {fil.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Elastic search bar input */}
                    <div className="relative">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-550 text-slate-550 text-slate-500" />
                      <input 
                        type="text"
                        placeholder="Search publications by title, Co-authors, journals, or tags (e.g. TinyML, Kirigami)..."
                        value={pubSearchQuery}
                        onChange={(e) => setPubSearchQuery(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-900 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all font-sans"
                        id="pub-search-input"
                      />
                    </div>
                  </div>

                  {/* Publications lists */}
                  <div className="space-y-6" id="filtered-pubs-container">
                    <AnimatePresence mode="popLayout">
                      {(() => {
                        const categories = [
                          { key: 'soft-sensors', title: 'Soft Sensors & Intelligent Manufacturing for Robotic Systems' },
                          { key: 'healthcare', title: 'Healthcare Robotics and Wearables' },
                          { key: 'nanotech', title: 'Nanostructured Interfaces for Functional & Flexible Electronics' },
                          { key: 'optoelectronics', title: 'Low-Energy Polymer Optoelectronics' },
                          { key: 'infrastructure', title: 'National Research Infrastructure Development' },
                          { key: 'conference', title: 'Conference Proceeding Papers / Publications' }
                        ];

                        // If user is searching or has specified a specific subcategory filter:
                        if (pubSearchQuery !== '' || pubCategoryFilter !== 'all') {
                          if (filteredPublications.length === 0) {
                            return (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center p-12 bg-slate-950/20 border border-slate-900 rounded-2xl font-mono text-xs text-slate-600"
                              >
                                No matching mechatronic publication nodes located in Database.
                              </motion.div>
                            );
                          }
                          return filteredPublications.map((pub) => renderPubCard(pub));
                        }

                        // Otherwise show grouped style with heading banners
                        return categories.map((cat) => {
                          const catPubs = filteredPublications.filter(p => p.category === cat.key);
                          if (catPubs.length === 0) return null;
                          return (
                            <div key={cat.key} className="space-y-3.5 pt-1">
                              <div className="flex items-center gap-2 border-b border-slate-900/40 pb-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-sky-400 to-indigo-500 animate-pulse"></span>
                                <h4 className="text-[11px] font-extrabold uppercase tracking-widest font-mono text-sky-400">
                                  {cat.title}
                                </h4>
                              </div>
                              <div className="space-y-3.5">
                                {catPubs.map((pub) => renderPubCard(pub))}
                              </div>
                            </div>
                          );
                        });
                      })()}
                    </AnimatePresence>
                  </div>

                  {/* Registered Patent lists title */}
                  <div className="pt-6 border-t border-slate-900 space-y-4">
                    <h3 className="text-xl font-bold font-display text-white">
                      Registered International Patent Portfolios
                    </h3>
                    <div className="grid grid-cols-1 gap-3" id="patents-grid-wrap">
                      {patents.map((pat, pIdx) => (
                        <div key={pIdx} className="bg-slate-950/40 p-4 border border-slate-900 rounded-xl relative overflow-hidden flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono font-extrabold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                              {pat.status}
                            </span>
                            <h4 className="font-bold text-white text-sm font-display tracking-tight leading-tight mt-1.5">
                              {pat.title}
                            </h4>
                            <p className="text-[11px] text-slate-500 font-mono">
                              Patent ID: {pat.id} // {pat.inventors} // {pat.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}

              {/* === GRANTS & PROPOSALS TAB === */}
              {activeTab === 'grants' && (
                <motion.div
                  key="tab-grants"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  
                  <div className="border-b border-slate-900 pb-3">
                    <h3 className="text-lg font-bold font-display text-white">
                      Federal & Industrial Research Grants
                    </h3>
                    <p className="text-xs text-slate-400">
                      Pioneering advanced, multi-institutional capital acquisitions and continuous project roadmapping.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4" id="grants-timeline">
                    {researchGrants.map((gr, gIdx) => {
                      const isAwarded = gr.status === 'Awarded';
                      const isProgress = gr.status === 'In progress';
                      return (
                        <div key={gIdx} className="bg-slate-950/40 border border-slate-900 p-5 rounded-xl space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-900 pb-2">
                            <span className="text-xs font-mono font-bold text-slate-400">
                              {gr.year}
                            </span>
                            
                            <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded ${
                              isAwarded 
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                : isProgress
                                ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                                : 'bg-slate-900 text-slate-400 border border-slate-800'
                            }`}>
                              {gr.status}
                            </span>
                          </div>

                          <h4 className="font-extrabold text-white text-base font-display">
                            {gr.title}
                          </h4>

                          <div className="text-[11px] font-mono text-sky-400">
                            Role: {gr.role}
                          </div>

                          <p className="text-xs text-slate-400 leading-relaxed font-sans">
                            {gr.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                </motion.div>
              )}

              {/* === OUTREACH & TEACHING === */}
              {activeTab === 'outreach' && (
                <motion.div
                  key="tab-outreach"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  
                  <div className="border-b border-slate-900 pb-3">
                    <h3 className="text-lg font-bold font-display text-white">
                      Teaching Leadership & Active Mentorship
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6" id="mentorship-pane">
                    {mentorshipAndAcademic.map((item, mIdx) => (
                      <div key={mIdx} className="bg-slate-950/40 border border-slate-900 rounded-xl p-5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                          <Users className="w-24 h-24 text-sky-500" />
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="p-1.5 rounded-lg bg-sky-500/10">
                            {item.type === 'classroom' ? <BookOpen className="w-5 h-5 text-sky-400" /> : <Users className="w-5 h-5 text-emerald-400" />}
                          </span>
                          <h4 className="font-bold text-white text-base font-display tracking-tight">
                            {item.title}
                          </h4>
                        </div>

                        <ul className="space-y-3">
                          {item.details.map((bullet, blIdx) => (
                            <li key={blIdx} className="flex gap-2 text-xs leading-relaxed text-slate-305 text-slate-300">
                              <span className="text-sky-400 shrink-0 font-bold mt-0.5">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </div>

          {/* B. RIGHT PORTFOLIO SIDEBAR (col-span-4) */}
          <div className="lg:col-span-4 space-y-6" id="right-sidebar">
            
            {/* Quick credentials / General card */}
            <div className="bg-slate-950 border border-slate-900 rounded-2xl p-5 relative overflow-hidden" id="card-general-profile">
              <div className="flex items-center gap-3 border-b border-slate-900 pb-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-white text-sm shadow">
                  TK
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm font-display tracking-tight">
                    Tae-Ho Kim, Ph.D.
                  </h4>
                  <span className="text-[10px] text-slate-450 text-slate-400 font-mono uppercase block">
                    Postdoc at SFU / Medtronic
                  </span>
                </div>
              </div>

              {/* Core static elements */}
              <div className="space-y-4 text-xs font-mono">
                
                <div className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-sky-405 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[9px] uppercase leading-none mb-0.5">Primary Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-205 text-slate-300 hover:text-white underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>





              </div>

              <div className="mt-5 pt-4 border-t border-slate-900 bg-[#070a13]/55 -mx-5 -mb-5 px-5 py-4">
                <span className="text-[9.5px] font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                  Collaboration Affiliations
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {/* SFU wearTECH LABS */}
                  <div className="bg-white border border-slate-200/10 rounded-xl p-1.5 flex items-center justify-center h-12 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm" title="SFU wearTECH LABS">
                    <img 
                      src="https://github.com/thkphminus-web/Taeho-s-Portfolio/raw/486b62b035b42ca9aa5dec7ef1884ef0a7c9d8ee/logo1.png" 
                      alt="SFU wearTECH LABS" 
                      className="max-h-7 max-w-[92%] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Medtronic */}
                  <div className="bg-white border border-slate-200/10 rounded-xl p-1.5 flex items-center justify-center h-12 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm" title="Medtronic Canada">
                    <img 
                      src="https://github.com/thkphminus-web/Taeho-s-Portfolio/raw/486b62b035b42ca9aa5dec7ef1884ef0a7c9d8ee/logo2.png" 
                      alt="Medtronic Canada" 
                      className="max-h-7 max-w-[90%] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Mitacs */}
                  <div className="bg-white border border-slate-200/10 rounded-xl p-1.5 flex items-center justify-center h-12 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm" title="Mitacs Foundation">
                    <img 
                      src="https://github.com/thkphminus-web/Taeho-s-Portfolio/raw/486b62b035b42ca9aa5dec7ef1884ef0a7c9d8ee/logo3.jpg" 
                      alt="Mitacs" 
                      className="max-h-6 max-w-[90%] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Human In Motion Robotics */}
                  <div className="bg-white border border-slate-200/10 rounded-xl p-1.5 flex items-center justify-center h-12 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm" title="Human in Motion Robotics">
                    <img 
                      src="https://github.com/thkphminus-web/Taeho-s-Portfolio/raw/486b62b035b42ca9aa5dec7ef1884ef0a7c9d8ee/logo4.png" 
                      alt="Human in Motion Robotics" 
                      className="max-h-12 max-w-[95%] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* NSERC */}
                  <div className="bg-white border border-slate-200/10 rounded-xl p-1.5 flex items-center justify-center h-12 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm" title="NSERC CRSNG">
                    <img 
                      src="https://github.com/thkphminus-web/Taeho-s-Portfolio/raw/486b62b035b42ca9aa5dec7ef1884ef0a7c9d8ee/logo5.png" 
                      alt="NSERC" 
                      className="max-h-8 max-w-[90%] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Samsung */}
                  <div className="bg-white border border-slate-200/10 rounded-xl p-1.5 flex items-center justify-center h-12 hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-sm" title="Samsung">
                    <img 
                      src="https://github.com/thkphminus-web/Taeho-s-Portfolio/raw/2d8372ec0d79d85f3e15d03e69dd9246f3d074ef/logo7.png" 
                      alt="Samsung" 
                      className="max-h-8 max-w-[90%] object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* TECHNICAL SKILLS MATRIX SIDEBAR COMPONENT */}
            <div className="bg-slate-950 border border-slate-900 rounded-2xl p-5" id="sidebar-skills-widget">
              <div className="flex justify-between items-center border-b border-slate-900 pb-3 mb-4">
                <h4 className="font-bold text-white text-xs font-mono uppercase tracking-widest flex items-center gap-1.5">
                  Technology Stack
                </h4>
              </div>

              <div className="space-y-4 font-mono">
                {skillsData.map((sk, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="text-[10px] text-slate-500 font-bold uppercase block">
                      {sk.domain}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sk.items.map((item, itIdx) => (
                        <span key={itIdx} className="text-[9.5px] bg-slate-900 hover:bg-slate-850 hover:border-sky-800 text-slate-300 border border-slate-800 px-2 py-0.5 rounded transition-colors select-text">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* 🚀 5. FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950/50 mt-16 py-8" id="app-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <div className="space-y-1">
            <span className="text-xs font-bold text-white font-display block">Tae-Ho Kim, Ph.D. Digital Node</span>
            <span className="text-[10px] font-mono text-slate-500 block">
              © 2026 Dr. Tae-Ho Kim. Handcrafted inside Simon Fraser University. All research belongs to respective publishers.
            </span>
          </div>



        </div>
      </footer>

    </div>
  );
}
