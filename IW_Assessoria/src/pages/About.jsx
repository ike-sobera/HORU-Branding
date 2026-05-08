import React from 'react';
import { motion } from 'framer-motion';
import founderImg from '../assets/Israel Wendel.jpg';

const About = () => {
  return (
    <div className="pb-32">
      <section className="pt-20 pb-32">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-none">
              Onde a Estratégia <br />encontra a Execução.
            </h1>
            <div className="h-1 w-24 bg-accent mx-auto mb-16"></div>
          </motion.div>
        </div>
      </section>

      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-white/70 text-xl leading-relaxed font-light"
          >
            <p>
              A <span className="text-white font-bold">IW</span> surgiu em 2025 com uma proposta clara: ser a direção para empresas que buscam o próximo nível de escala através de um marketing técnico, rigoroso e voltado a resultados tangíveis.
            </p>
            <p>
              Em um mercado saturado de promessas vazias, nos posicionamos como o braço estratégico de governança e crescimento. Nosso método não se baseia em "achismos", mas em uma arquitetura de dados sólida.
            </p>
            <p>
              Nossa cultura é pautada pelo arquétipo do <span className="text-accent italic">Sábio</span> e do <span className="text-accent italic">Governante</span>: buscamos o conhecimento profundo para exercer o controle sobre os números e garantir a soberania de nossos clientes em seus nichos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-ice/5 border border-white/10 overflow-hidden group">
              {/* Placeholder for Israel Wendel P&B photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10"></div>
              <img 
                src={founderImg} 
                alt="Israel Wendel" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 z-20">
                <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold block mb-2">Fundador & CEO</span>
                <h3 className="text-3xl font-black tracking-tighter">Israel Wendel</h3>
              </div>
            </div>
            
            {/* Decorative Gold Frame */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/30 pointer-events-none"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-accent/30 pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      <section className="mt-48 bg-white/5 py-32 border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-6xl font-black text-accent mb-4 tracking-tighter">100+</div>
              <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Empresas Escaladas</p>
            </div>
            <div>
              <div className="text-6xl font-black text-accent mb-4 tracking-tighter">R$ 50M+</div>
              <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Geridos em Anúncios</p>
            </div>
            <div>
              <div className="text-6xl font-black text-accent mb-4 tracking-tighter">20+</div>
              <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Nichos de Atuação</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
