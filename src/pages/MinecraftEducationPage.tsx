import React, { useEffect } from 'react';

const MinecraftEducationPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Minecraft Education</h1>
        
        <div className="prose prose-lg">
          <p className="text-lg text-gray-700 mb-6">
            Šis kurss iepazīstina bērnus ar Minecraft izglītojošo potenciālu. Nodarbībās dalībnieki apgūs spēles pamatprincipus, būvniecības loģiku, resursu pārvaldību un vienlaikus attīstīs radošās un loģiskās domāšanas prasmes.
          </p>
          
          <p className="text-gray-700 mb-6">
            Programmā iekļauta iepazīšanās ar dzīvniekiem, spēles mehāniku un automatizāciju, kā arī spēlēšana kopā ar citiem dalībniekiem drošā tiešsaistes vidē.
          </p>
          
          <p className="text-gray-700 mb-6">
            Kursa noslēgumā dalībnieki veidos paši savu projektu, prezentēs to grupai un saņems atgriezenisko saiti. Tiek apskatītas arī modifikācijas, sarkano akmeņu (Redstone) mehānika, kā arī spēles estētika un arhitektūra.
          </p>
          
          <p className="text-gray-700">
            Šis kurss veido lielisku tiltu starp spēli un mācīšanos — bērni gūs zināšanas, kas noder gan skolas priekšmetos, gan nākotnes digitālajās prasmēs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MinecraftEducationPage;