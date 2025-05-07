import React, { useEffect } from 'react';

const RobloxStudioPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Roblox Studio</h1>
        
        <div className="prose prose-lg">
          <p className="text-lg text-gray-700">
            Šajā kursā bērni apgūs pamatiemaņas, kā droši un prātīgi izmantot tehnoloģijas. Nodarbībās tiks apskatīta gan datora un interneta lietošanas pamatprasmes, gan arī digitālā higiēna – kā aizsargāt sevi tiešsaistē, kā atpazīt riskus, izvairīties no krāpšanas un būt cieņpilniem digitālajā vidē. Bērni iemācīsies rīkoties ar vārdiem, attēliem un informāciju atbildīgi, kā arī sapratīs, kā saglabāt līdzsvaru starp ekrāna laiku un reālo dzīvi. Kurss veidots rotaļīgā un bērniem saprotamā valodā, ietverot animācijas, spēles un praktiskus uzdevumus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RobloxStudioPage;