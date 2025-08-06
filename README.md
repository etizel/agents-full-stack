🏗️ API de Gerenciamento de Salas (Rooms)
Uma API robusta e escalável construída do zero com as melhores práticas de desenvolvimento moderno para gerenciamento de salas virtuais.
🎯 Objetivos
Esta API foi desenvolvida para fornecer uma base sólida e escalável que demonstra todas as etapas para a construção e integração de servidor com backend e banco de dados, incluindo:

CRUD de Salas: Criar, listar, atualizar e excluir salas virtuais
Autenticação: Proteção de salas com senha
Gerenciamento de Conexões: Controle de usuários em salas
Base para Aplicações: Chat, reuniões, jogos multiplayer e muito mais

🛠️ Stack Tecnológica
Backend

Node.js - Runtime JavaScript
Fastify - Framework web rápido e eficiente
TypeScript - Superset JavaScript com tipagem estática
Zod - Validação de esquemas e tipos
Drizzle ORM - ORM moderno com tipagem completa

Banco de Dados

PostgreSQL - Banco de dados relacional robusto

DevOps & Ferramentas

Docker - Containerização e orquestração
Biome - Linter e formatter para qualidade do código

Segurança

Sistema de autenticação robusto
Validação de dados com Zod
Variáveis de ambiente seguras
Middleware de segurança

📋 Pré-requisitos
Certifique-se de ter instalado:

Node.js (versão 18 ou superior)
Docker e Docker Compose
Git

🚀 Instalação e Configuração
1. Clone o repositório
bashgit clone <url-do-repositorio>
cd rooms-api
2. Instale as dependências
bashnpm install
3. Configure as variáveis de ambiente
bashcp .env.example .env
# Edite o arquivo .env com suas configurações
4. Inicie o banco de dados
bashdocker-compose up -d
5. Execute as migrações
bashnpm run migrate
6. Inicie a API
bash npm run dev

🏗️ Arquitetura
Pontos Fortes da Arquitetura
🔒 Segurança de Tipos Extrema

Zod: Validação runtime de entradas
Drizzle: Tipagem do banco → TypeScript
TypeScript: Tipagem estática em toda aplicação

typescript// Exemplo: Segurança em cascata
const RoomSchema = z.object({ 
  name: z.string().max(50),
  password: z.string().optional()
});
type Room = z.infer<typeof RoomSchema>;
⚡ Performance Otimizada

Fastify: Framework low-overhead
Drizzle: Gera SQL otimizado
PostgreSQL: Queries eficientes

😎 Developer Experience Superior

Hot reload durante desenvolvimento
Migrations versionadas
Autocomplete completo de esquemas
Validação de ambiente na inicialização

typescript// Autocomplete mágico!
db.select().from(rooms).where(eq(rooms.id, roomId))
🐳 Ambiente Confiável

Docker: PostgreSQL pré-configurado
Env validation: Erros explícitos na inicialização
Ambiente idêntico em desenvolvimento e produção

bash# Se faltar DATABASE_URL:
Error: [ZodError]: DATABASE_URL is required
📈 Pronto para Escala

Rotas desacopladas
Banco containerizado
Schemas modulares
Arquitetura limpa

📁 Estrutura do Projeto
src/
├── db/
│   ├── schema/
│   │   └── rooms.ts          # Schema das salas
│   ├── migrate.ts            # Execução de migrações
│   └── seed.ts               # Dados iniciais
├── routes/
│   ├── rooms/
│   │   ├── create-room.ts    # Criar sala
│   │   ├── get-rooms.ts      # Listar salas
│   │   ├── get-room.ts       # Buscar sala específica
│   │   ├── update-room.ts    # Atualizar sala
│   │   └── delete-room.ts    # Excluir sala
│   └── get-root.ts           # Rota inicial
├── lib/
│   └── env.ts                # Validação de variáveis de ambiente
├── app.ts                    # Configuração do Fastify
└── server.ts                 # Inicialização do servidor
Componentes Chave
ArquivoFunçãoResponsabilidaderooms.tsDefine estrutura da salaSchema do banco de dadosget-root.tsRota inicialEndpoint de health checkseed.tsDados iniciaisPopulação inicial do bancodrizzle.config.tsConfiguração ORMConexão e migraçõesenv.tsValidação variáveisValidação de ambiente
🔌 Endpoints da API
Salas (Rooms)
MétodoEndpointDescriçãoGET/Health check da APIGET/roomsLista todas as salasGET/rooms/:idBusca uma sala específicaPOST/roomsCria uma nova salaPUT/rooms/:idAtualiza uma salaDELETE/rooms/:idExclui uma sala
Exemplo de Uso
bash# Criar uma sala
curl -X POST http://localhost:3000/rooms \
  -H "Content-Type: application/json" \
  -d '{"name": "Sala de Reunião", "password": "123456"}'

# Listar salas
curl http://localhost:3000/rooms

# Buscar sala específica
curl http://localhost:3000/rooms/1
🧪 Scripts Disponíveis
bash# Desenvolvimento
npm run dev          # Inicia em modo desenvolvimento
npm run build        # Build para produção
npm run start        # Inicia em produção

# Banco de dados
npm run migrate      # Executa migrações
npm run seed         # Popula dados iniciais
npm run studio       # Abre Drizzle Studio

# Qualidade de código
npm run lint         # Executa linter
npm run format       # Formata código
npm run check        # Verifica tipos TypeScript
📊 Vantagens Comparativas
FeatureBenefícioImpactoValidação ZodPrevine injection attacks+SegurançaTipagem DrizzleElimina erros de SQL+ConfiabilidadeMigrationsEvolução controlada do BD+ManutenibilidadeDocker PostgreSQLAmbiente idêntico prod/dev+ConsistênciaTypeScriptDetecção precoce de erros+Qualidade
🎯 Casos de Uso Ideais

Plataformas de reuniões online
Salas de jogos em tempo real
Sistemas de suporte ao cliente
Educação virtual (salas de aula)
Colaboração em equipe
Eventos virtuais

🛣️ Próximos Passos Recomendados

Autenticação JWT: Implementar sistema de autenticação completo
WebSockets: Adicionar comunicação em tempo real
Sistema de Permissões: Controle de acesso granular
Testes: Implementar testes unitários e de integração com Vitest
Rate Limiting: Proteção contra spam e ataques
Logs Estruturados: Sistema de logging robusto
Monitoring: Métricas e observabilidade
Cache: Redis para performance

🤝 Contribuindo
Contribuições são sempre bem-vindas! Para contribuir:

Faça um fork do projeto
Crie uma branch para sua feature (git checkout -b feature/nova-feature)
Commit suas mudanças (git commit -m 'Adiciona nova feature')
Push para a branch (git push origin feature/nova-feature)
Abra um Pull Request

📝 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
🔧 Solução de Problemas
Problemas Comuns
Erro de conexão com PostgreSQL
bash# Verifique se o container está rodando
docker ps

# Reinicie o container se necessário
docker-compose restart postgres
Erro de migração
bash# Limpe o banco e execute novamente
npm run migrate:reset
npm run migrate
Porta já em uso
bash# Altere a porta no arquivo .env
PORT=3001

⭐ Se este projeto te ajudou, deixe uma estrela! ⭐
Construído com foco em bases sólidas e escalabilidade 🚀
