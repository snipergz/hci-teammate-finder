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
    name: "Fatima Al-Mansoori",
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
  document.getElementById("profile-view").classList.remove("hidden");
  document.getElementById("groups-view").classList.remove("hidden");
}

function navigateToMain() {
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.add("hidden");
  document.getElementById("main-view").classList.remove("hidden");
  document.getElementById("groups-view").classList.add("hidden");
  clearFormErrors();
}

function navigateToCreateProfile() {
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.remove("hidden");
  document.getElementById("groups-view").classList.add("hidden");
  initializeMultiSelects();
}

function navigateToGroups() {
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.add("hidden");
  document.getElementById("groups-view").classList.remove("hidden");
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
  };

  teammates.push(newProfile);
  filteredTeammates = [...teammates];
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
    countElement.textContent = `Showing ${filteredTeammates.length} teammate${
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

  const formData = {
    name: document.getElementById("profile-name").value.trim(),
    timezone: document.getElementById("profile-timezone").value,
    skills: getSelectedOptions("skills-select"),
    interests: getSelectedOptions("interests-select"),
    roles: getSelectedOptions("roles-select"),
  };

  const newProfile = createProfile(formData);
  resetForm();
  renderTeammates();

  // Show success message and navigate back
  alert(
    `Profile created successfully! Welcome to the team, ${newProfile.name}!`
  );
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
      (teammate) => `
        <div class="teammate-row" onclick="navigateToProfile(${teammate.id})">
            <div class="teammate-name">
                <div class="avatar">${teammate.initials}</div>
                <span>${teammate.name}</span>
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
        </div>
    `
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

  filteredTeammates = teammates.filter((teammate) => {
    const matchesTimezone =
      !timezoneFilter || teammate.timezone === timezoneFilter;
    const matchesSkills =
      !skillsFilter || teammate.skills.includes(skillsFilter);
    const matchesInterests =
      !interestsFilter || teammate.interests.includes(interestsFilter);
    const matchesRoles = !rolesFilter || teammate.roles.includes(rolesFilter);

    return matchesTimezone && matchesSkills && matchesInterests && matchesRoles;
  });

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

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  initializeEventListeners();
  renderTeammates();
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

// Connections functionality
let connections = {
  pending: [], // Incoming requests
  sent: [], // Outgoing requests
  accepted: [] // Established connections
};

// Track if connections have been initialized
let connectionsInitialized = false;

// Initialize connections data (non-persistent for demo)
function loadConnections() {
  // Only initialize once on first load
  if (!connectionsInitialized) {
    connectionsInitialized = true;
    // Initialize with team formation context - user has pending invitation from Group 2
    connections = {
      pending: [
        {
          id: 4, // Diego Rivera from Group 2 (partially formed team)
          name: "Diego Rivera",
          email: "drivera17@gatech.edu",
          timezone: "UTC-6",
          skills: ["UI Design", "Branding", "Illustration"],
          interests: ["Civic Tech", "Education"],
          roles: ["Visual Designer", "Product Designer"],
          dateSent: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
          teamInvitation: true,
          teamId: 2,
          teamMessage: "Join our team! We have complementary skills and are looking for someone to complete our group of 3."
        }
      ],
      sent: [
        // No pre-existing requests
      ],
      accepted: [
        // No pre-existing connections - user starts fresh
      ]
    };
  }
}

// Save connections (no-op for non-persistent demo storage)
function saveConnections() {
  // No persistence needed for demo - data stays in memory only
}

// Navigate to connections view
function navigateToConnections() {
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.add("hidden");
  document.getElementById("user-profile-view").classList.add("hidden");
  document.getElementById("groups-view").classList.add("hidden");
  
  const connectionsView = document.getElementById("connections-view");
  connectionsView.classList.remove("hidden");
  connectionsView.dataset.wasActive = 'true'; // Mark that connections was active
  
  loadConnections();
  updateConnectionCounts();
  renderConnections();
}

// Show specific connection tab
function showConnectionTab(tabName) {
  // Hide all tab contents
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  
  // Hide all tab buttons
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));
  
  // Show selected tab
  document.getElementById(`${tabName}-tab`).classList.add('active');
  document.querySelector(`[onclick="showConnectionTab('${tabName}')"]`).classList.add('active');
  
  renderConnections();
}

// Update connection counts in badges
function updateConnectionCounts() {
  document.getElementById('pending-count').textContent = connections.pending.length;
  document.getElementById('connected-count').textContent = connections.accepted.length;
  document.getElementById('sent-count').textContent = connections.sent.length;
}

// Update connection badge for specific teammate on main page
function updateConnectionBadge(teammateId, status) {
  // Find the teammate card on the main page
  const teammateCard = document.querySelector(`[data-teammate-id="${teammateId}"]`);
  if (!teammateCard) return;
  
  // Find or create the badge container
  let badgeElement = teammateCard.querySelector('.connection-badge');
  
  if (status === null) {
    // Remove badge if status is null
    if (badgeElement) {
      badgeElement.remove();
    }
    return;
  }
  
  if (!badgeElement) {
    // Create badge element if it doesn't exist
    badgeElement = document.createElement('div');
    badgeElement.className = 'connection-badge';
    
    // Insert after the name or at the beginning of the card
    const nameElement = teammateCard.querySelector('h3');
    if (nameElement) {
      nameElement.insertAdjacentElement('afterend', badgeElement);
    } else {
      teammateCard.insertAdjacentElement('afterbegin', badgeElement);
    }
  }
  
  // Update badge content and class based on status
  badgeElement.className = 'connection-badge'; // Reset classes
  
  switch (status) {
    case 'pending_received':
      badgeElement.textContent = 'Pending Request';
      badgeElement.classList.add('pending');
      break;
    case 'pending_sent':
      badgeElement.textContent = 'Request Sent';
      badgeElement.classList.add('sent');
      break;
    case 'connected':
      // Check if this is a group connection
      const teammateGroup = groups.find(group => 
        group.teammates.some(tm => tm.id === teammateId)
      );
      
      if (teammateGroup) {
        // Check if connected to all group members
        const otherGroupMembers = teammateGroup.teammates.filter(tm => tm.id !== teammateId);
        const connectedToAllGroupMembers = otherGroupMembers.every(member => 
          connections.accepted.some(c => c.id === member.id)
        );
        
        if (connectedToAllGroupMembers && otherGroupMembers.length > 0) {
          badgeElement.textContent = 'Connected to Group';
          badgeElement.classList.add('connected', 'group-connected');
        } else {
          badgeElement.textContent = 'Connected';
          badgeElement.classList.add('connected');
        }
      } else {
        badgeElement.textContent = 'Connected';
        badgeElement.classList.add('connected');
      }
      break;
    default:
      badgeElement.remove();
  }
}

// Check if user is already part of a group
function isUserInGroup() {
  const userProfile = getUserProfile();
  if (!userProfile) return false;
  
  return groups.some(group => 
    group.teammates.some(tm => tm.id === userProfile.id)
  );
}

// Send connection request
function sendConnectionRequest() {
  const currentUser = getUserProfile();
  if (!currentUser) {
    alert('Please create your profile first');
    return;
  }
  
  // Check if user is already part of a group
  if (isUserInGroup()) {
    alert('You are already part of a team and cannot send new connection requests. If you want to connect with new teammates, you would need to leave your current team first.');
    return;
  }
  
  const profileElement = document.getElementById('profile-view');
  const profileId = parseInt(profileElement.dataset.currentProfileId);
  const teammate = teammates.find(t => t.id === profileId);
  
  if (!teammate) return;
  
  // Check if already connected or request exists
  const alreadyConnected = connections.accepted.some(c => c.id === profileId);
  const requestSent = connections.sent.some(c => c.id === profileId);
  const requestPending = connections.pending.some(c => c.id === profileId);
  
  if (alreadyConnected) {
    alert('You are already connected with this teammate');
    return;
  }
  
  if (requestSent || requestPending) {
    alert('A connection request already exists with this teammate');
    return;
  }
  
  // Get the message from the input field
  const messageInput = document.getElementById('connection-message');
  const message = messageInput ? messageInput.value.trim() : '';
  
  // Add to sent requests
  connections.sent.push({
    id: profileId,
    name: teammate.name,
    email: teammate.email,
    timezone: teammate.timezone,
    skills: teammate.skills,
    interests: teammate.interests,
    roles: teammate.roles,
    message: message, // Include the custom message
    dateSent: new Date().toISOString()
  });
  
  saveConnections();
  
  // Update the connection badge on main page
  updateConnectionBadge(profileId, 'pending_sent');
  
  // Re-render teammates to show updated badge
  renderTeammates();
  
  // Show success message
  const successMessage = document.getElementById('success-message');
  const successName = document.getElementById('success-name');
  
  successMessage.style.display = 'block';
  successName.textContent = teammate.name;
  
  // Update message based on whether a custom message was included
  if (message) {
    successMessage.innerHTML = `
      <strong>Connection request sent!</strong><br>
      Your request to connect with ${teammate.name} has been sent with your personal message.
      <div class="success-actions">
        <button class="form-button secondary" onclick="navigateToConnections()">
          🤝 View Connections
        </button>
      </div>
    `;
  } else {
    successMessage.innerHTML = `
      <strong>Connection request sent!</strong><br>
      Your request to connect with ${teammate.name} has been sent.
      <div class="success-actions">
        <button class="form-button secondary" onclick="navigateToConnections()">
          🤝 View Connections
        </button>
      </div>
    `;
  }
  
  // Clear the message input for next use
  if (messageInput) {
    messageInput.value = '';
    // Update character count
    const charCount = document.getElementById('message-char-count');
    if (charCount) {
      charCount.textContent = '0';
      charCount.parentElement.classList.remove('warning');
    }
  }
  
  // Hide the connect button
  document.querySelector('.connect-button').style.display = 'none';
}

// Auto-handle other connections when joining a team
function autoHandleConnectionsAfterTeamJoin() {
  // Get all other pending requests to reject
  const otherPendingRequests = [...connections.pending];
  
  // Get all sent requests to cancel
  const sentRequests = [...connections.sent];
  
  // Clear all pending requests (auto-reject)
  otherPendingRequests.forEach(request => {
    updateConnectionBadge(request.id, null);
  });
  connections.pending = [];
  
  // Clear all sent requests (auto-cancel)
  sentRequests.forEach(request => {
    updateConnectionBadge(request.id, null);
  });
  connections.sent = [];
  
  // Update counts
  updateConnectionCounts();
  
  // Re-render teammates list to update connection badges
  renderTeammates();
}

// Update groups display dynamically
function refreshGroupsDisplay() {
  // Check if groups view is currently visible
  const groupsView = document.getElementById("groups-view");
  if (groupsView && !groupsView.classList.contains("hidden")) {
    // Check if we came from connections (if connections view was the previous view)
    const connectionsView = document.getElementById("connections-view");
    const wasFromConnections = connectionsView && connectionsView.dataset.wasActive === 'true';
    showAllGroups(wasFromConnections ? 'connections' : 'main'); // Refresh the groups display
  }
}

// Accept connection request
function acceptConnection(requestId) {
  const requestIndex = connections.pending.findIndex(r => r.id === requestId);
  if (requestIndex === -1) return;
  
  const request = connections.pending[requestIndex];
  
  // Check if this is a team invitation
  if (request.teamInvitation) {
    // Add user to the team
    const userProfile = getUserProfile();
    if (userProfile) {
      const team = groups.find(g => g.id === request.teamId);
      if (team && !team.isFull) {
        // Add user to team
        team.teammates.push({
          id: userProfile.id,
          name: userProfile.name,
          initials: userProfile.initials,
          timezone: userProfile.timezone,
          skills: userProfile.skills,
          interests: userProfile.interests,
          roles: userProfile.roles,
          email: userProfile.email,
        });
        
        // Update team metadata
        team.timezones = [...new Set([...team.timezones, userProfile.timezone])];
        team.skills = [...new Set([...team.skills, ...userProfile.skills])];
        team.interests = [...new Set([...team.interests, ...userProfile.interests])];
        team.roles = [...new Set([...team.roles, ...userProfile.roles])];
        
        // Update team status
        team.slotsAvailable = team.maxSize - team.teammates.length;
        team.isFull = team.slotsAvailable === 0;
        
        // Move accepted team invitation to connections
        connections.accepted.push({
          ...request,
          dateConnected: new Date().toISOString()
        });
        
        // Auto-connect to all other team members
        team.teammates.forEach(member => {
          if (member.id !== userProfile.id && member.id !== request.id) {
            // Check if not already connected
            const alreadyConnected = connections.accepted.some(c => c.id === member.id);
            if (!alreadyConnected) {
              connections.accepted.push({
                id: member.id,
                name: member.name,
                email: member.email,
                timezone: member.timezone,
                skills: member.skills,
                interests: member.interests,
                roles: member.roles,
                dateConnected: new Date().toISOString()
              });
            }
          }
        });
        
        // Remove from pending
        connections.pending.splice(requestIndex, 1);
        
        // Auto-handle all other connections (reject pending, cancel sent)
        autoHandleConnectionsAfterTeamJoin();
        
        // Show success message for team joining
        alert(`Congratulations! You've successfully joined Team ${team.id}. All other pending requests have been automatically handled.`);
        
        // Update displays
        saveConnections();
        updateConnectionCounts();
        renderConnections();
        
        // Update connection badges for all team members
        team.teammates.forEach(member => {
          if (member.id !== userProfile.id) {
            updateConnectionBadge(member.id, 'connected');
          }
        });
        
        refreshGroupsDisplay();
        
        return; // Exit early for team invitations
      }
    }
  }
  
  // Regular connection acceptance (non-team)
  connections.accepted.push({
    ...request,
    dateConnected: new Date().toISOString()
  });
  
  // Remove from pending
  connections.pending.splice(requestIndex, 1);
  
  saveConnections();
  updateConnectionCounts();
  renderConnections();
  
  // Update the connection badge on main page
  updateConnectionBadge(requestId, 'connected');
  
  // Re-render teammates to show updated badges
  renderTeammates();
}

// Decline connection request
function declineConnection(requestId) {
  const requestIndex = connections.pending.findIndex(r => r.id === requestId);
  if (requestIndex === -1) return;
  
  connections.pending.splice(requestIndex, 1);
  saveConnections();
  updateConnectionCounts();
  renderConnections();
  
  // Update the connection badge on main page (remove badge)
  updateConnectionBadge(requestId, null);
  
  // Re-render teammates to show updated badges
  renderTeammates();
}

// Cancel sent connection request
function cancelSentRequest(requestId) {
  const requestIndex = connections.sent.findIndex(r => r.id === requestId);
  if (requestIndex === -1) return;
  
  connections.sent.splice(requestIndex, 1);
  saveConnections();
  updateConnectionCounts();
  renderConnections();
  
  // Update the connection badge on main page (remove badge)
  updateConnectionBadge(requestId, null);
  
  // Re-render teammates to show updated badges
  renderTeammates();
}

// Remove all connections from a group (leave team)
function removeGroupConnections(groupId) {
  if (!confirm('Are you sure you want to leave this team? This will remove all connections with your teammates and remove you from the group.')) return;
  
  const userProfile = getUserProfile();
  if (!userProfile) return;
  
  const group = groups.find(g => g.id === groupId);
  if (!group) return;
  
  // Get all team member IDs except the user
  const teamMemberIds = group.teammates
    .filter(tm => tm.id !== userProfile.id)
    .map(tm => tm.id);
  
  // Remove all connections with team members
  teamMemberIds.forEach(memberId => {
    const connectionIndex = connections.accepted.findIndex(c => c.id === memberId);
    if (connectionIndex !== -1) {
      connections.accepted.splice(connectionIndex, 1);
    }
  });
  
  // Remove user from the group
  const userIndex = group.teammates.findIndex(tm => tm.id === userProfile.id);
  if (userIndex !== -1) {
    group.teammates.splice(userIndex, 1);
  }
  
  // Update group metadata
  group.timezones = group.teammates.map(tm => tm.timezone);
  group.skills = [...new Set(group.teammates.flatMap(tm => tm.skills))];
  group.interests = [...new Set(group.teammates.flatMap(tm => tm.interests))];
  group.roles = [...new Set(group.teammates.flatMap(tm => tm.roles))];
  group.slotsAvailable = group.maxSize - group.teammates.length;
  group.isFull = group.slotsAvailable === 0;
  
  // Update displays
  saveConnections();
  updateConnectionCounts();
  renderConnections();
  renderTeammates(); // Update main page to reflect new availability
  refreshGroupsDisplay();
  
  alert('You have successfully left the team. You can now form new connections.');
}

// Remove established connection
function removeConnection(connectionId) {
  if (!confirm('Are you sure you want to remove this connection?')) return;
  
  const connectionIndex = connections.accepted.findIndex(c => c.id === connectionId);
  if (connectionIndex === -1) return;
  
  connections.accepted.splice(connectionIndex, 1);
  saveConnections();
  updateConnectionCounts();
  renderConnections();
  
  // Update the connection badge on main page (remove badge)
  updateConnectionBadge(connectionId, null);
  
  // Re-render teammates to show updated badges
  renderTeammates();
}

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = (now - date) / (1000 * 60 * 60);
  
  if (diffInHours < 24) {
    return 'Today';
  } else if (diffInHours < 48) {
    return 'Yesterday';
  } else {
    const days = Math.floor(diffInHours / 24);
    return `${days} days ago`;
  }
}

// Render group connection card for complete teams
function renderGroupConnectionCard(group) {
  const div = document.createElement('div');
  div.className = 'connection-card group-connection-card';
  
  const userProfile = getUserProfile();
  const otherMembers = group.teammates.filter(tm => tm.id !== userProfile.id);
  
  // Get all member emails for group messaging
  const groupEmails = group.teammates.map(tm => tm.email).join(',');
  
  const membersList = otherMembers.map(member => 
    `<div class="group-member">
      <span class="member-avatar">${member.initials}</span>
      <span class="member-name">${member.name}</span>
      <span class="member-role">${member.roles[0]}</span>
    </div>`
  ).join('');
  
  div.innerHTML = `
    <div class="connection-info">
      <div class="group-connection-header">
        <h3>🎯 Team ${group.id} - Complete</h3>
        <p>${group.teammates.length} members • Connected ${formatDate(connections.accepted[0]?.dateConnected || new Date().toISOString())}</p>
      </div>
      <div class="group-members">
        ${membersList}
      </div>
      <div class="group-summary">
        <p><strong>Shared Skills:</strong> ${group.skills.slice(0, 5).join(', ')}${group.skills.length > 5 ? '...' : ''}</p>
        <p><strong>Focus Areas:</strong> ${group.interests.join(', ')}</p>
      </div>
    </div>
    <div class="connection-actions group-actions">
      <button class="form-button primary" onclick="openEmailClient('${groupEmails}')">
        📧 Email Team
      </button>
      <button class="form-button secondary" onclick="showAllGroups('connections')">
        View Team Details
      </button>
      <button class="form-button cancel-btn" onclick="removeGroupConnections(${group.id})">
        Leave Team
      </button>
    </div>
  `;
  
  return div;
}

// Render connection card
function renderConnectionCard(connection, type) {
  const div = document.createElement('div');
  div.className = 'connection-card';
  
  // Add special styling for team invitations
  if (connection.teamInvitation) {
    div.classList.add('team-invitation');
  }
  
  const initials = connection.name.split(' ').map(n => n[0]).join('');
  const topSkills = connection.skills.slice(0, 3);
  
  // Team invitation message
  const teamMessage = connection.teamInvitation && connection.teamMessage ? 
    `<div class="team-invitation-message">
      <strong>🎯 Team Invitation</strong><br>
      ${connection.teamMessage}
    </div>` : '';
  
  // Custom connection message (for regular connection requests)
  const customMessage = !connection.teamInvitation && connection.message && connection.message.trim() ? 
    `<div class="connection-message">
      <strong>💬 Message:</strong><br>
      "${connection.message}"
    </div>` : '';
  
  let actions = '';
  if (type === 'pending') {
    const acceptText = connection.teamInvitation ? '✓ Join Team' : '✓ Accept';
    actions = `
      <div class="connection-actions">
        <button class="form-button primary accept-btn" onclick="acceptConnection(${connection.id})">
          ${acceptText}
        </button>
        <button class="form-button decline-btn" onclick="declineConnection(${connection.id})">
          ✗ Decline
        </button>
        ${connection.teamInvitation ? `<button class="form-button secondary" onclick="showAllGroups('connections')">View Team</button>` : ''}
      </div>
    `;
  } else if (type === 'sent') {
    actions = `
      <div class="connection-actions">
        <button class="form-button cancel-btn" onclick="cancelSentRequest(${connection.id})">
          Cancel Request
        </button>
      </div>
    `;
  } else if (type === 'accepted') {
    actions = `
      <div class="connection-actions">
        <button class="form-button secondary" onclick="navigateToProfile(${connection.id}, 'connections')">
          View Profile
        </button>
        <button class="form-button message-btn" onclick="openEmailClient('${connection.email}')">
          📧 Message
        </button>
        <button class="form-button cancel-btn" onclick="removeConnection(${connection.id})">
          Remove
        </button>
      </div>
    `;
  }
  
  const dateField = type === 'accepted' ? 'dateConnected' : 'dateSent';
  const dateLabel = type === 'accepted' ? 'Connected' : 'Sent';
  
  div.innerHTML = `
    <div class="connection-info">
      <div class="connection-avatar">${initials}</div>
      <div class="connection-details">
        <h4>${connection.name}</h4>
        <p>${connection.timezone} • ${connection.roles.slice(0, 2).join(', ')}</p>
        <div class="connection-tags">
          ${topSkills.map(skill => `<span class="connection-tag">${skill}</span>`).join('')}
        </div>
        <div class="connection-date">${dateLabel}: ${formatDate(connection[dateField])}</div>
      </div>
    </div>
`;
}
