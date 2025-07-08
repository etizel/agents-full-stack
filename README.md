🏗️ Arquétipo Constructor - Uma aplicação full-stack robusta e escalável construída do zero com as melhores práticas de desenvolvimento moderno.

📋 Sobre o Projeto
O Let Me Ask é uma aplicação full-stack completa que demonstra a implementação de uma arquitetura moderna e escalável. Este projeto implementa funcionalidades avançadas com foco na qualidade do código, performance e experiência do usuário.

🎯 Objetivos

Construir uma base sólida e escalável para aplicações full-stack
Implementar as melhores práticas de desenvolvimento moderno
Demonstrar integração eficiente entre front-end e back-end
Garantir qualidade e segurança do código
Preparar a aplicação para crescimento e novas funcionalidades

🛠️ Stack Tecnológica
🔧 Back-end

Node.js - Runtime JavaScript
Fastify - Framework web rápido e eficiente
TypeScript - Superset JavaScript com tipagem estática
Zod - Validação de esquemas e tipos
PostgreSQL - Banco de dados relacional
Docker - Containerização e orquestração
Biome - Linter e formatter para qualidade do código

🎨 Front-end

React - Biblioteca para interfaces de usuário
Vite - Build tool e dev server ultrarrápido
TypeScript - Tipagem estática
Tailwind CSS - Framework CSS utilitário
shadcn/ui - Componentes UI reutilizáveis
React Router DOM - Roteamento para React
React Query - Gerenciamento de estado assíncrono

🔐 Autenticação & Segurança

Sistema de autenticação robusto
Validação de dados com Zod
Variáveis de ambiente seguras
Middleware de segurança

🎯 Core Features

Interface responsiva e moderna
Navegação fluida com React Router
Gerenciamento de estado eficiente
Consumo otimizado de API

📊 Performance & Qualidade

Build otimizado com Vite
Lazy loading de componentes
Cache inteligente com React Query
Código limpo com Biome

🚀 Primeiros Passos
📋 Pré-requisitos
Certifique-se de ter instalado:

Node.js (versão 18 ou superior)
Docker e Docker Compose
Git
npm ou yarn

🔧 Instalação
bash# Clone o repositório
git clone https://github.com/seu-usuario/let-me-ask.git

# Navegue até o diretório

cd let-me-ask

# Instale as dependências do backend

cd backend
npm install

# Instale as dependências do frontend

cd ../frontend
npm install
🐳 Configuração do Banco de Dados
bash# No diretório backend
docker-compose up -d

# Execute as migrações

npm run migrate
🏃‍♂️ Executando a Aplicação
bash# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend

cd frontend
npm run dev
A aplicação estará disponível em:

Frontend: http://localhost:5173
Backend: http://localhost:3333

🔧 Scripts Disponíveis
Backend
bashnpm run dev # Inicia o servidor de desenvolvimento
npm run build # Build para produção
npm run start # Inicia o servidor em produção
npm run lint # Executa o linter
npm run format # Formata o código
Frontend
bashnpm run dev # Inicia o servidor de desenvolvimento
npm run build # Build para produção
npm run preview # Preview do build
npm run lint # Executa o linter
🌟 Próximos Passos
Este projeto está em constante evolução. Funcionalidades planejadas:

Sistema de rooms em tempo real
Notificações push
Sistema de moderação
Analytics e métricas
Testes automatizados
Deploy automatizado
Documentação da API

🤝 Contribuindo
Contribuições são sempre bem-vindas! Veja como você pode ajudar:

Fork o projeto
Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
Commit suas mudanças (git commit -m 'Add some AmazingFeature')
Push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request

📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

⭐ Se este projeto te ajudou, deixe uma estrela! ⭐
Construído com arquétipo Constructor - Focado em bases sólidas e escalabilidade.
