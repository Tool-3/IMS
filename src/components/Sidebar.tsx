import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, PlusCircle, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/invoices', icon: FileText, label: 'Invoices' },
    { path: '/create-invoice', icon: PlusCircle, label: 'Create Invoice' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="bg-indigo-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <h1 className="text-2xl font-semibold text-center">Invoice Manager</h1>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              location.pathname === item.path
                ? 'bg-indigo-900 text-white'
                : 'hover:bg-indigo-700'
            }`}
          >
            <item.icon className="inline-block mr-2 w-5 h-5" />
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;