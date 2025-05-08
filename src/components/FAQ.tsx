import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 bg-[#e0f2ef]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Biežāk uzdotie jautājumi
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Kas ir Edulinks?
            </h3>
            <p className="text-gray-600">
              Edulinks ir moderna tiešsaistes izglītības platforma, kas piedāvā kvalitatīvus kursus bērniem un jauniešiem digitālo prasmju apguvei.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Kā notiek mācības?
            </h3>
            <p className="text-gray-600">
              Visi kursi notiek tiešsaistē online platformā, reizi nedēļā, ar praktiskiem projektiem un kvalificētu pasniedzēju atbalstu.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Kā varu pieteikties?
            </h3>
            <p className="text-gray-600">
              Jūs varat aizpildīt kontaktinformāciju mūsu mājaslapā, un mēs ar Jums sazināsimies tuvākajā laikā. Alternatīvi – droši raksti uz e-pastu online@edulinks.lv, lai saņemtu papildinformāciju vai pieteiktos kursiem.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Vai ir vecuma ierobežojumi?
            </h3>
            <p className="text-gray-600">
              Jā, katram kursam ir savs vecuma diapazons no 6 līdz 18 gadiem atkarībā no tēmas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;