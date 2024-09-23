import React from 'react';
import { Card, CardContent } from '../components/ui/card.jsx';
import { ChevronRight, Download, Linkedin, Github } from 'lucide-react';

const SamsungInspiredPortfolio = () => {
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
    { 
      company: 'Nokia', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg', 
      title: 'Software QA Intern',
      period: 'May 2024 - Present',
      description: 'Developed RESTful API using FastAPI, engineered backend systems, and implemented AI model deployment POC in microservices architecture.'
    },
    { 
      company: 'Purdue University Fort Wayne', 
      logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFLdPAifd1GhA/company-logo_100_100/company-logo_100_100/0/1714406017819/purdue_university_fort_wayne_logo?e=1735171200&v=beta&t=giqSt-VszQgVFcnclxYqHSdT5o-p5XnVRqujwhEfqN0', 
      title: 'Graduate Research Assistant',
      period: 'August 2023 - December 2024',
      description: 'Designed and implemented deep learning models for steganographic applications using TensorFlow.'
    },
    { 
      company: 'Vera Bradley', 
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQGOC-h3jG97Aw/company-logo_100_100/company-logo_100_100/0/1720702091343/vera_bradley_logo?e=1735171200&v=beta&t=LTCRzloPRmYcnyu3u8ZwvUwSDvVnnYXsfjpsheEI8QQ', 
      title: 'D365 Developer Intern',
      period: 'May 2022 - August 2022',
      description: 'Enhanced Microsoft Dynamics 365 and designed Power Automate Flows for critical Batch Jobs.'
    },
  ];

  const projects = [
    { name: 'Adaptive Reading Companion (ARC)', description: 'Chrome extension enabling bionic reading for people with Meares Irlen syndrome and various reading disabilities.', github: 'https://github.com/yashiyadav1/ARC' },
    { name: 'Jerry: The Virtual Assistant', description: 'AI-powered voice assistant using ChatGPT API for communication and task execution.', github: 'https://github.com/yashiyadav1/Jerry' },
    { name: 'Hateful Speech Classifier', description: 'Scalable content moderation system using CNN and BERT models, achieving 93.50% accuracy.', github: 'https://github.com/yashiyadav1/Hate-Speech-Detection' },
    { name: 'ASL Recognition', description: 'Real-time hand gesture recognition for American Sign Language using CNN and LSTM.', github: 'https://github.com/yashiyadav1/ASL-recognition' },
  ];

  return (
    <div className="bg-black text-white min-h-screen text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video 
          className="absolute w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/api/placeholder/1920/1080" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Yashi Yadav</h1>
          <p className="text-xl sm:text-2xl mb-8">Redefining the future with AI and ML</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://github.com/yashiyadav1" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-200 transition duration-300">
              Explore Projects
            </a>
            <a href="/Samsung/assets/Yadav_Yashi_Resume.pdf" download className="bg-blue-600 text-white px-6 py-2 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center">
              <Download className="mr-2" size={20} /> Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Cutting-Edge Expertise</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-8">
            {skillsData.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={skill.logo} alt={skill.name} className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
                <p className="text-center text-xs sm:text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Specializations</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {specializations.map((spec, index) => (
                <span key={index} className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">{spec}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Professional Experience</h2>
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center sm:items-start">
              <img src={exp.logo} alt={exp.company} className="w-16 h-16 mb-4 sm:mb-0 sm:mr-6" />
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-base sm:text-lg text-gray-300 mb-1">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                <p className="text-sm sm:text-base text-gray-200">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Groundbreaking Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800 border-none hover:bg-gray-700 transition duration-300">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-white">{project.name}</h3>
                  <p className="text-sm sm:text-base mb-4 sm:mb-6 text-gray-300">{project.description}</p>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm sm:text-base">
                    Learn more <ChevronRight className="ml-1 sm:ml-2" size={16} />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Ready to innovate together?</h2>
          <a href="mailto:yashiyadav0901@gmail.com" className="bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-200 transition duration-300 inline-block">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 sm:py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-sm sm:text-base">&copy; 2024 Yashi Yadav. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/yashiyadav/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center text-sm sm:text-base">
              <Linkedin className="mr-1 sm:mr-2" size={16} /> LinkedIn
            </a>
            <a href="https://github.com/yashiyadav1" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center text-sm sm:text-base">
              <Github className="mr-1 sm:mr-2" size={16} /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SamsungInspiredPortfolio;