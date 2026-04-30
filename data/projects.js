const projects = [
  {
  slug: "credit-rating",
  title: "Credit Rating & ECL Stress Testing Engine",
  category: "AI System • Credit Risk",
  description:
    "Credit risk decision-support system for borrower rating, expected loss simulation, and stress testing.",
  overview:
    "End-to-end credit risk decision-support system for borrower rating, expected loss simulation, and stress testing.",
  problem:
    "Credit teams need calibrated, explainable, and actionable risk signals instead of raw prediction scores.",
  approach:
    "Built a hybrid TCN + XGBoost pipeline with calibration, rating logic, ECL calculation, and stress testing.",
  systemDesign:
    "The system separates preprocessing, temporal learning, risk prediction, calibration, rating assignment, ECL calculation, and dashboard presentation into a layered pipeline.",
  dataMethod:
    "The workflow combines borrower application data with repayment-history patterns to estimate default risk.",
  modelPipeline:
    "A TCN-Attention encoder captures temporal behavior, while XGBoost predicts borrower default risk. The output is calibrated and mapped into credit grades, recommendations, ECL, and stress scenarios.",
  output:
    "Interactive Streamlit dashboard for executive overview, borrower rating, stress scenario analysis, portfolio monitoring, high-risk watchlist, and ECL macro stress testing.",
  limitations:
    "This is a batch-based portfolio prototype using benchmark data. LGD and stress testing are assumption-based, so the system is for decision support only.",
  stack: ["Python", "XGBoost", "TCN", "ECL", "Streamlit", "Stress Testing"],
  github: "https://github.com/heyitzrizki/Credit-Rating-System",
  demo: "https://credit-rating-system-capjwzxjcyn6nhdafm2or7.streamlit.app/",
  images: {
    architecture: "/projects/credit-rating/architecture.png",
    dashboard: "/projects/credit-rating/dashboard-overview.png",
  },
},

  {
    slug: "local-rag",
    title: "Local RAG System",
    category: "AI System • Retrieval-Augmented Generation",
    description:
      "A privacy-focused retrieval-augmented generation system using local LLM inference for document-based question answering.",
    overview:
      "This project explores a local-first RAG system for document intelligence, designed to retrieve relevant information from private documents and generate grounded answers without depending on external model APIs.",
    problem:
      "Many document question-answering workflows depend on external APIs, creating privacy, cost, and control concerns.",
    approach:
      "Designed a local-first RAG pipeline using document ingestion, vector search, local embeddings, and local LLM inference.",
    systemDesign:
      "The system follows a modular architecture with separate layers for document ingestion, text chunking, embedding generation, vector storage, retrieval, backend orchestration, local LLM inference, and user interface.",
    dataMethod:
      "Documents are processed through a retrieval pipeline where text is extracted, split into chunks, embedded, and indexed in a vector database. At query time, the system retrieves the most relevant chunks and uses them as context for generation.",
    modelPipeline:
      "The pipeline combines local embedding models, Qdrant vector search, FastAPI backend services, Ollama-based local LLM inference, and a Next.js frontend. The focus is on privacy, reproducibility, and local control.",
    output:
      "Built a private document intelligence system that retrieves relevant context and generates grounded answers without relying on external model APIs.",
    limitations:
      "The current version is a prototype and may require further work on evaluation, retrieval quality, document parsing, user authentication, and deployment configuration.",
    stack: ["Next.js", "FastAPI", "Ollama", "Qdrant"],
    github: "https://github.com/heyitzrizki",
    demo: "",
    images: {
      architecture: "/projects/local-rag/architecture.png",
      dashboard: "",
    },
  },

  {
    slug: "predicting-delivery-subtotals",
    title: "Delivery Price Predictor",
    category: "Machine Learning • Operational Analytics",
    description:
      "A machine learning model to predict delivery price based on operational and order-level signals.",
    overview:
      "This project applies machine learning to operational delivery data to estimate delivery price based on order characteristics and real-time operational signals.",
    problem:
      "Delivery platforms need better visibility into cost drivers to support pricing, planning, and operational decision-making.",
    approach:
      "Processed operational order data, engineered predictive features, and trained regression models to estimate delivery subtotals.",
    systemDesign:
      "The system is structured as a data-to-dashboard pipeline that includes data cleaning, feature engineering, regression modeling, model evaluation, and interactive prediction through a Streamlit application.",
    dataMethod:
      "The workflow uses order-level and operational features related to delivery conditions. The data is cleaned, transformed, and prepared for supervised regression modeling.",
    modelPipeline:
      "The modeling process includes exploratory data analysis, feature preparation, model training, performance evaluation, and deployment into a simple dashboard interface for user input and prediction.",
    output:
      "Created a Streamlit dashboard that allows users to input delivery conditions and estimate expected delivery price.",
    limitations:
      "The current system is intended as a machine learning prototype and may require additional real-time integration, monitoring, and validation before use in production operations.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    github:
      "https://github.com/heyitzrizki/Predicting-Delivery-Subtotals-Using-Real-Time-Operational-Signals",
    demo: "https://final-project-ds49-group3-habits.streamlit.app/",
    images: {
      architecture: "",
      dashboard: "/projects/predicting-delivery-subtotals/dashboard.png",
    },
  },
];

export default projects;