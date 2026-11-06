import { Injectable } from '@angular/core';
import { Project, Skill, Experience, Certificate, WorkflowStep } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  getProjects(): Project[] {
    return [
      {
        id: 2,
        title: 'AdventureWorks BI Pipeline',
        shortDescription: 'End-to-end business intelligence pipeline built on Microsoft AdventureWorks data to analyze sales, products, customers, and reseller performance through interactive dashboards.',
        overview: [
          'Engineered a production-style BI stack on the Microsoft AdventureWorks dataset, covering the full data lifecycle from raw relational source to executive-ready interactive dashboards. The pipeline follows the industry-standard Kimball methodology: a Star Schema data warehouse feeds OLAP cubes, which power Power BI reports across four business domains (Sales, Products, Customers, and Resellers). Every layer was built hands-on: SSIS for ETL orchestration, SSAS for multidimensional modelling, and Power BI for storytelling.'
        ],
        category: 'BI',
        tags: ['Power BI', 'SQL Server', 'SSIS', 'SSAS', 'ETL', 'Data Warehousing'],
        thumbnail: 'assets/images/adventure.png',
        images: ['assets/AD1.png', 'assets/AD2.png', 'assets/AD3.png'],
        technologies: ['Power BI', 'SQL Server', 'SSMS', 'SSIS', 'SSAS', 'ETL', 'Data Warehousing'],
        features: [
          'Architected a Star Schema data warehouse with clearly defined fact and dimension tables, enabling fast analytical querying across Sales, Products, Customer, and Reseller domains',
          'Designed and deployed 9 SSIS ETL pipelines to extract raw AdventureWorks data from SQL Server, apply business transformation rules, handle null values, and load clean records into the warehouse',
          'Built SSAS OLAP cubes with calculated measures and hierarchies to support slice-and-dice analysis across time, geography, and product dimensions',
          'Developed 3 interactive Power BI dashboards'
        ],
        results: [
          'Delivered dedicated dashboards for Sales, Products, and Customer & Reseller analysis',
          'Enabled interactive exploration of business trends and performance indicators'
        ],
        metrics: [
          { label: 'Dashboards', value: '3' },
          { label: 'Business Areas', value: '4' },
          { label: 'ETL Pipelines', value: '9' }
        ],
        githubUrl: 'https://github.com'
      },
      {
        id: 5,
        title: 'Insurance Claims Prediction Model',
        shortDescription: 'Machine learning pipeline for predicting home insurance claim probability using synthetic insurance data.',
        overview: [
          'Developed a machine learning workflow to predict the probability of home insurance claims from a deliberately noisy and imperfect dataset. The project focused on preprocessing raw insurance data, engineering predictive features, training multiple supervised learning models, and evaluating their ability to identify risk-related patterns while handling underfitting and data inconsistencies.'
        ],
        category: 'Machine Learning',
        tags: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis', 'Model Evaluation', 'Matplotlib'],
        thumbnail: 'assets/images/insurrance.png',
        images: ['assets/images/insurrance.png'],
        technologies: ['Python', 'Scikit-learn', 'Pandas', 'Data Analysis', 'Model Evaluation', 'Matplotlib'],
        features: [
          'Performed extensive data preprocessing including missing value handling, categorical encoding, and feature selection',
          'Trained and compared multiple supervised learning models including Logistic Regression, Random Forest, Gradient Boosting, SVC, Decision Trees, and MLP classifiers',
          'Evaluated model behavior using Accuracy, Precision, Recall, F1-score, ROC-AUC, and learning curve analysis',
          'Conducted feature importance and error analysis to identify influential insurance risk factors and diagnose underfitting behavior'
        ],
        results: [
          'Achieved a ROC-AUC score of 0.7179 on a deliberately noisy and underfitting-oriented dataset',
          'Identified key factors influencing insurance claims including urban zones, building structure type, and coverage duration'
        ],
        metrics: [
          { label: 'Models Trained', value: '8' },
          { label: 'ROC-AUC', value: '0.7179' },
          { label: 'Dataset Size', value: '7K+' }
        ],
        githubUrl: 'https://github.com'
      },
      {
        id: 7,
        title: 'AI System for Medical Anomaly Detection and Report Generation',
        shortDescription: 'The project integrates a multimodal pipeline combining YOLO for abnormality detection and localization, and BLIP for the automatic generation of radiology reports.',
        overview: [
          'The user can upload a chest X-ray image through a web interface. The system analyzes the image, detects abnormalities, displays bounding boxes with confidence scores, and generates an AI-assisted medical report.'
        ],
        category: 'Deep Learning',
        tags: ['YOLO', 'BLIP', 'Computer Vision', 'Medical Imaging'],
        thumbnail: 'assets/images/medical-ai-screenshot.png',
        images: ['assets/images/medical-ai-screenshot.png'],
        technologies: ['Python', 'YOLO', 'BLIP', 'Deep Learning', 'Computer Vision', 'Medical Imaging', 'API', 'Frontend/Backend'],
        features: [
          'Upload and analysis of chest X-ray images.',
          'Abnormality detection using YOLO.',
          'Abnormality localization through bounding boxes.',
          'Automatic report generation using BLIP.',
          'Result visualization through a user interface.',
          'Structured output containing predictions, confidence scores, and the generated report.'
        ],
        results: [],
        githubUrl: 'https://github.com/soulayma9900/final-application-pfa',
      },
      {
        id: 8,
        title: 'Smart Waste Classifier',
        shortDescription: 'Binary organic/recyclable waste classifier built with two competing CNN architectures: a fine-tuned ResNet50 transfer learning model and a custom DenseNet-inspired network, trained on 11,800+ real waste images.',
        overview: [
          'Implemented a complete deep learning pipeline for automated waste sorting, a real environmental challenge in waste management. The project involved building two distinct CNN classifiers to distinguish organic waste (food scraps, biodegradable materials) from recyclable waste (paper, cardboard, plastic, metal). The first model adapts a pretrained ResNet50 garbage classifier via transfer learning. The second is a custom architecture inspired by DenseNet, featuring dense blocks with feature concatenation and transition layers for spatial downsampling, trained from scratch on 11,800+ images with optimised data pipelines.'
        ],
        category: 'Deep Learning',
        tags: ['Python', 'TensorFlow', 'Keras', 'ResNet50', 'Transfer Learning', 'CNN'],
        thumbnail: 'assets/garbage.png',
        images: ['assets/images/architecture.png'],
        technologies: ['Python', 'TensorFlow', 'Keras', 'ResNet50', 'Transfer Learning', 'CNN', 'Fine-tuning', 'Data Augmentation'],
        features: [
          'Used conv_pool_resnet50 as a frozen feature extractor with a sigmoid classification head.',
          'Applied data augmentation with flips, 30° rotations, and zoom.',
          'Built the DenseNet-inspired p_m_dechets2 architecture with dense blocks across three stages.',
          'Added transition layers using Conv1×1 followed by 2×2 AveragePooling.',
          'Optimized TensorFlow data pipelines with prefetch, cache, and a 20% validation split.',
          'Trained with Adam and early stopping (patience 3 on val_accuracy).',
          'Evaluated results using a confusion matrix on 5,064 test samples.'
        ],
        results: [
          'Successfully trained p_m_dechets2 on 11,816 images across organic and recyclable classes',
          'Early stopping prevented overfitting by halting training when val_accuracy plateaued for 3 consecutive epochs',
          'Generated and analysed confusion matrix on 5,064 test samples, revealing per-class precision and recall',
          'Demonstrated practical proficiency in building custom CNN architectures from scratch alongside transfer learning workflows'
        ],
        metrics: [
          { label: 'Training Images', value: '11.8K' },
          { label: 'Test Samples', value: '5+ K' },
          { label: 'Architectures', value: '2' }
        ]
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'Python', icon: '🐍', level: 95, category: 'Languages' },
      { name: 'SQL', icon: '🗄️', level: 92, category: 'Languages' },
      { name: 'JavaScript', icon: '⚡', level: 72, category: 'Languages' },
      { name: 'TypeScript', icon: '🔷', level: 75, category: 'Languages' },
      { name: 'Java', icon: '☕', level: 70, category: 'Languages' },
      { name: 'scikit-learn', icon: '🤖', level: 90, category: 'ML & AI' },
      { name: 'TensorFlow', icon: '🧠', level: 82, category: 'ML & AI' },
      { name: 'PyTorch', icon: '🔥', level: 78, category: 'ML & AI' },
      { name: 'XGBoost', icon: '🚀', level: 88, category: 'ML & AI' },
      { name: 'HuggingFace', icon: '🤗', level: 80, category: 'ML & AI' },
      { name: 'Power BI', icon: '📈', level: 93, category: 'Data & BI' },
      { name: 'Tableau', icon: '📉', level: 88, category: 'Data & BI' },
      { name: 'Apache Spark', icon: '✨', level: 75, category: 'Data & BI' },
      { name: 'Pandas', icon: '🐼', level: 95, category: 'Data & BI' },
      { name: 'Databricks', icon: '🧱', level: 80, category: 'Data & BI' },
      { name: 'dbt', icon: '🔧', level: 78, category: 'Data & BI' },
      { name: 'Docker', icon: '🐳', level: 78, category: 'Tools' },
      { name: 'Git', icon: '🌿', level: 90, category: 'Tools' },
      { name: 'Azure', icon: '☁️', level: 74, category: 'Tools' },
      { name: 'FastAPI', icon: '⚙️', level: 82, category: 'Tools' },
      { name: 'Airflow', icon: '🌊', level: 70, category: 'Tools' },
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        role: 'Data Engineering Intern',
        company: 'BIAT ITT',
        position: 'T24 Banking Data Engineering Internship',
        period: 'July 2026 — End date TBC',
        highlights: [
          'Designed a star schema using synthetic T24 banking data.',
          'Built ETL/ELT pipelines using Python, SQL, and PySpark for banking data transformation.',
          'Applied Medallion Architecture (Bronze, Silver, Gold) with Delta Lake and Delta Tables.',
          'Used dbt for SQL-based data transformations and modular data modeling.',
          'Explored MLflow for machine learning experiment tracking.'
        ],
        techStack: ['Databricks', 'PySpark', 'Delta Lake', 'Delta Tables', 'dbt', 'MLflow', 'Python', 'SQL', 'ETL/ELT', 'Medallion Architecture'],
        expanded: false
      },
      {
        role: 'AI Engineering Intern',
        company: 'Smartovate',
        period: 'February 2026 — March 2026',
        location: 'Remote',
        highlights: [
          'Participated in the development of a RAG-based educational assistant deployed on Microsoft Azure.',
          'Gained hands-on exposure to Azure AI services, embeddings, and vector search concepts in a production-like environment.'
        ],
        techStack: ['Azure OpenAI', 'Azure AI Search', 'Python', 'RAG Systems'],
        expanded: false
      },
      {
        role: 'AI-Powered Educational Platform Development',
        company: 'Pedago.ai',
        position: 'AI Engineering Intern',
        period: 'June 2025 — October 2025',
        highlights: [
          'Worked on AI-powered educational tools designed for teachers and students.',
          'Developed and integrated optimized AI prompts and implemented advanced LLM-based APIs to enhance the learning experience.',
          'Contributed to full-stack development and system architecture of the platform.',
          'Gained hands-on experience in designing, building, and deploying AI-driven educational solutions.'
        ],
        techStack: ['Spring Boot', 'Angular', 'H2 Database', 'Formily', 'Swagger', 'AI/LLM APIs', 'Prompt Engineering'],
        expanded: false
      },
      {
        role: 'Automation of Web Scraping and Real-Time Data Monitoring',
        company: 'XLAiner',
        position: 'Intern',
        period: 'February 2024 — June 2024',
        location: 'Sfax, Tunisia',
        description: 'This project implements an automated scraping system for E-learning platforms Udemy and Coursera.',
        highlights: [
          'Developed optimized spiders using Scrapy, Selenium, and Playwright for precise daily data extraction.',
          'Automated execution scheduling through DigitalOcean SSH server integration and the ScrapeOps tool.',
          'Implemented real-time monitoring of the extraction process using ScrapeOps to ensure reliability and data quality.',
          'Conducted advanced data analysis and developed a dynamic, interactive dashboard using Streamlit for real-time visualization of extracted data.',
          'Provided strategic insights into the online learning sector through data analysis and observed trends.'
        ],
        techStack: ['Python', 'Scrapy', 'Selenium', 'Playwright', 'DigitalOcean', 'SSH', 'ScrapeOps', 'Streamlit', 'Data Analysis', 'Data Visualization'],
        expanded: false
      }
    ];
  }

  getCertificates(): Certificate[] {
    return [
      {
        title: 'AI Engineer for Data Scientists Associate',
        issuer: 'DataCamp',
        date: 'À compléter',
        icon: '🤖',
        color: '#03EF62',
      }
    ];
  }

  getWorkflowSteps(): WorkflowStep[] {
    return [
      {
        number: '01',
        title: 'Discovery',
        description: 'Understand the business context, define objectives, and identify key stakeholders and success metrics.',
        icon: '🔍'
      },
      {
        number: '02',
        title: 'Data Collection',
        description: 'Identify relevant data sources, design ingestion pipelines, and audit data quality and completeness.',
        icon: '📦'
      },
      {
        number: '03',
        title: 'Preparation',
        description: 'Clean, transform, and engineer features. Handle missing values, outliers, and schema inconsistencies.',
        icon: '⚙️'
      },
      {
        number: '04',
        title: 'Analysis & Modeling',
        description: 'Explore patterns with EDA, prototype models, tune hyperparameters, and validate with rigorous testing.',
        icon: '🧪'
      },
      {
        number: '05',
        title: 'Visualization',
        description: 'Translate findings into clear, interactive dashboards and reports tailored for each audience.',
        icon: '📈'
      },
      {
        number: '06',
        title: 'Deployment',
        description: 'Package models as APIs, integrate into production systems, and set up monitoring and alerting.',
        icon: '🚀'
      },
      {
        number: '07',
        title: 'Communication',
        description: 'Present insights in plain language, train end-users, and iterate based on stakeholder feedback.',
        icon: '💬'
      }
    ];
  }
}
