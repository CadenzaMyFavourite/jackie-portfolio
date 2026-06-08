export const projects = [
  {
    title: 'CadenSci',
    role: 'AI infrastructure and research systems',
    summary:
      'A local research assistant for searching, ingesting, vectorizing, and reasoning over scientific paper knowledge bases.',
    impact: [
      'Built around a FastAPI backend and React/Vite frontend for searchable technical knowledge workflows.',
      'Explores RAG, scientific paper ingestion, vector search, PostgreSQL/Qdrant-style infrastructure, and LLM-based reasoning for grounded answers.'
    ],
    tags: ['Python', 'FastAPI', 'React', 'RAG', 'Vector Search', 'Qdrant'],
    github: 'https://github.com/CadenzaMyFavourite/CadenSci',
    demo: ''
  },
  {
    title: 'Quant Backtesting & Portfolio Optimization Engine',
    role: 'Quantitative research tooling',
    summary:
      'A Python-first algorithmic trading research system focused on realistic accounting, execution simulation, and optimization-ready workflows.',
    impact: [
      'Models historical market data, target-weight strategies, next-bar execution, slippage, commissions, minimum fees, and rejection checks.',
      'Connects portfolio accounting, performance metrics, statistics, and optimization so strategies can be evaluated with trustworthy backtests.'
    ],
    tags: ['Python', 'Pandas', 'Backtesting', 'Optimization', 'Portfolio Accounting'],
    github: 'https://github.com/CadenzaMyFavourite/Backtester-for-simple-strategies',
    demo: ''
  },
  {
    title: 'FlowMind Scheduling Engine',
    role: 'Optimization and simulation systems',
    summary:
      'A modular C++ task scheduling and discrete-event simulation engine with Python tooling for benchmarking and visualization.',
    impact: [
      'Models priority, shortest-job-first, and round-robin scheduling under dependencies, dynamic arrivals, resource contention, and starvation mitigation.',
      'Uses profiling hooks and benchmark helpers to turn scheduling behavior into measurable system output.'
    ],
    tags: ['C++', 'Python', 'Simulation', 'Scheduling', 'Optimization'],
    github: 'https://github.com/CadenzaMyFavourite/FlowMind',
    demo: ''
  },
  {
    title: 'Backend Inventory Management System',
    role: 'Backend and data infrastructure',
    summary:
      'A multi-service inventory and order platform built around service-layer architecture, reliable APIs, and operational analytics.',
    impact: [
      'Uses Spring Boot, FastAPI, PostgreSQL, Redis, and Celery to separate business logic, persistence, caching, and asynchronous work.',
      'Implements ACID transactions, idempotent APIs, and analytics endpoints for real-time operational visibility.'
    ],
    tags: ['Java', 'Spring Boot', 'FastAPI', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/CadenzaMyFavourite/Backend-Inventory-Management-System',
    demo: ''
  },
  {
    title: 'AI Consulting Platform',
    role: 'Applied AI and full-stack workflow tooling',
    summary:
      'A human-in-the-loop AI consulting tool that turns customer data into revenue and retention recommendations.',
    impact: [
      'Connects CSV/Excel data processing with an LLM workflow for business analysis and strategy generation.',
      'Focuses on the full pipeline from data cleaning and model output to a usable interface for non-technical review.'
    ],
    tags: ['JavaScript', 'LLM', 'Qwen', 'Data Analysis', 'Workflow Automation'],
    github: 'https://github.com/CadenzaMyFavourite/Business-consulting-machine-learning-model',
    demo: ''
  },
  {
    title: 'Stock Market Outperformance Predictor',
    role: 'Machine learning and financial data systems',
    summary:
      'A machine-learning pipeline for predicting stocks likely to outperform the S&P 500 using price history and fundamental indicators.',
    impact: [
      'Scrapes and cleans Yahoo Finance data, engineers features, and trains models for comparative market prediction.',
      'Frames model output around outperformance, connecting financial data, statistics, and ML evaluation.'
    ],
    tags: ['Python', 'Pandas', 'scikit-learn', 'Finance', 'Feature Engineering'],
    github: 'https://github.com/CadenzaMyFavourite/Stock-Market-Outperformance-Prediction-System',
    demo: ''
  }
];
