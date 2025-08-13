import React, { useState } from 'react';
import { 
  Building2, 
  Home, 
  Users, 
  DollarSign, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  Menu, 
  X, 
  Bell, 
  Search,
  TrendingUp,
  Plus,
  Calendar,
  Award,
  Activity
} from 'lucide-react';

// ===== COMPONENTES =====
const StatCard = ({ title, value, icon: Icon, color, trend, subtitle }) => {
  const colors = {
    blue: 'text-blue-600 bg-blue-50',
    green: 'text-green-600 bg-green-50',
    purple: 'text-purple-600 bg-purple-50',
    orange: 'text-orange-600 bg-orange-50'
  };

  return (
    <div className="stat-card animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${colors[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
        {trend && (
          <div className="badge badge-green">
            <TrendingUp className="h-3 w-3 mr-1" />
            {trend}
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
      </div>
      
      <div className={`absolute top-0 right-0 w-20 h-20 gradient-${color} rounded-full opacity-10 -translate-y-10 translate-x-10`}></div>
    </div>
  );
};

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const sizeClass = size === 'sm' ? 'px-3 py-2 text-sm' : 'px-4 py-2.5';
  
  return (
    <button className={`${baseClass} ${sizeClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

// ===== HEADER =====
const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
    <div className="flex items-center justify-between px-4 lg:px-6 py-4">
      <div className="flex items-center gap-4">
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 gradient-blue rounded-xl flex items-center justify-center">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">PropAdmin</h1>
            <p className="text-xs text-gray-500">Sistema de Gestão</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="hidden md:flex relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Buscar..."
            className="input pl-10 w-64"
          />
        </div>
        
        <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-medium">3</span>
          </span>
        </button>
        
        <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
          <div className="w-8 h-8 gradient-purple rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">A</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">Administrador</p>
          </div>
        </div>
      </div>
    </div>
  </header>
);

// ===== SIDEBAR =====
const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, badge: null },
    { id: 'properties', label: 'Imóveis', icon: Building2, badge: '12' },
    { id: 'residents', label: 'Moradores', icon: Users, badge: '142' },
    { id: 'financial', label: 'Financeiro', icon: DollarSign, badge: null },
    { id: 'communication', label: 'Comunicação', icon: MessageSquare, badge: '3' },
    { id: 'settings', label: 'Configurações', icon: Settings, badge: null }
  ];

  return (
    <>
      <aside className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-xl border-r border-gray-200 transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-blue rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">PropAdmin</h2>
                <p className="text-sm text-gray-500">Painel Principal</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map(item => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`sidebar-item w-full ${isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="badge badge-blue">{item.badge}</span>
                  )}
                </button>
              );
            })}
          </nav>
          
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="font-medium text-gray-900">Versão Pro</span>
              </div>
              <p className="text-xs text-gray-600 mb-3">Desbloqueie recursos avançados</p>
              <Button size="sm" className="w-full text-xs">Upgrade</Button>
            </div>
          </div>
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

// ===== DASHBOARD =====
const Dashboard = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Visão geral do seu portfólio imobiliário</p>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="secondary" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          Últimos 30 dias
        </Button>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" />
          Novo Imóvel
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Total de Imóveis"
        value="12"
        icon={Building2}
        color="blue"
        trend="+8%"
        subtitle="2 novos este mês"
      />
      <StatCard
        title="Total de Unidades"
        value="156"
        icon={Home}
        color="green"
        trend="+12%"
        subtitle="91% ocupadas"
      />
      <StatCard
        title="Moradores Ativos"
        value="142"
        icon={Users}
        color="purple"
        trend="+5%"
        subtitle="6 novos moradores"
      />
      <StatCard
        title="Receita Mensal"
        value="R$ 28.5k"
        icon={DollarSign}
        color="orange"
        trend="+15%"
        subtitle="Meta: R$ 30k"
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Atividades Recentes</h3>
            <Button variant="secondary" size="sm">Ver todas</Button>
          </div>
          
          <div className="space-y-4">
            {[
              { icon: Users, text: 'Novo morador cadastrado no Apto 205', time: '2 horas atrás', color: 'text-green-600 bg-green-50' },
              { icon: DollarSign, text: 'Pagamento recebido - Condomínio Vista Alegre', time: '4 horas atrás', color: 'text-blue-600 bg-blue-50' },
              { icon: Activity, text: 'Manutenção agendada para o elevador', time: '1 dia atrás', color: 'text-orange-600 bg-orange-50' },
              { icon: MessageSquare, text: 'Nova mensagem na assembléia', time: '2 dias atrás', color: 'text-purple-600 bg-purple-50' }
            ].map((activity, index) => (
              <div key={index} className="activity-item">
                <div className={`p-2 rounded-lg ${activity.color}`}>
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Taxa de Ocupação</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Ocupado</span>
                <span className="text-sm font-bold text-green-600">91%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill gradient-green" style={{width: '91%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Disponível</span>
                <span className="text-sm font-bold text-blue-600">9%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill gradient-blue" style={{width: '9%'}}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h3>
          <div className="space-y-3">
            <Button variant="secondary" size="sm" className="w-full justify-start">
              <Plus className="h-4 w-4 mr-2" />
              Cadastrar Morador
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              <MessageSquare className="h-4 w-4 mr-2" />
              Enviar Aviso
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start">
              <BarChart3 className="h-4 w-4 mr-2" />
              Gerar Relatório
            </Button>
          </div>
        </div>
      </div>
    </div>

    <div className="card p-6 bg-gradient-to-r from-green-50 to-green-100 border-green-200">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Award className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">🎉 Sistema Funcionando Perfeitamente!</h3>
          <p className="text-green-800 mb-4">
            Parabéns! O PropAdmin foi configurado com sucesso e está pronto para uso. 
            Agora você pode começar a desenvolver as funcionalidades avançadas do sistema.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="badge bg-green-200 text-green-800">✅ Frontend Funcionando</span>
            <span className="badge bg-green-200 text-green-800">✅ Backend Conectado</span>
            <span className="badge bg-green-200 text-green-800">✅ Design Responsivo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ===== PÁGINAS PLACEHOLDER =====
const PlaceholderPage = ({ title, description, icon: Icon, color }) => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-600 mt-1">Este módulo será implementado em breve</p>
    </div>
    
    <div className="card p-12 text-center">
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>
      <Button>
        <Plus className="h-4 w-4 mr-2" />
        Começar Desenvolvimento
      </Button>
    </div>
  </div>
);

// ===== APP PRINCIPAL =====
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'properties':
        return <PlaceholderPage title="Gestão de Imóveis" description="Gerencie condomínios, prédios, casas e apartamentos" icon={Building2} color="gradient-blue" />;
      case 'residents':
        return <PlaceholderPage title="Gestão de Moradores" description="Controle proprietários e inquilinos" icon={Users} color="gradient-purple" />;
      case 'financial':
        return <PlaceholderPage title="Módulo Financeiro" description="Controle de taxas e pagamentos" icon={DollarSign} color="gradient-green" />;
      case 'communication':
        return <PlaceholderPage title="Sistema de Comunicação" description="Avisos e comunicação com moradores" icon={MessageSquare} color="gradient-orange" />;
      case 'settings':
        return <PlaceholderPage title="Configurações" description="Configure o sistema" icon={Settings} color="bg-gray-500" />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <div className="flex">
        <Sidebar 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        
        <main className="flex-1 p-4 lg:p-8 max-w-full overflow-hidden">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;