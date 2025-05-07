import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';
import { COURSES } from '../utils/constants';

const CourseSection: React.FC = () => {
  const navigate = useNavigate();

  const handleLearnMore = (courseId: number) => {
    switch (courseId) {
      case 5:
        navigate('/aipamati');
        break;
      case 1:
        navigate('/robloxstudio');
        break;
      case 2:
        navigate('/programmesanaspamati');
        break;
      case 3:
        navigate('/minecrafteducation');
        break;
      case 4:
        navigate('/datorpratibaundrosiba');
        break;
    }
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mūsu Zoom Kursi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atklāj mūsu interaktīvos tiešsaistes kursus, kas paredzēti būtisku
            prasmju apguvei digitālajā pasaulē.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {COURSES.map((course, index) => (
            <div
              key={course.id}
              className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-1/2">
                <CourseCard course={course} index={index} />
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-lg text-gray-600">{course.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-gray-700">Atālinātas nodarbības</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-gray-700">Praktiskie projekti</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className="text-gray-700">
                      Augsti kvalificēti pasniedzēji
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => handleLearnMore(course.id)}
                  className="mt-6 bg-[#1c8f7a] hover:bg-[#25b99c] text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Uzzināt vairāk
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;