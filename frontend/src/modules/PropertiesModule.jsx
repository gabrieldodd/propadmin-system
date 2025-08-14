import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Home, 
  MapPin, 
  Search, 
  Filter, 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  X,
  Save,
  Users,
  DollarSign,
  Calendar,
  CheckCircle,
  AlertCircle,
  Building,
  Layers,
  Grid3X3,
  TrendingUp
} from 'lucide-react';

// ===== DADOS MOCKADOS =====
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
    amenities: ["Piscina", "Academia", "Playground", "Salão de Festas"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=250&fit=crop"
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
    amenities: ["Portaria 24h", "Elevador", "Estacionamento"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"
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
    amenities: ["Piscina", "Jardim", "Garagem", "Churrasqueira"],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=250&fit=crop"
  }
];

// ===== COMPONENTE BUTTON =====
const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, disabled, ...props }) => {
  const baseClass = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-blue-500',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 shadow-sm hover:shadow-md focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl focus:ring-red-500'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm'
  };
  
  return (
    <button 
      className={`${baseClass} ${variants[variant]} ${sizes[size]} ${className}`} 
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// ===== COMPONENTE PROPERTY CARD =====
const PropertyCard = ({ property, onView, onEdit, onDelete }) => {
  const getTypeIcon = (type) => {
    switch(type) {
      case 'condominio': return Building2;
      case 'edificio': return Building;
      case 'casa': return Home;
      case 'apartamento': return Layers;
      case 'comercial': return Grid3X3;
      default: return Building2;
    }
  };

  const getTypeLabel = (type) => {
    const labels = {
      condominio: 'Condomínio',
      edificio: 'Edifício',
      casa: 'Casa',
      apartamento: 'Apartamento',
      comercial: 'Comercial'
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
  const TypeIcon = getTypeIcon(property.type);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden group">
      {/* Imagem */}
      <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center" style={{display: 'none'}}>
          <TypeIcon className="h-16 w-16 text-white opacity-60" />
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
          >
            <Eye className="h-4 w-4" />
          </button>
          <button 
            onClick={() => onEdit(property)}
            className="p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg text-white hover:bg-opacity-30 transition-all"
          >
            <Edit3 className="h-4 w-4" />
          </button>
          <button 
            onClick={() => onDelete(property)}
            className="p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg text-white hover:bg-opacity-30 transition-all"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{property.name}</h3>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {property.address}
            </p>
          </div>
          <TypeIcon className="h-6 w-6 text-blue-600" />
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
            <Eye className="h-4 w-4 mr-2" />
            Ver Detalhes
          </Button>
          <Button variant="primary" size="sm" onClick={() => onEdit(property)} className="flex-1">
            <Edit3 className="h-4 w-4 mr-2" />
            Editar
          </Button>
        </div>
      </div>
    </div>
  );
};

// ===== COMPONENTE PRINCIPAL =====
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
    alert('Função de criar será implementada em breve');
  };

  const handleEdit = (property) => {
    alert(`Editar ${property.name} será implementado em breve`);
  };

  const handleView = (property) => {
    alert(`Ver detalhes de ${property.name} será implementado em breve`);
  };

  const handleDelete = (property) => {
    if (window.confirm(`Tem certeza que deseja deletar ${property.name}?`)) {
      setProperties(prev => prev.filter(p => p.id !== property.id));
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
          <h1 className="text-3xl font-bold text-gray-900">Gestão de Imóveis</h1>
          <p className="text-gray-600 mt-1">Gerencie condomínios, prédios, casas e apartamentos</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="secondary" size="sm" onClick={() => setShowFilters(!showFilters)}>
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
          <Button size="sm" onClick={handleCreate}>
            <Plus className="h-4 w-4 mr-2" />
            Novo Imóvel
          </Button>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 rounded-xl bg-blue-50">
              <Building2 className="h-6 w-6 text-blue-600" />
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
              <Home className="h-6 w-6 text-green-600" />
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
              <Users className="h-6 w-6 text-purple-600" />
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
              <DollarSign className="h-6 w-6 text-orange-600" />
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
            <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
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
                Limpar
              </Button>
            </div>
          )}
        </div>

        {/* Resultados */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>
            {filteredProperties.length === properties.length 
              ? `${properties.length} imóveis` 
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
          <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {searchTerm || selectedType || selectedStatus 
              ? 'Nenhum imóvel encontrado' 
              : 'Nenhum imóvel cadastrado'
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
              <Plus className="h-4 w-4 mr-2" />
              Criar Primeiro Imóvel
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

// IMPORTANTE: Export default no final
export default PropertiesModule;