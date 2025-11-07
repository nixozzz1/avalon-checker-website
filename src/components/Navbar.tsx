import { Link, useLocation } from 'react-router-dom';
import { Download, FileText, HelpCircle, Shield, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Главная', icon: Download },
    { path: '/download', label: 'Скачать', icon: Download },
    { path: '/updates', label: 'Обновления', icon: RefreshCw },
    { path: '/security', label: 'Безопасность', icon: Shield },
    { path: '/faq', label: 'FAQ', icon: HelpCircle },
    { path: '/docs', label: 'Документация', icon: FileText },
    { path: '/privacy', label: 'Политика', icon: Shield },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full group-hover:bg-primary-500/30 transition-all"></div>
              <img 
                src="/icon.ico" 
                alt="Avalon Checker" 
                className="w-10 h-10 relative z-10 group-hover:scale-110 transition-transform"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Avalon Checker</h1>
              <p className="text-xs text-slate-400">by nixozzz</p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:text-primary-400"
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary-500/10 border border-primary-500/20 rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-white/5 rounded-lg">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
