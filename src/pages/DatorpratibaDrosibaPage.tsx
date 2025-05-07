import React, { useEffect } from 'react';

const DatorpratibaDrosibaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Datorpratība un Drošība</h1>
        
        <div className="prose prose-lg">
          <p className="text-lg text-gray-700 mb-6">
            Digitālās prasmes ir kļuvušas par ikdienas nepieciešamību – gan mācībās, gan saziņā, gan nākotnes darba tirgū. Šis kurss palīdz jauniešiem iemācīties būt atbildīgiem un gudriem interneta lietotājiem, vienlaikus sniedzot pamatus datoru un tiešsaistes rīku lietošanā.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Ko iemācīsies?</h2>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#1c8f7a] mr-2">•</span>
              Droša interneta lietošana, datu aizsardzība un paroļu pārvaldība
            </li>
            <li className="flex items-start">
              <span className="text-[#1c8f7a] mr-2">•</span>
              Kritiskā domāšana un medijpratība – kā atpazīt viltus informāciju
            </li>
            <li className="flex items-start">
              <span className="text-[#1c8f7a] mr-2">•</span>
              Darbs ar mākoņpakalpojumiem, e-pastu un tiešsaistes sadarbības rīkiem
            </li>
            <li className="flex items-start">
              <span className="text-[#1c8f7a] mr-2">•</span>
              Cieņpilna saziņa un uzvedība digitālajā vidē
            </li>
            <li className="flex items-start">
              <span className="text-[#1c8f7a] mr-2">•</span>
              Interneta etiķete un digitālā reputācija
            </li>
          </ul>
          
          <p className="text-gray-700 mt-6">
            Kurss ir piemērots gan tiem, kuriem vēl nav pamatu, gan tiem, kas vēlas nostiprināt esošās zināšanas un būt soli priekšā digitālajām prasībām nākotnē.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatorpratibaDrosibaPage;