import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Settings,
  User,
  CalendarClock,
  FileText,
  CreditCard,
  FileInput,
  MonitorSmartphone
} from 'lucide-react';

const Sidebar = () => {
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
    <div className="w-64 h-screen bg-white border-r border-gray-200">
      <div className="p-4 text-xl font-bold text-teal-600">HRM</div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            <item.icon className="w-5 h-5 mr-3 text-gray-500" />
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 left-4">
        <button className="px-3 py-1 text-sm bg-cyan-400 text-white rounded-full">Light</button>
        <button className="px-3 py-1 text-sm text-gray-600">Dark</button>
      </div>
    </div>
  );
};

export default Sidebar;
