export const skillCategories = [
  {
    title: 'Programming',
    description:
      'Core programming languages used to implement algorithms, build scalable services, and manage data workflows. Each language contributes different strengths in system architecture, runtime performance, and ecosystem tooling.',
    items: [
      {
        name: 'Python (Advanced)',
        description:
          'Used to build automation pipelines, backend services, and ML workflows. Python executes interpreted bytecode through the CPython runtime and integrates with extensive libraries (NumPy, Pandas, FastAPI). Typical workflow involves data ingestion, transformation pipelines, model execution, and API exposure through web frameworks.'
      },
      {
        name: 'TypeScript',
        description:
          'A statically typed superset of JavaScript compiled into JavaScript before execution in the browser or Node.js runtime. TypeScript introduces compile-time type checking, interfaces, and generics, enabling safer large-scale codebases and improved maintainability for front-end and server-side applications.'
      },
      {
        name: 'Java',
        description:
          'Object-oriented programming language compiled into JVM bytecode and executed within the Java Virtual Machine. Its runtime environment manages memory via garbage collection and supports multithreading, making it well suited for enterprise systems, backend services, and scalable distributed architectures.'
      },
      {
        name: 'C++',
        description:
          'Compiled systems programming language offering direct memory management and fine-grained performance control. Programs are compiled to native machine code, enabling high-performance algorithms, real-time systems, and latency-sensitive applications such as simulations or optimized data processing.'
      },
      {
        name: 'SQL',
        description:
          'Declarative query language used to interact with relational databases. SQL operates through structured queries that define how data is filtered, joined, aggregated, and stored. Typical workflows include schema design, indexing strategies, and optimized queries that reduce query execution time and improve database performance.'
      }
    ]
  },
  {
    title: 'AI Systems',
    description:
      'Experience designing end-to-end AI systems that combine machine learning models, language models, and retrieval pipelines to solve complex reasoning and information extraction tasks.',
    items: [
      {
        name: 'LLMs (OpenAI, Azure)',
        description:
          'Large language models based on transformer architectures trained on massive text corpora. They process tokenized text inputs, compute contextual embeddings through attention mechanisms, and generate responses through probabilistic token prediction. In production systems they are integrated via APIs for reasoning, summarization, and automation.'
      },
      {
        name: 'LangChain / LangGraph',
        description:
          'Frameworks for orchestrating LLM workflows by connecting prompts, tools, memory systems, and external APIs. LangChain structures pipelines as modular chains, while LangGraph represents workflows as stateful graphs where nodes represent reasoning steps and edges control execution flow.'
      },
      {
        name: 'RAG pipelines & agents',
        description:
          'Retrieval-Augmented Generation systems combine vector search with LLM reasoning. Documents are embedded into vector representations, stored in a vector database, retrieved through similarity search, and injected into model prompts to ensure responses are grounded in relevant external knowledge.'
      },
      {
        name: 'Prompt engineering',
        description:
          'Designing structured input prompts that guide LLM reasoning. Techniques include role prompting, chain-of-thought reasoning, system instructions, and structured outputs to improve reliability, reduce hallucinations, and maintain consistent responses across different model deployments.'
      }
    ]
  },
  {
    title: 'Backend & Data Infrastructure',
    description:
      'Designing backend services and data infrastructure that manage application logic, data persistence, and scalable API communication between systems.',
    items: [
      {
        name: 'FastAPI, Flask, REST API design',
        description:
          'Frameworks used to expose backend functionality through HTTP endpoints. Requests are received, validated through schemas, processed by service-layer logic, and responses returned as structured JSON. FastAPI additionally leverages asynchronous execution and automatic OpenAPI documentation generation.'
      },
      {
        name: 'Async programming & service architecture',
        description:
          'Event-driven programming model allowing applications to handle multiple concurrent operations without blocking threads. Using async/await patterns, services can process I/O-bound operations such as database queries or API calls efficiently while maintaining scalable microservice architectures.'
      },
      {
        name: 'PostgreSQL, query optimization',
        description:
          'Relational database system using structured schemas and ACID-compliant transactions. Query optimization involves indexing strategies, query planning, normalization of data models, and efficient joins to ensure reliable performance under large data workloads.'
      },
      {
        name: 'Vector DBs (Chroma, Pinecone)',
        description:
          'Databases optimized for high-dimensional vector storage and similarity search. Text or images are embedded into numerical vectors, indexed through approximate nearest neighbor algorithms, and retrieved by semantic similarity rather than exact keyword matching.'
      }
    ]
  },
  {
    title: 'Frameworks & Tooling',
    description:
      'Modern front-end frameworks and development tooling used to build responsive interfaces, manage component state, and accelerate the development workflow.',
    items: [
      {
        name: 'Tailwind CSS',
        description:
          'Utility-first CSS framework that applies styling through composable class names. Instead of writing separate CSS rules, developers build layouts directly in markup using predefined design tokens for spacing, color, typography, and responsive breakpoints.'
      },
      {
        name: 'React',
        description:
          'Component-based UI library that renders views using a virtual DOM. Changes in application state trigger reconciliation where React computes minimal DOM updates, improving performance and enabling modular, reusable interface components.'
      },
      {
        name: 'Framer Motion',
        description:
          'Animation library for React that uses declarative motion components to define transitions, gestures, and physics-based animations. It integrates with React’s component lifecycle to create smooth UI motion without manual animation management.'
      },
      {
        name: 'Vite',
        description:
          'Modern frontend build tool that serves modules using native ES modules during development and bundles optimized production builds with Rollup. It enables extremely fast startup times and instant hot module replacement during development.'
      }
    ]
  }
];