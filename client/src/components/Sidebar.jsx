import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Settings,
  Users,
  CalendarCheck,
  FileText,
  CreditCard,
  Send,
  HardDrive,
  Sun,
  Moon,
  UserPlus
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ||
             localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const menuItems = [
    { title: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { title: 'Global Settings', icon: Settings, path: '/settings' },
    { title: 'Employees', icon: Users, path: '/employees' },
    { title: 'Add Employee', icon: UserPlus, path: '/add-employee' },
    { title: 'Attendance', icon: CalendarCheck, path: '/attendance' },
    { title: 'Leave Details', icon: FileText, path: '/leave-details' },
    { title: 'Salary Slip', icon: CreditCard, path: '/salary-slip' },
    { title: 'Leave Application', icon: Send, path: '/leave-application' },
    { title: 'Device Attendance', icon: HardDrive, path: '/device-attendance' },
  ];

  return (
    <aside className="w-64 min-h-screen flex flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-colors duration-200 shadow-sm shrink-0">
      <div className="p-5 flex items-center gap-3 border-b border-gray-100 dark:border-gray-700">
        <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold shadow-sm">
          ⚡
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">HR System</h1>
          <p className="text-xs text-teal-600 dark:text-teal-400 font-medium">Enterprise Management</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 font-semibold shadow-xs'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/60 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-gray-400 dark:text-gray-400'}`} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Theme Switcher */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-700">
        <button
          type="button"
          onClick={toggleTheme}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-all text-sm font-medium shadow-xs cursor-pointer"
        >
          <span className="flex items-center gap-2">
            {isDark ? (
              <Moon className="w-4 h-4 text-teal-400" />
            ) : (
              <Sun className="w-4 h-4 text-amber-500" />
            )}
            <span>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
          </span>
          <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
            isDark ? 'bg-teal-900/60 text-teal-300' : 'bg-amber-100 text-amber-800'
          }`}>
            {isDark ? 'ON' : 'OFF'}
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
