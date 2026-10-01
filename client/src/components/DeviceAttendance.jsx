import React, { useState, useEffect } from 'react';
import { HardDrive, Wifi } from 'lucide-react';

const INITIAL_LOGS = [
  { id: 1, employee_id: 'EMP-1001', name: 'Sarah Johnson', device_id: 'BIO-GATE-01', timestamp: '2026-10-01 08:55:12', status: 'Success' },
  { id: 2, employee_id: 'EMP-1002', name: 'Michael Chen', device_id: 'BIO-GATE-01', timestamp: '2026-10-01 09:02:44', status: 'Success' },
  { id: 3, employee_id: 'EMP-1004', name: 'David Park', device_id: 'BIO-MAIN-02', timestamp: '2026-10-01 08:45:01', status: 'Success' },
  { id: 4, employee_id: 'EMP-1005', name: 'Lisa Anderson', device_id: 'BIO-GATE-01', timestamp: '2026-09-30 17:31:10', status: 'Success' }
];

const DeviceAttendance = () => {
  const [logs, setLogs] = useState(INITIAL_LOGS);

  useEffect(() => {
    fetch('http://localhost:5000/api/device-attendance')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setLogs(data);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Biometric Device Logs</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Real-time raw biometric hardware attendance captures</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          <Wifi className="w-3.5 h-3.5" />
          <span>Devices Online (3/3)</span>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-900/40 text-gray-600 dark:text-gray-400 text-xs uppercase font-semibold border-b border-gray-200 dark:border-gray-700">
                <th className="py-3.5 px-5">Emp ID</th>
                <th className="py-3.5 px-5">Employee Name</th>
                <th className="py-3.5 px-5">Device ID</th>
                <th className="py-3.5 px-5">Timestamp</th>
                <th className="py-3.5 px-5">Sync Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700/60">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-gray-50/60 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-teal-600 dark:text-teal-400">
                    {log.employee_id}
                  </td>
                  <td className="py-3.5 px-5 font-medium text-gray-900 dark:text-white">
                    {log.name || `Employee #${log.employee_id}`}
                  </td>
                  <td className="py-3.5 px-5 font-mono text-xs text-gray-600 dark:text-gray-300">
                    {log.device_id || 'DEVICE-01'}
                  </td>
                  <td className="py-3.5 px-5 text-gray-600 dark:text-gray-300 font-mono text-xs">
                    {log.timestamp}
                  </td>
                  <td className="py-3.5 px-5">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
                      ● {log.status || 'Synced'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeviceAttendance;
