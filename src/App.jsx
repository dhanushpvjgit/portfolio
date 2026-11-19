import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, MapPin, GraduationCap, Code, ChevronDown, Globe, Briefcase } from 'lucide-react';
import { site, translations } from './content';

export default function Portfolio() {
  const [language, setLanguage] = useState('en');
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();
  const t = translations[language];

  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.98)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'de' ? 'en' : 'de');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Fixed Header */}
      <motion.header
        style={{ opacity: headerOpacity, backgroundColor: headerBackground }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-gray-900"
            >
              {site.initials}
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(t.nav).map(([key, value], index) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => scrollToSection(key === 'about' ? 'about' : key)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                    activeSection === key ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {value}
                </motion.button>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-all duration-300"
            >
              <Globe size={16} />
              {language === 'de' ? 'EN' : 'DE'}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.p
                variants={itemVariants}
                className="text-blue-600 font-medium mb-4"
              >
                {t.hero.greeting}
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
              >
                {site.name}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 mb-8 leading-relaxed"
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex gap-4"
              >
                <a
                  href={`mailto:${site.email}`}
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  {t.hero.cta}
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                  GitHub
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 mt-8"
              >
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-gray-700" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="p-3 bg-gray-100 hover:bg-blue-100 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Mail size={20} className="text-gray-700" />
                </a>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-md mx-auto"
              >
             <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-bold text-white tracking-wider select-none">
                    {site.initials}
                  </span>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={32} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">{t.about.title}</h2>
            <motion.p
              variants={fadeInUpVariants}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              {t.about.content}
            </motion.p>
            <motion.a
              variants={fadeInUpVariants}
              href="#experience"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              {t.about.button}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              {t.experience.title}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-12 leading-relaxed"
            >
              {t.experience.description}
            </motion.p>

            <div className="space-y-8">
              {t.experience.jobs.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Briefcase size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.duration}</p>
                      {job.points && (
                        <ul className="mt-4 space-y-2 list-disc pl-5 text-gray-700 leading-relaxed">
                          {job.points.map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {site.resumeUrl && (
              <motion.div
                variants={itemVariants}
                className="mt-12 flex gap-4"
              >
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  {t.experience.download}
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.education.title}
            </motion.h2>

            <div className="space-y-8">
              {t.education.items.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 rounded-xl">
                      <GraduationCap size={24} className="text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-purple-600 font-medium mb-2">{edu.university}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            >
              {t.projects.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {t.projects.items.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <Code size={24} className="text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
              >
                {t.contact.title}
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.contact.email}</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <MapPin size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t.contact.location}</p>
                    <p className="text-lg font-medium text-gray-900">{t.contact.locationValue}</p>
                  </div>
                </div>
              </motion.div>

              <motion.a
                variants={itemVariants}
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Mail size={20} />
                {t.contact.button}
              </motion.a>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-full max-w-md mx-auto"
              >
               <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-7xl md:text-8xl font-bold text-white tracking-wider select-none">
                    {site.initials}
                  </span>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl blur-3xl opacity-30"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-gray-900 mb-2">{site.name}</p>
              <p className="text-gray-600">
                {t.footer.tagline}
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Github size={20} className="text-gray-700" />
              </a>
              <a
                href={`mailto:${site.email}`}
                className="p-3 bg-white hover:bg-blue-50 rounded-full transition-all duration-300 hover:scale-110 shadow-sm"
              >
                <Mail size={20} className="text-gray-700" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm"
          >
            <p>© {site.copyrightYear} {site.name}. {t.footer.rights}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}