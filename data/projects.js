const projects = [
  {
    slug: "credit-rating",
    title: "Credit Rating & ECL Stress Testing Engine",
    category: "AI System • Credit Risk",
    description:
      "End-to-end credit risk modeling system integrating temporal learning, gradient boosting, calibration, and explainability.",
    overview:
      "This project demonstrates an end-to-end credit risk decision-support system that estimates borrower default risk, assigns credit grades, calculates expected credit loss, and simulates borrower-level and portfolio-level stress scenarios.",
      "The system is designed to connect machine learning outputs with practical credit risk workflows such as approval recommendation, portfolio monitoring, high-risk watchlist management, and expected loss analysis."
    problem:
      "Credit risk teams need more than raw prediction scores. A useful credit rating system should produce calibrated and interpretable risk estimates, translate those estimates into business actions, and support portfolio-level risk monitoring.",
      "In real lending environments, risk decisions also require expected loss estimation and stress testing to understand how borrower risk and portfolio exposure may change under adverse conditions.",
    approach:
      "Built a machine learning pipeline combining temporal features, XGBoost, probability calibration, and SHAP-based explainability.",
    systemDesign:
      "The system is designed as a layered credit risk pipeline that separates data preprocessing, temporal feature learning, model training, probability calibration, credit grade assignment, expected loss calculation, explainability, and dashboard presentation.",
      "This structure makes the system easier to interpret, maintain, and extend. It also reflects how credit risk models are often used in practice: not as standalone prediction tools, but as part of a broader decision-support and monitoring framework.",
    dataMethod:
      "The workflow uses structured borrower-level data, including application information, financial attributes, and repayment-history patterns.",
      "Static borrower features are cleaned, encoded, aligned, and combined with temporal behavior embeddings generated from historical repayment data. The final modeling layer estimates borrower default risk, while additional post-modeling layers translate the prediction into credit grades, recommendations, expected loss, and stress scenario outputs.",
    modelPipeline:
      "The modeling pipeline combines temporal feature learning through a TCN-Attention encoder with XGBoost-based risk prediction and probability calibration.",
      "The calibrated risk estimate is then mapped into an AAA–D credit rating framework and a business recommendation: approve, review, or reject.",
      "Beyond credit scoring, the system extends the pipeline into expected credit loss calculation using PD × LGD × EAD logic and scenario-based stress testing for both individual borrowers and the overall portfolio.",
    output:
      "The final output is an interactive Streamlit dashboard that includes an executive risk overview, borrower rating and stress scenario analysis, portfolio monitoring, high-risk watchlist, and ECL macro stress testing.",
      "The dashboard translates model results into business-facing outputs such as adjusted default risk, credit grade, approval recommendation, expected loss, stress loss uplift, and main risk drivers.",
    limitations:
      "The current version is a portfolio prototype and uses a historical benchmark dataset rather than live banking data. The system is batch-based and does not yet include real-time API integration.",
      "LGD is implemented as a rating-based assumption because actual recovery and write-off data are not available. Macro stress testing is scenario-based and should not be interpreted as a causal macroeconomic forecasting model.",
      "The dashboard is designed for decision support, not automated final credit approval."
    stack: ["Python", "XGBoost", "TCN", "SHAP", "Streamlit", "Stress Testing", "ECL"],
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