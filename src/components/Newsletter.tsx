import React, { useState } from 'react';
import { supabase } from '../utils/supabase';

const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null
  );

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
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="py-16 bg-[#e0f2ef]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sazinies ar Mums
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Atstājiet savu kontaktinformāciju, un mēs ar jums sazināsimies.
          </p>

          {submitStatus === 'success' ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg">
              Paldies par jūsu ziņu! Mēs drīzumā ar jums sazināsimies.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto space-y-4"
            >
              <div>
                <input
                  type="text"
                  placeholder="Jūsu vārds"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1c8f7a]"
                  value={name}
                  onChange={handleNameChange}
                  required
                  minLength={2}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Jūsu telefona numurs"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1c8f7a]"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  minLength={8}
                />
              </div>
              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm">
                  Radās kļūda. Lūdzu, mēģiniet vēlreiz.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1c8f7a] hover:bg-[#25b99c] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Nosūta...' : 'Nosūtīt'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;