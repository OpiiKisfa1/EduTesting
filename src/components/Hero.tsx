import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1c8f7a] via-[#1c8f7a] to-green-500 text-white pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[15%] w-64 h-64 rounded-full bg-green-400 bg-opacity-20 animate-float"></div>
        <div className="absolute bottom-[20%] left-[10%] w-48 h-48 rounded-full bg-[#1c8f7a] bg-opacity-20 animate-float-delayed"></div>
        <div className="absolute top-[40%] left-[25%] w-32 h-32 rounded-full bg-yellow-300 bg-opacity-10 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Veido Savu Nākotni Caur{' '}
              <span className="text-[#d8f043]">Interaktīvu Mācīšanos</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#e0f2ef]">
              Pievienojies mūsu tiešsaistes Zoom kursiem un apgūsti digitālās
              prasmes rītdienas pasaulei.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToCourses}
                className="bg-[#1c8f7a] border-2 border-white text-white hover:bg-[#25b99c] font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 shadow-lg"
              >
                Pieteikties
              </button>
              <a
                href="#courses"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1c8f7a] font-semibold py-3 px-8 rounded-full transition-all"
              >
                Apskatīt Kursus <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/2bFSauN0fb8"
                title="Educational Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;