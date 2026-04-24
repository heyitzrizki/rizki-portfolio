const projects = [
  {
    slug: "credit-rating",
    title: "Credit Rating System",
    description:
      "End-to-end credit risk modeling system integrating temporal learning, gradient boosting, calibration, and explainability.",
    stack: ["Python", "XGBoost", "TCN", "SHAP"],
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
    stack: ["Next.js", "FastAPI", "Ollama", "Qdrant"],
    github: "https://github.com/heyitzrizki",
    demo: "", // nanti isi kalau ada
    images: {
      architecture: "/projects/local-rag/architecture.png",
      dashboard: "",
    },
  },

  {
    slug: "predicting-delivery-subtotals",
    title: "Delivery Price Predictor",
    description:
      "A machine learning model to predict delivery price based on various factors.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/heyitzrizki/Predicting-Delivery-Subtotals-Using-Real-Time-Operational-Signals",
    demo: "https://final-project-ds49-group3-habits.streamlit.app/",
    images: {
      architecture: "",
      dashboard: "/projects/delivery-price-predictor/dashboard.png",
    },
  },
];

export default projects;