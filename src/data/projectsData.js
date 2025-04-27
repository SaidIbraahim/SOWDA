// Projects data for SOWDA website
// We're using placeholders instead of actual images
// In a production environment, these would be replaced with actual images

const projectsData = [
  {
    id: 1,
    title: "Community Health Workshop",
    category: "Health",
    status: "Completed",
    description: "A comprehensive health workshop focused on preventative healthcare and hygiene practices for communities in Garowe. This project included training sessions, distribution of health kits, and follow-up community support.",
    completionDate: "March 2023",
  },
  {
    id: 2,
    title: "Women's Empowerment Training",
    category: "Education",
    status: "Ongoing",
    description: "A series of training sessions designed to equip women with skills in leadership, entrepreneurship, and advocacy. This program is currently being implemented in three regions of Somalia.",
    startDate: "January 2023",
  },
  {
    id: 3,
    title: "Clean Water Initiative",
    category: "Environment",
    status: "Completed",
    description: "Installation of water wells and water purification systems in rural communities facing water scarcity. This project has provided clean drinking water to over 5,000 people.",
    completionDate: "November 2022",
  },
  {
    id: 4,
    title: "Youth Education Program",
    category: "Education",
    status: "Ongoing",
    description: "Educational support for children in underserved communities, including school supplies, scholarship programs, and supplementary learning resources.",
    startDate: "September 2022",
  },
  {
    id: 5,
    title: "Peace Building Workshop",
    category: "Peacebuilding",
    status: "Completed",
    description: "A series of community dialogues and workshops focused on conflict resolution, reconciliation, and building sustainable peace in conflict-affected areas.",
    completionDate: "July 2023",
  },
  {
    id: 6,
    title: "FGM Awareness Campaign",
    category: "Health",
    status: "Ongoing",
    description: "Community awareness and education on the harmful effects of Female Genital Mutilation, working with local leaders, health workers, and schools to end this practice.",
    startDate: "April 2022",
  },
  {
    id: 7,
    title: "Emergency Food Distribution",
    category: "Emergency",
    status: "Completed",
    description: "Distribution of food packages to families affected by drought in southern Somalia, reaching over 2,000 households with essential nutritional support.",
    completionDate: "February 2023",
  },
  {
    id: 8,
    title: "Mobile Healthcare Outreach",
    category: "Health",
    status: "Ongoing",
    description: "Mobile health clinics providing basic healthcare services to remote and underserved communities, including maternal health, vaccinations, and general consultations.",
    startDate: "May 2023",
  },
  {
    id: 9,
    title: "Women's Cooperative Development",
    category: "Economic",
    status: "Upcoming",
    description: "Planned establishment of women's cooperatives in three regions, providing training, seed funding, and market access for women entrepreneurs.",
    plannedStart: "January 2024",
  },
  {
    id: 10,
    title: "Community Garden Initiative",
    category: "Environment",
    status: "Upcoming",
    description: "Development of sustainable community gardens to improve food security and provide income-generating opportunities for families in urban areas.",
    plannedStart: "March 2024",
  },
  {
    id: 11,
    title: "IDP Support Program",
    category: "Emergency",
    status: "Ongoing",
    description: "Comprehensive support for internally displaced persons, including shelter, essential supplies, healthcare, and psychosocial support services.",
    startDate: "August 2022",
  },
  {
    id: 12,
    title: "Digital Literacy for Women",
    category: "Education",
    status: "Upcoming",
    description: "Training program to enhance digital literacy skills among women and girls, enabling access to online resources, education, and economic opportunities.",
    plannedStart: "April 2024",
  }
];

// Categories for filtering
const projectCategories = [
  "All",
  "Health",
  "Education",
  "Environment", 
  "Peacebuilding",
  "Emergency",
  "Economic"
];

// Project statuses for filtering
const projectStatuses = [
  "All",
  "Completed",
  "Ongoing",
  "Upcoming"
];

export { projectsData, projectCategories, projectStatuses }; 