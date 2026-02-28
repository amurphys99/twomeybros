import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Phone, Mail, AlertCircle } from 'lucide-react';

// Validation helpers
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-+()]{8,15}$/;

const validateEmail = (email: string) => EMAIL_REGEX.test(email.trim());
const validatePhone = (phone: string) => PHONE_REGEX.test(phone.replace(/\s/g, '')) && phone.replace(/\D/g, '').length >= 8;

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectDetails?: string;
}

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectDetails: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (8-15 digits)';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    } else if (formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide more details (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    setErrors({});

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ fullName: '', email: '', phone: '', projectDetails: '' });
    }, 1500);
  };

  const handleInputChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setFormData({ fullName: '', email: '', phone: '', projectDetails: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Ready to Start Your Project?</h2>
            <p className="text-slate-500 text-lg mb-12">
              Book a free design consultation today. We'll visit your garden, discuss your vision, and provide a detailed quote within 48 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Call Us</p>
                  <p className="font-bold text-primary">+353 (0)21 324 6657</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email Us</p>
                  <p className="font-bold text-primary">hello@twomeybros.ie</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-xl">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
                <p className="text-slate-500">We'll be in touch within 24 hours to schedule your consultation.</p>
                <button 
                  onClick={resetForm}
                  className="mt-8 text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700"
                  >
                    <AlertCircle size={20} />
                    <p className="text-sm">Something went wrong. Please try again.</p>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange('fullName')}
                      className={`w-full px-6 py-4 rounded-xl bg-white border focus:ring-4 focus:ring-accent/10 outline-none transition-all ${
                        errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-accent'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.fullName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      className={`w-full px-6 py-4 rounded-xl bg-white border focus:ring-4 focus:ring-accent/10 outline-none transition-all ${
                        errors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-accent'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="087 123 4567"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    className={`w-full px-6 py-4 rounded-xl bg-white border focus:ring-4 focus:ring-accent/10 outline-none transition-all ${
                      errors.phone ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-accent'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.phone}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1">Project Details</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your dream garden room..."
                    value={formData.projectDetails}
                    onChange={handleInputChange('projectDetails')}
                    className={`w-full px-6 py-4 rounded-xl bg-white border focus:ring-4 focus:ring-accent/10 outline-none transition-all resize-none ${
                      errors.projectDetails ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-accent'
                    }`}
                  ></textarea>
                  {errors.projectDetails && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.projectDetails}
                    </p>
                  )}
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Sending...' : (
                    <>
                      Request Free Consultation
                      <Send size={20} />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-slate-400">
                  No commitment. Free site survey included.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
