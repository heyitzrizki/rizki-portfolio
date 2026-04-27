const projects = [
  {
    slug: "credit-rating",
    title: "Credit Rating System",
    category: "AI System • Credit Risk",
    description:
      "End-to-end credit risk modeling system integrating temporal learning, gradient boosting, calibration, and explainability.",
    overview:
      "This project demonstrates an end-to-end credit risk decision-support system that predicts borrower default risk, explains model decisions, and translates risk scores into practical approval recommendations.",
    problem:
      "Credit decisions require calibrated and explainable risk signals, not only raw prediction scores.",
    approach:
      "Built a machine learning pipeline combining temporal features, XGBoost, probability calibration, and SHAP-based explainability.",
    systemDesign:
      "The system is designed as a layered pipeline that separates data preprocessing, feature engineering, model training, calibration, explainability, and dashboard presentation. This structure makes the project easier to maintain, interpret, and extend.",
    dataMethod:
      "The workflow uses structured borrower-level data, including financial and behavioral attributes. The data is cleaned, transformed, encoded, and aligned before being used for model training and evaluation.",
    modelPipeline:
      "The modeling pipeline combines temporal feature learning, gradient boosting, probability calibration, and SHAP-based explainability. The objective is not only to predict default probability, but also to make the prediction understandable at both global and borrower levels.",
    output:
      "Produced a decision-support dashboard with predicted default risk, borrower-level explanations, and approve/review/reject logic.",
    limitations:
      "The current version is batch-based and does not yet include real-time API integration. The system also assumes clean structured input data and may require further validation before use in a production lending environment.",
    stack: ["Python", "XGBoost", "TCN", "SHAP", "Streamlit"],
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