// Data
const teammates = [
  {
    id: 1,
    name: "Alicia Chen",
    initials: "AC",
    timezone: "UTC-5",
    skills: ["React", "Figma", "User Research"],
    interests: ["EdTech", "Accessibility"],
    roles: ["Frontend Developer", "UX Designer"],
    email: "achen7@gatech.edu",
    about: "I'm passionate about creating inclusive digital experiences that make technology accessible to everyone. With 3 years of experience in both development and design, I love bridging the gap between user needs and technical implementation.",
  },
  {
    id: 2,
    name: "Jordan Smith",
    initials: "JS",
    timezone: "UTC+1",
    skills: ["Python", "Machine Learning", "Data Visualization"],
    interests: ["AI", "Sustainability"],
    roles: ["Data Scientist", "Technical Writer"],
    email: "jsmith12@gatech.edu",
    about: "Data storyteller with a background in environmental science. I'm excited about using AI and machine learning to tackle climate challenges. Always happy to explain complex concepts in simple terms!",
  },
  {
    id: 3,
    name: "Fatima Al-Mansoori",
    initials: "FA",
    timezone: "UTC+4",
    skills: ["Copywriting", "Marketing Strategy", "SEO"],
    interests: ["Health", "Startups"],
    roles: ["Content Strategist", "Marketing Lead"],
    email: "falmansoori3@gatech.edu",
    about: "Strategic content creator with a passion for health tech and startup ecosystems. I help emerging companies find their voice and connect with their audience through compelling storytelling and data-driven marketing strategies.",
  },
  {
    id: 4,
    name: "Diego Rivera",
    initials: "DR",
    timezone: "UTC-6",
    skills: ["UI Design", "Branding", "Illustration"],
    interests: ["Civic Tech", "Education"],
    roles: ["Visual Designer", "Product Designer"],
    email: "drivera17@gatech.edu",
    about: "Visual storyteller who believes design can change the world. I specialize in creating engaging interfaces for social impact projects. When I'm not designing, you'll find me sketching urban landscapes or volunteering at local schools.",
  },
  {
    id: 5,
    name: "Sophie Dubois",
    initials: "SD",
    timezone: "UTC+2",
    skills: ["Excel", "User Interviews", "Project Coordination"],
    interests: ["Climate", "Social Impact"],
    roles: ["Project Manager", "Business Analyst"],
    email: "sdubois5@gatech.edu",
    about: "Organized project leader with a strong commitment to climate action and social impact initiatives. I excel at bringing teams together, managing complex timelines, and ensuring every voice is heard in the decision-making process.",
  },
  {
    id: 6,
    name: "Emily Nguyen",
    initials: "EN",
    timezone: "UTC-8",
    skills: ["UX Writing", "Information Architecture", "Prototyping"],
    interests: ["Productivity", "Mental Health"],
    roles: ["Backend Developer", "Full-Stack Engineer"],
    email: "enguyen9@gatech.edu",
    about: "Full-stack developer with a unique background in UX writing and information architecture. I'm passionate about building productivity tools that support mental health and creating seamless user experiences from both technical and content perspectives.",
  },
  {
    id: 7,
    name: "Mohammed Raza",
    initials: "MR",
    timezone: "UTC+3",
    skills: ["JavaScript", "Node.js", "API Integration"],
    interests: ["Smart Cities", "Healthcare"],
    roles: ["Backend Developer", "Full-Stack Engineer"],
    email: "mraza10@gatech.edu",
    about: "Backend specialist focused on building robust APIs and integrations for smart city and healthcare applications. I believe technology should make urban living more sustainable and healthcare more accessible to everyone.",
  },
  {
    id: 8,
    name: "Kofi Mensah",
    initials: "KM",
    timezone: "UTC+0",
    skills: ["Agile Methodology", "Scrum", "Stakeholder Management"],
    interests: ["Finance", "Open Source"],
    roles: ["Project Manager", "Team Facilitator"],
    email: "kmensah4@gatech.edu",
    about: "Agile project manager and team facilitator with expertise in fintech and open source development. I'm passionate about creating collaborative environments where diverse teams can innovate and deliver exceptional results together.",
  },
  {
    id: 9,
    name: "Lina Hoshino",
    initials: "LH",
    timezone: "UTC+9",
    skills: ["SQL", "Data Cleaning", "Business Intelligence"],
    interests: ["E-Commerce", "Consumer Behavior"],
    roles: ["Data Analyst", "BI Developer"],
    email: "lhoshino16@gatech.edu",
    about: "Data analyst specializing in e-commerce analytics and consumer behavior insights. I love uncovering hidden patterns in data that help businesses better understand their customers and make more informed decisions.",
  },
  {
    id: 10,
    name: "Zachary Lee",
    initials: "ZL",
    timezone: "UTC-7",
    skills: ["Public Speaking", "User Research", "Workshop Facilitation"],
    interests: ["Civic Tech", "Education"],
    roles: ["Community Manager", "Design Researcher"],
    email: "zlee2@gatech.edu",
    about: "Community builder and design researcher focused on civic technology and educational initiatives. I excel at facilitating workshops, conducting user research, and bringing people together to solve complex social challenges.",
  },
  {
    id: 11,
    name: "Isabella Rossi",
    initials: "IR",
    timezone: "UTC+1",
    skills: ["Graphic Design", "Illustrator", "Typography"],
    interests: ["Art", "Culture"],
    roles: ["Graphic Designer"],
    email: "irossi14@gatech.edu",
    about: "Creative graphic designer with a deep appreciation for art and cultural expression. I specialize in typography and illustration, bringing visual stories to life that celebrate diversity and connect communities through beautiful design.",
  },
  {
    id: 12,
    name: "Raj Patel",
    initials: "RP",
    timezone: "UTC+5:30",
    skills: ["Java", "Spring", "Microservices"],
    interests: ["FinTech", "Blockchain"],
    roles: ["Backend Developer"],
    email: "rpatel8@gatech.edu",
    about: "Backend developer specializing in Java and microservices architecture for fintech applications. I'm fascinated by blockchain technology and its potential to revolutionize financial systems, making them more transparent and accessible.",
  },
  {
    id: 13,
    name: "Chen Wei",
    initials: "CW",
    timezone: "UTC+8",
    skills: ["Kubernetes", "Docker", "CI/CD"],
    interests: ["DevOps", "Cloud"],
    roles: ["DevOps Engineer"],
    email: "cwei19@gatech.edu",
    about: "DevOps engineer passionate about cloud infrastructure and automation. I specialize in containerization and CI/CD pipelines, helping teams deploy faster and more reliably while maintaining security and scalability.",
  },
  {
    id: 14,
    name: "Sara López",
    initials: "SL",
    timezone: "UTC-3",
    skills: ["Research", "Data Analysis", "Report Writing"],
    interests: ["Public Policy", "Social Justice"],
    roles: ["Research Analyst"],
    email: "slopez6@gatech.edu",
    about: "Research analyst dedicated to public policy and social justice initiatives. I conduct thorough research and data analysis to inform policy decisions that create positive social change and promote equity in our communities.",
  },
  {
    id: 15,
    name: "Max Müller",
    initials: "MM",
    timezone: "UTC+2",
    skills: ["C++", "Game Development", "3D Modeling"],
    interests: ["Gaming", "VR"],
    roles: ["Game Developer"],
    email: "mmuller11@gatech.edu",
    about: "Game developer specializing in C++ and 3D modeling with a passion for immersive VR experiences. I love creating virtual worlds that tell compelling stories and push the boundaries of what's possible in interactive entertainment.",
  },
  {
    id: 16,
    name: "Nina Kim",
    initials: "NK",
    timezone: "UTC+9",
    skills: ["Swift", "iOS Development", "UI/UX"],
    interests: ["Mobile Apps"],
    roles: ["iOS Developer"],
    email: "nkim4@gatech.edu",
    about: "iOS developer focused on creating beautiful and intuitive mobile applications. I combine technical expertise in Swift with strong UI/UX sensibilities to build apps that users love and find genuinely helpful in their daily lives.",
  },
  {
    id: 17,
    name: "Lars Johansson",
    initials: "LJ",
    timezone: "UTC+1",
    skills: ["Go", "Distributed Systems", "Performance Tuning"],
    interests: ["IoT"],
    roles: ["Systems Engineer"],
    email: "ljohansson2@gatech.edu",
    about: "Systems engineer specializing in distributed systems and IoT infrastructure. I'm passionate about building high-performance, scalable systems that can handle massive amounts of data from connected devices and sensors.",
  },
  {
    id: 18,
    name: "Amelie Dubois",
    initials: "AD",
    timezone: "UTC+2",
    skills: ["Photography", "Video Editing", "Storytelling"],
    interests: ["Documentaries", "Travel"],
    roles: ["Media Producer"],
    email: "adubois15@gatech.edu",
    about: "Media producer and storyteller specializing in documentary photography and video. I love capturing authentic human stories from around the world and creating compelling narratives that inspire empathy and understanding.",
  },
  {
    id: 19,
    name: "Carlos Silva",
    initials: "CS",
    timezone: "UTC-3",
    skills: ["UX Research", "Persona Development"],
    interests: ["User Experience"],
    roles: ["UX Researcher"],
    email: "csilva18@gatech.edu",
    about: "UX researcher specializing in persona development and user behavior analysis. I'm passionate about understanding what makes people tick and translating those insights into design decisions that create meaningful user experiences.",
  },
  {
    id: 20,
    name: "Ayodele Okafor",
    initials: "AO",
    timezone: "UTC+1",
    skills: ["Ethnography", "Field Studies"],
    interests: ["Cultural Studies"],
    roles: ["Anthropologist"],
    email: "aokafor1@gatech.edu",
    about: "Cultural anthropologist specializing in ethnographic research and field studies. I'm fascinated by how different cultures solve problems and how we can learn from diverse perspectives to create more inclusive and effective solutions.",
  },
  {
    id: 21,
    name: "Yuki Tanaka",
    initials: "YT",
    timezone: "UTC+9",
    skills: ["Python", "Flask", "REST APIs"],
    interests: ["Startups"],
    roles: ["Full-Stack Developer"],
    email: "ytanaka20@gatech.edu",
    about: "Full-stack developer with a passion for startup culture and rapid prototyping. I specialize in Python and API development, helping early-stage companies quickly build and iterate on their product ideas to find market fit.",
  },
];

const groups = [
  // 3 Full Groups
  {
    id: 1,
    teammates: [
      {
        id: 1,
        name: "Alicia Chen",
        initials: "AC",
        timezone: "UTC-5",
        skills: ["React", "Figma", "User Research"],
        interests: ["EdTech", "Accessibility"],
        roles: ["Frontend Developer", "UX Designer"],
        email: "achen7@gatech.edu",
      },
      {
        id: 2,
        name: "Jordan Smith",
        initials: "JS",
        timezone: "UTC+1",
        skills: ["Python", "Machine Learning", "Data Visualization"],
        interests: ["AI", "Sustainability"],
        roles: ["Data Scientist", "Technical Writer"],
        email: "jsmith12@gatech.edu",
      },
      {
        id: 3,
        name: "Fatima Al‑Mansoori",
        initials: "FA",
        timezone: "UTC+4",
        skills: ["Copywriting", "Marketing Strategy", "SEO"],
        interests: ["Health", "Startups"],
        roles: ["Content Strategist", "Marketing Lead"],
        email: "falmansoori3@gatech.edu",
      },
      {
        id: 4,
        name: "Diego Rivera",
        initials: "DR",
        timezone: "UTC-6",
        skills: ["UI Design", "Branding", "Illustration"],
        interests: ["Civic Tech", "Education"],
        roles: ["Visual Designer", "Product Designer"],
        email: "drivera17@gatech.edu",
      },
      {
        id: 5,
        name: "Sophie Dubois",
        initials: "SD",
        timezone: "UTC+2",
        skills: ["Excel", "User Interviews", "Project Coordination"],
        interests: ["Climate", "Social Impact"],
        roles: ["Project Manager", "Business Analyst"],
        email: "sdubois5@gatech.edu",
      },
    ],
    timezones: ["UTC-5", "UTC+1", "UTC+4", "UTC-6", "UTC+2"],
    skills: [
      "React",
      "Figma",
      "User Research",
      "Python",
      "Machine Learning",
      "Data Visualization",
      "Copywriting",
      "Marketing Strategy",
      "SEO",
      "UI Design",
      "Branding",
      "Illustration",
      "Excel",
      "User Interviews",
      "Project Coordination",
    ],
    interests: [
      "EdTech",
      "Accessibility",
      "AI",
      "Sustainability",
      "Health",
      "Startups",
      "Civic Tech",
      "Education",
      "Climate",
      "Social Impact",
    ],
    roles: [
      "Frontend Developer",
      "UX Designer",
      "Data Scientist",
      "Technical Writer",
      "Content Strategist",
      "Marketing Lead",
      "Visual Designer",
      "Product Designer",
      "Project Manager",
      "Business Analyst",
    ],
    isFull: true,
    maxSize: 5,
    slotsAvailable: 0,
    mainContact: "achen7@gatech.edu",
  },
  {
    id: 2,
    teammates: [
      {
        id: 6,
        name: "Emily Nguyen",
        initials: "EN",
        timezone: "UTC-8",
        skills: ["UX Writing", "Information Architecture", "Prototyping"],
        interests: ["Productivity", "Mental Health"],
        roles: ["Backend Developer", "Full-Stack Engineer"],
        email: "enguyen9@gatech.edu",
      },
      {
        id: 7,
        name: "Mohammed Raza",
        initials: "MR",
        timezone: "UTC+3",
        skills: ["JavaScript", "Node.js", "API Integration"],
        interests: ["Smart Cities", "Healthcare"],
        roles: ["Backend Developer", "Full-Stack Engineer"],
        email: "mraza10@gatech.edu",
      },
      {
        id: 8,
        name: "Kofi Mensah",
        initials: "KM",
        timezone: "UTC+0",
        skills: ["Agile Methodology", "Scrum", "Stakeholder Management"],
        interests: ["Finance", "Open Source"],
        roles: ["Project Manager", "Team Facilitator"],
        email: "kmensah4@gatech.edu",
      },
      {
        id: 9,
        name: "Lina Hoshino",
        initials: "LH",
        timezone: "UTC+9",
        skills: ["SQL", "Data Cleaning", "Business Intelligence"],
        interests: ["E-Commerce", "Consumer Behavior"],
        roles: ["Data Analyst", "BI Developer"],
        email: "lhoshino16@gatech.edu",
      },
      {
        id: 10,
        name: "Zachary Lee",
        initials: "ZL",
        timezone: "UTC-7",
        skills: ["Public Speaking", "User Research", "Workshop Facilitation"],
        interests: ["Civic Tech", "Education"],
        roles: ["Community Manager", "Design Researcher"],
        email: "zlee2@gatech.edu",
      },
    ],
    timezones: ["UTC-8", "UTC+3", "UTC+0", "UTC+9", "UTC-7"],
    skills: [
      "UX Writing",
      "Information Architecture",
      "Prototyping",
      "JavaScript",
      "Node.js",
      "API Integration",
      "Agile Methodology",
      "Scrum",
      "Stakeholder Management",
      "SQL",
      "Data Cleaning",
      "Business Intelligence",
      "Public Speaking",
      "User Research",
      "Workshop Facilitation",
    ],
    interests: [
      "Productivity",
      "Mental Health",
      "Smart Cities",
      "Healthcare",
      "Finance",
      "Open Source",
      "E-Commerce",
      "Consumer Behavior",
      "Civic Tech",
      "Education",
    ],
    roles: [
      "Backend Developer",
      "Full-Stack Engineer",
      "Project Manager",
      "Team Facilitator",
      "Data Analyst",
      "BI Developer",
      "Community Manager",
      "Design Researcher",
    ],
    isFull: true,
    maxSize: 5,
    slotsAvailable: 0,
    mainContact: "enguyen9@gatech.edu",
  },
  {
    id: 3,
    teammates: [
      {
        id: 11,
        name: "Isabella Rossi",
        initials: "IR",
        timezone: "UTC+1",
        skills: ["Graphic Design", "Illustrator", "Typography"],
        interests: ["Art", "Culture"],
        roles: ["Graphic Designer"],
        email: "irossi14@gatech.edu",
      },
      {
        id: 12,
        name: "Raj Patel",
        initials: "RP",
        timezone: "UTC+5:30",
        skills: ["Java", "Spring", "Microservices"],
        interests: ["FinTech", "Blockchain"],
        roles: ["Backend Developer"],
        email: "rpatel8@gatech.edu",
      },
      {
        id: 13,
        name: "Chen Wei",
        initials: "CW",
        timezone: "UTC+8",
        skills: ["Kubernetes", "Docker", "CI/CD"],
        interests: ["DevOps", "Cloud"],
        roles: ["DevOps Engineer"],
        email: "cwei19@gatech.edu",
      },
      {
        id: 14,
        name: "Sara López",
        initials: "SL",
        timezone: "UTC-3",
        skills: ["Research", "Data Analysis", "Report Writing"],
        interests: ["Public Policy", "Social Justice"],
        roles: ["Research Analyst"],
        email: "slopez6@gatech.edu",
      },
      {
        id: 15,
        name: "Max Müller",
        initials: "MM",
        timezone: "UTC+2",
        skills: ["C++", "Game Development", "3D Modeling"],
        interests: ["Gaming", "VR"],
        roles: ["Game Developer"],
        email: "mmuller11@gatech.edu",
      },
    ],
    timezones: ["UTC+1", "UTC+5:30", "UTC+8", "UTC-3", "UTC+2"],
    skills: [
      "Graphic Design",
      "Illustrator",
      "Typography",
      "Java",
      "Spring",
      "Microservices",
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Research",
      "Data Analysis",
      "Report Writing",
      "C++",
      "Game Development",
      "3D Modeling",
    ],
    interests: [
      "Art",
      "Culture",
      "FinTech",
      "Blockchain",
      "DevOps",
      "Cloud",
      "Public Policy",
      "Social Justice",
      "Gaming",
      "VR",
    ],
    roles: [
      "Graphic Designer",
      "Backend Developer",
      "DevOps Engineer",
      "Research Analyst",
      "Game Developer",
    ],
    isFull: true,
    maxSize: 5,
    slotsAvailable: 0,
    mainContact: "irossi14@gatech.edu",
  },

  // 3 Open Groups
  {
    id: 4,
    teammates: [
      {
        id: 16,
        name: "Nina Kim",
        initials: "NK",
        timezone: "UTC+9",
        skills: ["Swift", "iOS Development", "UI/UX"],
        interests: ["Mobile Apps"],
        roles: ["iOS Developer"],
        email: "nkim4@gatech.edu",
      },
    ],
    timezones: ["UTC+9"],
    skills: ["Swift", "iOS Development", "UI/UX"],
    interests: ["Mobile Apps"],
    roles: ["iOS Developer"],
    isFull: false,
    maxSize: 5,
    slotsAvailable: 4,
    mainContact: "nkim4@gatech.edu",
  },
  {
    id: 5,
    teammates: [
      {
        id: 17,
        name: "Lars Johansson",
        initials: "LJ",
        timezone: "UTC+1",
        skills: ["Go", "Distributed Systems", "Performance Tuning"],
        interests: ["IoT"],
        roles: ["Systems Engineer"],
        email: "ljohansson2@gatech.edu",
      },
      {
        id: 18,
        name: "Amelie Dubois",
        initials: "AD",
        timezone: "UTC+2",
        skills: ["Photography", "Video Editing", "Storytelling"],
        interests: ["Documentaries", "Travel"],
        roles: ["Media Producer"],
        email: "adubois15@gatech.edu",
      },
    ],
    timezones: ["UTC+1", "UTC+2"],
    skills: [
      "Go",
      "Distributed Systems",
      "Performance Tuning",
      "Photography",
      "Video Editing",
      "Storytelling",
    ],
    interests: ["IoT", "Documentaries", "Travel"],
    roles: ["Systems Engineer", "Media Producer"],
    isFull: false,
    maxSize: 5,
    slotsAvailable: 3,
    mainContact: "ljohansson2@gatech.edu",
  },
  {
    id: 6,
    teammates: [
      {
        id: 19,
        name: "Carlos Silva",
        initials: "CS",
        timezone: "UTC-3",
        skills: ["UX Research", "Persona Development"],
        interests: ["User Experience"],
        roles: ["UX Researcher"],
        email: "csilva18@gatech.edu",
      },
      {
        id: 20,
        name: "Ayodele Okafor",
        initials: "AO",
        timezone: "UTC+1",
        skills: ["Ethnography", "Field Studies"],
        interests: ["Cultural Studies"],
        roles: ["Anthropologist"],
        email: "aokafor1@gatech.edu",
      },
      {
        id: 21,
        name: "Yuki Tanaka",
        initials: "YT",
        timezone: "UTC+9",
        skills: ["Python", "Flask", "REST APIs"],
        interests: ["Startups"],
        roles: ["Full-Stack Developer"],
        email: "ytanaka20@gatech.edu",
      },
    ],
    timezones: ["UTC-3", "UTC+1", "UTC+9"],
    skills: [
      "UX Research",
      "Persona Development",
      "Ethnography",
      "Field Studies",
      "Python",
      "Flask",
      "REST APIs",
    ],
    interests: ["User Experience", "Cultural Studies", "Startups"],
    roles: ["UX Researcher", "Anthropologist", "Full-Stack Developer"],
    isFull: false,
    maxSize: 5,
    slotsAvailable: 2,
    mainContact: "csilva18@gatech.edu",
  },
];

const skillsOptions = [
  "Agile Methodology",
  "API Integration",
  "Branding",
  "Copywriting",
  "Data Cleaning",
  "Data Visualization",
  "Excel",
  "Figma",
  "Illustration",
  "Information Architecture",
  "JavaScript",
  "Machine Learning",
  "Marketing Strategy",
  "Node.js",
  "Prototyping",
  "Project Coordination",
  "Public Speaking",
  "Python",
  "React",
  "SEO",
  "Scrum",
  "SQL",
  "Stakeholder Management",
  "UI Design",
  "UX Writing",
  "User Interviews",
  "User Research",
  "Workshop Facilitation",
];

const interestsOptions = [
  "Accessibility",
  "AI",
  "Climate",
  "Consumer Behavior",
  "Education",
  "E-Commerce",
  "EdTech",
  "Finance",
  "Health",
  "Healthcare",
  "Mental Health",
  "Open Source",
  "Productivity",
  "Social Impact",
  "Smart Cities",
  "Startups",
  "Sustainability",
  "Civic Tech",
];

const rolesOptions = [
  "Backend Developer",
  "BI Developer",
  "Business Analyst",
  "Community Manager",
  "Content Strategist",
  "Data Analyst",
  "Data Scientist",
  "Design Researcher",
  "Frontend Developer",
  "Full-Stack Engineer",
  "Interaction Designer",
  "Marketing Lead",
  "Product Designer",
  "Project Manager",
  "Technical Writer",
  "Team Facilitator",
  "UX Designer",
  "UX Writer",
  "Visual Designer",
];

// State
let filteredTeammates = [...teammates];
let connectedTeammates = [];
let currentProfile = null;
let nextTeammateId = teammates.length + 1;

// Navigation
function navigateToProfile(id) {
  currentProfile = teammates.find((t) => t.id === id);
  showProfile(id);
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.add("hidden");
  document.getElementById("user-profile-view").classList.add("hidden");
  document.getElementById("profile-view").classList.remove("hidden");
  document.getElementById("groups-view").classList.add("hidden");
}

function navigateToMain() {
  // If user doesn't have a profile and tries to go to main, redirect back to profile creation
  if (!hasUserProfile()) {
    alert("Please create your profile first to access the teammate finder features.");
    return;
  }
  
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.add("hidden");
  document.getElementById("user-profile-view").classList.add("hidden");
  document.getElementById("main-view").classList.remove("hidden");
  document.getElementById("groups-view").classList.add("hidden");
  clearFormErrors();
  
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToCreateProfile() {
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("user-profile-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.remove("hidden");
  document.getElementById("groups-view").classList.add("hidden");
  initializeMultiSelects();
  
  // Reset the header text for creating mode
  const headerTitle = document.querySelector('#create-profile-view .header-text h1');
  if (headerTitle) {
    headerTitle.textContent = "Create Your Profile";
  }
  
  // Reset the form button text in case it was changed to "Update Profile"
  const submitButton = document.querySelector('#create-profile-form button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Create Profile";
  }
  
  // Hide cancel button during initial profile setup
  const cancelBtn = document.getElementById("cancel-profile-btn");
  if (cancelBtn) {
    cancelBtn.style.display = hasUserProfile() ? "inline-block" : "none";
  }
}

function navigateToGroups() {
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.add("hidden");
  document.getElementById("user-profile-view").classList.add("hidden");
  document.getElementById("groups-view").classList.remove("hidden");
}

// View user's own profile
function viewUserProfile() {
  const userProfile = getUserProfile();
  if (!userProfile) return;

  // Hide all other views
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.add("hidden");
  document.getElementById("groups-view").classList.add("hidden");
  document.getElementById("user-profile-view").classList.remove("hidden");

  // Populate the profile display
  document.getElementById("user-profile-name").textContent = userProfile.name;
  document.getElementById("user-profile-timezone").textContent = userProfile.timezone;
  
  // Display about me section (only if it exists and is not empty)
  const aboutSection = document.getElementById("user-about-section");
  const aboutElement = document.getElementById("user-profile-about");
  if (userProfile.about && userProfile.about.trim()) {
    aboutElement.textContent = userProfile.about;
    aboutSection.style.display = "block";
  } else {
    aboutSection.style.display = "none";
  }
  
  // Display skills
  document.getElementById("user-profile-skills").innerHTML = userProfile.skills
    .map(skill => `<span class="tag">${skill}</span>`)
    .join("");
    
  // Display interests
  document.getElementById("user-profile-interests").innerHTML = userProfile.interests
    .map(interest => `<span class="tag">${interest}</span>`)
    .join("");
    
  // Display roles
  document.getElementById("user-profile-roles").innerHTML = userProfile.roles
    .map(role => `<span class="tag">${role}</span>`)
    .join("");
}

// Edit user profile (redirect to create profile with existing data)
function editUserProfile() {
  const userProfile = getUserProfile();
  if (!userProfile) return;

  // Navigate to create profile view
  navigateToCreateProfile();
  
  // Update header text for editing mode
  const headerTitle = document.querySelector('#create-profile-view .header-text h1');
  if (headerTitle) {
    headerTitle.textContent = "Update Your Profile";
  }
  
  // Use setTimeout to ensure DOM is fully updated after navigation
  setTimeout(() => {
    // Pre-populate the form with existing data
    document.getElementById("profile-name").value = userProfile.name;
    document.getElementById("profile-timezone").value = userProfile.timezone;
    document.getElementById("profile-about-textarea").value = userProfile.about || '';
    
    // Pre-select skills
    const skillsContainer = document.getElementById("skills-select");
    skillsContainer.querySelectorAll(".multi-select-option").forEach(option => {
      if (userProfile.skills.includes(option.dataset.value)) {
        option.classList.add("selected");
      }
    });
    
    // Pre-select interests
    const interestsContainer = document.getElementById("interests-select");
    interestsContainer.querySelectorAll(".multi-select-option").forEach(option => {
      if (userProfile.interests.includes(option.dataset.value)) {
        option.classList.add("selected");
      }
    });
    
    // Pre-select roles
    const rolesContainer = document.getElementById("roles-select");
    rolesContainer.querySelectorAll(".multi-select-option").forEach(option => {
      if (userProfile.roles.includes(option.dataset.value)) {
        option.classList.add("selected");
      }
    });
  }, 10); // Small delay to ensure DOM is updated

  // Change the form button text to indicate editing
  const submitButton = document.querySelector('#create-profile-form button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = "Update Profile";
  }
}

// Multi-select functionality
function createMultiSelect(containerId, options, selectedValues = []) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  options.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.className = "multi-select-option";
    optionElement.textContent = option;
    optionElement.dataset.value = option;

    if (selectedValues.includes(option)) {
      optionElement.classList.add("selected");
    }

    optionElement.addEventListener("click", function () {
      this.classList.toggle("selected");
      clearFieldError(containerId.replace("-select", ""));
    });

    container.appendChild(optionElement);
  });
}

function getSelectedOptions(containerId) {
  const container = document.getElementById(containerId);
  const selectedOptions = container.querySelectorAll(
    ".multi-select-option.selected"
  );
  return Array.from(selectedOptions).map((option) => option.dataset.value);
}

function initializeMultiSelects() {
  createMultiSelect("skills-select", skillsOptions);
  createMultiSelect("interests-select", interestsOptions);
  createMultiSelect("roles-select", rolesOptions);
}

// Form validation
function validateForm() {
  let isValid = true;
  clearFormErrors();

  // Validate name
  const name = document.getElementById("profile-name").value.trim();
  if (!name) {
    showFieldError("name", "Name is required");
    isValid = false;
  } else if (name.length < 2) {
    showFieldError("name", "Name must be at least 2 characters long");
    isValid = false;
  }

  // Validate timezone
  const timezone = document.getElementById("profile-timezone").value;
  if (!timezone) {
    showFieldError("timezone", "Please select a timezone");
    isValid = false;
  }

  // Validate skills
  const skills = getSelectedOptions("skills-select");
  if (skills.length === 0) {
    showFieldError("skills", "Please select at least one skill");
    isValid = false;
  }

  // Validate interests
  const interests = getSelectedOptions("interests-select");
  if (interests.length === 0) {
    showFieldError("interests", "Please select at least one project interest");
    isValid = false;
  }

  // Validate roles
  const roles = getSelectedOptions("roles-select");
  if (roles.length === 0) {
    showFieldError("roles", "Please select at least one role");
    isValid = false;
  }

  return isValid;
}

function showFieldError(fieldName, message) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
}

function clearFieldError(fieldName) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  if (errorElement) {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

function clearFormErrors() {
  const errorElements = document.querySelectorAll(".form-error");
  errorElements.forEach((element) => {
    element.textContent = "";
    element.style.display = "none";
  });
}

// Utility functions
function generateInitials(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .substring(0, 2);
}

function createProfile(formData) {
  const newProfile = {
    id: nextTeammateId++,
    name: formData.name,
    initials: generateInitials(formData.name),
    timezone: formData.timezone,
    skills: formData.skills,
    interests: formData.interests,
    roles: formData.roles,
    about: formData.about || '', // Optional field
    email: `${formData.name.toLowerCase().replace(/\s+/g, '')}@gatech.edu`, // Generate email
  };

  teammates.push(newProfile);
  updateFilteredTeammates(); // Use the new function instead of directly copying teammates
  updateTeammateCount();
  return newProfile;
}

function resetForm() {
  document.getElementById("create-profile-form").reset();

  // Clear multi-select selections
  document
    .querySelectorAll(".multi-select-option.selected")
    .forEach((option) => {
      option.classList.remove("selected");
    });

  clearFormErrors();
}

function updateTeammateCount() {
  const countElement = document.getElementById("teammate-count");
  if (countElement) {
    countElement.textContent = `Showing ${filteredTeammates.length} possible teammate${
      filteredTeammates.length !== 1 ? "s" : ""
    }`;
  }
}

// Form submission
function handleCreateProfile(event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  // Check if this is an update (user already has a profile) or new creation
  const isUpdating = hasUserProfile();

  const formData = {
    name: document.getElementById("profile-name").value.trim(),
    timezone: document.getElementById("profile-timezone").value,
    skills: getSelectedOptions("skills-select"),
    interests: getSelectedOptions("interests-select"),
    roles: getSelectedOptions("roles-select"),
    about: document.getElementById("profile-about-textarea").value.trim(),
  };

  const newProfile = createProfile(formData);
  
  // Save profile to localStorage
  saveUserProfile(newProfile);
  
  resetForm();
  
  // Calculate compatibility and render teammates
  addCompatibilityToTeammates();
  renderTeammates();

  // Hide the "Create Your Profile" button since profile now exists
  const createProfileButton = document.querySelector('a[onclick="navigateToCreateProfile()"]');
  if (createProfileButton) {
    createProfileButton.style.display = 'none';
  }

  // Show Profile button since profile now exists
  const profileButton = document.getElementById("view-profile");
  if (profileButton) {
    profileButton.style.display = 'inline-block';
  }

  // Show appropriate success message based on whether it's create or update
  if (isUpdating) {
    alert(`Profile updated successfully!`);
  } else {
    alert(`Profile created successfully! Welcome to the team, ${newProfile.name}!`);
  }
  
  navigateToMain();
}

// Rendering
function renderTeammates() {
  const container = document.getElementById("teammates-container");

  if (filteredTeammates.length === 0) {
    container.innerHTML =
      '<div class="no-results">No teammates found matching your criteria.</div>';
    updateTeammateCount();
    return;
  }

  container.innerHTML = filteredTeammates
    .map(
      (teammate) => {
        const compatibilityClass = 
          teammate.compatibility >= 80 ? 'high' : 
          teammate.compatibility >= 60 ? 'medium' : 'low';
        
        return `
        <div class="teammate-row" onclick="navigateToProfile(${teammate.id})">
            <div class="teammate-name">
                <div class="avatar">${teammate.initials}</div>
                <span>${teammate.name}</span>
            </div>
            <div class="compatibility-score ${compatibilityClass}">
                ${teammate.compatibility}%
            </div>
            <div>${teammate.timezone}</div>
            <div>
                ${teammate.skills
                  .map((skill) => `<span class="tag">${skill}</span>`)
                  .join("")}
            </div>
            <div>
                ${teammate.interests
                  .map(
                    (interest) =>
                      `<span class="tag interest">${interest}</span>`
                  )
                  .join("")}
            </div>
            <div>
                ${teammate.roles
                  .map((role) => `<span class="tag role">${role}</span>`)
                  .join("")}
            </div>
        </div>`;
      }
    )
    .join("");

  updateTeammateCount();
}

// Filtering
function applyFilters() {
  const timezoneFilter = document.getElementById("timezone").value;
  const skillsFilter = document.getElementById("skills").value;
  const interestsFilter = document.getElementById("interests").value;
  const rolesFilter = document.getElementById("roles").value;
  const userProfile = getUserProfile();

  filteredTeammates = teammates.filter((teammate) => {
    // Exclude user's own profile
    if (userProfile && teammate.id === userProfile.id) {
      return false;
    }
    
    const matchesTimezone =
      !timezoneFilter || teammate.timezone === timezoneFilter;
    const matchesSkills =
      !skillsFilter || teammate.skills.includes(skillsFilter);
    const matchesInterests =
      !interestsFilter || teammate.interests.includes(interestsFilter);
    const matchesRoles = !rolesFilter || teammate.roles.includes(rolesFilter);

    return matchesTimezone && matchesSkills && matchesInterests && matchesRoles;
  });

  // Sort filtered teammates by compatibility (highest first)
  filteredTeammates.sort((a, b) => b.compatibility - a.compatibility);

  renderTeammates();
}

// Profile
function showProfile(id) {
  const teammate = teammates.find((t) => t.id === id);
  if (!teammate) return;

  document.getElementById("profile-avatar").textContent = teammate.initials;
  document.getElementById("profile-name").textContent = teammate.name;
  document.getElementById(
    "profile-timezone"
  ).innerHTML = `📍 ${teammate.timezone}`;

  // Display about me section (only if it exists and is not empty)
  const aboutSection = document.getElementById("profile-about-section");
  const aboutElement = document.getElementById("profile-about");
  
  if (teammate.about && teammate.about.trim()) {
    aboutElement.textContent = teammate.about;
    aboutSection.style.display = "block";
  } else {
    aboutSection.style.display = "none";
  }

  document.getElementById("profile-skills").innerHTML = teammate.skills
    .map((skill) => `<span class="tag">${skill}</span>`)
    .join("");

  document.getElementById("profile-roles").innerHTML = teammate.roles
    .map((role) => `<span class="tag role">${role}</span>`)
    .join("");

  document.getElementById("profile-interests").innerHTML = teammate.interests
    .map((interest) => `<span class="tag interest">${interest}</span>`)
    .join("");

  // Check if already connected
  const connectButton = document.querySelector(".connect-button");
  const isConnected = connectedTeammates.includes(id);

  connectButton.disabled = isConnected;

  if (isConnected) {
    connectButton.innerHTML = `✅ Connected with ${teammate.name}`;
  } else {
    connectButton.innerHTML = `🤝 Connect with <span id="connect-name">${teammate.name}</span>`;
  }

  // Reset success message
  document.getElementById("success-message").classList.remove("show");
}

// Connection
function sendConnectionRequest() {
  if (!currentProfile || connectedTeammates.includes(currentProfile.id)) return;

  connectedTeammates.push(currentProfile.id);

  const connectButton = document.querySelector(".connect-button");
  connectButton.disabled = true;
  connectButton.innerHTML = `✅ Connected with ${currentProfile.name}`;

  document.getElementById("success-name").textContent = currentProfile.name;
  document.getElementById("success-message").classList.add("show");
}

// Event listeners
function initializeEventListeners() {
  document.getElementById("timezone").addEventListener("change", applyFilters);
  document.getElementById("skills").addEventListener("change", applyFilters);
  document.getElementById("interests").addEventListener("change", applyFilters);
  document.getElementById("roles").addEventListener("change", applyFilters);

  // Form submission
  document
    .getElementById("create-profile-form")
    .addEventListener("submit", handleCreateProfile);

  // Clear errors on input
  document
    .getElementById("profile-name")
    .addEventListener("input", () => clearFieldError("name"));
  document
    .getElementById("profile-timezone")
    .addEventListener("change", () => clearFieldError("timezone"));
}

// Profile state management
let userProfile = null;

function hasUserProfile() {
  return userProfile !== null;
}

function getUserProfile() {
  return userProfile;
}

function saveUserProfile(profile) {
  userProfile = profile;
}

// Calculate compatibility percentage between user and teammate
function calculateCompatibility(userProfile, teammate) {
  if (!userProfile) return Math.floor(Math.random() * 40) + 30; // Random 30-70% if no profile
  
  let matchPoints = 0;
  let totalPoints = 0;
  
  // Timezone compatibility (20% weight)
  totalPoints += 20;
  if (userProfile.timezone === teammate.timezone) {
    matchPoints += 20;
  } else {
    // Partial points for nearby timezones
    const userOffset = parseInt(userProfile.timezone.replace('UTC', ''));
    const teammateOffset = parseInt(teammate.timezone.replace('UTC', ''));
    const timeDiff = Math.abs(userOffset - teammateOffset);
    if (timeDiff <= 3) matchPoints += 10;
    else if (timeDiff <= 6) matchPoints += 5;
  }
  
  // Skills complement (30% weight) - rewards skills the user doesn't have
  totalPoints += 30;
  const skillComplement = teammate.skills.filter(skill => !userProfile.skills.includes(skill)).length;
  const skillMatch = Math.min(skillComplement / Math.max(teammate.skills.length, 1), 1);
  matchPoints += skillMatch * 30;
  
  // Interests overlap (25% weight) - still rewards shared interests for project alignment
  totalPoints += 25;
  const interestOverlap = userProfile.interests.filter(interest => teammate.interests.includes(interest)).length;
  const interestMatch = Math.min(interestOverlap / Math.max(userProfile.interests.length, teammate.interests.length), 1);
  matchPoints += interestMatch * 25;
  
  // Role complement (25% weight) - rewards roles the user doesn't have
  totalPoints += 25;
  const roleComplement = teammate.roles.filter(role => !userProfile.roles.includes(role)).length;
  const roleMatch = Math.min(roleComplement / Math.max(teammate.roles.length, 1), 1);
  matchPoints += roleMatch * 25;
  
  return Math.round((matchPoints / totalPoints) * 100);
}

// Add compatibility to teammates and sort by it
function addCompatibilityToTeammates() {
  const userProfile = getUserProfile();
  
  teammates.forEach(teammate => {
    teammate.compatibility = calculateCompatibility(userProfile, teammate);
  });
  
  // Sort by compatibility (highest first)
  teammates.sort((a, b) => b.compatibility - a.compatibility);
  
  // Update filtered teammates to exclude user's own profile
  updateFilteredTeammates();
}

// Update filtered teammates excluding user's own profile
function updateFilteredTeammates() {
  const userProfile = getUserProfile();
  if (userProfile) {
    filteredTeammates = teammates.filter(teammate => teammate.id !== userProfile.id);
  } else {
    filteredTeammates = [...teammates];
  }
}

// Helper function to reset profile (for testing purposes)
function resetProfile() {
  userProfile = null;
  location.reload();
}

// Make resetProfile available globally for testing
window.resetProfile = resetProfile;

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  initializeEventListeners();
  
  // Check if user has a profile
  if (!hasUserProfile()) {
    // Show profile creation view first
    navigateToCreateProfile();
    
    // Hide Profile button since no profile exists yet
    const profileButton = document.getElementById("view-profile");
    if (profileButton) {
      profileButton.style.display = 'none';
    }
  } else {
    // Add compatibility scores and show main view
    addCompatibilityToTeammates();
    renderTeammates();
    
    // Hide the "Create Your Profile" button since profile exists
    const createProfileButton = document.querySelector('a[onclick="navigateToCreateProfile()"]');
    if (createProfileButton) {
      createProfileButton.style.display = 'none';
    }
    
    // Show Profile button since profile exists
    const profileButton = document.getElementById("view-profile");
    if (profileButton) {
      profileButton.style.display = 'inline-block';
    }
  }
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* helper — points at the right element now */
function navigateToGroups() {
  document.querySelectorAll(".view").forEach((v) => v.classList.add("hidden"));
  document.getElementById("groups-view").classList.remove("hidden");
}

/* card version of “Show All Groups” */
function showAllGroups() {
  navigateToGroups(); // show the view first

  const panel = document.getElementById("groups-view");
  panel.innerHTML = ""; // clear any previous run

  // wrapper that becomes a responsive grid
  const grid = document.createElement("div");
  grid.className = "groups-grid";

  // Add header with Cancel button at the top
  const header = document.createElement("div");
  header.className = "groups-header";
  header.innerHTML = `
    <a href="#" class="back-button" onclick="navigateToMain()">← Back to main</a>
    <h1>All Groups</h1>
  `;
  panel.appendChild(header);

  groups.forEach((group) => {
    const card = document.createElement("div");
    card.className = `group-card ${group.isFull ? "full" : "open"}`;
    card.id = `group-${group.id}`;

    card.innerHTML = `
      <div class="card-header">
        <h3 class="group-title">Group ${group.id}</h3>
        <span class="status-badge">
          ${group.isFull ? "Full" : `${group.slotsAvailable}&nbsp;open`}
        </span>
      </div>

      <p><strong>Main&nbsp;Contact:</strong> ${group.mainContact}</p>
      <p><strong>Timezones:</strong> ${group.timezones.join(", ")}</p>
      <p><strong>Skills:</strong> ${group.skills.join(", ")}</p>
      <p><strong>Interests:</strong> ${group.interests.join(", ")}</p>
      <p><strong>Roles:</strong> ${group.roles.join(", ")}</p>

      <p><strong>Teammates:</strong></p>
      <ul class="teammate-list">
        ${group.teammates
          .map(
            (tm) => `
              <li>
                ${tm.name} (${tm.initials}) – ${tm.email}
                <br><small>Roles: ${tm.roles.join(", ")}</small>
              </li>`
          )
          .join("")}
      </ul>
    `;
    grid.appendChild(card);
  });

  panel.appendChild(grid);
}
