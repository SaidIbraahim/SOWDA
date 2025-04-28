// Projects data for SOWDA website
// All images are stored in assets/images folder

import { 
  Workshop, 
  WomenEmpowermentEducation, 
  FGMAwareness, 
  FoodDistribution, 
  PeaceBuilding, 
  Campaign, 
  DroughtFloodsEmergency, 
  HealthcareCenterOngoing, 
  IDPCamp,
  CleanWater,
  GreenInitiative
} from '../assets/images';

const projectsData = [
  {
    id: 1,
    title: "SOMALI GERMAN HOSPITAL",
    category: "Health",
    status: "Ongoing",
    description: "Development of a comprehensive healthcare facility in Bosaso to provide quality medical services to the community. This project aims to improve healthcare access and outcomes for the local population.",
    startDate: "February 2023",
    image: HealthcareCenterOngoing,
    altText: "Somali German Hospital: New healthcare facility being constructed in Bosaso to provide medical services to the local community",
    goFundMeLink: "https://gofund.me/32716c10"
  },
  {
    id: 2,
    title: "Community Health Workshop",
    category: "Health",
    status: "Completed",
    description: "A comprehensive health workshop focused on preventative healthcare and hygiene practices for communities in Garowe. This project included training sessions, distribution of health kits, and follow-up community support.",
    completionDate: "March 2023",
    image: Workshop,
    altText: "Community Health Workshop: Local participants engaged in preventative healthcare and hygiene training session in Garowe"
  },
  {
    id: 3,
    title: "Women's Empowerment Training",
    category: "Education",
    status: "Ongoing",
    description: "A series of training sessions designed to equip women with skills in leadership, entrepreneurship, and advocacy. This program is currently being implemented in three regions of Somalia.",
    startDate: "January 2023",
    image: WomenEmpowermentEducation,
    altText: "Women's Empowerment Training: Group of women attending educational sessions for leadership and entrepreneurship skills development"
  },
  {
    id: 4,
    title: "Clean Water Initiative",
    category: "Environment",
    status: "Completed",
    description: "Installation of water wells and water purification systems in rural communities facing water scarcity. This project has provided clean drinking water to over 5,000 people.",
    completionDate: "November 2022",
    image: CleanWater,
    altText: "Clean Water Initiative: Water well installation and purification system that provides clean drinking water to rural communities"
  },
  {
    id: 5,
    title: "Youth Education Program",
    category: "Education",
    status: "Ongoing",
    description: "Educational support for children in underserved communities, including school supplies, scholarship programs, and supplementary learning resources.",
    startDate: "September 2022",
    image: Campaign,
    altText: "Youth Education Program: Children receiving educational support, school supplies and learning resources in underserved communities"
  },
  {
    id: 6,
    title: "Peace Building Workshop",
    category: "Peacebuilding",
    status: "Completed",
    description: "A series of community dialogues and workshops focused on conflict resolution, reconciliation, and building sustainable peace in conflict-affected areas.",
    completionDate: "July 2023",
    image: PeaceBuilding,
    altText: "Peace Building Workshop: Community members participating in dialogue session focused on conflict resolution and reconciliation"
  },
  {
    id: 7,
    title: "FGM Awareness Campaign",
    category: "Health",
    status: "Ongoing",
    description: "Community awareness and education on the harmful effects of Female Genital Mutilation, working with local leaders, health workers, and schools to end this practice.",
    startDate: "April 2022",
    image: FGMAwareness,
    altText: "FGM Awareness Campaign: Community education session raising awareness about the harmful effects of female genital mutilation"
  },
  {
    id: 8,
    title: "Emergency Food Distribution",
    category: "Emergency",
    status: "Completed",
    description: "Distribution of food packages to families affected by drought in southern Somalia, reaching over 2,000 households with essential nutritional support.",
    completionDate: "February 2023",
    image: FoodDistribution,
    altText: "Emergency Food Distribution: Distribution of food packages to drought-affected families in southern Somalia"
  },
  {
    id: 9,
    title: "Community Garden Initiative",
    category: "Environment",
    status: "Upcoming",
    description: "Development of sustainable community gardens to improve food security and provide income-generating opportunities for families in urban areas.",
    plannedStart: "March 2024",
    image: GreenInitiative,
    altText: "Community Garden Initiative: Sustainable garden plots being developed to improve food security and provide income for urban families"
  },
  {
    id: 10,
    title: "IDP Support Program",
    category: "Emergency",
    status: "Ongoing",
    description: "Comprehensive support for internally displaced persons, including shelter, essential supplies, healthcare, and psychosocial support services.",
    startDate: "August 2022",
    image: IDPCamp,
    altText: "IDP Support Program: Internally displaced persons receiving shelter, supplies, and support services at a camp in Somalia"
  },
  {
    id: 11,
    title: "Digital Literacy for Women",
    category: "Education",
    status: "Upcoming",
    description: "Training program to enhance digital literacy skills among women and girls, enabling access to online resources, education, and economic opportunities.",
    plannedStart: "April 2024",
    image: Workshop,
    altText: "Digital Literacy for Women: Women and girls receiving training in digital skills to access online resources and education"
  }
];

// Categories for filtering
const projectCategories = [
  "All",
  "Health",
  "Education",
  "Environment", 
  "Peacebuilding",
  "Emergency"
];

// Project statuses for filtering
const projectStatuses = [
  "All",
  "Completed",
  "Ongoing",
  "Upcoming"
];

export { projectsData, projectCategories, projectStatuses }; 