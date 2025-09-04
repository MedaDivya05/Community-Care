import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Droplets, User, LogOut, Menu, X, Globe } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const { t } = useTranslation();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
    setIsMenuOpen(false);
  };

  const navLinks = [
    { to: user ? '/home' : '/', label: t('nav.home') },
    { to: '/health', label: t('nav.health') },
    { to: '/water', label: t('nav.water') },
    { to: '/waste', label: t('nav.waste') },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              Community Care
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Language switcher and Auth */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                  <User className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-red-600 hover:text-red-700 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:block">{t('nav.logout')}</span>
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {t('nav.login')}
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('nav.signup')}
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              {!user && (
                <div className="pt-2 space-y-2">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  >
                    {t('nav.login')}
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {t('nav.signup')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}