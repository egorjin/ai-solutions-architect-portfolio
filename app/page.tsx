const skills = [
  'Generative AI',
  'LLMs',
  'RAG',
  'LangChain',
  'PydanticAI',
  'Ragas',
  'AI Agents',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Python',
  'PyTorch',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Kafka',
  'Airflow',
  'Docker',
  'Kubernetes',
  'Azure',
  'Google Cloud',
  'Prometheus',
  'Grafana',
]

const projects = [
  {
    title: 'Production RAG / Customer Inquiry System',
    description:
      'Designed and implemented a production RAG-based question-answering system for automating customer inquiries, including Parent-Child Chunking, Hybrid Search, reranking, context selection, guardrails, evaluation, and production backend integration.',
    stack:
      'Python · RAG · LLM · LangChain · PydanticAI · Ragas · PostgreSQL · Docker · Kubernetes · Prometheus · Grafana',
    impact:
      'Focused on retrieval accuracy, hallucination reduction, low-latency responses, and production reliability.',
  },
  {
    title: 'AI Ultrasound Image Processing',
    description:
      'Worked on AI-based ultrasound image-processing platforms supporting breast and thyroid cancer diagnosis, combining mathematical modeling, medical image processing, software architecture, and full-stack integration.',
    stack:
      'AI/ML · Mathematical Modeling · Image Processing · REST APIs · Microservices · Kubernetes · Docker · Golang',
    impact:
      'Applied AI engineering in a healthcare environment where system quality and reliability were critical.',
  },
  {
    title: 'Laem Chabang Port — AI / Data Engineering',
    description:
      'Worked on modernization of a major deep-sea terminal environment using approximately 20 years of heterogeneous historical port data, including EDI messages, container information, shipping records, bills of lading, PDFs, legacy databases, and operator logs.',
    stack:
      'PostgreSQL · OLAP · PydanticAI · Distributed Processing · Data Validation · Enterprise Integration',
    impact:
      'Designed processing concepts for very large datasets using temporal chunking, parallel processing, structured extraction, validation, and centralized storage.',
  },
  {
    title: '10M+ Record System Performance Redesign',
    description:
      'Redesigned a severely constrained record-processing system with more than 10 million records by optimizing database access, query processing, large-record-set handling, application logic, and N+1 query patterns.',
    stack:
      'Database Architecture · SQL · Query Optimization · Performance Engineering',
    impact:
      'Reduced a complete processing cycle from more than one week across approximately 10 computers to about 10 minutes on a single existing computer.',
  },
]

const earlierProjects = [
  {
    title: 'AI / ML Production Planning',
    description:
      'Designed an AI/ML-based approach for estimating production quantities using historical production, demand, inventory, capacity, process time, raw-material availability, market information, and production-cycle performance.',
    tech: 'Deep Learning · ALOPEX · Stochastic Gradient Descent',
  },
  {
    title: 'Compound Feed Optimization',
    description:
      'Designed an optimization approach for determining compound-feed recipes and integrated optimization into enterprise production and field-control workflows.',
    tech: 'Hill Climbing · ERP · Production Management · Industrial Automation',
  },
  {
    title: 'Turbine Control Optimization',
    description:
      'Applied AI/ML to historical turbine operational data to support fine-tuning and optimization of turbine speed and control behavior.',
    tech: 'Industrial AI · Historical Analysis · SCADA · Sensor Data',
  },
  {
    title: 'Embedded Robotics / Computer Vision',
    description:
      'Designed a robotic vehicle integrating servo control, IMU sensing, GPS positioning, camera input, OpenCV, and object tracking.',
    tech: 'OpenCV · Robotics · Computer Vision · Embedded Systems',
  },
]

export default function Page() {
  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="pt-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          AI Solutions Architect · Senior AI / ML Engineer
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
          Designing complete AI systems from data to production.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          Senior AI and software engineering professional with experience across
          Generative AI, LLM/RAG systems, machine learning, mathematical
          modeling, computer vision, intelligent data processing, backend
          engineering, and cloud-native architecture.
        </p>

        <p className="mt-4 max-w-3xl leading-7 text-neutral-600 dark:text-neutral-300">
          My experience spans industrial, healthcare, education, logistics, and
          enterprise systems, with a strong focus on production-ready AI,
          scalability, reliability, performance, and measurable engineering
          outcomes.
        </p>

        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-5 font-mono text-sm text-neutral-300">
          Data → Modeling → AI/ML → Backend Services → Integration → Deployment
          → Monitoring
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            View Case Studies
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-neutral-700 px-5 py-3 text-sm font-medium transition hover:bg-neutral-900"
          >
            Contact
          </a>
        </div>
      </section>

      {/* PROFILE */}
      <section>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Profile
        </p>

        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight">
          AI architecture backed by deep software and systems engineering.
        </h2>

        <p className="mt-6 max-w-3xl leading-7 text-neutral-600 dark:text-neutral-300">
          I work across the full lifecycle of intelligent systems: requirements,
          architecture, data processing, modeling, model and LLM integration,
          backend services, distributed systems, deployment, monitoring, and
          optimization.
        </p>

        <p className="mt-4 max-w-3xl leading-7 text-neutral-600 dark:text-neutral-300">
          My background combines traditional AI and optimization with modern
          Generative AI, allowing me to approach AI solutions as complete
          engineering systems rather than isolated models.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Core Expertise
        </p>

        <h2 className="text-3xl font-semibold tracking-tight">
          AI, data, backend, and infrastructure.
        </h2>

        <div className="mt-7 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm text-neutral-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* MAIN PROJECTS */}
      <section id="projects">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Selected Case Studies
        </p>

        <h2 className="text-3xl font-semibold tracking-tight">
          Production AI and large-scale engineering.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {project.description}
              </p>

              <div className="mt-5 border-t border-neutral-800 pt-5">
                <p className="text-sm font-medium text-neutral-300">
                  Engineering focus
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  {project.stack}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-sm font-medium text-neutral-300">
                  Outcome
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-400">
                  {project.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EARLIER AI */}
      <section>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Earlier Applied AI
        </p>

        <h2 className="text-3xl font-semibold tracking-tight">
          Optimization, industrial AI, and robotics.
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {earlierProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-xl border border-neutral-800 p-5"
            >
              <h3 className="font-semibold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {project.description}
              </p>

              <p className="mt-4 text-sm text-neutral-500">{project.tech}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DOMAINS */}
      <section>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Domain Experience
        </p>

        <h2 className="text-3xl font-semibold tracking-tight">
          AI across real operational environments.
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            'Generative AI / LLM',
            'Medical AI',
            'Industrial AI',
            'Manufacturing Optimization',
            'Computer Vision',
            'Intelligent Data Processing',
            'Robotics / Unmanned Systems',
            'Educational Data Systems',
            'Logistics / Port Systems',
          ].map((domain) => (
            <div
              key={domain}
              className="rounded-xl border border-neutral-800 p-4 text-sm text-neutral-300"
            >
              {domain}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-neutral-800 py-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Contact
        </p>

        <h2 className="text-3xl font-semibold tracking-tight">
          Let&apos;s build production AI systems.
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
          Open to AI Solutions Architect, Senior AI / ML Engineer, Generative AI,
          RAG, intelligent data processing, and AI platform engineering roles.
        </p>

        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a
            href="https://github.com/egorjin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub ↗
          </a>
        
          <a
            href="mailto:rusuperbl@gmail.com"
            className="hover:underline"
          >
            Email ↗
          </a>
        
          <a
            href="tel:+79143307487"
            className="hover:underline"
          >
            Phone
          </a>
        
          <a
            href="https://wa.me/79143307487"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            WhatsApp ↗
          </a>
        
          <a
            href="https://t.me/rucy_super"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Telegram ↗
          </a>
        
          <span className="text-neutral-400">
            MAX: +7 914 330 7487
          </span>
        </div>
      </section>
    </div>
  )
}
