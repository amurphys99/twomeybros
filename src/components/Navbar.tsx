import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { 
      name: 'Products', 
      href: '#',
      dropdown: [
        { name: 'Garden Offices', href: '/garden-offices' },
        { name: 'Home Gyms', href: '/home-gyms' },
        { name: 'Living Spaces', href: '/living-spaces' }
      ]
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.href.startsWith('#') ? (
                <span className={`text-sm font-medium transition-colors flex items-center gap-1 cursor-default ${
                  isScrolled || !isHome ? 'text-slate-600' : 'text-white/90'
                }`}>
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </span>
              ) : (
                <Link 
                  to={link.href}
                  className={`text-sm font-medium transition-colors flex items-center gap-1 ${
                    isScrolled || !isHome ? 'text-slate-600 hover:text-primary' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>
              )}
              
              {link.dropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[180px]">
                    {link.dropdown.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.href} 
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Toggle - min 44px touch target for accessibility */}
        <button 
          className="lg:hidden p-3 -m-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className={isScrolled || !isHome ? 'text-primary' : 'text-white'} /> : <Menu className={isScrolled || !isHome ? 'text-primary' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-6 lg:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.href.startsWith('#') ? (
                    <span className="text-lg font-medium text-slate-900 flex items-center justify-between">
                      {link.name}
                    </span>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-lg font-medium text-slate-900 flex items-center justify-between"
                    >
                      {link.name}
                    </Link>
                  )}
                  {link.dropdown && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-slate-100">
                      {link.dropdown.map((item) => (
                        <Link key={item.name} to={item.href} className="text-slate-500 text-sm">{item.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/contact" className="w-full bg-primary text-white py-4 rounded-xl font-bold mt-4 text-center">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
