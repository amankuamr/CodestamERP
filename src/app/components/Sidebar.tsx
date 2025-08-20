'use client';

import { 
  DashboardIcon, 
  SalesIcon, 
  InventoryIcon, 
  CustomersIcon, 
  SuppliersIcon, 
  FinanceIcon, 
  ReportsIcon, 
  AIInsightsIcon, 
  SettingsIcon 
} from './Icons';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeView: string;
  onViewChange: (view: string) => void;
}

const Sidebar = ({ isOpen, onClose, activeView, onViewChange }: SidebarProps) => {

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <DashboardIcon size={20} />, badge: null },
    { id: 'sales', name: 'Sales', icon: <SalesIcon size={20} />, badge: '12' },
    { id: 'inventory', name: 'Inventory', icon: <InventoryIcon size={20} />, badge: null },
    { id: 'customers', name: 'Customers', icon: <CustomersIcon size={20} />, badge: '3' },
    { id: 'suppliers', name: 'Suppliers', icon: <SuppliersIcon size={20} />, badge: null },
    { id: 'finance', name: 'Finance', icon: <FinanceIcon size={20} />, badge: null },
    { id: 'reports', name: 'Reports', icon: <ReportsIcon size={20} />, badge: null },
    { id: 'ai-insights', name: 'AI Insights', icon: <AIInsightsIcon size={20} />, badge: 'NEW' },
    { id: 'settings', name: 'Settings', icon: <SettingsIcon size={20} />, badge: null },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 bg-white border-r border-gray-200">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 px-4 bg-blue-600">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">C</span>
              </div>
              <span className="text-white font-bold text-xl">Codestam</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeView === item.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.badge === 'NEW' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@codestam.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-4 bg-blue-600">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">C</span>
              </div>
              <span className="text-white font-bold text-xl">Codestam</span>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onViewChange(item.id);
                  onClose();
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeView === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    item.badge === 'NEW' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@codestam.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;