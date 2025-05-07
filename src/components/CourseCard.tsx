import React from 'react';
import { Course } from '../types';
import {
  TowerControl as GameController,
  Code,
  Shield,
  Brain,
  Box as Blocks,
} from 'lucide-react';

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  const getIcon = () => {
    switch (course.icon) {
      case 'GameController':
        return <GameController size={48} className="text-blue-500" />;
      case 'Code':
        return <Code size={48} className="text-green-500" />;
      case 'Blocks':
        return <Blocks size={48} className="text-yellow-500" />;
      case 'Shield':
        return <Shield size={48} className="text-purple-500" />;
      case 'Brain':
        return <Brain size={48} className="text-red-500" />;
      default:
        return <GameController size={48} className="text-blue-500" />;
    }
  };

  const getCourseImage = () => {
    switch (course.icon) {
      case 'Brain':
        return 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg';
      case 'GameController':
        return 'https://i.redd.it/17vxwz5lr0081.png';
      case 'Code':
        return 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg';
      case 'Blocks':
        return 'https://wallpapers.com/images/hd/minecraft-education-edition-1920-x-1080-wallpaper-g6nrn6bgp6kq0b1q.jpg';
      case 'Shield':
        return 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg';
      default:
        return '';
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('newsletter');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const colors = [
    'border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100',
    'border-green-200 bg-gradient-to-br from-green-50 to-green-100',
    'border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100',
    'border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100',
    'border-red-200 bg-gradient-to-br from-red-50 to-red-100',
  ];

  const colorClass = colors[index % colors.length];

  return (
    <div
      className={`relative flex flex-col rounded-2xl shadow-lg border-2 ${colorClass} overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
    >
      <div className="absolute top-0 right-0 w-32 h-32 -mr-12 -mt-12 rounded-full bg-white bg-opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 -ml-8 -mb-8 rounded-full bg-white bg-opacity-30"></div>

      <div className="relative z-10 p-8">
        <div className="flex items-center mb-6">
          <div className="p-4 rounded-xl bg-white shadow-md">{getIcon()}</div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-gray-700">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-gray-700">{course.certificate}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <span className="text-gray-700">{course.price}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <span className="text-gray-700">Vecums: {course.ageRange}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-gray-700">Uzsāc apmācības jau pēc {course.startDays} dienām</span>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={scrollToContact}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
          >
            Pieteikties
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <img
          src={getCourseImage()}
          alt={course.title}
          className="w-full h-full object-cover opacity-10"
        />
      </div>
    </div>
  );
};

export default CourseCard;