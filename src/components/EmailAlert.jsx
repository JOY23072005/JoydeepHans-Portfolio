import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, X } from 'lucide-react';

const EmailAlert = ({ status, message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 5000); // Auto-close after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  const isSuccess = status === 'success';
  const Icon = isSuccess ? CheckCircle2 : XCircle;

  return (
    <div 
      className={`
        fixed bottom-4 right-4 z-50 p-4 pr-8 rounded-lg border shadow-lg
        ${isSuccess ? 
          'bg-green-50 text-green-800 border-green-200' : 
          'bg-red-50 text-red-800 border-red-200'
        }
        animate-fade-in
      `}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
          isSuccess ? 'text-green-500' : 'text-red-500'
        }`} />
        <div className="flex-1">
          <p className="text-sm font-medium">
            {message || (
              isSuccess ? 'Email sent successfully!' : 'Failed to send email'
            )}
          </p>
        </div>
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 p-1 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Close alert"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default EmailAlert;