
export const locations = [
    { key: "remoto", name: "Remoto" },
    { key: "cdmx", name: "Ciudad de México" },
    { key: "gdl", name: "Guadalajara" },
    { key: "mty", name: "Monterrey" },
    { key: "barc", name: "Barcelona" },
    { key: "madrid", name: "Madrid" }
];
export const experienceLevels = [
    { key: "junior", name: "Junior" },
    { key: "mid", name: "Semi-Senior" },
    { key: "senior", name: "Senior" }
];
export const technologies = [
    { key: "aws", name: "Amazon Web Services (AWS)" },
    { key: "azure", name: "Microsoft Azure" },
    { key: "backend", name: "Desarrollo Backend" },
    { key: "cybersecurity", name: "Ciberseguridad" },
    { key: "frontend", name: "Desarrollo Frontend" },
    { key: "fullstack", name: "Desarrollo Full Stack" },
    { key: "gcp", name: "Google Cloud Platform (GCP)" },
    { key: "it", name: "Tecnologías de la Información (TI)" },
    { key: "javascript", name: "JavaScript" },
    { key: "kotlin", name: "Kotlin" },
    { key: "mobile", name: "Desarrollo Móvil" },
    { key: "networking", name: "Redes y Conectividad" },
    { key: "nodejs", name: "Node.js" },
    { key: "r", name: "R (Lenguaje de Programación)" },
    { key: "react", name: "React" },
    { key: "sql", name: "SQL" },
    { key: "swift", name: "Swift" },
    { key: "uxui", name: "Diseño UX/UI" },
    { key: "html", name: "Maquetación HTML" },
    { key: "css", name: "Maquetación CSS" },
    { key: "django", name: "Django" },
    { key: "python", name: "Python" },
    { key: "angular", name: "Angular" },
    { key: "mongodb", name: "MongoDB" },
];
export const contractTypes = [
    { key: "fulltime", name: "Tiempo Completo" },
    { key: "parttime", name: "Medio Tiempo" },
    { key: "contract", name: "Contrato por Proyecto" },
    { key: "internship", name: "Pasantía" }
];
export const filterlist = [
    { field: "location", label: "Ubicación", options: locations },
    { field: "experience", label: "Nivel de Experiencia", options: experienceLevels },
    { field: "technology", label: "Tecnología", options: technologies },
    //    { field: "contract", label: "Tipo de Contrato", options: contractTypes }
]