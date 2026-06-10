import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

function App() {
  const handleContactClick = () => {
    // Scroll to the Contact/Resume section smoothly
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0C0C0C] min-h-screen w-full overflow-x-clip flex flex-col items-center">
      {/* 1. Hero Section */}
      <HeroSection onContactClick={handleContactClick} />

      {/* 2. About Section */}
      <AboutSection onContactClick={handleContactClick} />

      {/* 4. Skills Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* 6. Contact & Resume Section */}
      <ContactSection />
    </div>
  );
}

export default App;
