import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BarChart3, Target, ChevronRight } from 'lucide-react';
import TransparentLogo from '../components/TransparentLogo';

// Partner Logos
import p1 from '../assets/LOGOS PARCEIROS/Ativo 1.png';
import p2 from '../assets/LOGOS PARCEIROS/LOGO CAPELLA 22.png';
import p3 from '../assets/LOGOS PARCEIROS/Ingesles fundo.png';
import p4 from '../assets/LOGOS PARCEIROS/Logo Ecoar Resort.png';
import p5 from '../assets/LOGOS PARCEIROS/Logo Guacamole simples-08.png';
import p6 from '../assets/LOGOS PARCEIROS/didge-steak-house-branca.png';
import p7 from '../assets/LOGOS PARCEIROS/logo pousada chateau blanc.png';
import p8 from '../assets/LOGOS PARCEIROS/logo ravena.png';
import p9 from '../assets/LOGOS PARCEIROS/logo rio branco quadrada.png';
import p10 from '../assets/LOGOS PARCEIROS/Logo SOMMA.png';
import p11 from '../assets/LOGOS PARCEIROS/LOGO_COSTAO_CMYK_Costao_Santinho_Vertical_AmareloAzul.png';
import p12 from '../assets/LOGOS PARCEIROS/nsc.png';
import p13 from '../assets/LOGOS PARCEIROS/Villa Di Acqua14.png';
import metaCert from '../assets/LOGO CERTIFICADOS/meta-media-certified-company (1).png';
import googleCert from '../assets/LOGO CERTIFICADOS/google-partner-logo-png_seeklogo-428155.png';
import waterParkImg from '../assets/niche_water_park.png';

const Home = () => {
  const pillars = [
    {
      title: "Estratégica",
      desc: "Desenvolvimento de caminhos claros para objetivos de longo prazo.",
      icon: <Shield className="text-accent" size={32} />
    },
    {
      title: "Analítica",
      desc: "Decisões baseadas em dados e métricas de performance reais.",
      icon: <BarChart3 className="text-accent" size={32} />
    },
    {
      title: "Confiável",
      desc: "Transparência total em cada etapa do processo de escala.",
      icon: <Target className="text-accent" size={32} />
    }
  ];

  const partners = [
    { src: p1, type: 'light' }, // Ativo 1
    { src: p2, type: 'light' }, // CAPELLA
    { src: p3, type: 'light', removeGreen: true }, // Ingesles fundo
    { src: p4, type: 'light' }, // Ecoar Resort
    { src: p5, type: 'light' }, // Guacamole
    { src: p6, type: 'light' }, // didge-steak-house-branca
    { src: p7, type: 'light' }, // chateau blanc
    { src: p8, type: 'light' }, // ravena
    { src: p9, type: 'dark' },  // rio branco
    { src: p10, type: 'light' }, // SOMMA
    { src: p11, type: 'dark' },  // COSTAO
    { src: p12, type: 'light' }, // nsc
    { src: p13, type: 'light' }, // Villa Di Acqua
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-50 blur-3xl"></div>
          {/* Subtle Abstract Graphic - Data Web */}
          <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10" viewBox="0 0 100 100" fill="none">
            <path d="M10 10 L90 90 M10 90 L90 10 M50 0 L50 100 M0 50 L100 50" stroke="#c7ad6d" strokeWidth="0.1" />
            <circle cx="50" cy="50" r="40" stroke="#c7ad6d" strokeWidth="0.05" />
            <circle cx="50" cy="50" r="20" stroke="#c7ad6d" strokeWidth="0.05" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tighter">
              Assessoria de Marketing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
                Especialista em Performance
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl font-light leading-relaxed">
              Intelligence at Work. <br />
              Marketing Orientado por Dados. Crescimento Construído com Inteligência.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-gold group flex items-center justify-center">
                Iniciar Diagnóstico 
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="px-8 py-3 border border-white/10 hover:bg-white/5 transition-colors font-semibold uppercase tracking-widest text-xs flex items-center justify-center">
                Nossa Metodologia
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-32 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-card p-12 group hover:border-accent/30 transition-all duration-500"
              >
                <div className="mb-8 p-4 bg-white/5 w-fit rounded-none group-hover:bg-accent/10 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 flex flex-wrap justify-center items-center gap-16">
            <span className="text-xs tracking-[0.5em] uppercase font-bold text-white mb-4 w-full text-center opacity-50">Reconhecimentos</span>
            <img src={googleCert} alt="Google Partner" className="h-20 object-contain" />
            <img src={metaCert} alt="Meta Certified" className="h-20 object-contain" />
          </div>
        </div>
      </section>

      {/* Expertise Vertical */}
      <section className="py-32 bg-[#121926]">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tighter">Somos Especialistas em Mercados de Alta Complexidade.</h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 h-[600px] md:h-[500px]">
            {[
              { name: "Hotéis e Resorts", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=500&auto=format&fit=crop" },
              { name: "Parques Aquáticos", img: waterParkImg },
              { name: "Clínicas Odontológicas", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=500&auto=format&fit=crop" },
              { name: "Imobiliárias", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=500&auto=format&fit=crop" },
              { name: "Investimentos", img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=500&auto=format&fit=crop" }
            ].map((niche, idx) => (
              <motion.div
                key={idx}
                className="relative group overflow-hidden cursor-pointer h-full"
                whileHover={{ flex: 1.5 }}
                transition={{ duration: 0.5 }}
              >
                <img src={niche.img} alt={niche.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/20 transition-colors"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-xl font-bold leading-none tracking-tight">{niche.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Carrossel - Infinite Seamless Scroll */}
      <section className="py-24 border-y border-white/5 bg-primary/50 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary to-transparent z-10"></div>
        
        <div className="flex items-center">
          <motion.div 
            className="flex items-center flex-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {/* Double the array for seamless loop */}
            {[...partners, ...partners].map((partner, pIdx) => (
              <div key={pIdx} className="flex-shrink-0 flex items-center justify-center px-12 h-24 w-80">
                <TransparentLogo 
                  src={partner.src} 
                  type={partner.type} 
                  className="w-40 h-20"
                  removeGreen={partner.removeGreen}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
