import React from 'react';
import { SERVICES } from '../constants';
import { Reveal } from './ui/Reveal';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Meus Serviços</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Soluções completas para sua presença digital, do conceito à implementação.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div className="h-full bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group">
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <service.icon className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};