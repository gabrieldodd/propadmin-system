import React from 'react';
import { Building2, Home, Users, DollarSign } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
ECHO est† desativado.
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total de Im√≥veis</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
            <Building2 className="h-8 w-8 text-blue-500" />
          </div>
        </div>
ECHO est† desativado.
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total de Unidades</p>
              <p className="text-2xl font-bold text-green-600">156</p>
            </div>
            <Home className="h-8 w-8 text-green-500" />
          </div>
        </div>
ECHO est† desativado.
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Moradores</p>
              <p className="text-2xl font-bold text-purple-600">142</p>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
ECHO est† desativado.
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Receita Mensal</p>
              <p className="text-2xl font-bold text-orange-600">R$ 28.5k</p>
            </div>
            <DollarSign className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>
ECHO est† desativado.
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Sistema funcionando!</h3>
        <p className="text-gray-600">
          Parab√©ns! O PropAdmin foi configurado com sucesso. 
          Agora voc√™ pode come√ßar a desenvolver as funcionalidades.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
