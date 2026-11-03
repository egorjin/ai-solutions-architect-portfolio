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
    architecture:
      'Documents → Parent-Child Chunking → Hybrid Search → Reranking → Context Selection → LLM → Guardrails → Evaluation',
    highlight: false,
  },
  {
    title: 'AI Ultrasound Image Processing',
    description:
      'Worked on AI-based ultrasound image-processing platforms supporting breast and thyroid cancer diagnosis, combining mathematical modeling, medical image processing, software architecture, and full-stack integration.',
    stack:
      'AI/ML · Mathematical Modeling · Image Processing · REST APIs · Microservices · Kubernetes · Docker · Golang',
    impact:
      'Applied AI engineering in a healthcare environment where system quality and reliability were critical.',
    architecture: null,
    highlight: false,
  },
  {
    title: 'Laem Chabang Port — AI / Data Engineering',
    description:
      'Worked on modernization of a major deep-sea terminal environment using approximately 20 years of heterogeneous historical port data, including EDI messages, container information, shipping records, bills of lading, PDFs, legacy databases, and operator logs.',
    stack:
      'PostgreSQL · OLAP · PydanticAI · Distributed Processing · Data Validation · Enterprise Integration',
    impact:
      'Designed processing concepts for very large datasets using temporal chunking, parallel processing, structured extraction, validation, and centralized storage.',
    architecture: null,
    highlight: false,
  },
  {
    title: '10M+ Record System Performance Redesign',
    description:
      'Redesigned a severely constrained record-processing system with more than 10 million records by optimizing database access, query processing, application logic, N+1 query patterns, and large-record-set processing.',
    stack:
      'Database Architecture · SQL · Query Optimization · Performance Engineering',
    impact:
      'Before: ~10 computers / >1 week. After: 1 existing computer / ~10 minutes.',
    architecture: null,
    highlight: true,
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
          <a
            href="/Egor-Dzhin-AI-Solutions-Architect.odt"
            download
            className="rounded-lg border border-neutral-700 px-5 py-3 text-sm font-medium transition hover:bg-neutral-900"
          >
            Download Resume ↓
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
              className={
                project.highlight
                  ? 'rounded-2xl border border-neutral-600 bg-neutral-900 p-6 md:col-span-2'
                  : 'rounded-2xl border border-neutral-800 bg-neutral-950 p-6'
              }
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-4 leading-7 text-neutral-400">
                {project.description}
              </p>

              {project.architecture && (
                <div className="mt-5 rounded-xl border border-neutral-800 bg-black p-4">
                  <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                    Architecture Flow
                  </p>
              
                  <p className="font-mono text-sm leading-6 text-neutral-300">
                    {project.architecture}
                  </p>
                </div>
              )}

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
              
                <p
                  className={
                    project.highlight
                      ? 'mt-3 text-xl font-semibold leading-8 text-white'
                      : 'mt-2 text-sm leading-6 text-neutral-400'
                  }
                >
                  {project.impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Professional Experience
        </p>
      
        <h2 className="text-3xl font-semibold tracking-tight">
          Senior engineering and AI leadership across complex systems.
        </h2>
      
        <div className="mt-8 space-y-8">
          <article className="border-l border-neutral-800 pl-6">
            <p className="text-sm text-neutral-500">May 2024 – Jun 2026 · Thailand</p>
            <h3 className="mt-2 text-xl font-semibold">
              Senior Software Engineering Manager
            </h3>
            <p className="mt-1 text-neutral-400">
              PMI Thailand Chapter
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
              Led and contributed to AI-enabled software platforms combining LLM/RAG,
              backend engineering, intelligent data processing, and cloud-native
              architecture.
            </p>
          </article>
      
          <article className="border-l border-neutral-800 pl-6">
            <p className="text-sm text-neutral-500">Aug 2021 – Mar 2024 · Thailand</p>
            <h3 className="mt-2 text-xl font-semibold">
              Senior Software Engineering Manager
            </h3>
            <p className="mt-1 text-neutral-400">
              Thai Software Engineering Co., Ltd.
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
              Worked across AI, mathematical modeling, medical imaging, large-scale
              data platforms, system architecture, and engineering leadership.
            </p>
          </article>
      
          <article className="border-l border-neutral-800 pl-6">
            <p className="text-sm text-neutral-500">Mar 2018 – Jul 2021</p>
            <h3 className="mt-2 text-xl font-semibold">
              Senior Software Engineer
            </h3>
            <p className="mt-1 text-neutral-400">
              New Computer Technology Consulting
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
              Worked on large-scale data-processing architecture, industrial
              automation, enterprise integration, networking, and AI-assisted data
              engineering for major infrastructure environments.
            </p>
          </article>
      
          <article className="border-l border-neutral-800 pl-6">
            <p className="text-sm text-neutral-500">2016 – 2017</p>
            <h3 className="mt-2 text-xl font-semibold">
              Project Manager / Senior Software Developer / Senior Backend Developer
            </h3>
            <p className="mt-1 text-neutral-400">
              Novartis Thailand
            </p>
            <p className="mt-4 max-w-3xl leading-7 text-neutral-400">
              Worked across pharmaceutical manufacturing IT, enterprise software,
              industrial automation, and applied AI/ML, including production planning
              and optimization.
            </p>
          </article>
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

      {/* EDUCATION */}
      <section>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Education
        </p>
      
        <h2 className="text-3xl font-semibold tracking-tight">
          Engineering foundation in computation, mathematics, and systems.
        </h2>
      
        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <p className="text-sm text-neutral-500">
            Bangkok, Thailand · Aug 2008 – May 2014
          </p>
      
          <h3 className="mt-2 text-xl font-semibold">
            Master of Engineering — Electrical & Computer Engineering
          </h3>
      
          <p className="mt-1 text-neutral-400">
            Bangkok University International College
          </p>
      
          <p className="mt-5 max-w-3xl leading-7 text-neutral-400">
            Academic foundation included mathematical modeling, numerical analysis,
            computational mathematics, differential equations, discrete mathematics,
            information theory, computer architecture, operating systems, network
            design, cybersecurity, and cryptography.
          </p>
        </div>
      </section>

      {/* TECHNICAL FOUNDATION */}
      <section>
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Technical Foundation
        </p>
      
        <h2 className="text-3xl font-semibold tracking-tight">
          Strong software, data, architecture, and DevOps background.
        </h2>
      
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <h3 className="font-semibold">Programming Languages</h3>
            <p className="mt-3 leading-7 text-neutral-400">
              Python · C/C++ · TypeScript · JavaScript · Golang · Java · PHP · C#
            </p>
          </div>
      
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <h3 className="font-semibold">Databases & Data Platforms</h3>
            <p className="mt-3 leading-7 text-neutral-400">
              PostgreSQL · Oracle · MongoDB · SQL · OLAP · Kafka · Airflow
            </p>
          </div>
      
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <h3 className="font-semibold">Architecture</h3>
            <p className="mt-3 leading-7 text-neutral-400">
              Microservices · REST APIs · Distributed Systems · Cloud-Native
              Architecture · Data Architecture · System Integration
            </p>
          </div>
      
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <h3 className="font-semibold">DevOps & Observability</h3>
            <p className="mt-3 leading-7 text-neutral-400">
              Docker · Kubernetes · CI/CD · Jenkins · Prometheus · Grafana · Azure ·
              Google Cloud
            </p>
          </div>
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
          Open to senior AI and architecture opportunities.
        </h2>
      
        <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
          Interested in AI Solutions Architect, Senior AI / ML Engineer,
          Generative AI, RAG, intelligent data processing, AI platform,
          and complex backend architecture roles.
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
      
          <span className="text-neutral-500">
            MAX: +7 914 330 7487
          </span>
        </div>
      </section>
    </div>
  )
}
