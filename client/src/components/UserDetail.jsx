import React from 'react';
import { User, Mail, Shield, Building, Phone } from 'lucide-react';

const UserDetail = () => {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Administrator Profile</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Current authenticated session details and roles</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 md:p-8 transition-colors">
        <div className="flex items-center gap-5 pb-6 border-b border-gray-100 dark:border-gray-700">
          <div className="w-16 h-16 rounded-full bg-teal-600 text-white font-bold text-2xl flex items-center justify-center shadow-md">
            AD
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">System Administrator</h2>
            <p className="text-sm text-teal-600 dark:text-teal-400 font-medium">Super Admin • HR Department</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
            <Mail className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Email Address</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">admin@conceptitsolutions.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
            <Shield className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Access Role</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">Full Privileges (Master)</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
            <Building className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Headquarters</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">San Francisco, CA</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900/50">
            <Phone className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">+1 (555) 019-2831</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
