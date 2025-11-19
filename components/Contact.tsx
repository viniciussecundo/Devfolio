import React, { useState } from 'react';
import { Send, Mail, MapPin, MessageCircle, Instagram, Linkedin, Github, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { SOCIAL_LINKS, CONTACT_DATA } from '../constants';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(CONTACT_DATA.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const socialIcons = [
    { Icon: Github, href: SOCIAL_LINKS.github },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram },
  ];
  
  const whatsappUrl = `https://wa.me/${CONTACT_DATA.whatsappNumber}`;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Estou sempre aberto a novas oportunidades e projetos desafiadores. 
                Mande uma mensagem e vamos transformar sua ideia em realidade.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                    <a href={`mailto:${CONTACT_DATA.email}`} className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{CONTACT_DATA.email}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Localização</h3>
                    <p className="text-slate-600 dark:text-slate-400">{CONTACT_DATA.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Me siga nas redes</h4>
                <div className="flex gap-4">
                  {socialIcons.map(({ Icon, href }, i) => (
                    <a 
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 rounded-full bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white transition-all duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-lg">
            <Reveal delay={0.2}>
              <p className="text-xs text-center text-slate-500 mb-4">
                Para o formulário funcionar, crie uma conta no <a href="https://formspree.io/" target="_blank" rel="noreferrer" className="text-primary-600 hover:underline">Formspree</a> e substitua o endpoint em <code>constants.ts</code>.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nome</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Fale sobre seu projeto..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={status === 'submitting' || status === 'success'}
                    className={`flex-1 inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 ${
                      status === 'success' ? 'bg-green-500 hover:bg-green-600' :
                      status === 'error' ? 'bg-red-500 hover:bg-red-600' :
                      'bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40'
                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                     {status === 'submitting' && <><Loader2 size={18} className="animate-spin mr-2" />Enviando...</>}
                    {status === 'success' && <><CheckCircle size={18} className="mr-2" />Enviado!</>}
                    {status === 'error' && <><XCircle size={18} className="mr-2" />Falhou. Tente novamente.</>}
                    {status === 'idle' && <>Enviar Mensagem <Send size={18} className="ml-2" /></>}
                  </button>

                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-green-500 text-green-600 dark:text-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 font-bold transition-colors"
                  >
                    <MessageCircle size={20} className="mr-2" /> WhatsApp
                  </a>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
