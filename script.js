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

// Team formation system - teams of 3 with strategic connections
const groups = [
  // Group 1 - Complete team (3/3)
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
    ],
    timezones: ["UTC-5", "UTC+1", "UTC+4"],
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
    ],
    interests: [
      "EdTech",
      "Accessibility",
      "AI",
      "Sustainability",
      "Health",
      "Startups",
    ],
    roles: [
      "Frontend Developer",
      "UX Designer",
      "Data Scientist",
      "Technical Writer",
      "Content Strategist",
      "Marketing Lead",
    ],
    isFull: true,
    maxSize: 3,
    slotsAvailable: 0,
    mainContact: "achen7@gatech.edu",
  },
  // Group 2 - Partially formed team (2/3) - has sent invitation to user
  {
    id: 2,
    teammates: [
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
    timezones: ["UTC-6", "UTC+2"],
    skills: [
      "UI Design",
      "Branding",
      "Illustration",
      "Excel",
      "User Interviews",
      "Project Coordination",
    ],
    interests: ["Civic Tech", "Education", "Climate", "Social Impact"],
    roles: [
      "Visual Designer",
      "Product Designer",
      "Project Manager", 
      "Business Analyst",
    ],
    isFull: false,
    maxSize: 3,
    slotsAvailable: 1,
    mainContact: "drivera17@gatech.edu",
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
function navigateToProfile(id, source = 'main') {
  currentProfile = teammates.find((t) => t.id === id);
  showProfile(id, source);
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.add("hidden");
  document.getElementById("user-profile-view").classList.add("hidden");
  document.getElementById("connections-view").classList.add("hidden");
  document.getElementById("profile-view").classList.remove("hidden");
  document.getElementById("groups-view").classList.add("hidden");
  
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
  document.getElementById("connections-view").classList.add("hidden");
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
  document.getElementById("connections-view").classList.add("hidden");
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
  // Check if coming from connections view
  const connectionsView = document.getElementById("connections-view");
  const fromConnections = connectionsView && !connectionsView.classList.contains("hidden");
  
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.add("hidden");
  document.getElementById("user-profile-view").classList.add("hidden");
  document.getElementById("connections-view").classList.add("hidden");
  document.getElementById("groups-view").classList.remove("hidden");
  
  // Store context for back navigation
  if (fromConnections) {
    document.getElementById("groups-view").dataset.source = 'connections';
  } else {
    document.getElementById("groups-view").dataset.source = 'main';
  }
}

// View user's own profile
function viewUserProfile() {
  const userProfile = getUserProfile();
  if (!userProfile) return;

  // Hide all other views
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("create-profile-view").classList.add("hidden");
  document.getElementById("connections-view").classList.add("hidden");
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

  // Show Connections button since profile now exists
  const connectionsButton = document.getElementById("view-connections");
  if (connectionsButton) {
    connectionsButton.style.display = 'inline-block';
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

  // Load connections to check status
  loadConnections();

  container.innerHTML = filteredTeammates
    .map(
      (teammate) => {
        const compatibilityClass = 
          teammate.compatibility >= 80 ? 'high' : 
          teammate.compatibility >= 60 ? 'medium' : 'low';
        
        // Check if teammate is in a complete group
        const teammateGroup = groups.find(group => 
          group.teammates.some(tm => tm.id === teammate.id)
        );
        const isInCompleteGroup = teammateGroup && teammateGroup.isFull;
        
        // Check connection status
        const isConnected = connections.accepted.some(c => c.id === teammate.id);
        const requestSent = connections.sent.some(c => c.id === teammate.id);
        const requestPending = connections.pending.some(c => c.id === teammate.id);
        
        let connectionStatusBadge = '';
        let rowClass = 'teammate-row';
        let clickHandler = `onclick="navigateToProfile(${teammate.id})"`;
        
        if (isInCompleteGroup) {
          connectionStatusBadge = '<div class="connection-badge matched">Team Complete</div>';
          rowClass += ' team-complete';
          // Keep click handler - users can still view profiles of complete team members
        } else if (isConnected) {
          if (teammateGroup) {
            // Check if connected to all group members
            const otherGroupMembers = teammateGroup.teammates.filter(tm => tm.id !== teammate.id);
            const connectedToAllGroupMembers = otherGroupMembers.every(member => 
              connections.accepted.some(c => c.id === member.id)
            );
            
            if (connectedToAllGroupMembers && otherGroupMembers.length > 0) {
              connectionStatusBadge = '<div class="connection-badge connected group-connected">Connected to Group</div>';
            } else {
              connectionStatusBadge = '<div class="connection-badge connected">Connected</div>';
            }
          } else {
            connectionStatusBadge = '<div class="connection-badge connected">Connected</div>';
          }
        } else if (requestSent) {
          connectionStatusBadge = '<div class="connection-badge sent">Request Sent</div>';
        } else if (requestPending) {
          connectionStatusBadge = '<div class="connection-badge pending">Pending Request</div>';
        }
        
        return `
        <div class="${rowClass}" data-teammate-id="${teammate.id}" ${clickHandler}>
            <div class="teammate-name">
                <div class="avatar">${teammate.initials}</div>
                <div class="name-and-status">
                    <span>${teammate.name}</span>
                    ${connectionStatusBadge}
                </div>
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

  // Sort filtered teammates by availability and compatibility
  filteredTeammates.sort((a, b) => {
    // Helper function to check if teammate is in a complete group
    const isInCompleteGroup = (teammate) => {
      const teammateGroup = groups.find(group => 
        group.teammates.some(tm => tm.id === teammate.id)
      );
      return teammateGroup && teammateGroup.isFull;
    };
    
    const aInCompleteGroup = isInCompleteGroup(a);
    const bInCompleteGroup = isInCompleteGroup(b);
    
    // If one is in a complete group and the other isn't, prioritize the available one
    if (aInCompleteGroup !== bInCompleteGroup) {
      return aInCompleteGroup ? 1 : -1; // Move complete group members to bottom
    }
    
    // If both have same availability status, sort by compatibility (highest first)
    return b.compatibility - a.compatibility;
  });

  renderTeammates();
}

// Profile
function showProfile(id, source = 'main') {
  const teammate = teammates.find((t) => t.id === id);
  if (!teammate) return;

  // Store current profile ID and source for connections
  const profileView = document.getElementById('profile-view');
  profileView.dataset.currentProfileId = id;
  profileView.dataset.source = source;

  // Update back button based on source
  const backButton = document.querySelector('#profile-view .form-button');
  if (source === 'connections') {
    backButton.onclick = () => navigateToConnections();
  } else {
    backButton.onclick = () => navigateToMain();
  }

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

  // Load connections and check connection status
  loadConnections();
  const connectButton = document.querySelector(".connect-button");
  const successMessage = document.getElementById("success-message");
  
  const isConnected = connections.accepted.some(c => c.id === id);
  const requestSent = connections.sent.some(c => c.id === id);
  const requestPending = connections.pending.some(c => c.id === id);
  
  // Check if teammate is in a complete group
  const teammateGroup = groups.find(group => 
    group.teammates.some(tm => tm.id === id)
  );
  const isInCompleteGroup = teammateGroup && teammateGroup.isFull;
  
  // Check if current user is already in a group
  const userInGroup = isUserInGroup();

  // Reset success message
  successMessage.style.display = 'none';

  if (isInCompleteGroup) {
    connectButton.style.display = 'none';
    successMessage.style.display = 'block';
    successMessage.innerHTML = `<strong>Team Complete</strong><br>${teammate.name} is already part of a complete team and is not available for new connections.`;
  } else if (userInGroup) {
    connectButton.style.display = 'none';
    successMessage.style.display = 'block';
    successMessage.innerHTML = `<strong>Already in Team</strong><br>You are already part of a team and cannot send new connection requests.`;
  } else if (isConnected) {
    connectButton.style.display = 'none';
    successMessage.style.display = 'block';
    successMessage.innerHTML = `<strong>You're connected!</strong><br>You are already connected with ${teammate.name}.`;
  } else if (requestSent || requestPending) {
    connectButton.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Check if this is a pending request FROM the teammate (they sent to user)
    if (requestPending) {
      successMessage.innerHTML = `
        <strong>Request pending</strong><br>
        ${teammate.name} has sent you a connection request.
        <div class="success-actions">
          <button class="form-button secondary" onclick="navigateToConnections()">
            🤝 View Connections
          </button>
        </div>
      `;
    } else {
      // This is a request TO the teammate (user sent to them)
      successMessage.innerHTML = `<strong>Request pending</strong><br>Your connection request with ${teammate.name} is pending.`;
    }
  } else {
    connectButton.style.display = 'block';
    connectButton.innerHTML = `🤝 Connect with <span id="connect-name">${teammate.name}</span>`;
  }
  
  // Initialize message input character counter
  initializeMessageInput();
}

// Initialize message input functionality
function initializeMessageInput() {
  const messageInput = document.getElementById('connection-message');
  const charCount = document.getElementById('message-char-count');
  
  if (!messageInput || !charCount) return;
  
  // Clear any existing message
  messageInput.value = '';
  
  // Update character count
  function updateCharCount() {
    const length = messageInput.value.length;
    charCount.textContent = length;
    
    // Add warning class if approaching limit
    const charCountElement = charCount.parentElement;
    if (length > 450) {
      charCountElement.classList.add('warning');
    } else {
      charCountElement.classList.remove('warning');
    }
  }
  
  // Remove existing listeners to avoid duplicates
  messageInput.removeEventListener('input', updateCharCount);
  messageInput.removeEventListener('paste', updateCharCount);
  
  // Add event listeners
  messageInput.addEventListener('input', updateCharCount);
  messageInput.addEventListener('paste', () => {
    setTimeout(updateCharCount, 10); // Delay to ensure paste content is processed
  });
  
  // Initialize count
  updateCharCount();
}

// Note: sendConnectionRequest function is now defined in the connections section above

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
  
  // Sort by availability and compatibility
  teammates.sort((a, b) => {
    // Helper function to check if teammate is in a complete group
    const isInCompleteGroup = (teammate) => {
      const teammateGroup = groups.find(group => 
        group.teammates.some(tm => tm.id === teammate.id)
      );
      return teammateGroup && teammateGroup.isFull;
    };
    
    const aInCompleteGroup = isInCompleteGroup(a);
    const bInCompleteGroup = isInCompleteGroup(b);
    
    // If one is in a complete group and the other isn't, prioritize the available one
    if (aInCompleteGroup !== bInCompleteGroup) {
      return aInCompleteGroup ? 1 : -1; // Move complete group members to bottom
    }
    
    // If both have same availability status, sort by compatibility (highest first)
    return b.compatibility - a.compatibility;
  });
  
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
    
    // Hide Connections button since no profile exists yet
    const connectionsButton = document.getElementById("view-connections");
    if (connectionsButton) {
      connectionsButton.style.display = 'none';
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
    
    // Show Connections button since profile exists
    const connectionsButton = document.getElementById("view-connections");
    if (connectionsButton) {
      connectionsButton.style.display = 'inline-block';
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
function showAllGroups(source) {
  navigateToGroups(); // show the view first

  // If no source provided, check the stored context
  if (!source) {
    const groupsView = document.getElementById("groups-view");
    source = groupsView.dataset.source || 'main';
  }

  const panel = document.getElementById("groups-view");
  panel.innerHTML = ""; // clear any previous run

  // wrapper that becomes a responsive grid
  const grid = document.createElement("div");
  grid.className = "groups-grid";

  // Add header with back button based on source
  const header = document.createElement("div");
  header.className = "groups-header";
  const backButton = source === 'connections' ? 
    '<button class="form-button" onclick="navigateToConnections()">Back</button>' :
    '<button class="form-button" onclick="navigateToMain()">Back</button>';
  
  header.innerHTML = `
    ${backButton}
    <h1>All Groups</h1>
  `;
  panel.appendChild(header);

  groups.forEach((group) => {
    const card = document.createElement("div");
    card.className = `group-card ${group.isFull ? "full" : "open"}`;
    card.id = `group-${group.id}`;

    // Check if user is in this group
    const userProfile = getUserProfile();

    card.innerHTML = `
      <div class="card-header">
        <h3 class="group-title">Group ${group.id}</h3>
        <span class="status-badge">
          ${group.isFull ? "Full" : `${group.slotsAvailable}&nbsp;open`}
        </span>
      </div>
      ${userProfile && group.teammates.some(tm => tm.id === userProfile.id) ? '<div class="user-in-group-badge">You are in this group</div>' : ''}

      <p><strong>Main&nbsp;Contact:</strong> ${group.mainContact}</p>
      <p><strong>Timezones:</strong> ${group.timezones.join(", ")}</p>
      <p><strong>Skills:</strong> ${group.skills.slice(0, 8).join(", ")}${group.skills.length > 8 ? '...' : ''}</p>
      <p><strong>Interests:</strong> ${group.interests.join(", ")}</p>
      <p><strong>Roles:</strong> ${group.roles.join(", ")}</p>

      <p><strong>Teammates (${group.teammates.length}/${group.maxSize}):</strong></p>
      <ul class="teammate-list">
        ${group.teammates
          .map(
            (tm) => `
              <li class="${userProfile && tm.id === userProfile.id ? 'current-user' : ''}">
                ${tm.name} (${tm.initials}) – ${tm.email}
                <br><small>Roles: ${tm.roles.join(", ")}</small>
                ${userProfile && tm.id === userProfile.id ? ' <span class="you-indicator">(You)</span>' : ''}
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
  const request = connections.sent.find(r => r.id === requestId);
  if (!request) return;
  
  if (!confirm(`Are you sure you want to cancel your connection request to ${request.name}?`)) return;
  
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
        <p><strong>Shared Skills:</strong> ${group.skills.slice(0, 6).join(', ')}${group.skills.length > 6 ? '...' : ''}</p>
        <p><strong>Focus Areas:</strong> ${group.interests.slice(0, 4).join(', ')}${group.interests.length > 4 ? '...' : ''}</p>
      </div>
    </div>
    <div class="connection-actions group-actions">
      <button class="form-button primary" onclick="openEmailClient('${groupEmails}')" aria-label="Send email to your team members">
        📧 Email Team
      </button>
      <button class="form-button secondary" onclick="showAllGroups('connections')" aria-label="View detailed information about your team">
        View Team Details
      </button>
      <button class="form-button cancel-btn" onclick="removeGroupConnections(${group.id})" aria-label="Leave your current team - this action cannot be undone">
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
        <button class="form-button cancel-btn" onclick="cancelSentRequest(${connection.id})" aria-label="Cancel your connection request to ${connection.name}">
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
    ${teamMessage}
    ${customMessage}
    ${actions}
  `;
  
  return div;
}

// Open email client
function openEmailClient(email) {
  window.location.href = `mailto:${email}`;
}

// Render all connections
function renderConnections() {
  // Render pending requests
  const pendingContainer = document.getElementById('pending-requests-container');
  const noPending = document.getElementById('no-pending-requests');
  
  pendingContainer.innerHTML = '';
  
  if (connections.pending.length === 0) {
    noPending.style.display = 'block';
  } else {
    noPending.style.display = 'none';
    connections.pending.forEach(request => {
      pendingContainer.appendChild(renderConnectionCard(request, 'pending'));
    });
  }
  
  // Render connected teammates
  const connectedContainer = document.getElementById('connected-teammates-container');
  const noConnections = document.getElementById('no-connections');
  
  connectedContainer.innerHTML = '';
  
  if (connections.accepted.length === 0) {
    noConnections.style.display = 'block';
  } else {
    noConnections.style.display = 'none';
    
    // Check if user is connected to a complete group
    const userProfile = getUserProfile();
    const userGroup = userProfile ? groups.find(group => 
      group.teammates.some(tm => tm.id === userProfile.id)
    ) : null;
    
    if (userGroup && userGroup.isFull) {
      // Render as a group with group-level actions
      const groupCard = renderGroupConnectionCard(userGroup);
      connectedContainer.appendChild(groupCard);
    } else {
      // Render individual connections
      connections.accepted.forEach(connection => {
        connectedContainer.appendChild(renderConnectionCard(connection, 'accepted'));
      });
    }
  }
  
  // Render sent requests
  const sentContainer = document.getElementById('sent-requests-container');
  const noSent = document.getElementById('no-sent-requests');
  
  sentContainer.innerHTML = '';
  
  if (connections.sent.length === 0) {
    noSent.style.display = 'block';
  } else {
    noSent.style.display = 'none';
    connections.sent.forEach(request => {
      sentContainer.appendChild(renderConnectionCard(request, 'sent'));
    });
  }
}
