import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center">
              <Logo variant="light" size="lg" />
            </div>
            <p className="text-white/60 leading-relaxed">
              Crafting premium garden rooms in Cork since 2009. We combine traditional joinery with modern sustainability.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/garden-offices" className="hover:text-accent transition-colors">Garden Offices</Link></li>
              <li><Link to="/home-gyms" className="hover:text-accent transition-colors">Home Gyms</Link></li>
              <li><Link to="/living-spaces" className="hover:text-accent transition-colors">Living Spaces</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4 text-sm">Get design inspiration and project updates.</p>
            {status === 'success' ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-white/10 text-emerald-300">
                  <CheckCircle2 size={20} />
                  <p className="text-sm font-medium">Thanks! You're subscribed.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-xs text-white/60 hover:text-accent transition-colors"
                >
                  Subscribe with different email
                </button>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className={`bg-white/5 border rounded-lg px-4 py-2 text-sm outline-none focus:border-accent w-full ${
                      error ? 'border-red-400/50' : 'border-white/10'
                    }`}
                  />
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-accent text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-opacity-90 transition-all disabled:opacity-70 shrink-0"
                  >
                    {status === 'submitting' ? '...' : 'Join'}
                  </button>
                </div>
                {error && (
                  <p className="text-sm text-red-300 flex items-center gap-1">
                    <AlertCircle size={14} />
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© 2026 Twomey Bros Garden Rooms. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
