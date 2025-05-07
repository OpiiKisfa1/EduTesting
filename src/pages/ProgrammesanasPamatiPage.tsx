import React, { useEffect } from 'react';

const ProgrammesanasPamatiPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Programmēšanas Pamati</h1>
        
        <div className="prose prose-lg">
          <p className="text-lg text-gray-700 mb-6">
            Šis kurss paredzēts jauniešiem, kuri vēlas saprast, kā strādā tehnoloģijas un kā tās radīt pašiem.
          </p>
          
          <p className="text-gray-700 mb-6">
            Nodarbību laikā dalībnieki soli pa solim apgūs programmēšanas pamatus, sākot no vienkāršiem jēdzieniem, līdz nelielam noslēguma projektam. Kursā tiks izmantotas populāras programmēšanas valodas (piemēram, Python), un katru nedēļu būs praktiski uzdevumi, kas palīdzēs iegaumēt mācīto.
          </p>
          
          <p className="text-gray-700 mb-6">
            Tiek apskatītas arī tādas tēmas kā datu tipi, algoritmi, funkcijas, objektorientētā programmēšana, kļūdu apstrāde un failu darbs. Nodarbības palīdzēs attīstīt gan tehniskās prasmes, gan loģisko domāšanu.
          </p>
          
          <p className="text-gray-700 mb-6">
            Programmas noslēgumā katrs dalībnieks izstrādās savu mazo projektu, apvienojot visu, kas apgūts iepriekšējās nodarbībās. Kurss veido spēcīgu pamatu nākotnes mācībām un karjerai IT jomā.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgrammesanasPamatiPage;