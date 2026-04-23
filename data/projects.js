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
];

export default projects;