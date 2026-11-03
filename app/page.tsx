const skills = [
  'Generative AI',
  'LLMs',
  'RAG',
  'AI Agents',
  'Machine Learning',
  'MLOps',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Vector Databases',
  'Docker',
  'Kubernetes',
  'Cloud Architecture',
  'System Design',
]

const projects = [
  {
    title: 'Enterprise RAG Assistant',
    description:
      'Designed a production-ready enterprise knowledge assistant using LLMs, embeddings, vector search, document ingestion, reranking, and secure access controls.',
    stack: 'LLMs · RAG · Vector Search · Python · FastAPI',
  },
  {
    title: 'AI Agent Workflow Platform',
    description:
      'Designed an agent-based platform supporting tool calling, structured outputs, external API integrations, workflow execution, and human approval steps.',
    stack: 'AI Agents · LLMs · APIs · Workflow Automation',
  },
  {
    title: 'Intelligent Document Processing',
    description:
      'Built an AI pipeline for document classification, information extraction, validation, structured data generation, and downstream system integration.',
    stack: 'LLMs · NLP · Document AI · Python',
  },
]

export default function Page() {
  return (
    <div className="space-y-20">
      {/* HERO */}
      <section className="pt-8">
        <p className="mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          AI SOLUTIONS ARCHITECT · SENIOR AI / ML ENGINEER
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
          Designing AI systems that work in production.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          I design and build scalable AI solutions using Generative AI,
          Large Language Models, RAG, AI agents, machine learning, data
          platforms, and cloud-native architecture.
        </p>

        <p className="mt-4 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-300">
          My focus is turning complex business requirements into reliable,
          secure, maintainable, and cost-efficient AI products.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-neutral-700 px-5 py-3 text-sm font-medium transition hover:bg-neutral-900"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <p className="mb-3 text-sm font-medium text-neutral-500">
          ABOUT
        </p>

        <h2 className="text-2xl font-semibold tracking-tight">
          Building complete AI solutions, not just models.
        </h2>

        <p className="mt-5 max-w-3xl leading-7 text-neutral-600 dark:text-neutral-300">
          I work across the full AI engineering lifecycle: requirements
          analysis, architecture, data pipelines, model and LLM integration,
          backend APIs, deployment, monitoring, security, and optimization.
        </p>

        <p className="mt-4 max-w-3xl leading-7 text-neutral-600 dark:text-neutral-300">
          I am particularly focused on production AI systems where architecture,
          reliability, scalability, observability, and business value matter as
          much as model quality.
        </p>
      </section>

      {/* SKILLS */}
      <section>
        <p className="mb-3 text-sm font-medium text-neutral-500">
          CORE EXPERTISE
        </p>

        <h2 className="text-2xl font-semibold tracking-tight">
          Technologies & capabilities
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
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

      {/* PROJECTS */}
      <section id="projects">
        <p className="mb-3 text-sm font-medium text-neutral-500">
          FEATURED PROJECTS
        </p>

        <h2 className="text-2xl font-semibold tracking-tight">
          Selected AI architecture work
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
            >
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 leading-7 text-neutral-400">
                {project.description}
              </p>

              <p className="mt-5 text-sm text-neutral-500">
                {project.stack}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section>
        <p className="mb-3 text-sm font-medium text-neutral-500">
          SOLUTION ARCHITECTURE
        </p>

        <h2 className="text-2xl font-semibold tracking-tight">
          From business problem to production system
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-800 p-5">
            <p className="text-sm text-neutral-500">01</p>
            <h3 className="mt-3 font-semibold">Design</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Requirements, architecture, model selection, data strategy,
              security, and system design.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 p-5">
            <p className="text-sm text-neutral-500">02</p>
            <h3 className="mt-3 font-semibold">Build</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              LLM applications, APIs, RAG pipelines, agents, ML services,
              databases, and integrations.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 p-5">
            <p className="text-sm text-neutral-500">03</p>
            <h3 className="mt-3 font-semibold">Operate</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              Deployment, monitoring, evaluation, observability, performance,
              reliability, and cost optimization.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-neutral-800 py-12"
      >
        <p className="mb-3 text-sm font-medium text-neutral-500">
          CONTACT
        </p>

        <h2 className="text-2xl font-semibold tracking-tight">
          Let&apos;s build intelligent systems.
        </h2>

        <p className="mt-4 max-w-xl text-neutral-400">
          Open to AI architecture, senior AI/ML engineering, Generative AI,
          LLM, RAG, and intelligent automation opportunities.
        </p>

        <div className="mt-6 flex flex-wrap gap-5 text-sm">
          <a href="#" className="hover:underline" style="display:none;">
            LinkedIn ↗
          </a>

          <a href="#" className="hover:underline">
            GitHub ↗ https://github.com/egorjin
          </a>

          <a href="#" className="hover:underline">
            Email ↗ rusuperbl@gmail.com
          </a>
        </div>
      </section>
    </div>
  )
}
