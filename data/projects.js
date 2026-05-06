const projects = [
  {
  slug: "credit-rating",
  title: "Credit Rating & ECL Stress Testing Engine",
  category: "AI System • Credit Risk",
  description:
    "Credit risk decision-support system for borrower rating, expected loss simulation, and stress testing.",
  cardProblem:
    "Credit teams need calibrated risk signals, not just raw default scores.",
  cardApproach:
    "Built a hybrid TCN + XGBoost workflow with calibration, grading, ECL, and stress testing.",
  cardOutput:
    "Delivered an executive dashboard for borrower rating, portfolio monitoring, and stress scenarios.",
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
  slug: "risk-based-loan-pricing",
  title: "Risk-Based Loan Pricing & Portfolio Profitability Simulator",
  category: "Finance Analytics • Credit Risk",
  description:
    "A credit analytics simulator that translates borrower default risk into risk-based pricing, expected loss, economic profit, and approval strategy decisions.",
  cardProblem:
  "Lenders need to know whether a loan is priced properly, not only whether a borrower may default.",
  cardApproach:
    "Converted PD, LGD, EAD, costs, and margin assumptions into required rate and profit metrics.",
  cardOutput:
    "Built a pricing simulator for approval strategy, pricing gap, and economic profit analysis.",
  overview:
    "This project extends credit scoring into a business-facing pricing and profitability simulator. Instead of stopping at default prediction, the system converts borrower-level PD into expected loss, required interest rate, pricing gap, economic profit, and portfolio approval strategy.",
  problem:
    "Traditional credit scoring projects often end with a probability of default score. In real lending decisions, risk teams also need to know whether the offered loan rate is sufficient, whether the borrower is underpriced or overpriced, and how different approval strategies affect profitability and portfolio risk.",
  approach:
    "Built an end-to-end risk-based pricing engine using model-generated PD, internal risk grades, LGD assumptions, EAD, funding cost, operating cost, target margin, capital charge, collection cost, and tail-risk penalty. The final Streamlit app includes a manual pricing simulator, borrower-level explorer, approval strategy comparison, portfolio frontier, and governance documentation.",
  systemDesign:
    "The system separates PD modeling, internal grade assignment, expected loss estimation, required-rate calculation, economic profit adjustment, policy simulation, scenario analysis, and dashboard deployment into a modular analytics workflow.",
  dataMethod:
    "The workflow uses Lending Club loan-level data. Borrower and loan features are processed to train PD models, generate calibrated default probabilities, assign internal grades, and produce pricing-ready artifacts. EAD is proxied by loan amount, while LGD and economic risk adjustments are assumption-based because recovery data is unavailable.",
  modelPipeline:
    "The modeling layer uses XGBoost probability output as the final PD source after comparing discrimination and calibration behavior. PD outputs are mapped into internal grades, then used in the pricing engine to calculate expected loss, annualized expected loss rate, required rate, pricing gap, expected profit, capital charge, collection cost, tail-risk penalty, and economic profit.",
  output:
    "Interactive Streamlit dashboard with executive overview, borrower-level pricing explorer, manual risk-based pricing simulator, approval strategy comparison, portfolio frontier analysis, and model governance page.",
  limitations:
    "This is a portfolio analytics prototype, not a production regulatory credit decisioning system. LGD, capital charge, collection cost, and tail-risk penalty are simulation assumptions. A production system would require recovery data, reject inference, regulatory capital treatment, fairness testing, monitoring, and model risk management approval.",
  stack: [
    "Python",
    "Pandas",
    "XGBoost",
    "Expected Loss",
    "Risk-Based Pricing",
    "Economic Profit",
    "Streamlit",
    "Plotly",
  ],
  github: "https://github.com/heyitzrizki/risk-based-loan-pricing-simulator",
  demo: "https://risk-based-loan-pricing-simulator-2gsn9dddekhjxtj7zvpmje.streamlit.app/Pricing_Simulator",
  images: {
    architecture: "/projects/risk-based-loan-pricing/architecture.png",
    dashboard: "/projects/risk-based-loan-pricing/dashboard-overview.png",
  },
},

{
  slug: "fmcg-business-performance",
  title: "FMCG Business Performance & P&L Analytics Dashboard",
  category: "Business Analytics • FMCG",
  description:
    "Business planning dashboard for sales performance, profitability, budget variance, revenue forecasting, and product portfolio strategy.",
  cardProblem:
    "FMCG teams need to connect sales, costs, margin, budget, and forecast in one planning view.",
  cardApproach:
    "Engineered business KPIs, P&L metrics, budget variance, forecasting, and portfolio segmentation.",
  cardOutput:
    "Created a dashboard for executive reporting, margin review, budget tracking, and product strategy.",
  overview:
    "This project simulates how an FMCG business planning analyst can connect sales, cost, marketing, budget, forecast, and product portfolio data into one decision-support dashboard.",
  problem:
    "FMCG teams need more than sales reports. They need to understand where revenue comes from, whether performance is profitable, whether results are ahead or behind plan, and which products or categories require action.",
  approach:
    "Built an end-to-end analytics pipeline covering KPI engineering, P&L analysis, simulated budget variance, interpretable revenue forecasting, ML benchmark comparison, and product portfolio segmentation.",
  systemDesign:
    "The system separates raw sales data processing, business KPI engineering, P&L and budget analysis, forecasting, portfolio segmentation, and dashboard presentation into a layered business analytics workflow.",
  dataMethod:
    "The workflow uses FMCG-style transaction data with product, channel, region, promotion, sales, marketing spend, COGS, logistics cost, net revenue, and profit fields. The data is transformed into dashboard-ready artifacts for executive reporting, planning, and portfolio analysis.",
  modelPipeline:
    "The forecasting layer compares Seasonal Naive, Moving Average, Holt-Winters, SARIMA, and leakage-safe ML benchmark models. The final forecast prioritizes out-of-sample performance and business interpretability rather than model complexity.",
  output:
    "Interactive Streamlit dashboard for executive overview, sales performance, P&L and margin analysis, budget vs actual tracking, forecasting, and product portfolio strategy.",
  limitations:
    "This is a portfolio prototype using public FMCG-style data. Budget values are simulated using prior-year same-month performance and target growth assumptions. Forecast planning bands are based on test error and should not be interpreted as formal financial guidance.",
  stack: ["Python", "Pandas", "Plotly", "Forecasting", "P&L", "Streamlit"],
  github: "https://github.com/heyitzrizki/fmcg-business-performance-analytics_new",
  demo: "https://fmcg-business-performance-analyticsnew.streamlit.app/",
  images: {
    architecture: "/projects/fmcg-business-performance/architecture.png",
    dashboard: "/projects/fmcg-business-performance/dashboard-overview.png",
  },
},

{
  slug: "kfood-growth-intelligence",
  title: "K-Food Growth Intelligence & Product Opportunity Simulator",
  category: "Business Analytics • Market Intelligence",
  description:
    "Market intelligence dashboard for identifying K-Food product opportunities using consumer trends, macro indicators, review intelligence, opportunity scoring, and scenario-based planning.",
  cardProblem:
    "Food expansion teams often lack complete public sales, competitor, and customer-level data for market prioritization.",
  cardApproach:
    "Combined Google Trends, World Bank indicators, synthetic marketplace data, review intelligence, opportunity scoring, and scenario simulation.",
  cardOutput:
    "Built a multi-page dashboard for market ranking, product idea recommendation, review insights, and business scenario planning.",
  overview:
    "This project simulates how a business planning or market intelligence team can evaluate K-Food product opportunities across selected global markets when proprietary commercial data are unavailable.",
  problem:
    "Global food expansion decisions require more than market size estimates. Teams need to understand consumer interest, macro readiness, competitive conditions, customer pain points, product adaptation needs, and financial feasibility. However, real sales, distributor, competitor, and customer-level data are often not publicly available.",
  approach:
    "Built an end-to-end decision-support workflow that combines real public data from Google Trends and World Bank with synthetic competitor, review, and financial assumption data. The system converts these signals into opportunity scores, product idea recommendations, market segmentation, and scenario-based business outputs.",
  systemDesign:
    "The system separates public data collection, synthetic data generation, trend feature engineering, macro feature engineering, review intelligence, opportunity scoring, product idea mapping, scenario simulation, clustering, and dashboard presentation into a modular business analytics pipeline.",
  dataMethod:
    "The workflow uses Google Trends as a relative consumer interest signal and World Bank indicators as macro-market readiness inputs. Synthetic competitor benchmarks, simulated customer reviews, and scenario-based business assumptions are generated to demonstrate business planning workflows when proprietary data are unavailable.",
  modelPipeline:
    "The analytics layer applies Google Trends momentum features, macro readiness scoring, TF-IDF and NMF topic modeling for review themes, weighted product opportunity scoring, rule-based product idea mapping, scenario-based revenue and margin simulation, and K-Means clustering for country-category segmentation.",
  output:
    "Interactive Streamlit dashboard with executive overview, trend radar, global opportunity map, market opportunity ranking, review intelligence, product idea board, scenario simulator, and methodology notes.",
  limitations:
    "This is a portfolio prototype using real public macro and search trend data combined with synthetic competitor, review, and financial assumption data. Outputs should be interpreted as a decision-support demonstration, not real market research, financial forecasting, or company-specific recommendation.",
  stack: [
    "Python",
    "Pandas",
    "Scikit-learn",
    "Google Trends",
    "NLP",
    "Plotly",
    "Streamlit",
    "Scenario Planning",
  ],
  github:
    "https://github.com/heyitzrizki/K-Food-Growth-Intelligence-Product-Opportunity-Simulator",
  demo: "https://k-food-growth-intelligence-appuct-opportunity-simulator-cfr8ax.streamlit.app/Executive_Overview",
  images: {
    architecture: "/projects/kfood-growth-intelligence/architecture.png",
    dashboard: "/projects/kfood-growth-intelligence/dashboard-overview.png",
  },
},

  {
    slug: "local-rag",
    title: "Local RAG System",
    category: "AI System • Retrieval-Augmented Generation",
    description:
      "A privacy-focused retrieval-augmented generation system using local LLM inference for document-based question answering.",
    cardProblem:
      "Document QA workflows often create privacy, cost, and control issues when they depend on external APIs.",
    cardApproach:
      "Designed a local-first RAG pipeline with chunking, embeddings, vector search, and local LLM inference.",
    cardOutput:
      "Built a private document intelligence prototype for grounded answers from local documents.",
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
    github: "https://github.com/heyitzrizki/local-rag",
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
    cardProblem:
      "Delivery platforms need clearer visibility into pricing and operational cost drivers.",
    cardApproach:
      "Processed order-level operational data and trained regression models for delivery price prediction.",
    cardOutput:
      "Created a Streamlit app that estimates delivery price from user-provided delivery conditions.",
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