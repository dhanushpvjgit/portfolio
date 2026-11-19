// ─────────────────────────────────────────────────────────────
// All editable content lives here. Items marked TODO are placeholders.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Friend Name",
  initials: "FN",
  email: "friend@example.com",
  github: "https://github.com/your-username",
  resumeUrl: "",
  copyrightYear: 2026
};

export const translations = {
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
      content: "Hallo, ich bin [Name], Java-Backend-Entwickler und baue zuverlässige, skalierbare serverseitige Systeme.\n\nMein fachlicher Schwerpunkt liegt auf Java- und Spring-Boot-Microservices, ereignisgesteuerten Architekturen mit Kafka und datenintensiven Services auf Basis von PostgreSQL, Redis und Elasticsearch.\n\nIch interessiere mich für Nebenläufigkeit und JVM-Interna, sauberes API-Design und Systeme, die unter Last korrekt und schnell bleiben.",
      button: "Mehr über mich"
    },
    experience: {
      title: "Berufserfahrung",
      description: "Mehr als 3 Jahre Erfahrung in der Entwicklung von Java- und Spring-Boot-Backends und ereignisgesteuerten Systemen mit Schwerpunkt auf Performance, Sicherheit und zuverlässiger Auslieferung.",
      download: "Lebenslauf herunterladen",
      jobs: [
        {
          title: "Associate Software Engineer",
          company: "Company Name",
          duration: "06/2023 - 05/2025",
          points: [
            "Entwickelte REST-APIs mit Spring Boot und Hibernate/JPA auf Basis von MySQL und PostgreSQL in einer Microservices-Umgebung und ergänzte Eingabevalidierung, zentrale Fehlerbehandlung und standardisierte API-Antworten.",
            "Verbesserte die Backend-Performance durch SQL-Query-Tuning, Indizierung und Redis-Caching und reduzierte die API-Latenz bei stark genutzten Endpunkten um rund 30 %.",
            "Sicherte Services mit Spring Security und JWT ab und setzte rollenbasierte Zugriffskontrolle für Administratoren, Benutzer und Partner um.",
            "Schrieb Unit- und Integrationstests mit JUnit 5 und Mockito, einschließlich Embedded-Kafka-Tests, und behob SonarQube- und Checkmarx-Findings, um Qualitäts- und Sicherheitsprüfungen stabil zu bestehen.",
            "Analysierte Produktionsfehler, identifizierte Ursachen und lieferte Korrekturen mit Präventionsmaßnahmen; unterstützte Docker- und Kubernetes-Deployments über Jenkins-CI/CD-Pipelines in agilen Scrum-Teams."
          ]
        },
        {
          title: "Software Engineer",
          company: "Company Name",
          duration: "06/2025 - Heute",
          points: [
            "Entwickelte Kafka-basierte Event-Ingestion-Pipelines mit Consumer-Retries und Dead-Letter-Queues, sodass fehlgeschlagene Events die Verarbeitung nicht blockieren, und verkürzte die Kunden-Einführungszeit um rund 40 %.",
            "Definierte gRPC- und Protocol-Buffers-Verträge zwischen Spring-Boot-Services und kombinierte Kafka-Topics mit AWS SQS/SNS für zuverlässige asynchrone Kommunikation.",
            "Konzipierte ein entkoppeltes Backend aus unabhängig deploybaren Spring-Boot-Microservices mit Eureka für Service Discovery und einem API Gateway für einheitliches Routing.",
            "Entwickelte eine Elasticsearch-Indexierungspipeline, die mit PostgreSQL synchron gehalten wird, optimierte Analyzer, Mappings und Relevanz-Ranking und verwaltete Shards und Reindexing.",
            "Senkte die Antwortzeiten von Reporting-Endpunkten von rund 2 Sekunden auf 300 ms durch Query-Tuning, Redis-Caching und HikariCP-Pooling und ergänzte Rate Limiting pro API-Key mit Redis und Bucket4j.",
            "Etablierte Code-Review-Standards im Team, betreute Nachwuchsentwickler durch Reviews und Pair Programming und analysierte JVM-Services mit Datadog APM und JFR, um Verarbeitungsengpässe zu beseitigen."
          ]
        }
      ]
    },
    education: {
      title: "Bildung",
      items: [
        {
          university: "University Name",
          year: "2019 - 2023",
          degree: "Bachelor of Technology in Informatik"
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        }
      ]
    },
    contact: {
      title: "Kontakt",
      email: "E-Mail",
      location: "Standort",
      locationValue: "Your Location",
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
      content: "Hi, I’m [Name], a Java backend developer building reliable, scalable server-side systems.\n\nMy professional focus is Java and Spring Boot microservices, event-driven architectures with Kafka, and data-intensive services backed by PostgreSQL, Redis and Elasticsearch.\n\nI am interested in concurrency and JVM internals, clean API design, and building systems that stay correct and fast under load.",
      button: "More About Me"
    },
    experience: {
      title: "Professional Experience",
      description: "3+ years of experience building Java and Spring Boot backends and event-driven systems, with a focus on performance, security and reliable delivery.",
      download: "Download Resume",
      jobs: [
        {
          title: "Associate Software Engineer",
          company: "Company Name",
          duration: "06/2023 - 05/2025",
          points: [
            "Developed Spring Boot and Hibernate/JPA REST APIs backed by MySQL and PostgreSQL in a microservices environment, adding input validation, centralised exception handling and standardised API responses.",
            "Improved backend performance through SQL query tuning, indexing and Redis caching, reducing API latency by around 30% on high-traffic endpoints.",
            "Secured services with Spring Security and JWT, applying role-based access control for administrators, users and partners.",
            "Wrote JUnit 5 and Mockito unit and integration tests, including Embedded Kafka tests, and resolved SonarQube and Checkmarx findings to keep quality and security checks passing.",
            "Investigated production defects, identified root causes and shipped fixes with preventive measures; supported Docker and Kubernetes deployments through Jenkins CI/CD pipelines in Agile/Scrum teams."
          ]
        },
        {
          title: "Software Engineer",
          company: "Company Name",
          duration: "06/2025 - Present",
          points: [
            "Built Kafka-based event ingestion pipelines with consumer retries and dead-letter queues so failed events never block processing, reducing client onboarding time by roughly 40%.",
            "Defined gRPC and Protocol Buffers contracts between Spring Boot services, combining Kafka topics with AWS SQS/SNS for reliable asynchronous communication.",
            "Designed a decoupled backend of independently deployable Spring Boot microservices, using Eureka for service discovery and an API Gateway for unified routing.",
            "Built an Elasticsearch indexing pipeline synchronised with PostgreSQL, tuning analyzers, mappings and relevance ranking and handling shards and reindexing.",
            "Cut reporting endpoint response times from about 2 seconds to 300 ms through query tuning, Redis caching and HikariCP pooling, and added per-API-key rate limiting with Redis and Bucket4j.",
            "Established team code-review standards, mentored junior developers through reviews and pair programming, and profiled JVM services with Datadog APM and JFR to remove processing inefficiencies."
          ]
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          university: "University Name",
          year: "2019 - 2023",
          degree: "Bachelor of Technology in Computer Science"
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
          ]
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
          ]
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
          ]
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
          ]
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
          ]
        }
      ]
    },
    contact: {
      title: "Contact",
      email: "Email",
      location: "Location",
      locationValue: "Your Location",
      button: "Send Message"
    },
    footer: {
      tagline: "Java Backend Developer",
      rights: "All rights reserved."
    }
  },
};
