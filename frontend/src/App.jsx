import React, { useState, useEffect } from 'react';

// ===== DADOS MOCKADOS PARA IMÓVEIS =====
const mockProperties = [
  {
    id: 1,
    name: "Residencial Sunset",
    type: "condominio",
    address: "Rua das Flores, 123 - Barra da Tijuca",
    city: "Rio de Janeiro",
    state: "RJ",
    cep: "22640-100",
    blocks: 3,
    units: 45,
    occupiedUnits: 42,
    monthlyRevenue: 67500,
    createdAt: "2023-01-15",
    status: "ativo",
    manager: "João Silva",
    description: "Condomínio residencial de alto padrão com área de lazer completa",
    amenities: ["Piscina", "Academia", "Playground", "Salão de Festas"]
  },
  {
    id: 2,
    name: "Edifício Copacabana Palace",
    type: "edificio",
    address: "Av. Atlântica, 456 - Copacabana",
    city: "Rio de Janeiro",
    state: "RJ",
    cep: "22070-001",
    blocks: 1,
    units: 24,
    occupiedUnits: 22,
    monthlyRevenue: 89600,
    createdAt: "2022-08-20",
    status: "ativo",
    manager: "Maria Santos",
    description: "Edifício comercial em localização privilegiada",
    amenities: ["Portaria 24h", "Elevador", "Estacionamento"]
  },
  {
    id: 3,
    name: "Villa das Palmeiras",
    type: "casa",
    address: "Rua das Palmeiras, 789 - Recreio",
    city: "Rio de Janeiro",
    state: "RJ",
    cep: "22795-080",
    blocks: 0,
    units: 1,
    occupiedUnits: 1,
    monthlyRevenue: 8500,
    createdAt: "2023-03-10",
    status: "ativo",
    manager: "Carlos Lima",
    description: "Casa de luxo com vista para o mar",
    amenities: ["Piscina", "Jardim", "Garagem", "Churrasqueira"]
  }
];

// ===== COMPONENTE BUTTON =====
const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, ...props }) => {
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
    <button className={`${baseClass} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

// ===== COMPONENTE PROPERTY CARD =====
const PropertyCard = ({ property, onView, onEdit, onDelete }) => {
  const getTypeLabel = (type) => {
    const labels = {
      condominio: '🏢 Condomínio',
      edificio: '🏢 Edifício',
      casa: '🏠 Casa',
      apartamento: '🏢 Apartamento',
      comercial: '🏢 Comercial'
    };
    return labels[type] || type;
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'ativo': return 'bg-green-100 text-green-800';
      case 'inativo': return 'bg-red-100 text-red-800';
      case 'manutencao': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const occupancyRate = property.units > 0 ? Math.round((property.occupiedUnits / property.units) * 100) : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
      {/* Header do Card */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <span className="text-6xl opacity-60">🏢</span>
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(property.status)}`}>
            {property.status}
          </span>
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 text-white backdrop-blur-sm">
            {getTypeLabel(property.type)}
          </span>
        </div>

        {/* Ações */}
        <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => onView(property)}
            className="p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg text-white hover:bg-opacity-30 transition-all"
            title="Ver Detalhes"
          >
            👁️
          </button>
          <button 
            onClick={() => onEdit(property)}
            className="p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg text-white hover:bg-opacity-30 transition-all"
            title="Editar"
          >
            ✏️
          </button>
          <button 
            onClick={() => onDelete(property)}
            className="p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg text-white hover:bg-opacity-30 transition-all"
            title="Deletar"
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{property.name}</h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              📍 {property.address}
            </p>
          </div>
          <span className="text-2xl">🏢</span>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Unidades</p>
            <p className="text-lg font-bold text-gray-900">{property.units}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Ocupação</p>
            <p className="text-lg font-bold text-green-600">{occupancyRate}%</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Receita</p>
            <p className="text-lg font-bold text-blue-600">
              R$ {property.monthlyRevenue.toLocaleString('pt-BR')}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Gestor</p>
            <p className="text-sm font-medium text-gray-900 truncate">{property.manager}</p>
          </div>
        </div>

        {/* Barra de Ocupação */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">Taxa de Ocupação</span>
            <span className="text-xs font-medium text-gray-900">{property.occupiedUnits}/{property.units}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500"
              style={{ width: `${occupancyRate}%` }}
            ></div>
          </div>
        </div>

        {/* Ações */}
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={() => onView(property)} className="flex-1">
            👁️ Ver Detalhes
          </Button>
          <Button variant="primary" size="sm" onClick={() => onEdit(property)} className="flex-1">
            ✏️ Editar
          </Button>
        </div>
      </div>
    </div>
  );
};

// ===== MÓDULO DE IMÓVEIS =====
const PropertiesModule = () => {
  const [properties, setProperties] = useState(mockProperties);
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Filtros
  useEffect(() => {
    let filtered = properties;

    if (searchTerm) {
      filtered = filtered.filter(property => 
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.manager.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter(property => property.type === selectedType);
    }

    if (selectedStatus) {
      filtered = filtered.filter(property => property.status === selectedStatus);
    }

    setFilteredProperties(filtered);
  }, [properties, searchTerm, selectedType, selectedStatus]);

  // Handlers
  const handleCreate = () => {
    alert('🏗️ Função de criar novo imóvel será implementada em breve!');
  };

  const handleEdit = (property) => {
    alert(`✏️ Editar "${property.name}" será implementado em breve!`);
  };

  const handleView = (property) => {
    alert(`👁️ Ver detalhes de "${property.name}" será implementado em breve!`);
  };

  const handleDelete = (property) => {
    if (window.confirm(`🗑️ Tem certeza que deseja deletar "${property.name}"?`)) {
      setProperties(prev => prev.filter(p => p.id !== property.id));
      alert(`✅ "${property.name}" foi removido com sucesso!`);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    setSelectedStatus('');
  };

  // Estatísticas
  const totalProperties = properties.length;
  const totalUnits = properties.reduce((sum, p) => sum + p.units, 0);
  const occupiedUnits = properties.reduce((sum, p) => sum + p.occupiedUnits, 0);
  const totalRevenue = properties.reduce((sum, p) => sum + p.monthlyRevenue, 0);
  const occupancyRate = totalUnits > 0 ? Math.round((occupiedUnits / totalUnits) * 100) : 0;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">🏢 Gestão de Imóveis</h1>
          <p className="text-gray-600 mt-1">Gerencie condomínios, prédios, casas e apartamentos</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="secondary" size="sm" onClick={() => setShowFilters(!showFilters)}>
            🔍 Filtros
          </Button>
          <Button size="sm" onClick={handleCreate}>
            ➕ Novo Imóvel
          </Button>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-blue-50">
              <span className="text-2xl">🏢</span>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-gray-900">{totalProperties}</h3>
            <p className="text-sm font-medium text-gray-600">Total de Imóveis</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-green-50">
              <span className="text-2xl">🏠</span>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-gray-900">{totalUnits}</h3>
            <p className="text-sm font-medium text-gray-600">Total de Unidades</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-purple-50">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-gray-900">{occupancyRate}%</h3>
            <p className="text-sm font-medium text-gray-600">Taxa de Ocupação</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-orange-50">
              <span className="text-2xl">💰</span>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-gray-900">R$ {totalRevenue.toLocaleString('pt-BR')}</h3>
            <p className="text-sm font-medium text-gray-600">Receita Total</p>
          </div>
        </div>
      </div>

      {/* Busca e Filtros */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Buscar por nome, endereço ou gestor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {showFilters && (
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Todos os tipos</option>
                <option value="condominio">Condomínio</option>
                <option value="edificio">Edifício</option>
                <option value="casa">Casa</option>
                <option value="apartamento">Apartamento</option>
                <option value="comercial">Comercial</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Todos os status</option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
                <option value="manutencao">Em Manutenção</option>
              </select>

              <Button variant="secondary" size="sm" onClick={clearFilters}>
                🧹 Limpar
              </Button>
            </div>
          )}
        </div>

        {/* Resultados */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>
            {filteredProperties.length === properties.length 
              ? `${properties.length} imóveis encontrados` 
              : `${filteredProperties.length} de ${properties.length} imóveis`
            }
          </span>
          {(searchTerm || selectedType || selectedStatus) && (
            <button onClick={clearFilters} className="text-blue-600 hover:text-blue-700">
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Lista de Imóveis */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProperties.map(property => (
          <PropertyCard
            key={property.id}
            property={property}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <span className="text-6xl mb-4 block">🏢</span>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {searchTerm || selectedType || selectedStatus 
              ? '🔍 Nenhum imóvel encontrado' 
              : '🏗️ Nenhum imóvel cadastrado'
            }
          </h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || selectedType || selectedStatus
              ? 'Tente ajustar os filtros de busca.'
              : 'Comece criando seu primeiro imóvel.'
            }
          </p>
          {!(searchTerm || selectedType || selectedStatus) && (
            <Button onClick={handleCreate}>
              ➕ Criar Primeiro Imóvel
            </Button>
          )}
        </div>
      )}

      {/* Rodapé com Informações */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white">✅</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-green-900">✅ Módulo de Imóveis Funcionando!</h3>
            <p className="text-green-800 text-sm">
              Interface completa com {properties.length} imóveis de exemplo. 
              Teste as funcionalidades de busca, filtros e ações nos cards.
            </p>
          </div>
        </div>
      </div>
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
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '❌' : '☰'}
        </button>
        
        <div className="hidden md:flex relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
          <input 
            type="text" 
            placeholder="Buscar..."
            className="w-64 px-3 py-2 pl-10 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
          <span className="text-xl">🔔</span>
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-medium">3</span>
          </span>
        </button>
        
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
    { id: 'dashboard', label: 'Dashboard', icon: '📊', badge: null },
    { id: 'properties', label: 'Imóveis', icon: '🏢', badge: '3' },
    { id: 'residents', label: 'Moradores', icon: '👥', badge: '65' },
    { id: 'financial', label: 'Financeiro', icon: '💰', badge: null },
    { id: 'communication', label: 'Comunicação', icon: '💬', badge: '3' },
    { id: 'settings', label: 'Configurações', icon: '⚙️', badge: null }
  ];

  return (
    <>
      <aside 
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed inset-y-0 left-0 w-72 bg-white shadow-xl border-r border-gray-200 transition-transform duration-300 ease-in-out`}
        style={{ zIndex: 100 }}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🏢</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">PropAdmin</h2>
                <p className="text-sm text-gray-500">Sistema de Gestão</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map(item => {
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
                    <span className="text-lg">{item.icon}</span>
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
          
          <div className="p-4 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-lg">🏆</span>
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
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">📊 Dashboard</h1>
        <p className="text-gray-600 mt-1">Visão geral do seu portfólio imobiliário</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="secondary" size="sm">
          📅 Últimos 30 dias
        </Button>
        <Button size="sm">
          ➕ Novo Imóvel
        </Button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-blue-50">
            <span className="text-2xl">🏢</span>
          </div>
          <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <span className="mr-1">📈</span>+8%
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-gray-900">3</h3>
          <p className="text-sm font-medium text-gray-600">Total de Imóveis</p>
          <p className="text-xs text-gray-500">Sistema funcionando</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-green-50">
            <span className="text-2xl">🏠</span>
          </div>
          <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <span className="mr-1">📈</span>+12%
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-gray-900">70</h3>
          <p className="text-sm font-medium text-gray-600">Total de Unidades</p>
          <p className="text-xs text-gray-500">65 ocupadas</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-purple-50">
            <span className="text-2xl">👥</span>
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-gray-900">93%</h3>
          <p className="text-sm font-medium text-gray-600">Taxa de Ocupação</p>
          <p className="text-xs text-gray-500">Excelente resultado</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl bg-orange-50">
            <span className="text-2xl">💰</span>
          </div>
          <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <span className="mr-1">📈</span>+5%
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-gray-900">R$ 165k</h3>
          <p className="text-sm font-medium text-gray-600">Receita Mensal</p>
          <p className="text-xs text-gray-500">vs. mês anterior</p>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-xl shadow-sm border border-green-200 p-6 bg-gradient-to-r from-green-50 to-green-100">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white">🏆</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">🎉 Sistema PropAdmin Funcionando!</h3>
          <p className="text-green-800 mb-4">
            Módulo de Imóveis implementado com sucesso! Interface moderna, filtros funcionais e dados de exemplo. 
            Clique em "Imóveis" na sidebar para testar todas as funcionalidades.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">✅ Interface Responsiva</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">✅ Filtros Funcionais</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">✅ Dados de Exemplo</span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-200 text-green-800">✅ CRUD Básico</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ===== PÁGINAS PLACEHOLDER =====
const PlaceholderPage = ({ title, description, icon, color }) => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="text-gray-600 mt-1">Este módulo será implementado em breve</p>
    </div>
    
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
        <span className="text-3xl text-white">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>
      <Button>
        ➕ Começar Desenvolvimento
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
        return <PropertiesModule />;
      case 'residents':
        return <PlaceholderPage title="👥 Gestão de Moradores" description="Controle proprietários e inquilinos" icon="👥" color="bg-gradient-to-br from-purple-500 to-purple-600" />;
      case 'financial':
        return <PlaceholderPage title="💰 Módulo Financeiro" description="Controle de taxas e pagamentos" icon="💰" color="bg-gradient-to-br from-green-500 to-green-600" />;
      case 'communication':
        return <PlaceholderPage title="💬 Sistema de Comunicação" description="Avisos e comunicação com moradores" icon="💬" color="bg-gradient-to-br from-orange-500 to-orange-600" />;
      case 'settings':
        return <PlaceholderPage title="⚙️ Configurações" description="Configure o sistema" icon="⚙️" color="bg-gray-500" />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
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