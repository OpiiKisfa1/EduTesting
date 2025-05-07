import React, { useEffect } from 'react';

const AIPamatiPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">AI pamati nākotnei</h1>
        
        <div className="prose prose-lg">
          <p className="text-lg text-gray-700 mb-6">
            Šis kurss ir īpaši izstrādāts jauniešiem, lai palīdzētu viņiem izprast vienu no ietekmīgākajām tehnoloģijām mūsdienās – mākslīgo intelektu (MI).
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Nodarbības veidotas tā, lai bērni spētu:</h2>
          
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-[#1c8f7a] mr-2">•</span>
              Saprast, kas ir MI, kā tas strādā un kur tas tiek izmantots
            </li>
            <li className="flex items-start">
              <span className="text-[#1c8f7a] mr-2">•</span>
              Praktiski apgūt datu apstrādes pamatus un vienkāršus algoritmus
            </li>
            <li className="flex items-start">
              <span className="text-[#1c8f7a] mr-2">•</span>
              Attīstīt kritisko domāšanu un risināt uzdevumus, kas balstīti reālās dzīves situācijās
            </li>
            <li className="flex items-start">
              <span className="text-[#1c8f7a] mr-2">•</span>
              Piedalīties grupu projektos, kuros izstrādā savas idejas ar MI elementiem
            </li>
            <li className="flex items-start">
              <span className="text-[#1c8f7a] mr-2">•</span>
              Diskutēt par MI ētiku un sociālo ietekmi, veicinot atbildīgu tehnoloģiju lietošanu
            </li>
          </ul>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700">
              Kursa beigās dalībnieki saņems apliecinājumu par piedalīšanos un personīgu ieteikumu turpmākai attīstībai.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPamatiPage;