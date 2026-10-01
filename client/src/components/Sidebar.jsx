import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Settings,
  User,
  CalendarClock,
  FileText,
  CreditCard,
  FileInput,
  MonitorSmartphone,
  Sun,
  Moon
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or system preference on mount
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Apply theme on mount and whenever it changes
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const menuItems = [
    { title: 'Dashboard', icon: LayoutDashboard, path: '/' },
    { title: 'Global Settings', icon: Settings, path: '/settings' },
    { title: 'User Detail', icon: User, path: '/user-detail' },
    { title: 'Employees', icon: User, path: '/employees' },
    { title: 'Attendance', icon: CalendarClock, path: '/attendance' },
    { title: 'Leave Details', icon: FileText, path: '/leave-details' },
    { title: 'Salary Slip', icon: CreditCard, path: '/salary-slip' },
    { title: 'Leave Application', icon: FileInput, path: '/leave-application' },
    { title: 'Device Attendance', icon: MonitorSmartphone, path: '/device-attendance' },
  ];

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-colors">
      <div className="p-4 text-xl font-bold text-teal-600 dark:text-teal-400 flex items-center">
        <span className="mr-2">⚡</span> HRM
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className={`flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              location.pathname === item.path ? 'bg-gray-100 dark:bg-gray-800 text-teal-700 dark:text-teal-400 border-r-4 border-teal-600 dark:border-teal-400' : ''
            }`}
          >
            <item.icon className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <>
              <Sun className="w-4 h-4" />
              <span>Light</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4" />
              <span>Dark</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
