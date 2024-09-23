import React, { useRef, useEffect, useState } from 'react';
import './YashiSamsungPortfolio.css';

const skillsData = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
  { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Linux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
];

const specializations = ['Deep Learning', 'Natural Language Processing', 'Data Analytics'];

const experienceData = [
    { company: 'Nokia', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg', description: 'Software QA Intern, Nokia (May 2024 - Present)'},
    { company: 'Purdue University Fort Wayne', logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFLdPAifd1GhA/company-logo_100_100/company-logo_100_100/0/1714406017819/purdue_university_fort_wayne_logo?e=1735171200&v=beta&t=giqSt-VszQgVFcnclxYqHSdT5o-p5XnVRqujwhEfqN0', description: 'Graduate Research Assistant, Purdue University (August 2023 - December 2024)' },
    { company: 'Vera Bradley', logo: 'https://media.licdn.com/dms/image/v2/D560BAQGOC-h3jG97Aw/company-logo_100_100/company-logo_100_100/0/1720702091343/vera_bradley_logo?e=1735171200&v=beta&t=LTCRzloPRmYcnyu3u8ZwvUwSDvVnnYXsfjpsheEI8QQ', description: 'D365 Developer, Vera Bradley (May 2022 - August 2022)' },
  ];

const YashiSamsungPortfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      <nav className="bg-[#1428A0] text-white p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold" style={{
              fontFamily: 'Roboto, Arial, sans-serif',
              letterSpacing: '-0.5px',
              fontWeight: '700'
            }}>YASHI</span>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
          <div className={`w-full md:w-auto md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} mt-4 md:mt-0`}>
            {[
              ['about', 'About Me'],
              ['skills', 'Tech Specs'],
              ['experience', 'Performance'],
              ['contact', 'Connect']
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`block w-full md:w-auto text-left md:inline-block py-2 md:py-0 hover:underline ${activeSection === key ? 'font-bold' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <header className="bg-samsung-blue text-white py-20 md:h-screen flex items-center relative overflow-hidden">
        {/* Samsung-inspired background */}
        <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-repeat" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E')",
            backgroundSize: "60px 60px"
            }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
            {/* Black sphere with "YASHI" text */}
            <div className="inline-block mb-8">
            <div className="w-48 h-48 rounded-full bg-black flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-white" style={{
                fontFamily: 'Roboto, Arial, sans-serif',
                letterSpacing: '2px'
                }}>YASHI</span>
            </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{
            fontFamily: 'Roboto, Arial, sans-serif',
            letterSpacing: '-1px',
            fontWeight: 'bold'
            }}>Yashi Yadav</h1>
            <p className="text-xl mb-2">Machine Learning Engineer • Data Scientist • AI Enthusiast</p>
            <p className="text-lg mb-8 italic">Innovating for Tomorrow</p>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
            <button onClick={() => scrollToSection('contact')} className="w-full md:w-auto bg-white text-samsung-blue font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
                Connect Now
            </button>
            <a href={`${import.meta.env.BASE_URL}assets/Yadav_Yashi_resume.pdf`} download className="w-full md:w-auto inline-block bg-transparent text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300 border-2 border-white">
                Download Resume
            </a>
            </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4">
        {Object.entries(sectionRefs).map(([sectionId, ref]) => (
          <section
            key={sectionId}
            id={sectionId}
            ref={ref}
            className="mb-20 md:mb-32 pt-20 md:pt-32"
          >
            <div className="w-full">
              <h2 className="text-3xl font-bold text-[#1428A0] mb-4">
                {sectionId === 'about' && 'About Me'}
                {sectionId === 'skills' && 'Tech Specs'}
                {sectionId === 'experience' && 'Performance'}
                {sectionId === 'contact' && 'Connect'}
              </h2>
              {sectionId === 'about' && (
                <p className="text-gray-700">
                  I am a Machine Learning Engineer and Software Developer with  a strong foundation in AI/ML technique and hands-on experience in deep learning and natural language processing. Highly skilled in developing and deploying ML models using TensorFlow and PyTorch. Excited to create solutions using machine learning and deep learning techniques and solve complex problems with cool solutions.
                </p>
              )}
              {sectionId === 'skills' && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-[#1428A0]">Core Features:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                    {skillsData.map((skill, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <img src={skill.logo} alt={skill.name} className="w-12 h-12 mb-2" />
                        <span className="text-sm text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#1428A0]">Specializations:</h3>
                  <div className="flex flex-wrap gap-4">
                    {specializations.map((spec, index) => (
                      <span key={index} className="bg-[#1428A0] text-white px-3 py-1 rounded-full text-sm">
                        {spec}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {sectionId === 'experience' && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-[#1428A0]">Performance History:</h3>
                  <ul className="space-y-4">
                    {experienceData.map((exp, index) => (
                      <li key={index} className="flex items-center space-x-4">
                        <img src={exp.logo} alt={exp.company} className="w-24 h-12 object-contain" />
                        <span className="text-lg">{exp.company}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {sectionId === 'contact' && (
                <>
                  <h3 className="text-xl font-semibold mb-4 text-[#1428A0]">Get in Touch:</h3>
                  <p>(260) 246-8543</p>
                  <p>yashiyadav0901@gmail.com</p>
                  <div className="flex space-x-4 mt-4">
                    <a 
                      href="https://linkedin.com/in/yashiyadav" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#1428A0] hover:text-[#0077B5]"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-8 h-8" />
                    </a>
                    <a 
                      href="https://github.com/yashiyadav1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#1428A0] hover:text-[#333]"
                    >
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8" />
                    </a>
                  </div>
                </>
              )}
            </div>
          </section>
        ))}
      </main>

      <footer className="bg-gray-100 text-center py-4">
        <p className="text-[#1428A0]">"Do what you can't" - Pushing the boundaries of innovation</p>
      </footer>
    </div>
  );
};

export default YashiSamsungPortfolio;