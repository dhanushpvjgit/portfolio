import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Github, MapPin, GraduationCap, Code, ChevronDown, Globe, Briefcase, ExternalLink } from 'lucide-react';
import Profile from './assets/profile.png';

// ─────────────────────────────────────────────────────────────
// All editable content lives here.
// ─────────────────────────────────────────────────────────────

const site = {
  name: "Dhanush",
  fullName: "Dhanush Palani Vijay Kumari",
  initials: "DPV",
  email: "dhanush.palani.vijay.kumari.job@gmail.com",
  github: "https://github.com/dhanushpvjgit",
  githubRepos: "https://github.com/dhanushpvjgit?tab=repositories",
  resumeUrl: "https://drive.google.com/drive/u/1/folders/10LGuR8yXjuXzuYGTczCVsw6qRiNxm0ZP",
  copyrightYear: 2026
};

const translations = {
  de: {
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      education: "Bildung",
      projects: "Projekte",
      contact: "Kontakt"
    },
    hero: {
      greeting: "Hallo, ich bin",
      subtitle: "Java-Backend-Entwickler mit Schwerpunkt auf Spring-Boot-Microservices, ereignisgesteuerten Systemen und performanten APIs. Erfahrung mit Kafka, Redis, PostgreSQL, REST und gRPC sowie der Entwicklung sicherer, skalierbarer Backend-Plattformen.",
      cta: "Kontaktieren Sie mich"
    },
    about: {
      title: "Wer bin ich?",
      content: "Hallo, ich bin Dhanush, Java-Backend-Entwickler und baue zuverlässige, skalierbare serverseitige Systeme. Derzeit absolviere ich einen Master in Artificial Intelligence und Robotik in Deutschland.\n\nMein fachlicher Schwerpunkt liegt auf Java- und Spring-Boot-Microservices, ereignisgesteuerten Architekturen mit Kafka und datenintensiven Services auf Basis von PostgreSQL, Redis und Elasticsearch.\n\nIch interessiere mich für Nebenläufigkeit und JVM-Interna, sauberes API-Design und Systeme, die unter Last korrekt und schnell bleiben.",
      button: "Mehr über mich"
    },
    experience: {
      title: "Berufserfahrung",
      description: "Mehr als 3 Jahre Erfahrung in der Entwicklung von Java- und Spring-Boot-Backends und ereignisgesteuerten Systemen mit Schwerpunkt auf Performance, Sicherheit und zuverlässiger Auslieferung.",
      download: "Lebenslauf herunterladen",
      jobs: [
        {
          title: "Software Engineer",
          company: "Jeeves Information Systems (Forterro)",
          duration: "06/2023 - 01/2025",
          points: [
            "Entwicklung von Kafka-basierten Event-Ingestion-Pipelines mit Retries und Dead-Letter-Queues, sodass fehlgeschlagene Events wiederhergestellt statt verloren wurden; dadurch Verkürzung der Onboarding-Zeit für Kunden um rund 40 %.",
  "Reduzierung der Antwortzeiten der Reporting-API von etwa 2 Sekunden auf 300 ms durch SQL-Tuning, Redis-Caching und HikariCP-Pooling sowie Einführung eines Rate-Limitings pro API-Key mit Redis und Bucket4j.",
  "Konzeption idempotenter APIs, sodass wiederholte oder doppelte Anfragen nie zu doppelten Transaktionen führten; Einsatz von RabbitMQ-Events zur Datenkonsistenz über mehrere Datenbanken hinweg, mit Hintergrundverarbeitung, damit Nutzer während der Synchronisation nie blockiert wurden.",
  "Aufteilung der Plattform in über 10 unabhängig deploybare Spring-Boot-Microservices (Benachrichtigungen, Monitoring, Mitarbeitervorteile) hinter Eureka und einem API-Gateway, mit gRPC/Protobuf-Verträgen zwischen den Services und einer Verfügbarkeit von 99,9 %."
         ]
        },
        {
          title: "Associate Software Engineer",
          company: "Jeeves Information Systems (Forterro)",
          duration: "05/2022 - 06/2023",
          points: [
            "Entwicklung von Spring-Boot-REST-APIs mit Hibernate/JPA sowie MySQL und PostgreSQL, inklusive Eingabevalidierung, zentralisierter Fehlerbehandlung und standardisierter API-Antworten.",
  "Verbesserung der Performance stark frequentierter APIs um etwa 30 % durch SQL-Query-Optimierung, Datenbankindizes und Entfernung redundanter Aufrufe.",
  "Absicherung der Services mit Spring Security und JWT sowie rollenbasierte Zugriffskontrolle für Admin-, Benutzer- und Partnerrollen.",
  "Erstellung von JUnit-5- und Mockito-Tests, Behebung von SonarQube- und Checkmarx-Findings sowie Unterstützung bei der Fehleranalyse im Produktivbetrieb und bei Docker/Kubernetes-Deployments über Jenkins CI/CD."
          ]
        }
      ]
    },
    education: {
      title: "Bildung",
      items: [
        {
          university: "Hochschule Hof, University of Applied Sciences",
          year: "2026 - 2028",
          degree: "Master in Artificial Intelligence und Robotik"
        },
        {
          university: "Visvesvaraya Technological University",
          year: "2018 - 2022",
          degree: "Bachelor of Engineering in Information Science"
        }
      ]
    },
    projects: {
      title: "Ausgewählte Projekte",
      items: [
        {
          title: "LedgerCore",
          description: "Ein Double-Entry-Buchungssystem, das so entworfen ist, dass unter paralleler Last und bei Teilausfällen weder Geld entsteht noch verloren geht. Es kombiniert ein unveränderliches, ausgeglichenes Journal mit idempotenten Schreib-APIs, optimistischem und pessimistischem Locking, dem Outbox-Pattern für zuverlässige Kafka-Events, Saga-basierten Überweisungen mit Kompensationsaktionen und einem Abgleich-Job, der Salden aus dem Journal neu berechnet.",
          stack: [
            "Java 21",
            "Spring Boot 3",
            "Spring Data JPA",
            "PostgreSQL",
            "Flyway",
            "Kafka",
            "Spring Security",
            "JWT",
            "Testcontainers",
            "Gatling",
            "Docker"
          ],
          url: "https://github.com/dhanushpvjgit/LedgerCore"
        },
        {
          title: "FlagStream",
          description: "Eine mandantenfähige Feature-Flag- und A/B-Testing-Plattform für latenzarme Flag-Auswertung und Streaming-Updates an Client-SDKs. Sie unterstützt Targeting-Regeln, Segmente und prozentuale Rollouts mit Consistent Hashing, Cache-first-Auswertung, gRPC-Server-Streaming, ein Java-Client-SDK, mandantenbezogenes RBAC mit OAuth2, ein Audit-Log und Metrik-Dashboards.",
          stack: [
            "Spring WebFlux",
            "Reactor",
            "gRPC",
            "Redis",
            "MongoDB",
            "Keycloak",
            "OAuth2",
            "Micrometer",
            "Prometheus",
            "Grafana",
            "Docker Compose"
          ],
          url: "https://github.com/dhanushpvjgit/FlagStream"
        },
        {
          title: "FraudShield",
          description: "Ein Java-Stream-Processing-System, das Transaktionen in Echtzeit gegen konfigurierbare Betrugsregeln auswertet. Fenster-basierte Kafka-Streams-Regeln erkennen hohe Transaktionsfrequenz, Betragsspitzen und unmögliche Ortswechsel; Regeln lassen sich im laufenden Betrieb neu laden, Alerts laufen über RabbitMQ, und Ermittler nutzen eine GraphQL-Case-Management-API mit Elasticsearch-Suche. Spring-Batch-Jobs übernehmen nächtliche Backfills und die erneute Regelauswertung historischer Daten.",
          stack: [
            "Kafka Streams",
            "Drools",
            "Elasticsearch",
            "Spring Batch",
            "PostgreSQL",
            "GraphQL",
            "RabbitMQ",
            "Docker",
            "AWS"
          ],
          url: "https://github.com/dhanushpvjgit/FraudShield"
        },
        {
          title: "Codex Search",
          description: "Eine codebewusste Retrieval-Augmented-Generation-Engine, die ein Git-Repository indexiert und Fragen dazu mit Quellenangaben auf Dateien und Zeilenbereiche beantwortet. Java-Quellcode wird nach Klassen und Methoden aufgeteilt, die Suche kombiniert BM25-Stichwortsuche mit Vektorähnlichkeit über Reciprocal Rank Fusion, und ein Evaluations-Framework vergleicht reine Vektor-, reine Stichwort- und Hybridsuche anhand von Recall, MRR und Latenz.",
          stack: [
            "Spring Boot",
            "Spring AI",
            "pgvector",
            "Elasticsearch",
            "Spring Batch",
            "JavaParser",
            "GraphQL",
            "Docker Compose"
          ],
          url: "https://github.com/dhanushpvjgit/CodexSearch"
        },
        {
          title: "MiniQueue",
          description: "Ein kleiner Message Broker in Java, um die internen Mechanismen von Systemen wie Kafka zu verstehen. Er bietet Topics und Partitionen als Append-only-Segmentdateien mit Memory-Mapping und Offset-Index, Consumer Groups mit committed Offsets, Retention-Regeln, ein eigenes Binärprotokoll über Netty und ein Java-Client-SDK, mit Benchmarks im Vergleich zu einem echten Kafka-Broker.",
          stack: [
            "Java 21",
            "Netty",
            "NIO",
            "Virtual Threads",
            "Memory-Mapped Files",
            "JMH"
          ],
          url: "https://github.com/dhanushpvjgit/MiniQueue"
        }
      ],
      viewCode: "Auf GitHub ansehen",
      viewAll: "Alle Repositories ansehen"
    },
    contact: {
      title: "Kontakt",
      email: "E-Mail",
      location: "Standort",
      locationValue: "Deutschland",
      button: "Nachricht senden"
    },
    footer: {
      tagline: "Java-Backend-Entwicklung",
      rights: "Alle Rechte vorbehalten."
    }
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I am",
      subtitle: "Java Backend Developer focused on Spring Boot microservices, event-driven systems and high-performance APIs. Experienced with Kafka, Redis, PostgreSQL, REST and gRPC, and delivering secure, scalable backend platforms.",
      cta: "Contact Me"
    },
    about: {
      title: "Who am I?",
      content: "Hi, I’m Dhanush, a Java backend developer building reliable, scalable server-side systems, currently pursuing a Master’s in Artificial Intelligence and Robotics in Germany.\n\nMy professional focus is Java and Spring Boot microservices, event-driven architectures with Kafka, and data-intensive services backed by PostgreSQL, Redis and Elasticsearch.\n\nI am interested in concurrency and JVM internals, clean API design, and building systems that stay correct and fast under load.",
      button: "More About Me"
    },
    experience: {
      title: "Professional Experience",
      description: "3+ years of experience building Java and Spring Boot backends and event-driven systems, with a focus on performance, security and reliable delivery.",
      download: "Download Resume",
      jobs: [
        {
          title: "Software Engineer",
          company: "Jeeves Information Systems (Forterro)",
          duration: "06/2023 - 01/2025",
          points: [
             "Built Kafka-based event ingestion pipelines with retries and dead-letter queues so failed events were recovered instead of lost, reducing client onboarding time by roughly 40%.",
              "Cut reporting API response times from about 2 seconds to 300 ms through SQL tuning, Redis caching and HikariCP pooling, and added per-API-key rate limiting with Redis and Bucket4j.",
              "Designed idempotent APIs so retried or duplicate requests never created duplicate transactions, and used RabbitMQ events to keep data consistent across multiple databases, with background processing so users were never blocked during sync.",
              "Split the platform into 10+ independently deployable Spring Boot microservices (notifications, monitoring, employee benefits) behind Eureka and an API Gateway, with gRPC/Protobuf contracts between services, running at 99.9% uptime."
          ]
        },
        {
          title: "Associate Software Engineer",
          company: "Jeeves Information Systems (Forterro)",
          duration: "05/2022 - 06/2023",
          points: [
           "Developed Spring Boot REST APIs using Hibernate/JPA with MySQL and PostgreSQL, implementing input validation, centralised exception handling and standardised API responses.",
            "Improved high-traffic API performance by approximately 30% through SQL query optimisation, database indexing and removing redundant calls.",
            "Secured services using Spring Security and JWT, enforcing role-based access for admin, user and partner roles.",
            "Wrote JUnit 5 and Mockito tests, resolved SonarQube and Checkmarx findings, and supported production troubleshooting and Docker/Kubernetes deployments through Jenkins CI/CD."
         ]
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          university: "Hochschule Hof, University of Applied Sciences",
          year: "2026 - 2028",
          degree: "Master’s in Artificial Intelligence and Robotics"
        },
        {
          university: "Visvesvaraya Technological University",
          year: "2018 - 2022",
          degree: "Bachelor of Engineering in Information Science"
        }
      ]
    },
    projects: {
      title: "Selected Projects",
      items: [
        {
          title: "LedgerCore",
          description: "A double-entry accounting ledger designed so that no money is created or lost under concurrent load or partial failures. It combines an immutable, balanced journal with idempotent write APIs, optimistic and pessimistic locking, the outbox pattern for reliable Kafka events, saga-based transfers with compensating actions, and a reconciliation job that recomputes balances from the journal.",
          stack: [
            "Java 21",
            "Spring Boot 3",
            "Spring Data JPA",
            "PostgreSQL",
            "Flyway",
            "Kafka",
            "Spring Security",
            "JWT",
            "Testcontainers",
            "Gatling",
            "Docker"
          ],
          url: "https://github.com/dhanushpvjgit/LedgerCore"
        },
        {
          title: "FlagStream",
          description: "A multi-tenant feature-flag and A/B testing platform built for low-latency flag evaluation and streaming updates to client SDKs. It supports targeting rules, segments and percentage rollouts with consistent hashing, cache-first evaluation, gRPC server streaming, a Java client SDK, per-tenant RBAC with OAuth2, an audit log and metrics dashboards.",
          stack: [
            "Spring WebFlux",
            "Reactor",
            "gRPC",
            "Redis",
            "MongoDB",
            "Keycloak",
            "OAuth2",
            "Micrometer",
            "Prometheus",
            "Grafana",
            "Docker Compose"
          ],
          url: "https://github.com/dhanushpvjgit/FlagStream"
        },
        {
          title: "FraudShield",
          description: "A Java stream-processing system that evaluates transactions against configurable fraud rules in real time. Windowed Kafka Streams rules detect velocity, amount spikes and impossible travel; rules can be hot-reloaded, alerts flow through RabbitMQ, and investigators use a GraphQL case-management API with Elasticsearch search. Spring Batch jobs handle nightly backfills and rule re-evaluation on historical data.",
          stack: [
            "Kafka Streams",
            "Drools",
            "Elasticsearch",
            "Spring Batch",
            "PostgreSQL",
            "GraphQL",
            "RabbitMQ",
            "Docker",
            "AWS"
          ],
          url: "https://github.com/dhanushpvjgit/FraudShield"
        },
        {
          title: "Codex Search",
          description: "A code-aware retrieval-augmented generation engine that indexes a Git repository and answers questions about it with citations to files and line ranges. Java sources are chunked by class and method, retrieval combines BM25 keyword search with vector similarity using reciprocal rank fusion, and an evaluation harness compares vector-only, keyword-only and hybrid strategies on recall, MRR and latency.",
          stack: [
            "Spring Boot",
            "Spring AI",
            "pgvector",
            "Elasticsearch",
            "Spring Batch",
            "JavaParser",
            "GraphQL",
            "Docker Compose"
          ],
          url: "https://github.com/dhanushpvjgit/CodexSearch"
        },
        {
          title: "MiniQueue",
          description: "A small message broker written in Java to explore what systems like Kafka do internally. It provides topics and partitions stored as append-only, memory-mapped segment files with offset indexes, consumer groups with committed offsets, retention policies, a custom binary protocol over Netty and a Java client SDK, with benchmarks compared against a real Kafka broker.",
          stack: [
            "Java 21",
            "Netty",
            "NIO",
            "Virtual Threads",
            "Memory-Mapped Files",
            "JMH"
          ],
          url: "https://github.com/dhanushpvjgit/MiniQueue"
        }
      ],
      viewCode: "View on GitHub",
      viewAll: "View all repositories"
    },
    contact: {
      title: "Contact Dhanush",
      email: "Email",
      location: "Location",
      locationValue: "Germany",
      button: "Send Message"
    },
    footer: {
      tagline: "Java Backend Developer",
      rights: "All rights reserved."
    }
  },
};


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
             <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src={Profile}
                        alt={site.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
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
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Github size={16} />
                    {t.projects.viewCode}
                    <ExternalLink size={14} />
                  </a>
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

            <motion.div variants={itemVariants} className="mt-10 text-center">
              <a
                href={site.githubRepos}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Github size={20} />
                {t.projects.viewAll}
              </a>
            </motion.div>
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
               <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white flex items-center justify-center">
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    <div className="w-full h-full rounded-2xl overflow-hidden">
                      <img
                        src={Profile}
                        alt={site.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
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
            <p>© {site.copyrightYear} {site.fullName}. {t.footer.rights}</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}