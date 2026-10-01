import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Settings, User, CalendarClock, FileText,
  CreditCard, FileInput, MonitorSmartphone, Sun, Moon
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const menuItems = [
    { title: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { title: 'Global Settings', icon: Settings, path: '/settings' },
    { title: 'Employees', icon: User, path: '/employees' },
    { title: 'Attendance', icon: CalendarClock, path: '/attendance' },
    { title: 'Leave Details', icon: FileText, path: '/leave-details' },
    { title: 'Salary Slip', icon: CreditCard, path: '/salary-slip' },
    { title: 'Leave Application', icon: FileInput, path: '/leave-application' },
    { title: 'Device Attendance', icon: MonitorSmartphone, path: '/device-attendance' },
  ];

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-colors">
      <div className="p-4 text-xl font-bold text-teal-600 dark:text-teal-400">⚡ HRM</div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link key={item.title} to={item.path} className={`flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 ${location.pathname === item.path ? 'bg-gray-100 dark:bg-gray-800 text-teal-700 dark:text-teal-400' : 'text-gray-600 dark:text-gray-300'}`}>
            <item.icon className="w-5 h-5 mr-3" />
            {item.title}
          </Link>
        ))}
      </nav>
      <button onClick={toggleTheme} className="absolute bottom-4 left-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
         <Sun className="w-5 h-5 dark:hidden text-gray-700" />
         <Moon className="w-5 h-5 hidden dark:block text-gray-200" />
      </button>
    </div>
  );
};
export default Sidebar;