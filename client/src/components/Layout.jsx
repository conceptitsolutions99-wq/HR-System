import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-200 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
