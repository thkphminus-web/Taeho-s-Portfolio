export interface PersonalInfo {
  name: string;
  title: string;
  position: string;
  affiliation: string;
  email: string;
  phone: string;
  residency: string;
  metrics: {
    hIndex: number;
    citations: number;
    firstAuthorJournals: number;
    totalJournals: number;
  };
  summary: string;
}

export interface ResearchInterest {
  title: string;
  description: string;
  iconName: string; // Will match Lucide icons dynamically
  details: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  department: string;
  details?: string;
  supervisor?: string;
  advisor?: string;
  award?: string;
}

export interface Experience {
  position: string;
  institution: string;
  period: string;
  details: string;
  impacts?: string[];
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  category: string;
  tags: string[];
  citationKey: string;
  doi?: string;
  numberText?: string;
}

export interface Patent {
  title: string;
  id: string;
  date: string;
  inventors: string;
  status: string;
}

export interface Grant {
  title: string;
  year: string;
  status: 'In progress' | 'Awarded' | 'Completed';
  role: string;
  description: string;
}

export interface Mentorship {
  title: string;
  details: string[];
  type: 'classroom' | 'mentoring';
}

export interface Skill {
  domain: string;
  items: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Tae-Ho Kim, Ph.D.",
  title: "Expert in Mechatronic System Integration & TinyML",
  position: "Mitacs Elevate Postdoctoral Fellow",
  affiliation: "SFU Biomechatronic Systems Lab, Simon Fraser University",
  email: "taehok@sfu.ca",
  phone: "+1 778-951-8746",
  residency: "Permanent Resident (CA)",
  metrics: {
    hIndex: 17,
    citations: 800,
    firstAuthorJournals: 19,
    totalJournals: 29
  },
  summary: "Dr. Kim's research focuses on on-device artificial intelligence (Edge AI/TinyML) operating under low-power and resource-constrained environments, 3D-printed soft robotics, and self-powered wearable biomedical devices. He is currently working as a Postdoctoral Fellow at SFU, collaborating with Medtronic Canada to pioneer next-generation healthcare solutions."
};

export const researchInterests: ResearchInterest[] = [
  {
    title: "Mechatronic System Integration",
    description: "Fusing sensing, actuation, control, and embedded intelligence into optimized, experimentally validated hardware platforms.",
    iconName: "Cpu",
    details: [
      "Organic integration of multiple sensor modalities",
      "Custom carbon-nano filament extrusion and routing",
      "Rapid hardware prototyping of bio-inspired kinetic structures",
      "Experimental verification of system controls"
    ]
  },
  {
    title: "TinyML- On-device Concurrent learning and inference system for Cuffless Blood pressure monitoring",
    description: "Designing ultra-low-power, low-latency architectures for concurrent on-device learning and real-time inference on microcontrollers.",
    iconName: "BrainCircuit",
    details: [
      "Kilobyte-scale neural network architectures",
      "Real-time adaptive learning algorithms for biological signals",
      "Highly localized inference ignoring noise parameters",
      "Power-efficient DSP implementation"
    ]
  },
  {
    title: "Soft Robotics & Wearable Bio-devices",
    description: "Developing multimodal, self-powered bio-sensors for continuous, cuffless cardiovascular symptom and blood BP monitoring.",
    iconName: "HeartPulse",
    details: [
      "Earphone neckband-type self-powered box knot pulsewave sensors",
      "Self-powered structural dry electrodes (leech-origami design)",
      "High sensitivity continuous monitoring devices",
      "Biomechanically driven energy harvesting systems"
    ]
  },
  {
    title: "Resilient Robotic Architectures",
    description: "Researching metamaterial robotic architectures that exhibit exceptional structural resilience and autonomous self-recovery.",
    iconName: "ShieldAlert",
    details: [
      "Jigsaw pattern infills inspired by Diabolical Ironclad Beetles",
      "Self-healing robotic joints and link mechanisms",
      "Dynamic testing under mechanical fatigue and harsh loads",
      "Space-grade robotic arm structures with self-recovering cores"
    ]
  }
];

export const educationHistory: Education[] = [
  {
    degree: "Postdoctoral Fellow",
    institution: "Simon Fraser University (SFU), Canada",
    period: "2023.09 ~ Present",
    department: "School of Mechatronic Systems Engineering",
    details: "Research Topic: Wearable and Robot-assisted systems for human healthcare",
    supervisor: "Prof. Edward J. Park"
  },
  {
    degree: "Doctor of Philosophy (Ph.D.)",
    institution: "Simon Fraser University (SFU), Canada",
    period: "2019.05 ~ 2023.04",
    department: "School of Mechatronic Systems Engineering",
    details: "Thesis: 3D Printed Architecture Sensors",
    advisor: "Prof. Woo Soo Kim, Prof. Carolyn Sparrey, Prof. Edward J. Park",
    award: "Graduate Dean’s Entrance Scholarship (GDES)"
  },
  {
    degree: "Master of Science and Engineering (M.S.)",
    institution: "Korea University of Technology and Education (KOREATECH), South Korea",
    period: "2015.02 ~ 2017.02",
    department: "Mechatronics Convergent Components and Materials Engineering",
    details: "Thesis: Long-term cyclability of electrochromic poly (3-hexyl thiophene) films",
    award: "Received the Best Thesis Award"
  },
  {
    degree: "Bachelor of Science and Engineering (B.S.)",
    institution: "Korea University of Technology and Education (KOREATECH), South Korea",
    period: "2010.02 ~ 2014.02",
    department: "Materials Science and Engineering"
  },
  {
    degree: "Academic Certificate",
    institution: "Hanbat National University, South Korea",
    period: "Completed Coursework",
    department: "Chemical Engineering"
  }
];

export const professionalExperience: Experience[] = [
  {
    position: "Postdoctoral Fellow",
    institution: "Biomechatronic Systems Lab, Simon Fraser University",
    period: "2023.09 ~ Present",
    details: "Leading core R&D on biosignal-processing soft robotic systems and micro-scale embedded learning algorithms.",
    impacts: [
      "Developed kilobyte-scale concurrent learning models for cuffless blood pressure monitors.",
      "Engineered earphone neckband sensors using revolutionary box-knot structures."
    ]
  },
  {
    position: "Research Associate (Mitacs Elevate Fellow)",
    institution: "Medtronic Canada",
    period: "2023.09 ~ Present",
    details: "Managing a collaborative project on 3D-printed wearable devices for continuous cardiovascular monitoring.",
    impacts: [
      "Establishing commercialization pathways and regulatory compliance strategies.",
      "Bridging the SFU Research wing with corporate deployment standards."
    ]
  },
  {
    position: "Commissioned Principal Researcher",
    institution: "Human in Motion Robotics",
    period: "2023.09 ~ Present",
    details: "Serving as a principal technical consultant for wearable exoskeleton robot lightweighting and advanced composite material commercialization.",
    impacts: [
      "Formulated structural composites using nanomaterial-infused filaments.",
      "Directing structural load simulation and physical fatigue validation."
    ]
  },
  {
    position: "Research Assistant",
    institution: "Additive Manufacturing Lab, Simon Fraser University",
    period: "2019.05 ~ 2023.04",
    details: "Developed multi-directional 6-axis robotic 3D printing platforms and bio-inspired self-powered structural hardware sensors.",
    impacts: [
      "Introduced biomimetic origami systems into responsive robotic sensing.",
      "Authored 10+ research articles leveraging multi-material robotic printing."
    ]
  },
  {
    position: "Research Associate",
    institution: "Department of Organic Materials Engineering, Chungnam National University",
    period: "2018.05 ~ 2018.10",
    details: "Analyzed molecular dynamics of polymer thin films using neutron reflectivity.",
    impacts: [
      "Co-authored research proposals for the Korea Atomic Energy Research Institute (KAERI) cold neutron facility."
    ]
  },
  {
    position: "Research Associate",
    institution: "School of Materials Science and Engineering, KOREATECH",
    period: "2017.09 ~ 2018.02",
    details: "Conducted performance optimization of polymer-based electrochromic devices and managed undergraduate laboratory courses."
  },
  {
    position: "Researcher",
    institution: "Neutron Science Division, Korea Atomic Energy Research Institute (KAERI)",
    period: "2014.03 ~ 2014.12",
    details: "Analyzed polymer thin-film behaviors and provided technical user-assistance for national neutron beam facilities."
  }
];

export const selectedAwards: Award[] = [
  {
    title: "Mitacs National Innovation Award",
    date: "2025.11",
    awarder: "Mitacs Foundation (Canada)",
    description: "Awarded to one outstanding researcher across Canada for exceptional research innovation and industrial impact."
  },
  {
    title: "Certificate of Recognition from Member of Parliament",
    date: "2025.11",
    awarder: "MP Wade Chang (Burnaby Central)",
    description: "Presented for pioneering achievements in self-powered continuous blood pressure monitoring systems and contributions to medical technology."
  },
  {
    title: "Mitacs Elevate Postdoctoral Fellowship",
    date: "2024.08 ~ 2026.07",
    awarder: "Mitacs Foundation",
    description: "Highly competitive multi-year postdoctoral research funding grant."
  },
  {
    title: "Graduate Dean's Entrance Scholarship (GDES)",
    date: "2019.05 ~ 2023.04",
    awarder: "Simon Fraser University",
    description: "Prestigious 4-year institutional entrance scholarship based on comprehensive academic merit."
  },
  {
    title: "Graduate Fellowship",
    date: "2020 ~ 2023",
    awarder: "Simon Fraser University",
    description: "Awarded a total of 6 times for academic excellence during graduate studies."
  },
  {
    title: "Best Thesis Award",
    date: "2017.02",
    awarder: "KOREATECH Graduate School Board",
    description: "Awarded for the top graduating Master's thesis based on novelty and rigor."
  },
  {
    title: "Brain Korea 21 (BK21) Scholarship",
    date: "2015 ~ 2017",
    awarder: "Ministry of Education, South Korea",
    description: "National high-caliber research human resource fellowship."
  }
];

export const selectedPublications: Publication[] = [
  // --- Soft Sensors and Intelligent Manufacturing for Advanced Robotic Systems ---
  {
    id: "pub-1",
    title: "Kilobyte-scale Embedded Intelligence: Concurrent Learning and Inference for Personalized Cuffless Blood Pressure Monitoring",
    authors: "Tae-Ho Kim*, Dominic Jaworski, Kam Fung, Rakesh Sethi, Edward J. Park*",
    year: 2026,
    journal: "Under review",
    category: "soft-sensors",
    tags: ["TinyML", "Concurrent Learning", "On-device Inference", "Personalized Cuffless BP Monitoring"],
    citationKey: "Kim2026Concurrent",
    numberText: "#1"
  },
  {
    id: "pub-2",
    title: "Jigsaw Pattern Infills Inspired by Toughening Mechanisms of Diabolical Ironclad Beetle for 3D Printing Technologies",
    authors: "Tae-Ho Kim, Dominic Jaworski, Lazar. I. Jovanovic, Sheren. Yang, Edward. J. Park",
    year: 2025,
    journal: "Advanced Material Technologies",
    category: "soft-sensors",
    tags: ["Q1", "Jigsaw Pattern Infills", "Diabolical Ironclad Beetle", "3D Printing"],
    citationKey: "Kim2025Jigsaw",
    doi: "10.1002/admt.202500882",
    numberText: "#2"
  },
  {
    id: "pub-3",
    title: "3D Structural Electronics Via Multi‐Directional Robot 3D Printing",
    authors: "Chao Bao, Hadi Moeinnia, Tae‐Ho Kim, Wonchul Lee, Woo Soo Kim",
    year: 2023,
    journal: "Advanced Materials Technologies",
    category: "soft-sensors",
    tags: ["Q1", "Multi-Directional Robot", "3D Printing", "Structural Electronics"],
    citationKey: "Bao2023MultiDirectional",
    doi: "10.1002/admt.202201349",
    numberText: "#3"
  },
  {
    id: "pub-4",
    title: "A 3D-Printed Neuromorphic Humanoid Hand for Grasping Unknown Objects",
    authors: "Chao Bao=, Tae-Ho Kim=, Amirhossein Hassanpoor-Kalhori, Woo Soo Kim",
    year: 2022,
    journal: "iScience",
    category: "soft-sensors",
    tags: ["Q1", "Co-first authored", "Neuromorphic Humanoid Hand", "Object Grasping"],
    citationKey: "Bao2022Neuromorphic",
    doi: "10.1016/j.isci.2022.104119",
    numberText: "#4"
  },
  {
    id: "pub-5",
    title: "New frontiers in 3D Structural Sensing Robots",
    authors: "Manpreet Kaur=, Tae-Ho Kim=, Woo Soo Kim",
    year: 2021,
    journal: "Advanced Materials",
    category: "soft-sensors",
    tags: ["Q1", "Co-first authored", "Featured as frontispiece", "3D Structural Sensing"],
    citationKey: "Kaur2021Frontiers",
    doi: "10.1002/adma.202002534",
    numberText: "#5"
  },
  {
    id: "pub-6",
    title: "3D Printed Vorticella-Kirigami Inspired Sensors for Structural Health Monitoring in Internet-of-Things",
    authors: "Tae-Ho Kim, Hadi Moeinnia, Woo Soo Kim",
    year: 2023,
    journal: "Materials & Design",
    category: "soft-sensors",
    tags: ["Q1", "Vorticella-Kirigami Sensors", "Structural Health Monitoring", "IoT"],
    citationKey: "Kim2023Vorticella",
    doi: "10.1016/j.matdes.2023.112332",
    numberText: "#6"
  },

  // --- Healthcare Robotics and Wearables ---
  {
    id: "pub-7",
    title: "Evaluating Sleep Quality in a Non-intrusive Manner Using Contactless Ballistocardiography and Audio Signals through a LSTM-TCN Machine Learning Model",
    authors: "Dominic Jaworski, Tae-Ho Kim, Bohyung Choi, Edward J Park",
    year: 2026,
    journal: "Frontiers in Network Physiology",
    category: "healthcare",
    tags: ["LSTM-TCN Machine Learning", "Contactless Ballistocardiography", "Audio Signals", "Sleep Quality"],
    citationKey: "Jaworski2026Evaluating",
    doi: "10.3389/fnetp.2025.1479111",
    numberText: "#7"
  },
  {
    id: "pub-8",
    title: "Neckband-Type Earphone for Continuous Monitoring of Cardiovascular Symptoms via Self-powered Box Knot Pulsewave Sensor",
    authors: "Tae-Ho Kim, Dominic Jaworski, Rakesh Sethi, Elise Huisman, Kam Fung, Edward J. Park",
    year: 2025,
    journal: "npj Biomedical Innovations",
    category: "healthcare",
    tags: ["Q1", "npj", "Earphone neckband-type", "Self-powered Box Knot Sensor", "Cardiovascular Monitoring"],
    citationKey: "Kim2025Neckband",
    doi: "https://www.canhealth.com/2025/11/19/first-of-its-kind-neckband-continuously-measures-b-p/",
    numberText: "#8"
  },
  {
    id: "pub-9",
    title: "A 3D-Printed Portable EMG Wristband for the Quantitative Detection of Finger Motion",
    authors: "Haotian Su, Tae-Ho Kim, Hadi Moeinnia, Woo Soo Kim",
    year: 2023,
    journal: "IEEE Sensors Journal",
    category: "healthcare",
    tags: ["Q1", "EMG Wristband", "Finger Motion Detection"],
    citationKey: "Su2023Portable",
    doi: "10.1109/JSEN.2023.3242045",
    numberText: "#9"
  },
  {
    id: "pub-10",
    title: "3D-designed battery-free wireless origami pressure sensor",
    authors: "Taeil Kim, Amirhossein Hassanpoor Kalhori, Tae-Ho Kim, Chao Bao, Woo Soo Kim",
    year: 2022,
    journal: "Microsystems & Nanoengineering",
    category: "healthcare",
    tags: ["Q1", "Origami Pressure Sensor", "Battery-free Wireless"],
    citationKey: "Kim2022Origami",
    doi: "10.1038/s41378-022-00456-7",
    numberText: "#10"
  },
  {
    id: "pub-11",
    title: "Involvement of frontline clinicians in healthcare technology development: Lessons learned from a ventilator project",
    authors: "Margaret Chen-Mei Lin, Tae-Ho Kim, Woo Soo Kim, Ingrid Hakanson, Ali Hussein, Lillian Hung",
    year: 2022,
    journal: "Health and Technology",
    category: "healthcare",
    tags: ["Q1", "Frontline Clinicians", "Healthcare Technology", "Ventilator Project"],
    citationKey: "Lin2022Involvement",
    doi: "10.1007/s12553-022-00667-0",
    numberText: "#11"
  },
  {
    id: "pub-12",
    title: "3D Printed Leech-Inspired Origami Dry Electrodes for Electrophysiology Sensing Robots",
    authors: "Tae-Ho Kim, Chao Bao, Ziniu Chen, Woo Soo Kim",
    year: 2022,
    journal: "npj Flexible Electronics",
    category: "healthcare",
    tags: ["Q1", "Leech-Inspired Origami", "Dry Electrodes", "Electrophysiology Sensing"],
    citationKey: "Kim2022Leech",
    doi: "10.1038/s41528-022-00138-1",
    numberText: "#12"
  },
  {
    id: "pub-13",
    title: "3D Architectured Air Sensing Tubes for a Portable Mechanical Ventilator",
    authors: "Tae-Ho Kim, Xin Min, Daina Baker, Wonchul Lee, Woo Soo Kim",
    year: 2021,
    journal: "Flexible and Printed Electronics",
    category: "healthcare",
    tags: ["Q1", "Air Sensing Tubes", "Portable Ventilator"],
    citationKey: "Kim2021AirSensing",
    doi: "https://iopscience.iop.org/article/10.1088/2058-8585/ac1fd6",
    numberText: "#13"
  },
  {
    id: "pub-14",
    title: "3D Origami Sensing Robots for Cooperative Healthcare Monitoring",
    authors: "Tae-Ho Kim, Jaydon Vanloo, Woo Soo Kim",
    year: 2021,
    journal: "Advanced Materials Technologies",
    category: "healthcare",
    tags: ["Q1", "Origami Sensing Robots", "Cooperative Healthcare", "Monitoring Systems"],
    citationKey: "Kim2021Cooperative",
    doi: "10.1002/admt.202000938",
    numberText: "#14"
  },

  // --- Nanostructured Interfaces for Functional and Flexible Electronics ---
  {
    id: "pub-15",
    title: "Enhanced Dynamics of Confined Polymers near the Immiscible Polymer−Polymer Interface: Neutron Reflectivity Studies",
    authors: "Kyoung-Il Jo, Younghoon Oh, Bong June Sung, Tae-Ho Kim, Min Seop Um, Woo Jin Choi, Joona Bang, Guangcui Yuan, Sushil K. Satija, and Jaseung Koo",
    year: 2020,
    journal: "ACS Macro Letters",
    category: "nanotech",
    tags: ["Q1", "Confined Polymers", "Immiscible Polymer-Polymer Interface", "Neutron Reflectivity"],
    citationKey: "Jo2020Enhanced",
    doi: "10.1021/acsmacrolett.9b00966",
    numberText: "#15"
  },
  {
    id: "pub-16",
    title: "Position-Dependent Diffusion Dynamics of Entangled Polymer Melts Nanoconfined by Parallel Immiscible Polymer Films",
    authors: "Kyoung-Il Jo, Younghoon Oh, Tae-Ho Kim, Joona Bang, Guangcui Yuan, Sushil K. Satija, Bong June Sung, and Jaseung Koo",
    year: 2020,
    journal: "ACS Macro Letters",
    category: "nanotech",
    tags: ["Q1", "Entangled Polymer Melts", "Nanoconfined Polymer", "Diffusion Dynamics"],
    citationKey: "Jo2020Position",
    doi: "10.1021/acsmacrolett.0c00534",
    numberText: "#16"
  },
  {
    id: "pub-17",
    title: "Large Area Deposition of Biomimetic Polydopamine-Graphene Oxide Hybrids using Langmuir-Schaefer Technique",
    authors: "Tae-Ho Kim, Seok Hyun Song, Kyung-il Jo, Jaseung Koo",
    year: 2019,
    journal: "The Society of Adhesion and Interface",
    category: "nanotech",
    tags: ["Biomimetic Deposition", "Polydopamine-Graphene Oxide Hybrids", "Langmuir-Schaefer Technique"],
    citationKey: "Kim2019LargeArea",
    doi: "10.13000/JAI.2019.20.4.110",
    numberText: "#17"
  },
  {
    id: "pub-18",
    title: "Dewetting of Thin Polymer Films on Wrinkled Graphene Oxide Monolayers",
    authors: "Kyoung-Il Jo=, Tae-Ho Kim=, Ki-In Choi, Hoyeon Lee, Jae-Hak Choi, Joona Bang, Tae-Hwan Kim, Guangcui Yuan, Sushil K. Satija, and Jaseung Koo",
    year: 2019,
    journal: "Langmuir",
    category: "nanotech",
    tags: ["Q1", "Co-first authored", "Thin Polymer Films", "Wrinkled Graphene Oxide", "Dewetting"],
    citationKey: "Jo2019Dewetting",
    doi: "10.1021/acs.langmuir.9b00263",
    numberText: "#18"
  },
  {
    id: "pub-19",
    title: "Spontaneous hybrids of graphene and carbon nanotube arrays at the liquid-gas interface for Li-ion battery anodes",
    authors: "Hyeri Kim, Jongsoon Kim, Hee-Sung Jeong, Hyungsub Kim, Hoyeon Lee, Jae-Min Ha, Sung-Min Choi, Tae-Ho Kim, Yoon-Chae Nah, Tae Joo Shin, Joona Bang, Sushil K. Satija, and Jaseung Koo",
    year: 2018,
    journal: "Chemical Communication",
    category: "nanotech",
    tags: ["Q1", "Graphene hybrids", "Carbon Nanotube Arrays", "Li-ion Battery Anodes"],
    citationKey: "Kim2018Spontaneous",
    doi: "10.1039/c8cc01844b",
    numberText: "#19"
  },
  {
    id: "pub-20",
    title: "Perpendicular orientation of diblock copolymers induced by confinement between graphene oxide sheets",
    authors: "Ki-in Choi=, Tae-Ho Kim=, Yeonhee Lee, Hyeri Kim, Hoyeon Lee, Guangcui Yuan, Sushil Satija, Jae Hak Choi, Hyungju Ahn, and Jaseung Koo",
    year: 2018,
    journal: "Langmuir",
    category: "nanotech",
    tags: ["Q1", "Co-first authored", "Diblock Copolymers", "Graphene Oxide Sheets", "Perpendicular Orientation"],
    citationKey: "Choi2018Perpendicular",
    doi: "10.1021/acs.langmuir.7b03657",
    numberText: "#20"
  },
  {
    id: "pub-21",
    title: "Graphene oxide monolayer as a compatibilizer at the polymer–polymer interface for stabilizing polymer bilayer films against dewetting",
    authors: "Tae-Ho Kim, Hyeri Kim, Ki-In Choi, Jeseung Yoo, Young-Soo Lee, and Jaseung Koo",
    year: 2016,
    journal: "Langmuir",
    category: "nanotech",
    tags: ["Q1", "Graphene Oxide Monolayer", "Polymer-Polymer Interface", "Stabilizing Bilayer"],
    citationKey: "Kim2016Graphene",
    doi: "10.1021/acs.langmuir.6b03362",
    numberText: "#21"
  },
  {
    id: "pub-22",
    title: "Dynamics of entangled polymers confined between graphene oxide sheets as studied by neutron reflectivity",
    authors: "Ki-in Choi, Tae-Ho Kim, Guangcui Yuan, Sushi K. Satija, and Jaseung Koo",
    year: 2017,
    journal: "ACS Macro letters",
    category: "nanotech",
    tags: ["Q1", "Entangled Polymers Dynamics", "Graphene Oxide Confinement", "Neutron Reflectivity"],
    citationKey: "Choi2017Dynamics",
    doi: "10.1021/acsmacrolett.7b00366",
    numberText: "#22"
  },
  {
    id: "pub-23",
    title: "Synthesis and Characterization of Tungsten Trioxide Films Prepared by a Sol-Gel Method for Electrochromic Applications",
    authors: "Tae-Ho Kim, Yoon-Chae Nah",
    year: 2015,
    journal: "The Korean Powder Metallurgy Institute",
    category: "nanotech",
    tags: ["Tungsten Trioxide Films", "Sol-Gel Synthesis", "Electrochromic Applications"],
    citationKey: "Kim2015SynthesisW",
    doi: "10.4150/KPMI.2015.22.5.309",
    numberText: "#23"
  },
  {
    id: "pub-24",
    title: "Morphological investigation of anodized TiO2 nanotubes fabricated using different voltage conditions",
    authors: "Tae-Ho Kim, Jae-Wook Lee, Byung-Sung Kim, Hyeongcheol Cha, and Yoon-Chae Nah",
    year: 2014,
    journal: "Microporous and Mesoporous Materials",
    category: "nanotech",
    tags: ["Q1", "Anodized TiO2 Nanotubes", "Morphological Investigation", "Voltage Conditions"],
    citationKey: "Kim2014Morphological",
    doi: "10.1016/j.micromeso.2014.04.041",
    numberText: "#24"
  },

  // --- Low-Energy Polymer Optoelectronics ---
  {
    id: "pub-25",
    title: "Effects of oxidation potential and retention time on electrochromic stability of poly (3-hexyl thiophene) films",
    authors: "Tae-Ho Kim, Seok Hyun Song, Hyo-Jae Kim, Seong-Hyeon Oh, Song-Yi Han, Goung Kim, and Yoon-Chae Nah",
    year: 2018,
    journal: "Applied Surface Science",
    category: "optoelectronics",
    tags: ["Q1", "Oxidation Potential", "Electrochromic Stability", "P3HT Films"],
    citationKey: "Kim2018Effects",
    doi: "10.1016/j.apsusc.2018.02.078",
    numberText: "#25"
  },
  {
    id: "pub-26",
    title: "Long-term cyclability of electrochromic poly (3-hexyl thiophene) films modified by surfactant-assisted graphene oxide layers",
    authors: "Tae-Ho Kim, Ki-In Choi, Hyeri Kim, Seong Hyeon Oh, Jaseung Koo, and Yoon-Chae Nah",
    year: 2017,
    journal: "ACS Applied Materials & Interfaces",
    category: "optoelectronics",
    tags: ["Q1", "Long-term Cyclability", "P3HT Modification", "Graphene Oxide protecting layer"],
    citationKey: "Kim2017LongTerm",
    doi: "10.1021/acsami.7b05213",
    numberText: "#26"
  },
  {
    id: "pub-27",
    title: "Roll-to-roll sputtered ITO/Ag/ITO multi-layers for highly transparent and flexible electrochromic applications",
    authors: "Tae-Ho Kim, Sung-Hyun Park, Doo-Hee Kim, Yoon-Chae Nah, and Han-Ki Kim",
    year: 2017,
    journal: "Solar Energy Materials and Solar Cells",
    category: "optoelectronics",
    tags: ["Q1", "Roll-to-roll sputtering", "ITO/Ag/ITO composites", "Flexible Electrochromics"],
    citationKey: "Kim2017RollToRoll",
    doi: "10.1016/j.solmat.2016.10.021",
    numberText: "#27"
  },
  {
    id: "pub-28",
    title: "Roll-to-roll sputtered ITO/Cu/ITO multi-layer electrode for flexible, transparent thin film heaters and electrochromic applications",
    authors: "Sung-Hyun Park, Sang-Mok Lee, Eun-Hye Ko, Tae-Ho Kim, Yoon-Chae Nah, Sang-Jin Lee, Jae Heung Lee, and Han-Ki Kim",
    year: 2016,
    journal: "Scientific reports",
    category: "optoelectronics",
    tags: ["Q1", "ITO/Cu/ITO multi-layers", "Thin Film Heaters", "Flexible Electrochromics"],
    citationKey: "Park2016RollToRoll",
    doi: "10.1038/srep33868",
    numberText: "#28"
  },
  {
    id: "pub-29",
    title: "Enhanced electrochromic properties of hybrid P3HT/WO3 composites with multiple colorations",
    authors: "Tae-Ho Kim, Hyeong Jin Jeong, Jae-Wook Lee, and Yoon-Chae Nah",
    year: 2015,
    journal: "Electrochemistry Communication",
    category: "optoelectronics",
    tags: ["Q1", "Hybrid P3HT/WO3 composites", "Multiple Colorations", "Electrochromics"],
    citationKey: "Kim2015Enhanced",
    doi: "10.1016/j.elecom.2015.05.006",
    numberText: "#29"
  },

  // --- National Research Infrastructure Development ---
  {
    id: "pub-30",
    title: "Development of a Cold-neutron reflectometer (CN REF-V) at HANARO",
    authors: "Jeong-Soo Lee, Jaseung Koo, Ji-Yong So, Tae-Ho Kim, and Sungkyun Park",
    year: 2015,
    journal: "Journal of the Korean Physical Society",
    category: "infrastructure",
    tags: ["Q1", "Cold-neutron reflectometer", "HANARO CN REF-V", "Infrastructure Development"],
    citationKey: "Lee2015Development",
    doi: "10.3938/jkps.67.1574",
    numberText: "#30"
  },

  // --- Conference Proceeding Papers / Publications ---
  {
    id: "pub-c1",
    title: "Concurrent on-device learning and inference under hardware constraints for continuous cuffless blood pressure monitoring",
    authors: "Tae-Ho Kim*, Dominic Jaworski, Kam Fung, Rakesh Sethi, Edward J. Park*",
    year: 2026,
    journal: "2026 IEEE International Conference of the IEEE Engineering in Medicine and Biology Society, Toronto, Canada",
    category: "conference",
    tags: ["EMBC 2026", "On-device Learning", "Hardware Constraints", "Cuffless BP Monitoring"],
    citationKey: "Kim2026EMBC",
    doi: "Accepted",
    numberText: "#1"
  },
  {
    id: "pub-c2",
    title: "Neckband-type Self-powered Pulsewave Sensor for Continuous Blood Pressure Monitoring",
    authors: "Tae-Ho Kim, Dominic Jaworski, Rakesh Sethi, Elise Huisman, Kam Fung, Edward J. Park",
    year: 2025,
    journal: "2025 IEEE International Conference of the IEEE Engineering in Medicine and Biology Society, Copenhagen, Denmark, 1-4",
    category: "conference",
    tags: ["EMBC 2025", "Self-powered Sensor", "Pulsewave", "Continuous BP Monitoring"],
    citationKey: "Kim2025EMBC",
    doi: "10.1109/EMBC58623.2025.11253314",
    numberText: "#2"
  },
  {
    id: "pub-c3",
    title: "A 3D-Printed Wearable Electromyography Wristband",
    authors: "Haotian Su, Tae-Ho Kim, Hadi Moeinnia, Woo Soo Kim",
    year: 2023,
    journal: "2023 IEEE International Conference on Flexible and Printable Sensors and Systems (FLEPS), 2023, Boston, MA, USA, 1-4",
    category: "conference",
    tags: ["FLEPS 2023", "3D-Printed Wearable", "EMG Wristband", "Finger Motion Detection"],
    citationKey: "Su2023FLEPS",
    doi: "10.1109/FLEPS57599.2023.10220223",
    numberText: "#3"
  },
  {
    id: "pub-c4",
    title: "A 3D-Printed Architecture Sensor for Structural Health Monitoring",
    authors: "Tae-Ho Kim, Hadi Moeinnia, Woo Soo Kim",
    year: 2023,
    journal: "2023 IEEE International Conference on Flexible and Printable Sensors and Systems (FLEPS), 2023, Boston, MA, USA, 1-4",
    category: "conference",
    tags: ["FLEPS 2023", "Architecture Sensor", "Structural Health Monitoring"],
    citationKey: "Kim2023FLEPS",
    doi: "10.1109/FLEPS57599.2023.10220417",
    numberText: "#4"
  }
];

export const patents: Patent[] = [
  {
    title: "Unit structure for 3D printing and the article manufactured using the same",
    id: "WO2026005103",
    date: "2026/01/02",
    inventors: "Edward J. Park, Tae-Ho Kim",
    status: "Filed (South Korea, Canada, USA)"
  },
  {
    title: "Electrical sensor and blood pressure monitoring system",
    id: "WO2023060339A1",
    date: "2024/04/20",
    inventors: "Woo Soo Kim, Tae-Ho Kim",
    status: "Filed (Canada, USA)"
  },
  {
    title: "Ventilator and airbag for a ventilator",
    id: "WO2022187956A1",
    date: "2022/09/15",
    inventors: "Woo Soo Kim, Tae-Ho Kim",
    status: "Filed (Canada, USA)"
  },
  {
    title: "Method for manufacturing block-copolymer multi-layered thin film and the block-copolymer multilayered thin film manufacturing by the method",
    id: "KR20180036215A",
    date: "2019/03/14",
    inventors: "Jaseung Koo, Ki-In Choi, Tae-Ho Kim",
    status: "Granted (South Korea)"
  },
  {
    title: "Electrochromic electrode film comprising a graphene oxide protecting layer, a method for preparing the same, and electrochromic devices comprising the same",
    id: "KR101857051B1",
    date: "2018/05/11",
    inventors: "Yoon-Chae Nah, Tae-Ho Kim, Jaseung Koo, Ki-in Choi, Hyeri Kim",
    status: "Granted (South Korea)"
  }
];

export const researchGrants: Grant[] = [
  {
    title: "NSERC Alliance Advantage Proposal Leader (with MDA Space Ltd.)",
    year: "2026 (In progress)",
    status: "In progress",
    role: "Proposal Leader",
    description: "Heading proposal development for self-healing robotic arm architectures in space applications; managing multi-institutional technical milestones and budget mapping."
  },
  {
    title: "NSERC Alliance Advantage Proposal Contributor (with Human In Motion Robotics)",
    year: "2025 (Awarded)",
    status: "Awarded",
    role: "Core Technical Contributor",
    description: "Co-authored the core technical segments for advanced nanomaterial-infused lightweight exoskeleton composites; successfully secured federal funding."
  },
  {
    title: "Industrial Research Service Contract (SFU-WearTech Lab & Human In Motion Robotics)",
    year: "2025 (Completed)",
    status: "Completed",
    role: "R&D Lead Owner",
    description: "Solely compiled the multi-year industrial R&D scope, resource distribution schema, and validation workflows; satisfied all corporate KPIs."
  },
  {
    title: "Mitacs Elevate Postdoctoral Fellowship Grant",
    year: "2024 (Awarded)",
    status: "Awarded",
    role: "Fellowship Winner",
    description: "Authored the primary research prospectus for wearable cuffless blood pressure technologies; secured full 2-year federal and corporate co-funding."
  },
  {
    title: "NSERC COVID-19 Rapid Research Investments Grant",
    year: "2020 ~ 2021 (Completed)",
    status: "Completed",
    role: "Blueprint Co-drafter",
    description: "Co-drafted the engineering blueprint and technical sections for emergency deployment of portable mechanical ventilator modules."
  }
];

export const mentorshipAndAcademic: Mentorship[] = [
  {
    title: "Classroom Instruction & Academic Grading",
    type: "classroom",
    details: [
      "MSE220 Engineering Materials @ SFU: Led laboratory demonstrations, safe equipment operational tutoring, and reports grading (2020, 2021, 2022).",
      "MSE280 Linear Systems @ SFU: Administered problem-solving tutorials and final review modules (2021).",
      "MSE410 Capstone Design Technical Project @ SFU: Acted as a technical advisor for embedded control setups (2020).",
      "Rechargeable Battery Engineering @ CNU (Guest Lecturer): Conducted undergraduate core theory lectures and laboratory experiments on battery cyclability (2018).",
      "Materials Engineering Lab 2 @ KOREATECH (Laboratory Instructor): Taught electrochemical anodization surface treatments and hybrid electrochromic thin-film fabrications to over 135 students."
    ]
  },
  {
    title: "Research Mentoring & Trainee Success",
    type: "mentoring",
    details: [
      "2021/5 ~ 2023/4: For graduate student Haotian Su (co-advised). Collaborated on wearable EMG wristband systems. Published in IEEE Sensors Journal (2023) [#1].",
      "2022/5 ~ 2022/8: For undergraduate Co-op student Hesham Asim Khan. Developed a processing system using 3D scanning to generate custom 3D-printed splints for healthcare.",
      "2021/9 ~ 2021/12: For undergraduate Co-op student Jinu (Alex) Chen. Focused on humanoid robot-human interaction algorithms. Published in Npj flexible electronics (2022) [#6], filed Canadian patent 3,134,287.",
      "2020/5 ~ 2020/9: For undergraduate Co-op students Nina Lin and Teresa Lau. Developed preliminary mechanical simulations and setups for portable mechanical ventilators. Published in Flexible and Printed Electronics (2021) [#11], filed Canadian patent 3,111,724.",
      "2020/1 ~ 2020/4: For undergraduate Co-op student Jaydon Vanloo. Developed 3D-printed grippers for robot haptics stiffness sensing. Published in Advanced Materials Technologies (2020) [#12].",
      "2018/5 ~ 2018/10: For graduate student Kyoung-Il Jo (Korea University). Focused on polymer film rheology and graphene oxide layers. Published in Langmuir (2019) [#16] and ACS Macro Letters (2020) [#14].",
      "2018/5 ~ 2018/10: For graduate student Seok Hyun Song (Korea University). Focused on electrochemical analysis and degradation mechanism of P3HT. Published in Applied Surface Science (2018) [#23]."
    ]
  },
  {
    title: "Mentor & Tutor (Voluntary work)",
    type: "mentoring",
    details: [
      "2015/9 ~ 2015/10: Good children’s community center (South Korea). Taught science to 15 single-parent junior high school students.",
      "2013/9 ~ 2014/2: Haenoorim community center (South Korea). Taught math, science, and English to 2 single-parent high school students.",
      "2011/7 ~ 2012/2: Sintanjin Jungang Community Center (South Korea). Taught math and science to 20 single-parent junior high school students."
    ]
  }
];

export const skillsData: Skill[] = [
  {
    domain: "Hardware & Prototyping",
    items: [
      "Industrial FFF, DIW, SLS 3D printing systems",
      "Custom composite carbon-nano filament twin-screw extrusion",
      "Microcontroller platforms (Arduino, ESP32, Raspberry Pi)",
      "PCB schematic design & circuit routing",
      "Sensor fusion"
    ]
  },
  {
    domain: "Software & Simulation",
    items: [
      "TinyML (On-device neural network deployment on ultra-low-power microcontrollers)",
      "C, C++, Python, Java",
      "Finite Element Analysis (FEA) via Abaqus & Ansys",
      "Solidworks CAD"
    ]
  },
  {
    domain: "Materials & Interface Processing",
    items: [
      "Langmuir-Blodgett (LB/LS) precise thin-film manipulation",
      "Electrochemical polymerization (PEDOT, P3HT)",
      "Metallic oxide electrochemical anodization",
      "Sol-Gel organic-inorganic hybrid thin-film synthesis"
    ]
  },
  {
    domain: "Characterization & Analysis",
    items: [
      "XPS, UV-Vis, AFM, XRD, SEM, TEM, FTIR, Raman spectroscopy",
      "Potentiostat operations",
      "Electrochemical Impedance Spectroscopy (EIS)",
      "LCR & Source meters / Oscilloscopes",
      "UTM mechanical fatigue testing"
    ]
  }
];
