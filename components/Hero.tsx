import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { HERO_DATA } from '../constants';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <Reveal>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-xs font-medium text-primary-600 dark:text-primary-400 mb-2">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Disponível para novos projetos
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Olá, eu sou <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
                {HERO_DATA.name}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300">
              {HERO_DATA.role}
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
              {HERO_DATA.description}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4 mt-4">
              <a 
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40"
              >
                Ver Projetos
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 font-medium transition-all bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Contato
              </a>
            </div>
          </Reveal>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Reveal delay={0.2}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 bg-primary-600 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-purple-600 rounded-3xl -rotate-6 opacity-20 animate-pulse delay-75"></div>
              <img 
                src={HERO_DATA.avatar} 
                alt={HERO_DATA.name}
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};