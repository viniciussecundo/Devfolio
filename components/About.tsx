import React from 'react';
import { SKILLS } from '../constants';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Sobre Mim</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Sou um desenvolvedor apaixonado por criar soluções digitais que resolvem problemas reais. 
              Com foco em performance e experiência do usuário, busco sempre aprender novas tecnologias.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['frontend', 'backend', 'tools'].map((category, catIndex) => (
            <div key={category} className="space-y-6">
               <Reveal delay={catIndex * 0.2}>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full">
                  <h3 className="text-xl font-semibold capitalize mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-2">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {SKILLS.filter(s => s.category === category).map((skill) => (
                      <div key={skill.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <skill.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};