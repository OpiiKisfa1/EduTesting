import React, { useState } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../utils/supabase';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

  if (!isOpen) return null;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^[A-Za-zĀāČčĒēĢģĪīĶķĻļŅņŠšŪūŽž\s]*$/.test(value)) {
      setName(value);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^[0-9]*$/.test(value)) {
      setPhone(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{ name, phone }]);

      if (error) throw error;

      setSubmitStatus('success');
      setName('');
      setPhone('');
      setTimeout(() => onClose(), 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Sazinies ar Mums
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jūsu Vārds
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c8f7a] focus:border-[#1c8f7a]"
              placeholder="Ievadiet savu vārdu"
              required
              minLength={2}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefona Numurs
            </label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1c8f7a] focus:border-[#1c8f7a]"
              placeholder="Ievadiet savu telefona numuru"
              required
              minLength={8}
            />
          </div>

          {submitStatus === 'success' && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
              Veiksmīgi nosūtīts!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              Radās kļūda. Lūdzu, mēģiniet vēlreiz.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#1c8f7a] hover:bg-[#25b99c] text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Nosūta...' : 'Nosūtīt'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;