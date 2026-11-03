export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        AI Solutions Architect | Senior AI / ML Engineer
      </h1>

      <p className="mb-4">
        I design and build production-ready AI systems that turn business
        requirements into scalable, secure, and measurable solutions.
      </p>

      <p className="mb-4">
        My work spans Generative AI, Large Language Models, RAG, AI agents,
        machine learning, backend architecture, data platforms, and cloud-native
        deployment.
      </p>

      <p className="mb-8">
        I focus on building AI products that are reliable, maintainable,
        cost-efficient, and ready for real-world use.
      </p>

      <h2 className="mb-4 text-xl font-semibold tracking-tighter">
        Core Expertise
      </h2>

      <ul className="mb-8 list-disc pl-5">
        <li>Generative AI and Large Language Models</li>
        <li>Retrieval-Augmented Generation (RAG)</li>
        <li>AI Agents and Workflow Automation</li>
        <li>Machine Learning and Model Serving</li>
        <li>Python, FastAPI, PostgreSQL and Vector Databases</li>
        <li>Cloud Architecture, Docker and Kubernetes</li>
        <li>MLOps, Monitoring and Production AI Systems</li>
      </ul>

      <h2 className="mb-4 text-xl font-semibold tracking-tighter">
        Featured Projects
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">Enterprise RAG Assistant</h3>
          <p>
            Designed an enterprise knowledge assistant using LLMs, embeddings,
            vector search, document ingestion, reranking, and secure access.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">AI Agent Workflow Platform</h3>
          <p>
            Built an agent-based architecture supporting tool calling,
            structured outputs, API integrations, workflow execution, and human
            approval steps.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Intelligent Document Processing</h3>
          <p>
            Created an AI pipeline for document classification, information
            extraction, validation, and structured data generation.
          </p>
        </div>
      </div>
    </section>
  )
}
