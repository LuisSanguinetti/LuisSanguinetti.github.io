// Persist selection and init
const switcher = document.getElementById("langSwitcher");
const savedLang =
  localStorage.getItem("lang") ||
  (navigator.language || navigator.userLanguage || "es").slice(0,2);
switcher.value = (savedLang === "en") ? "en" : "es";

const translations = {
  es: {
    // Head/meta
    _title: "Luis Sanguinetti — CV",
    _description: "Currículum de Luis Sanguinetti — Software Developer",

    // Header
    role: "Software Developer",
    tagline: "ML • Data • Full-Stack (.NET, Angular, C++, Python, SQL)",

    // Left column
    languages: "Idiomas",
    spanish_native: "Español — nativo",
    english_native: "Inglés — nativo",

    education: "Educación",
    uni_line: "Licenciatura en Sistemas — 7.º semestre • Promedio 82%",
    school_line: "Bachillerato • Graduado 2018",

    skills: "Habilidades",
    dw: "Data Warehousing",
    ml: "Machine Learning",
    data_cleaning: "Limpieza de datos",
    req_epics: "Requerimientos & Épicas",

    profiles: "Perfiles",
    github_label: "GitHub: LuisSanguinetti",
    leetcode_label: "LeetCode: luchosangui20",
    kaggle_label: "Kaggle: Luis Sanguinetti",

    // Right column
    summary_title: "Resumen",
    summary_text:
      "Desarrollo full-stack y ciencia de datos: experiencia con Angular y .NET, C++ y Python; diseño de requerimientos y épicas; preparación y modelado de datos para data warehouses y proyectos de machine learning (Random Forest, Redes Neuronales, etc.).",

    projects_title: "Proyectos Destacados",
    p1_title: "Carro autónomo con Arduino",
    p1_desc:
      "Control Bluetooth y piloto automático; procesamiento básico de señales para navegación. Utilización de reinforcement learning.",
    p2_title: "ML de Sentimiento en Reseñas",
    p2_desc:
      "Pipeline de limpieza y features; modelos como Random Forest y redes neuronales para clasificar positividad.",
    p3_desc:
      "Stack con TypeScript/Angular y backend .NET/SQL; prácticas de ingeniería de requerimientos."
  },

  en: {
    // Head/meta
    _title: "Luis Sanguinetti — Resume",
    _description: "Resume of Luis Sanguinetti — Software Developer",

    // Header
    role: "Software Developer",
    tagline: "ML • Data • Full-Stack (.NET, Angular, C++, Python, SQL)",

    // Left column
    languages: "Languages",
    spanish_native: "Spanish — native",
    english_native: "English — native",

    education: "Education",
    uni_line: "Computer Science — 7th semester • GPA 82%",
    school_line: "High School Diploma • Graduated 2018",

    skills: "Skills",
    dw: "Data Warehousing",
    ml: "Machine Learning",
    data_cleaning: "Data Cleaning",
    req_epics: "Requirements & Epics",

    profiles: "Profiles",
    github_label: "GitHub: LuisSanguinetti",
    leetcode_label: "LeetCode: luchosangui20",
    kaggle_label: "Kaggle: Luis Sanguinetti",

    // Right column
    summary_title: "Summary",
    summary_text:
      "Full-stack development and data science: experience with Angular and .NET, C++ and Python; requirements and epics design; data preparation and modeling for data warehouses and machine learning projects (Random Forest, Neural Networks, etc.).",

    projects_title: "Highlighted Projects",
    p1_title: "Autonomous Arduino Car",
    p1_desc:
      "Bluetooth control and autopilot; basic signal processing for navigation. Uses reinforcement learning.",
    p2_title: "Review Sentiment ML",
    p2_desc:
      "Cleaning and feature pipeline; models like Random Forest and neural networks to classify sentiment positivity.",
    p3_desc:
      "TypeScript/Angular stack with .NET/SQL backend; requirements engineering practices."
  }
};

switcher.addEventListener("change", e => {
  const lang = e.target.value;
  setLanguage(lang);
  localStorage.setItem("lang", lang);
});

function setLanguage(lang) {
  // Replace text for all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = translations[lang][key];
    if (typeof val === "string") el.innerHTML = val;
  });

  // Update <html lang>, <title>, and meta description
  document.documentElement.lang = lang;
  if (translations[lang]._title) document.title = translations[lang]._title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && translations[lang]._description) {
    metaDesc.setAttribute("content", translations[lang]._description);
  }
}

// Initialize
setLanguage(switcher.value);
