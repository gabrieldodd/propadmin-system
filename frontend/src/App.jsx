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

// ===== COMPONENTE BUTTON =====
const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClass = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-blue-500',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md focus:ring-gray-500'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm'
  };
  
  return (
    <button className={`${baseClass} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// ===== COMPONENTE STAT CARD =====
const StatCard = ({ title, value, icon: Icon, color, trend, subtitle }) => {
  const colors = {
    blue: 'text-blue-600 bg-blue-50',
    green: 'text-green-600 bg-green-50',
    purple: 'text-purple-600 bg-purple-50',
    orange: 'text-orange-600 bg-orange-50'
  };

  return (
    <div className="card p-6 relative overflow-hidden animate-fade-in hover:scale-[1.02] transition-transform duration-300">
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

// ===== HEADER =====
const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <header 
    className="bg-white shadow-lg border-b border-gray-200 fixed top-0 left-0 right-0 lg:ml-72"
    style={{ zIndex: 999 }}
  >
    <div className="flex items-center justify-between px-4 lg:px-6 py-4">
      <div className="flex items-center gap-4">
        {/* Botão Mobile Menu */}
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Barra de Busca */}
        <div className="hidden md:flex relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Buscar..."
            className="w-64 px-3 py-2 pl-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          />
        </div>
      </div>
      
      {/* Lado Direito do Header */}
      <div className="flex items-center gap-3">
        {/* Botão de Notificações */}
        <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-medium">3</span>
          </span>
        </button>
        
        {/* Perfil do Usuário */}
        <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
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
      {/* Sidebar */}
      <aside 
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed inset-y-0 left-0 w-72 bg-white shadow-xl border-r border-gray-200 transition-transform duration-300 ease-in-out`}
        style={{ zIndex: 100 }}
      >
        <div className="flex flex-col h-full">
          {/* Header da Sidebar */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">PropAdmin</h2>
                <p className="text-sm text-gray-500">Sistema de Gestão</p>
              </div>
            </div>
          </div>
          
          {/* Navegação */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
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
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl font-medium transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm border border-blue-200' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
          
          {/* Footer da Sidebar */}
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

      {/* Overlay para Mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          style={{ zIndex: 50 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

// ===== DASHBOARD =====
const Dashboard = () => (
  <div className="space-y-6 animate-fade-in">
    {/* Cabeçalho da Página */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Visão geral do seu portfólio imobiliário</p>
      </div>
      
      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-3">
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

    {/* Cards de Estatísticas */}
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
        subtitle="144 ocupadas"
      />
      <StatCard
        title="Moradores"
        value="142"
        icon={Users}
        color="purple"
        subtitle="89% ocupação"
      />
      <StatCard
        title="Receita Mensal"
        value="R$ 28.5k"
        icon={DollarSign}
        color="orange"
        trend="+5%"
        subtitle="vs. mês anterior"
      />
    </div>

    {/* Grid de Conteúdo */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Atividades Recentes */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividades Recentes</h3>
          <div className="space-y-4">
            {[
              { action: 'Novo morador cadastrado', time: '2 min atrás', icon: Users, color: 'text-green-600' },
              { action: 'Pagamento recebido - Apt 201', time: '1 hora atrás', icon: DollarSign, color: 'text-blue-600' },
              { action: 'Manutenção agendada - Bloco A', time: '3 horas atrás', icon: Settings, color: 'text-orange-600' },
              { action: 'Nova comunicação enviada', time: '1 dia atrás', icon: MessageSquare, color: 'text-purple-600' }
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                <div className={`w-10 h-10 ${activity.color.replace('text-', 'bg-').replace('600', '100')} rounded-full flex items-center justify-center`}>
                  <activity.icon className={`h-4 w-4 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gráfico de Ocupação */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Taxa de Ocupação</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Ocupado</span>
                <span className="text-sm font-bold text-green-600">89%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-gradient-to-br from-green-500 to-green-600 transition-all duration-500" style={{width: '89%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Disponível</span>
                <span className="text-sm font-bold text-blue-600">11%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 transition-all duration-500" style={{width: '11%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar de Ações */}
      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
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

    {/* Card de Sucesso */}
    <div className="bg-white rounded-xl shadow-sm border border-green-200 p-6 bg-gradient-to-r from-green-50 to-green-100">
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
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">✅ Frontend Funcionando</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">✅ Backend Conectado</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">✅ Design Responsivo</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">✅ Layout Otimizado</span>
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
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
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
        return <PlaceholderPage title="Gestão de Imóveis" description="Gerencie condomínios, prédios, casas e apartamentos" icon={Building2} color="bg-gradient-to-br from-blue-500 to-blue-600" />;
      case 'residents':
        return <PlaceholderPage title="Gestão de Moradores" description="Controle proprietários e inquilinos" icon={Users} color="bg-gradient-to-br from-purple-500 to-purple-600" />;
      case 'financial':
        return <PlaceholderPage title="Módulo Financeiro" description="Controle de taxas e pagamentos" icon={DollarSign} color="bg-gradient-to-br from-green-500 to-green-600" />;
      case 'communication':
        return <PlaceholderPage title="Sistema de Comunicação" description="Avisos e comunicação com moradores" icon={MessageSquare} color="bg-gradient-to-br from-orange-500 to-orange-600" />;
      case 'settings':
        return <PlaceholderPage title="Configurações" description="Configure o sistema" icon={Settings} color="bg-gray-500" />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      {/* Header */}
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Conteúdo Principal */}
      <main 
        className="lg:ml-72 p-4 lg:p-8"
        style={{ paddingTop: '100px', position: 'relative', zIndex: 1 }}
      >
        {renderContent()}
      </main>
    </div>
  );
};

export default App;