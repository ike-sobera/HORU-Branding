import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, Send } from 'lucide-react';

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    solution: '',
    position: '',
    company: '',
    website: '',
    segment: '',
    investment: '',
    hasTeam: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const steps = [
    { title: "Dados Pessoais", id: 1 },
    { title: "Dados da Empresa", id: 2 },
    { title: "Perfil de Investimento", id: 3 }
  ];

  return (
    <div className="pb-32 min-h-[80vh] flex flex-col justify-center">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
              Solicite um diagnóstico detalhado.
            </h1>
            <p className="text-white/50 text-lg">Estamos prontos para escalar sua operação.</p>
          </header>

          {/* Stepper UI */}
          <div className="flex justify-between items-center mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10"></div>
            {steps.map((s) => (
              <div key={s.id} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-none border-2 flex items-center justify-center transition-all duration-500 bg-primary ${
                  step >= s.id ? 'border-accent text-accent' : 'border-white/10 text-white/30'
                }`}>
                  {step > s.id ? <Check size={18} /> : s.id}
                </div>
                <span className={`text-[10px] uppercase tracking-widest mt-4 font-bold ${
                  step >= s.id ? 'text-accent' : 'text-white/20'
                }`}>
                  {s.title}
                </span>
              </div>
            ))}
          </div>

          <div className="glass-card p-8 md:p-16 border-none bg-white/5">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/40">Nome Completo</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors"
                        placeholder="Ex: João Silva"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/40">WhatsApp</label>
                      <input 
                        type="tel" 
                        className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors"
                        placeholder="(00) 00000-0000"
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/40">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors"
                      placeholder="seu@email.com.br"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/40">Solução Desejada</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors appearance-none"
                      onChange={(e) => setFormData({...formData, solution: e.target.value})}
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="trafego">Tráfego Pago (Alta Escala)</option>
                      <option value="seo">SEO & Autoridade</option>
                      <option value="site">Desenvolvimento Web</option>
                      <option value="completo">Assessoria Completa</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/40">Cargo / Função</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors"
                      placeholder="Ex: Diretor de Marketing"
                      onChange={(e) => setFormData({...formData, position: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/40">Nome da Empresa</label>
                      <input 
                        type="text" 
                        className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors"
                        placeholder="Minha Empresa S.A."
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-white/40">Site (opcional)</label>
                      <input 
                        type="url" 
                        className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors"
                        placeholder="www.empresa.com.br"
                        onChange={(e) => setFormData({...formData, website: e.target.value})}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/40">Segmento de Atuação</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors"
                      placeholder="Ex: Imobiliário, Saúde, E-commerce..."
                      onChange={(e) => setFormData({...formData, segment: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/40">Investimento Mensal Pretendido</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 p-4 focus:border-accent outline-none transition-colors appearance-none"
                      onChange={(e) => setFormData({...formData, investment: e.target.value})}
                    >
                      <option value="">Selecione o volume</option>
                      <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                      <option value="10k-50k">R$ 10.000 - R$ 50.000</option>
                      <option value="50k-200k">R$ 50.000 - R$ 200.000</option>
                      <option value="200k+">Acima de R$ 200.000</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs uppercase tracking-widest font-bold text-white/40 block">Possui time interno de marketing?</label>
                    <div className="flex space-x-8">
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <input type="radio" name="team" className="accent-accent" onChange={() => setFormData({...formData, hasTeam: 'yes'})} />
                        <span className="text-sm text-white/60 group-hover:text-white transition-colors">Sim</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <input type="radio" name="team" className="accent-accent" onChange={() => setFormData({...formData, hasTeam: 'no'})} />
                        <span className="text-sm text-white/60 group-hover:text-white transition-colors">Não</span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-16 flex justify-between items-center">
              {step > 1 ? (
                <button 
                  onClick={prevStep}
                  className="flex items-center text-xs uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors"
                >
                  <ChevronLeft size={16} className="mr-2" /> Voltar
                </button>
              ) : <div></div>}

              {step < 3 ? (
                <button 
                  onClick={nextStep}
                  className="btn-gold group flex items-center"
                >
                  Continuar <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button 
                  className="btn-gold group flex items-center"
                  onClick={() => alert('Formulário enviado com sucesso (Mock)')}
                >
                  Enviar Formulário <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
