import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Search, Layout as LayoutIcon, CheckCircle2 } from 'lucide-react';
import trafegoPagoImg from '../assets/service_trafego_pago.png';
import blogSeoImg from '../assets/service_blog_seo.png';

const Services = () => {
  const services = [
    {
      title: "Tráfego Pago",
      subtitle: "Performance em Escala",
      desc: "Nossa especialidade central. Como uma Meta Certified Company e Google Partner, gerimos orçamentos de alta escala com foco exclusivo em ROI. Estratégias personalizadas para captura de leads qualificados e vendas diretas.",
      icon: <MousePointer2 className="text-accent" size={40} />,
      features: ["Meta Ads (Facebook & Instagram)", "Google Ads (Search, Display, YT)", "LinkedIn & TikTok Ads", "Relatórios em tempo real"],
      img: trafegoPagoImg
    },
    {
      title: "Blog & SEO",
      subtitle: "Autoridade Orgânica",
      desc: "Construção de autoridade orgânica e tráfego qualificado de longo prazo. Não apenas escrevemos textos; criamos ativos digitais que posicionam sua marca como líder do setor no Google.",
      icon: <Search className="text-accent" size={40} />,
      features: ["Análise de Keywords", "SEO On-page & Técnico", "Link Building Estratégico", "Marketing de Conteúdo"],
      img: blogSeoImg
    },
    {
      title: "Desenvolvimento Web",
      subtitle: "Vitrine de Conversão",
      desc: "Sua vitrine digital precisa gerar vendas. Desenvolvemos Landing Pages e Sites Institucionais focados em UX/UI de alto padrão, otimizados para conversão e carregamento ultra-rápido.",
      icon: <LayoutIcon className="text-accent" size={40} />,
      features: ["Landing Pages de Alta Conversão", "Sites Institucionais Premium", "Otimização de Velocidade", "Design Responsivo & Mobile First"],
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pb-32">
      <section className="pt-20 pb-32">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Nossas Soluções</h1>
            <p className="text-xl text-white/50 font-light leading-relaxed">
              Três pilares fundamentais para transformar sua presença digital em uma máquina de escala e autoridade.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="space-y-12">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="container-custom"
          >
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center p-12 lg:p-24 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} glass-card border-none bg-white/5`}>
              <div className={idx % 2 !== 0 ? 'md:order-2' : ''}>
                <div className="mb-8">{service.icon}</div>
                <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold block mb-4">{service.subtitle}</span>
                <h2 className="text-4xl font-bold mb-8 tracking-tighter">{service.title}</h2>
                <p className="text-white/60 text-lg leading-relaxed mb-12">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3 text-sm text-white/80">
                      <CheckCircle2 className="text-accent" size={16} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`h-full min-h-[400px] relative overflow-hidden ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-primary/30"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Services;
