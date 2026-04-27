const projects = [
  {
    slug: "credit-rating",
    title: "Credit Rating System",
    description:
      "End-to-end credit risk modeling system integrating temporal learning, gradient boosting, calibration, and explainability.",
    problem:
      "Credit decisions require calibrated and explainable risk signals, not only raw prediction scores.",
    approach:
      "Built a machine learning pipeline combining temporal features, XGBoost, probability calibration, and SHAP-based explainability.",
    output:
      "Produced a decision-support dashboard with predicted default risk, borrower-level explanations, and approve/review/reject logic.",
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
    description:
      "A privacy-focused retrieval-augmented generation system using local LLM inference for document-based question answering.",
    problem:
      "Many document question-answering workflows depend on external APIs, creating privacy, cost, and control concerns.",
    approach:
      "Designed a local-first RAG pipeline using document ingestion, vector search, local embeddings, and local LLM inference.",
    output:
      "Built a private document intelligence system that retrieves relevant context and generates grounded answers without relying on external model APIs.",
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
    description:
      "A machine learning model to predict delivery price based on operational and order-level signals.",
    problem:
      "Delivery platforms need better visibility into cost drivers to support pricing, planning, and operational decision-making.",
    approach:
      "Processed operational order data, engineered predictive features, and trained regression models to estimate delivery subtotals.",
    output:
      "Created a Streamlit dashboard that allows users to input delivery conditions and estimate expected delivery price.",
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