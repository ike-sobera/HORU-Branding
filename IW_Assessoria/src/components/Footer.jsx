import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';
import logo from '../assets/LOGO IW/IW Dourado.webp';
import metaCert from '../assets/LOGO CERTIFICADOS/meta-media-certified-company (1).png';
import googleCert from '../assets/LOGO CERTIFICADOS/google-partner-logo-png_seeklogo-428155.png';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-white/5 pt-24 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <img src={logo} alt="IW Assessoria" className="h-12 w-auto mb-6" />
            <p className="text-white/50 max-w-sm text-lg leading-relaxed font-light">
              Inteligência de dados, entrega de resultados. Liderando a escala de operações complexas com estratégia e precisão.
            </p>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-white/40 hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-accent transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-white/40 hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-accent transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.59 3H4.41C3.63 3 3 3.63 3 4.41v15.18c0 .78.63 1.41 1.41 1.41h15.18c.78 0 1.41-.63 1.41-1.41V4.41C21 3.63 20.37 3 19.59 3zM4 4h16v16H4V4zm9 3h-2v2H9v2h2v2h2v-2h2V9h-2V7z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-semibold mb-8">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="/" className="text-white/50 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="/servicos" className="text-white/50 hover:text-white transition-colors text-sm">Serviços</a></li>
              <li><a href="/sobre" className="text-white/50 hover:text-white transition-colors text-sm">Sobre Nós</a></li>
              <li><a href="/contato" className="text-white/50 hover:text-white transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-semibold mb-8">Localização</h4>
            <p className="text-white/50 text-sm leading-loose">
              Rod. Armando Calil Bulos, 5795<br />
              Ingleses Norte<br />
              Florianópolis - SC, 88058-001
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 space-y-8 md:space-y-0">
          <div className="flex items-center space-x-8">
            <div className="opacity-80 hover:opacity-100 transition-all duration-500 cursor-pointer">
              <img src={googleCert} alt="Google Partner" className="h-8" />
            </div>
            <div className="opacity-80 hover:opacity-100 transition-all duration-500 cursor-pointer">
              <img src={metaCert} alt="Meta Certified" className="h-8" />
            </div>
          </div>
          
          <div className="text-white/30 text-[10px] uppercase tracking-widest text-center md:text-right">
            IW Assessoria de Marketing © 2026 - Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
