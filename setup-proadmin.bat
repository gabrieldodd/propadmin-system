@echo off
echo.
echo 🏢 PropAdmin - Setup para Windows
echo ================================
echo.

REM Criar estrutura de pastas do projeto
echo 📁 Criando estrutura de pastas...

REM Diretório raiz
mkdir propadmin-system 2>nul
cd propadmin-system

REM Frontend
mkdir frontend\src\components\ui 2>nul
mkdir frontend\src\components\layout 2>nul
mkdir frontend\src\components\common 2>nul
mkdir frontend\src\modules\dashboard\components 2>nul
mkdir frontend\src\modules\dashboard\hooks 2>nul
mkdir frontend\src\modules\dashboard\services 2>nul
mkdir frontend\src\modules\properties\components 2>nul
mkdir frontend\src\modules\properties\hooks 2>nul
mkdir frontend\src\modules\properties\services 2>nul
mkdir frontend\src\modules\properties\types 2>nul
mkdir frontend\src\modules\residents\components 2>nul
mkdir frontend\src\modules\residents\hooks 2>nul
mkdir frontend\src\modules\residents\services 2>nul
mkdir frontend\src\modules\financial\components 2>nul
mkdir frontend\src\modules\financial\hooks 2>nul
mkdir frontend\src\modules\financial\services 2>nul
mkdir frontend\src\modules\communication\components 2>nul
mkdir frontend\src\modules\communication\hooks 2>nul
mkdir frontend\src\modules\communication\services 2>nul
mkdir frontend\src\modules\auth\components 2>nul
mkdir frontend\src\modules\auth\hooks 2>nul
mkdir frontend\src\modules\auth\services 2>nul
mkdir frontend\src\modules\settings 2>nul
mkdir frontend\src\context 2>nul
mkdir frontend\src\hooks 2>nul
mkdir frontend\src\services 2>nul
mkdir frontend\src\utils 2>nul
mkdir frontend\src\styles 2>nul
mkdir frontend\src\assets\images 2>nul
mkdir frontend\src\assets\icons 2>nul
mkdir frontend\src\assets\fonts 2>nul
mkdir frontend\src\types 2>nul
mkdir frontend\src\config 2>nul

REM Backend
mkdir backend\src\config 2>nul
mkdir backend\src\models 2>nul
mkdir backend\src\controllers 2>nul
mkdir backend\src\services 2>nul
mkdir backend\src\routes 2>nul
mkdir backend\src\middleware 2>nul
mkdir backend\src\validators 2>nul
mkdir backend\src\utils 2>nul
mkdir backend\migrations 2>nul
mkdir backend\seeds 2>nul
mkdir backend\tests 2>nul

echo ✅ Estrutura de pastas criada!
echo.

REM Criar package.json do frontend
echo 📦 Criando package.json do frontend...
(
echo {
echo   "name": "propadmin-frontend",
echo   "version": "1.0.0",
echo   "type": "module",
echo   "scripts": {
echo     "dev": "vite",
echo     "build": "vite build",
echo     "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
echo     "preview": "vite preview"
echo   },
echo   "dependencies": {
echo     "react": "^18.2.0",
echo     "react-dom": "^18.2.0",
echo     "react-router-dom": "^6.15.0",
echo     "axios": "^1.5.0",
echo     "lucide-react": "^0.263.1",
echo     "recharts": "^2.8.0",
echo     "date-fns": "^2.30.0"
echo   },
echo   "devDependencies": {
echo     "@types/react": "^18.2.15",
echo     "@types/react-dom": "^18.2.7",
echo     "@vitejs/plugin-react": "^4.0.3",
echo     "autoprefixer": "^10.4.15",
echo     "eslint": "^8.45.0",
echo     "eslint-plugin-react": "^7.32.2",
echo     "eslint-plugin-react-hooks": "^4.6.0",
echo     "eslint-plugin-react-refresh": "^0.4.3",
echo     "postcss": "^8.4.28",
echo     "tailwindcss": "^3.3.3",
echo     "vite": "^4.4.5"
echo   }
echo }
) > frontend\package.json

REM Criar package.json do backend
echo 📦 Criando package.json do backend...
(
echo {
echo   "name": "propadmin-backend",
echo   "version": "1.0.0",
echo   "main": "server.js",
echo   "scripts": {
echo     "start": "node server.js",
echo     "dev": "nodemon server.js",
echo     "migrate": "node scripts/migrate.js",
echo     "seed": "node scripts/seed.js",
echo     "test": "jest"
echo   },
echo   "dependencies": {
echo     "express": "^4.18.2",
echo     "sequelize": "^6.32.1",
echo     "pg": "^8.11.3",
echo     "bcrypt": "^5.1.0",
echo     "jsonwebtoken": "^9.0.2",
echo     "cors": "^2.8.5",
echo     "helmet": "^7.0.0",
echo     "express-validator": "^7.0.1",
echo     "express-rate-limit": "^6.10.0",
echo     "morgan": "^1.10.0",
echo     "dotenv": "^16.3.1",
echo     "uuid": "^9.0.0"
echo   },
echo   "devDependencies": {
echo     "nodemon": "^3.0.1",
echo     "jest": "^29.6.2",
echo     "supertest": "^6.3.3",
echo     "@types/jest": "^29.5.4"
echo   }
echo }
) > backend\package.json

REM Criar vite.config.js
echo 📄 Criando vite.config.js...
(
echo import { defineConfig } from 'vite'
echo import react from '@vitejs/plugin-react'
echo.
echo export default defineConfig({
echo   plugins: [react],
echo   server: {
echo     port: 3000,
echo     proxy: {
echo       '/api': {
echo         target: 'http://localhost:5000',
echo         changeOrigin: true
echo       }
echo     }
echo   }
echo }^)
) > frontend\vite.config.js

REM Criar tailwind.config.js
echo 📄 Criando tailwind.config.js...
(
echo /** @type {import('tailwindcss'^}.Config} */
echo export default {
echo   content: [
echo     "./index.html",
echo     "./src/**/*.{js,ts,jsx,tsx}",
echo   ],
echo   theme: {
echo     extend: {
echo       colors: {
echo         primary: {
echo           50: '#eff6ff',
echo           500: '#3b82f6',
echo           600: '#2563eb',
echo           700: '#1d4ed8',
echo         }
echo       }
echo     },
echo   },
echo   plugins: [],
echo }
) > frontend\tailwind.config.js

REM Criar index.html
echo 📄 Criando index.html...
(
echo ^<!doctype html^>
echo ^<html lang="pt-BR"^>
echo   ^<head^>
echo     ^<meta charset="UTF-8" /^>
echo     ^<link rel="icon" type="image/svg+xml" href="/vite.svg" /^>
echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0" /^>
echo     ^<title^>PropAdmin - Sistema de Gestão de Imóveis^</title^>
echo   ^</head^>
echo   ^<body^>
echo     ^<div id="root"^>^</div^>
echo     ^<script type="module" src="/src/main.jsx"^>^</script^>
echo   ^</body^>
echo ^</html^>
) > frontend\index.html

REM Criar main.jsx
echo 📄 Criando main.jsx...
(
echo import React from 'react'
echo import ReactDOM from 'react-dom/client'
echo import App from './App.jsx'
echo import './styles/globals.css'
echo.
echo ReactDOM.createRoot(document.getElementById('root'^)^).render(
echo   ^<React.StrictMode^>
echo     ^<App /^>
echo   ^</React.StrictMode^>,
echo ^)
) > frontend\src\main.jsx

REM Criar globals.css
echo 📄 Criando globals.css...
(
echo @tailwind base;
echo @tailwind components;
echo @tailwind utilities;
echo.
echo @layer base {
echo   html {
echo     font-family: 'Inter', system-ui, sans-serif;
echo   }
echo   
echo   body {
echo     @apply bg-gray-50 text-gray-900;
echo   }
echo }
echo.
echo @layer components {
echo   .btn-primary {
echo     @apply bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors;
echo   }
echo   
echo   .btn-secondary {
echo     @apply bg-gray-100 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors;
echo   }
echo   
echo   .card {
echo     @apply bg-white rounded-lg shadow-sm border p-6;
echo   }
echo   
echo   .input {
echo     @apply w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
echo   }
echo }
) > frontend\src\styles\globals.css

REM Criar App.jsx
echo 📄 Criando App.jsx...
(
echo import React from 'react';
echo import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
echo import Layout from './components/layout/Layout';
echo import Dashboard from './modules/dashboard/Dashboard';
echo.
echo function App(^) {
echo   return (
echo     ^<Router^>
echo       ^<Layout^>
echo         ^<Routes^>
echo           ^<Route path="/" element={^<Dashboard /^>} /^>
echo           ^<Route path="/dashboard" element={^<Dashboard /^>} /^>
echo         ^</Routes^>
echo       ^</Layout^>
echo     ^</Router^>
echo   ^);
echo }
echo.
echo export default App;
) > frontend\src\App.jsx

REM Criar Dashboard.jsx
echo 📄 Criando Dashboard.jsx...
(
echo import React from 'react';
echo import { Building2, Home, Users, DollarSign } from 'lucide-react';
echo.
echo const Dashboard = (^) =^> {
echo   return (
echo     ^<div className="space-y-6"^>
echo       ^<h1 className="text-2xl font-bold text-gray-900"^>Dashboard^</h1^>
echo       
echo       ^<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"^>
echo         ^<div className="card"^>
echo           ^<div className="flex items-center justify-between"^>
echo             ^<div^>
echo               ^<p className="text-sm text-gray-600"^>Total de Imóveis^</p^>
echo               ^<p className="text-2xl font-bold text-blue-600"^>12^</p^>
echo             ^</div^>
echo             ^<Building2 className="h-8 w-8 text-blue-500" /^>
echo           ^</div^>
echo         ^</div^>
echo         
echo         ^<div className="card"^>
echo           ^<div className="flex items-center justify-between"^>
echo             ^<div^>
echo               ^<p className="text-sm text-gray-600"^>Total de Unidades^</p^>
echo               ^<p className="text-2xl font-bold text-green-600"^>156^</p^>
echo             ^</div^>
echo             ^<Home className="h-8 w-8 text-green-500" /^>
echo           ^</div^>
echo         ^</div^>
echo         
echo         ^<div className="card"^>
echo           ^<div className="flex items-center justify-between"^>
echo             ^<div^>
echo               ^<p className="text-sm text-gray-600"^>Moradores^</p^>
echo               ^<p className="text-2xl font-bold text-purple-600"^>142^</p^>
echo             ^</div^>
echo             ^<Users className="h-8 w-8 text-purple-500" /^>
echo           ^</div^>
echo         ^</div^>
echo         
echo         ^<div className="card"^>
echo           ^<div className="flex items-center justify-between"^>
echo             ^<div^>
echo               ^<p className="text-sm text-gray-600"^>Receita Mensal^</p^>
echo               ^<p className="text-2xl font-bold text-orange-600"^>R$ 28.5k^</p^>
echo             ^</div^>
echo             ^<DollarSign className="h-8 w-8 text-orange-500" /^>
echo           ^</div^>
echo         ^</div^>
echo       ^</div^>
echo       
echo       ^<div className="card"^>
echo         ^<h3 className="text-lg font-semibold mb-4"^>Sistema funcionando!^</h3^>
echo         ^<p className="text-gray-600"^>
echo           Parabéns! O PropAdmin foi configurado com sucesso. 
echo           Agora você pode começar a desenvolver as funcionalidades.
echo         ^</p^>
echo       ^</div^>
echo     ^</div^>
echo   ^);
echo };
echo.
echo export default Dashboard;
) > frontend\src\modules\dashboard\Dashboard.jsx

REM Criar Layout.jsx
echo 📄 Criando Layout.jsx...
(
echo import React from 'react';
echo.
echo const Layout = ({ children }^) =^> {
echo   return (
echo     ^<div className="min-h-screen bg-gray-50"^>
echo       ^<header className="bg-white shadow-sm border-b"^>
echo         ^<div className="px-4 py-3"^>
echo           ^<h1 className="text-xl font-bold text-gray-900"^>PropAdmin^</h1^>
echo         ^</div^>
echo       ^</header^>
echo       
echo       ^<main className="p-4 lg:p-6"^>
echo         {children}
echo       ^</main^>
echo     ^</div^>
echo   ^);
echo };
echo.
echo export default Layout;
) > frontend\src\components\layout\Layout.jsx

REM Criar server.js do backend
echo 📄 Criando server.js...
(
echo const express = require('express'^);
echo const cors = require('cors'^);
echo const helmet = require('helmet'^);
echo const morgan = require('morgan'^);
echo require('dotenv'^).config(^);
echo.
echo const app = express(^);
echo const PORT = process.env.PORT ^|^| 5000;
echo.
echo // Middlewares
echo app.use(helmet(^)^);
echo app.use(cors(^)^);
echo app.use(morgan('combined'^)^);
echo app.use(express.json(^)^);
echo app.use(express.urlencoded({ extended: true }^)^);
echo.
echo // Routes
echo app.get('/api/health', (req, res^) =^> {
echo   res.json({ 
echo     status: 'OK', 
echo     message: 'PropAdmin API está funcionando',
echo     timestamp: new Date(^).toISOString(^)
echo   }^);
echo }^);
echo.
echo // Error handling
echo app.use((err, req, res, next^) =^> {
echo   console.error(err.stack^);
echo   res.status(500^).json({ 
echo     success: false, 
echo     message: 'Algo deu errado!' 
echo   }^);
echo }^);
echo.
echo app.listen(PORT, (^) =^> {
echo   console.log(`🚀 Servidor rodando na porta ${PORT}`^);
echo   console.log(`📝 API disponível em http://localhost:${PORT}/api`^);
echo }^);
) > backend\server.js

REM Criar .env.example
echo 📄 Criando .env.example...
(
echo # Server Configuration
echo PORT=5000
echo NODE_ENV=development
echo.
echo # Database Configuration
echo DB_HOST=localhost
echo DB_PORT=5432
echo DB_NAME=propadmin
echo DB_USER=postgres
echo DB_PASSWORD=postgres
echo.
echo # JWT Configuration
echo JWT_SECRET=seu-jwt-secret-super-seguro
echo JWT_EXPIRES_IN=7d
) > backend\.env.example

REM Criar arquivo .env para frontend
echo 📄 Criando .env.example do frontend...
(
echo # API Configuration
echo VITE_API_BASE_URL=http://localhost:5000/api
echo.
echo # Environment
echo VITE_APP_ENV=development
) > frontend\.env.example

REM Criar README.md
echo 📄 Criando README.md...
(
echo # 🏢 PropAdmin - Sistema de Gestão de Imóveis
echo.
echo Sistema completo para administração de condomínios, prédios, casas e apartamentos.
echo.
echo ## 🚀 Tecnologias
echo.
echo ### Frontend
echo - React 18 + Vite
echo - Tailwind CSS
echo - React Router
echo - Axios
echo - Lucide Icons
echo.
echo ### Backend  
echo - Node.js + Express
echo - PostgreSQL + Sequelize
echo - JWT Authentication
echo - Bcrypt
echo.
echo ## 📦 Instalação
echo.
echo ### 1. Frontend
echo ```bash
echo cd frontend
echo npm install
echo npm run dev
echo ```
echo.
echo ### 2. Backend
echo ```bash
echo cd backend
echo npm install
echo npm run dev
echo ```
echo.
echo ## 🌐 Acessos
echo.
echo - Frontend: http://localhost:3000
echo - Backend: http://localhost:5000
echo - API Health: http://localhost:5000/api/health
echo.
echo ## 🎯 Funcionalidades Planejadas
echo.
echo - ✅ Dashboard com métricas
echo - 🔄 Gestão de imóveis ^(hierárquica^)
echo - 🔄 Controle de moradores
echo - 🔄 Sistema financeiro
echo - 🔄 Comunicação interna
echo - 🔄 Autenticação multi-perfil
echo - ✅ Interface responsiva
echo.
echo ## 📝 Próximos Passos
echo.
echo 1. Configurar banco PostgreSQL
echo 2. Implementar autenticação real
echo 3. Desenvolver CRUD completo
echo 4. Adicionar testes
echo 5. Deploy em produção
) > README.md

REM Criar script de inicialização para Windows
echo 📄 Criando script de desenvolvimento...
(
echo @echo off
echo echo 🏢 Iniciando PropAdmin em modo desenvolvimento...
echo echo.
echo.
echo echo 🔧 Para iniciar o backend:
echo echo cd backend
echo echo npm install
echo echo npm run dev
echo echo.
echo echo 🎨 Para iniciar o frontend ^(em outro terminal^):
echo echo cd frontend  
echo echo npm install
echo echo npm run dev
echo echo.
echo echo ✅ Aplicação estará disponível em:
echo echo 🌐 Frontend: http://localhost:3000
echo echo 🔧 Backend: http://localhost:5000
echo pause
) > start-dev.bat

REM Criar .gitignore
echo 📄 Criando .gitignore...
(
echo # Dependencies
echo node_modules/
echo npm-debug.log*
echo yarn-debug.log*
echo yarn-error.log*
echo.
echo # Production builds
echo dist/
echo build/
echo.
echo # Environment variables
echo .env
echo .env.local
echo .env.development.local
echo .env.test.local
echo .env.production.local
echo.
echo # Database
echo *.db
echo *.sqlite
echo.
echo # Logs
echo logs
echo *.log
echo.
echo # OS generated files
echo .DS_Store
echo Thumbs.db
echo.
echo # IDE
echo .vscode/
echo .idea/
echo *.swp
echo *.swo
echo.
echo # Uploads
echo uploads/
echo temp/
) > .gitignore

echo.
echo 🎉 Setup do PropAdmin concluído com sucesso!
echo.
echo 📋 Próximos passos:
echo 1. cd frontend
echo 2. npm install
echo 3. npm run dev
echo.
echo Em outro terminal:
echo 4. cd backend  
echo 5. npm install
echo 6. npm run dev
echo.
echo 🌐 Aplicação estará disponível em:
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:5000
echo.
echo 📚 Documentação completa no README.md
echo.
pause