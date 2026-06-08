export const skillCategories = [
  {
    title: 'AI Infrastructure',
    description:
      'Systems for grounding model output in real data, searchable knowledge, and repeatable evaluation.',
    items: [
      {
        name: 'Retrieval-Augmented Generation',
        description:
          'I use RAG to connect LLMs with external knowledge instead of relying only on model memory. The important parts I focus on are document chunking, embedding quality, retrieval ranking, context-window limits, citation/traceability, and evaluating whether the retrieved evidence actually supports the answer.'
      },
      {
        name: 'Vector databases',
        description:
          'I use vector databases to store embeddings for scientific papers, legal documents, property records, and other searchable knowledge bases. The key knowledge I need includes embedding models, similarity metrics such as cosine similarity, metadata filters, approximate nearest-neighbor indexes, hybrid keyword/vector search, update pipelines, and avoiding stale or low-quality chunks.'
      },
      {
        name: 'Scientific paper ingestion',
        description:
          'I use ingestion pipelines to turn raw PDFs or paper metadata into structured, searchable research records. Important details include parsing titles/authors/abstracts, extracting text safely, deduplicating papers, preserving source metadata, splitting sections into useful chunks, and tracking pipeline failures so the knowledge base stays trustworthy.'
      },
      {
        name: 'LLM reasoning',
        description:
          'I use LLM reasoning for summarization, question answering, classification, and workflow automation when the model is grounded by data and reviewed through clear outputs. I pay attention to prompt structure, tool use, JSON/schema outputs, hallucination risks, temperature settings, model limitations, and how to design fallback behavior when the model is uncertain.'
      },
      {
        name: 'Model evaluation',
        description:
          'I use evaluation to check whether AI systems are reliable enough for real workflows. The important knowledge includes test sets, regression prompts, consistency checks, precision/recall for retrieval, human review criteria, bias/failure analysis, and logging examples where the system gives weak, unsupported, or misleading answers.'
      },
      {
        name: 'Machine learning fundamentals',
        description:
          'I use machine learning fundamentals to understand when a model is learning signal, memorizing noise, or solving the wrong problem. Important knowledge includes feature engineering, loss functions, train/validation/test splits, regularization, classification versus regression, overfitting, evaluation metrics, and when a simpler baseline is better than a complex model.'
      },
      {
        name: 'Deep learning frameworks',
        description:
          'I use deep learning frameworks such as PyTorch when a project needs custom model training, experimentation, or architecture-level understanding. The important knowledge includes tensors, autograd, batching, optimizers, learning rates, GPU/CPU execution, checkpoints, reproducibility, and reading training curves to debug model behavior.'
      }
    ]
  },
  {
    title: 'Quantitative & Data Systems',
    description:
      'Tools for market data, backtesting, portfolio accounting, metrics, and optimization-based research.',
    items: [
      {
        name: 'Pandas and market data',
        description:
          'I use Pandas to clean, normalize, join, and analyze market and business datasets before they enter a model or dashboard. Important knowledge includes datetime indexes, missing data, adjusted prices, multi-symbol data layouts, rolling windows, vectorized operations, avoiding look-ahead bias, and keeping transformations reproducible.'
      },
      {
        name: 'Backtesting architecture',
        description:
          'I use backtesting architecture to test trading ideas as systems, not just scripts. I focus on strategy signals, next-bar execution, portfolio state, order generation, slippage, commissions, rejected orders, benchmark comparison, and separating data, strategy, execution, portfolio, and metrics modules cleanly.'
      },
      {
        name: 'Portfolio accounting',
        description:
          'I use portfolio accounting to make backtests financially realistic. The important details are cash tracking, positions, average cost, realized and unrealized PnL, equity curves, fees, buying-power checks, rebalancing logic, drawdown, turnover, exposure, and making sure performance metrics come from correct state updates.'
      },
      {
        name: 'Optimization',
        description:
          'I use optimization when a system needs to choose between constrained alternatives, such as portfolio weights, scheduling decisions, or allocation rules. I pay attention to objective functions, constraints, overfitting, search spaces, greedy versus global approaches, validation data, and whether an optimized result is stable under different assumptions.'
      },
      {
        name: 'Statistics',
        description:
          'I use statistics to understand whether a pattern, model, or backtest result is meaningful instead of random noise. Important knowledge includes distributions, variance, correlation, confidence, sampling bias, train/test separation, base rates, risk-adjusted metrics, and communicating uncertainty clearly.'
      },
      {
        name: 'Probability and stochastic processes',
        description:
          'I use probability to reason about uncertainty in markets, model outputs, simulations, and noisy business data. Important knowledge includes conditional probability, expected value, variance, random walks, Monte Carlo simulation, tail risk, stationarity, and why rare events can dominate financial or operational outcomes.'
      },
      {
        name: 'Time-series analysis',
        description:
          'I use time-series analysis for market data, forecasting-style experiments, and temporal business records. The key knowledge includes lagged features, rolling statistics, autocorrelation, seasonality, leakage prevention, train/test splits by time, regime changes, and evaluating performance on future data rather than shuffled samples.'
      }
    ]
  },
  {
    title: 'Backend Engineering',
    description:
      'Service design, persistence, APIs, background jobs, and infrastructure for reliable product workflows.',
    items: [
      {
        name: 'FastAPI / Flask',
        description:
          'I use FastAPI and Flask to expose AI, data, and automation workflows through HTTP APIs. The important knowledge includes request validation, response schemas, dependency injection, async endpoints, error handling, authentication boundaries, API documentation, and keeping business logic separate from route handlers.'
      },
      {
        name: 'Spring Boot',
        description:
          'I use Spring Boot for Java backend projects that need structured service layers and database-backed application logic. Important knowledge includes controllers, services, repositories, dependency injection, DTOs, transaction boundaries, configuration, testing, and organizing code so domain logic is not trapped inside controllers.'
      },
      {
        name: 'PostgreSQL / Redis',
        description:
          'I use PostgreSQL for durable relational data and Redis for fast cache/session/queue-style workflows. Key knowledge includes schema design, indexes, joins, transactions, constraints, query plans, cache invalidation, TTLs, race conditions, and deciding what should be persisted versus cached.'
      },
      {
        name: 'API design',
        description:
          'I use API design to turn messy workflows into clear contracts between frontend, backend, scripts, and data systems. I focus on resource naming, predictable request/response shapes, status codes, pagination, idempotency, validation errors, versioning, and designing endpoints around how users actually work.'
      },
      {
        name: 'Async jobs and service architecture',
        description:
          'I use async jobs for long-running ingestion, ETL, vectorization, reporting, and automation tasks that should not block a web request. Important knowledge includes queues, retries, job status, cancellation, concurrency limits, progress logs, worker failures, and making background work observable and safe to rerun.'
      },
      {
        name: 'Authentication and security basics',
        description:
          'I use security basics to protect internal tools, APIs, and data workflows from common failure modes. Important knowledge includes authentication versus authorization, session handling, password/API-key storage, input validation, least privilege, rate limits, audit logs, CORS, and avoiding sensitive data exposure in logs or client code.'
      },
      {
        name: 'Observability and debugging',
        description:
          'I use observability to understand what a backend system is doing after it leaves my laptop. Important knowledge includes structured logs, error traces, metrics, health checks, slow query analysis, job-level status, alert-worthy failures, and designing systems so production issues can be diagnosed without guessing.'
      }
    ]
  },
  {
    title: 'Programming & Product Interfaces',
    description:
      'Languages and interface tools for building usable full-stack systems from research code to product screens.',
    items: [
      {
        name: 'Python',
        description:
          'I use Python for AI pipelines, ETL scripts, data analysis, backtesting, API services, and automation. The important knowledge includes clean module boundaries, virtual environments, package management, type hints, testing, Pandas performance, async basics, error handling, and writing scripts that can be rerun safely.'
      },
      {
        name: 'Java',
        description:
          'I use Java for object-oriented backend systems, service-layer design, and structured application logic. Important knowledge includes classes/interfaces, collections, generics, exceptions, concurrency basics, JVM behavior, database integration, unit testing, and using design patterns only when they reduce real complexity.'
      },
      {
        name: 'C++',
        description:
          'I use C++ for performance-minded systems work such as scheduling simulations and algorithmic engines. The important knowledge includes memory ownership, references, STL containers, algorithmic complexity, compilation, debugging, deterministic state updates, and designing data structures that keep simulation logic clear.'
      },
      {
        name: 'JavaScript / TypeScript',
        description:
          'I use JavaScript and TypeScript to build frontend interfaces and connect them to backend APIs. Important knowledge includes component state, async fetch flows, type safety, event handling, error/loading states, form validation, reusable data models, and avoiding UI logic that silently disagrees with backend contracts.'
      },
      {
        name: 'React, Tailwind, Vite',
        description:
          'I use React, Tailwind, and Vite to build fast, responsive interfaces for portfolio pages, dashboards, and internal tools. Important knowledge includes component composition, routing, reusable props/data structures, responsive layouts, accessible controls, visual consistency, build outputs, and making UI states clear for real users.'
      },
      {
        name: 'Git and collaboration workflow',
        description:
          'I use Git to keep project work traceable, reviewable, and easy to recover. Important knowledge includes branching, commits, pull requests, merge conflict resolution, readable commit history, code review habits, release branches, and using version control to protect experiments without losing stable work.'
      }
    ]
  },
  {
    title: 'Engineering Foundations',
    description:
      'Career-critical foundations for building reliable systems, passing technical interviews, and working on production teams.',
    items: [
      {
        name: 'Data structures and algorithms',
        description:
          'I use data structures and algorithms to choose efficient representations for search, scheduling, simulations, ranking, and backend workflows. Important knowledge includes arrays, hash maps, trees, heaps, graphs, dynamic programming, sorting, binary search, complexity analysis, and explaining tradeoffs clearly in interviews.'
      },
      {
        name: 'System design',
        description:
          'I use system design to break unclear product ideas into components that can scale and fail gracefully. Important knowledge includes API boundaries, database choices, caching, queues, consistency, replication, rate limits, load patterns, failure modes, and explaining why one architecture fits the problem better than another.'
      },
      {
        name: 'Testing and CI',
        description:
          'I use testing to make projects easier to trust and extend. Important knowledge includes unit tests, integration tests, API tests, regression tests, fixtures, mocking external services, CI pipelines, test coverage limits, and writing tests around real risk instead of only testing easy code paths.'
      },
      {
        name: 'Docker and Linux',
        description:
          'I use Docker and Linux basics to make backend, AI, and data systems easier to run consistently across machines. Important knowledge includes containers, images, environment variables, ports, volumes, shell commands, process logs, file permissions, networking basics, and debugging why a service works locally but fails when deployed.'
      },
      {
        name: 'Cloud and deployment basics',
        description:
          'I use deployment basics to turn a project from local code into a usable service. Important knowledge includes environment configuration, build artifacts, secrets, managed databases, object storage, scheduled jobs, domain/SSL setup, monitoring, rollback plans, and choosing simple infrastructure before adding complexity.'
      }
    ]
  }
];
