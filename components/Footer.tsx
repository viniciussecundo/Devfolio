import React from 'react';
import { Terminal, Heart, Github, Linkedin, Instagram } from 'lucide-react';
import { SOCIAL_LINKS, HERO_DATA } from '../constants';

export const Footer: React.FC = () => {
  const socialIcons = [
    { Icon: Github, href: SOCIAL_LINKS.github, name: 'GitHub' },
    { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, name: 'LinkedIn' },
    { Icon: Instagram, href: SOCIAL_LINKS.instagram, name: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Terminal className="h-6 w-6 text-primary-500 mr-2" />
            <span className="font-bold text-lg text-white">
              Dev<span className="text-primary-500">Folio</span>
            </span>
          </div>

          <div className="flex gap-6">
             {socialIcons.map(({ Icon, href, name }) => (
              <a 
                key={name}
                href={href} 
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label={`Visite meu perfil no ${name}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          <div className="text-center text-sm text-slate-400 space-y-2">
            <p className="flex items-center justify-center">
              Desenvolvido com <Heart size={14} className="text-red-500 mx-1.5 fill-current" /> por {HERO_DATA.name}
            </p>
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
