# DevFolio - Portfólio de Desenvolvedor

Este é um template de site de portfólio moderno, minimalista e responsivo para desenvolvedores, construído com React e Tailwind CSS.

## ✨ Funcionalidades

- **Design Moderno e Minimalista**: Foco no conteúdo, com uma paleta de cores elegante.
- **Responsivo (Mobile-First)**: Ótima aparência em todos os dispositivos, de celulares a desktops.
- **Dark/Light Mode**: Tema claro e escuro com persistência da preferência do usuário.
- **Animações Sutis**: Efeitos de "reveal" ao rolar a página para uma experiência mais dinâmica.
- **Componentizado**: Estrutura de código limpa e reutilizável com React.
- **SEO Básico**: Meta tags configuradas para melhor indexação.
- **Formulário de Contato Funcional**: Integrado com Formspree para receber mensagens por email.

## 🚀 Como Rodar o Projeto

Este projeto foi desenvolvido em um ambiente que não requer instalação local de dependências. O código é compilado e executado diretamente no navegador.

1.  **Abra os arquivos**: Carregue os arquivos do projeto no editor.
2.  **Visualize o resultado**: O site será renderizado automaticamente na janela de visualização.

## 🔧 Como Customizar

Todo o conteúdo do site é gerenciado através do arquivo `constants.ts`. Para personalizar o portfólio com suas informações, edite este arquivo:

1.  **`HERO_DATA`**: Altere seu nome, cargo, descrição e link do avatar.
2.  **`SOCIAL_LINKS`**: Adicione os links para suas redes sociais (GitHub, LinkedIn, etc.).
3.  **`CONTACT_DATA`**:
    -   Atualize seu email, localização e número de WhatsApp.
    -   **Importante**: Para o formulário de contato funcionar, crie uma conta gratuita no [Formspree](https://formspree.io/), crie um novo formulário e cole o endpoint (URL) no campo `formspreeEndpoint`.
4.  **`SKILLS`**: Modifique a lista com suas habilidades. Você pode encontrar mais ícones na biblioteca [Lucide React](https://lucide.dev/icons/).
5.  **`PROJECTS`**: Adicione seus projetos, incluindo título, descrição, imagem, tecnologias (tags), link da versão ao vivo (`liveUrl`) e do repositório (`repoUrl`).
6.  **`SERVICES`**: Descreva os serviços que você oferece.

## 🛠️ Stack Utilizada

-   **React**: Biblioteca para construção de interfaces de usuário.
-   **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
-   **Tailwind CSS**: Framework CSS utility-first para estilização rápida.
-   **Lucide React**: Biblioteca de ícones SVG.
-   **Formspree**: Serviço de backend para formulários HTML.
