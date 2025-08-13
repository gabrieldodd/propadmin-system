# 🏢 PropAdmin - Sistema de Gestão de Imóveis

Sistema completo e moderno para administração de condomínios, prédios, casas e apartamentos.

## 🌟 Preview

![PropAdmin Dashboard](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=PropAdmin+Dashboard)

## ✨ Características

- 🎨 **Design Moderno** - Interface limpa e profissional
- 📱 **Totalmente Responsivo** - Funciona em todos os dispositivos
- ⚡ **Performance Otimizada** - Construído com React + Vite
- 🎯 **UX Intuitiva** - Navegação simples e eficiente
- 🔐 **Sistema de Autenticação** - Controle de acesso seguro
- 📊 **Dashboard Analytics** - Métricas em tempo real
- 🏗️ **Arquitetura Modular** - Fácil de expandir e manter

## 🚀 Tecnologias

### Frontend
- **React 18** - Biblioteca UI moderna
- **Vite** - Build tool rápido
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **React Router** - Roteamento SPA

### Backend  
- **Node.js** - Runtime JavaScript
- **Express** - Framework web minimalista
- **PostgreSQL** - Banco de dados relacional
- **Sequelize** - ORM para Node.js

## 📦 Instalação Rápida

### Pré-requisitos
- Node.js 16+ instalado
- Git instalado
- Terminal/CMD

### 1. Clone o Repositório
```bash
git clone https://github.com/SEU_USUARIO/propadmin-system.git
cd propadmin-system
```

### 2. Configure o Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3. Configure o Backend
```bash
# Em outro terminal
cd backend
npm install
npm run dev
```

### 4. Acesse a Aplicação
- 🌐 **Frontend:** http://localhost:5173
- 🔧 **Backend:** http://localhost:5000

## 🛠️ Instalação Detalhada

### Frontend Setup

1. **Criar projeto Vite + React:**
```bash
cd frontend
npm create vite@latest . -- --template react
npm install
```

2. **Instalar dependências:**
```bash
npm install react-router-dom axios lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Configurar Tailwind CSS:**
```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
```

4. **Adicionar CSS global:**
```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Backend Setup

1. **Inicializar projeto Node.js:**
```bash
cd backend
npm init -y
```

2. **Instalar dependências:**
```bash
npm install express cors helmet morgan dotenv
npm install -D nodemon
```

3. **Adicionar scripts no package.json:**
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

## 📁 Estrutura do Projeto

```
propadmin-system/
├── 📁 frontend/              # React + Vite + Tailwind
│   ├── 📁 src/
│   │   ├── 📁 components/    # Componentes reutilizáveis
│   │   ├── 📁 modules/       # Módulos principais
│   │   ├── 📁 services/      # APIs e serviços
│   │   ├── 📁 utils/         # Utilitários
│   │   ├── App.jsx           # Componente principal
│   │   ├── main.jsx          # Entry point
│   │   └── index.css         # Estilos globais
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── 📁 backend/               # Node.js + Express
│   ├── 📁 src/
│   │   ├── 📁 models/        # Models do banco
│   │   ├── 📁 controllers/   # Controllers
│   │   ├── 📁 routes/        # Rotas da API
│   │   └── 📁 services/      # Lógica de negócio
│   ├── server.js             # Servidor principal
│   └── package.json
├── README.md
└── .gitignore
```

## 🎯 Funcionalidades

### ✅ Implementado
- [x] Dashboard com métricas
- [x] Layout responsivo
- [x] Navegação entre módulos
- [x] Design system moderno
- [x] API backend funcionando

### 🔄 Em Desenvolvimento
- [ ] Sistema de autenticação
- [ ] CRUD de imóveis
- [ ] Gestão de moradores
- [ ] Módulo financeiro
- [ ] Sistema de comunicação

### 📋 Roadmap
- [ ] App mobile (React Native)
- [ ] Notificações push
- [ ] Relatórios avançados
- [ ] Integração com APIs externas
- [ ] Sistema de backup

## 🔧 Comandos Úteis

### Frontend
```bash
npm run dev      # Modo desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build
npm run lint     # Verificar código
```

### Backend
```bash
npm run dev      # Modo desenvolvimento
npm start        # Produção
npm run test     # Executar testes
```

## 🌐 API Endpoints

### Base URL: `http://localhost:5000/api`

#### Health Check
- **GET** `/health` - Status da API

#### Dashboard
- **GET** `/dashboard/stats` - Estatísticas gerais

#### Imóveis
- **GET** `/properties` - Listar imóveis
- **POST** `/properties` - Criar imóvel
- **PUT** `/properties/:id` - Atualizar imóvel
- **DELETE** `/properties/:id` - Deletar imóvel

## 📱 Screenshots

### Dashboard
![Dashboard](https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Dashboard+Moderno)

### Gestão de Imóveis
![Imóveis](https://via.placeholder.com/600x400/10B981/FFFFFF?text=Gestão+de+Imóveis)

### Mobile Responsivo
![Mobile](https://via.placeholder.com/300x600/8B5CF6/FFFFFF?text=Mobile+Responsive)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 Suporte

### Problemas Comuns

**❌ Tailwind não está funcionando:**
```bash
# Reinstalar Tailwind
npm uninstall tailwindcss
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**❌ Erro de CORS:**
```bash
# Verificar se backend está rodando na porta 5000
# Verificar configuração CORS no server.js
```

**❌ Porta ocupada:**
```bash
# Mudar porta no vite.config.js ou matar processo
npx kill-port 5173
```

### Onde Buscar Ajuda
- 📚 [Documentação React](https://react.dev)
- 🎨 [Documentação Tailwind](https://tailwindcss.com)
- ⚡ [Documentação Vite](https://vitejs.dev)
- 🔧 [Documentação Express](https://expressjs.com)

## 👥 Equipe

- **Desenvolvedor Principal** - Seu Nome
- **UI/UX Designer** - Designer Name
- **Backend Engineer** - Backend Name

## 🏆 Agradecimentos

- [React Team](https://react.dev) pelo framework incrível
- [Tailwind Labs](https://tailwindcss.com) pelo CSS framework
- [Lucide](https://lucide.dev) pelos ícones lindos
- [Vite Team](https://vitejs.dev) pela ferramenta de build rápida

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>Feito com ❤️ para a comunidade</p>
</div>