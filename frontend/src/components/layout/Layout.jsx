import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="px-4 py-3">
          <h1 className="text-xl font-bold text-gray-900">PropAdmin</h1>
        </div>
      </header>
ECHO est  desativado.
      <main className="p-4 lg:p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
