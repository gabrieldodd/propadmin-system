const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(helmet({
  crossOriginEmbedderPolicy: false,
}));
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de teste básica
app.get('/', (req, res) => {
  res.json({ 
    message: '🏢 PropAdmin API está online!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Rota de health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'PropAdmin API está funcionando',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  });
});

// Rotas da API
app.get('/api/dashboard/stats', (req, res) => {
  res.json({
    success: true,
    data: {
      totalProperties: 12,
      totalUnits: 156,
      totalResidents: 142,
      monthlyRevenue: 28500,
      occupancyRate: 91
    }
  });
});

// Mock endpoints para desenvolvimento
app.get('/api/properties', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        name: 'Residencial Vista Alegre',
        type: 'condominio',
        units: 45,
        occupancy: 87,
        monthlyFee: 250.00
      },
      {
        id: 2,
        name: 'Edifício Central Plaza',
        type: 'predio',
        units: 24,
        occupancy: 92,
        monthlyFee: 180.00
      }
    ]
  });
});

app.get('/api/residents', (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        name: 'Maria Silva',
        unit: 'Apto 101',
        status: 'proprietario',
        paymentStatus: 'em_dia'
      },
      {
        id: 2,
        name: 'João Santos',
        unit: 'Casa 15',
        status: 'inquilino',
        paymentStatus: 'atrasado'
      }
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Erro no servidor:', err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Erro interno do servidor',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Algo deu errado!'
  });
});

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Rota não encontrada: ${req.method} ${req.originalUrl}`,
    availableRoutes: [
      'GET /',
      'GET /api/health',
      'GET /api/dashboard/stats',
      'GET /api/properties',
      'GET /api/residents'
    ]
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log('🚀 ====================================');
  console.log(`🏢 PropAdmin API iniciado com sucesso!`);
  console.log(`📡 Servidor rodando na porta ${PORT}`);
  console.log(`🌐 Acesse: http://localhost:${PORT}`);
  console.log(`💊 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📊 Dashboard API: http://localhost:${PORT}/api/dashboard/stats`);
  console.log('🚀 ====================================');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Recebido SIGTERM, fechando servidor...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🛑 Recebido SIGINT, fechando servidor...');
  process.exit(0);
});