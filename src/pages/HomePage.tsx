import React from 'react';
import Hero from '../components/Hero';
import CourseSection from '../components/CourseSection';
import Newsletter from '../components/Newsletter';
import ContactPopup from '../components/ContactPopup';

const HomePage: React.FC = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  React.useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('hasVisited', 'true');
      }, 30000); // 30 second delay
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <Hero />
      <CourseSection />
      <Newsletter />
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default HomePage;