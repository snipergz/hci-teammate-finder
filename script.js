// Data
// Updated data for all 10 teammates
const teammates = [
  {
    id: 1,
    name: "Alicia Chen",
    initials: "AC",
    timezone: "UTC-5",
    skills: ["React", "Figma", "User Research"],
    interests: ["EdTech", "Accessibility"],
    roles: ["Frontend Developer", "UX Designer"],
  },
  {
    id: 2,
    name: "Jordan Smith",
    initials: "JS",
    timezone: "UTC+1",
    skills: ["Python", "Machine Learning", "Data Visualization"],
    interests: ["AI", "Sustainability"],
    roles: ["Data Scientist", "Technical Writer"],
  },
  {
    id: 3,
    name: "Fatima Al-Mansoori",
    initials: "FA",
    timezone: "UTC+4",
    skills: ["Copywriting", "Marketing Strategy", "SEO"],
    interests: ["Health", "Startups"],
    roles: ["Content Strategist", "Marketing Lead"],
  },
  {
    id: 4,
    name: "Diego Rivera",
    initials: "DR",
    timezone: "UTC-6",
    skills: ["UI Design", "Branding", "Illustration"],
    interests: ["Civic Tech", "Education"],
    roles: ["Visual Designer", "Product Designer"],
  },
  {
    id: 5,
    name: "Sophie Dubois",
    initials: "SD",
    timezone: "UTC+2",
    skills: ["Excel", "User Interviews", "Project Coordination"],
    interests: ["Climate", "Social Impact"],
    roles: ["Project Manager", "Business Analyst"],
  },
  {
    id: 6,
    name: "Emily Nguyen",
    initials: "EN",
    timezone: "UTC-8",
    skills: ["UX Writing", "Information Architecture", "Prototyping"],
    interests: ["Productivity", "Mental Health"],
    roles: ["Backend Developer", "Full-Stack Engineer"],
  },
  {
    id: 7,
    name: "Mohammed Raza",
    initials: "MR",
    timezone: "UTC+3",
    skills: ["JavaScript", "Node.js", "API Integration"],
    interests: ["Smart Cities", "Healthcare"],
    roles: ["Backend Developer", "Full-Stack Engineer"],
  },
  {
    id: 8,
    name: "Kofi Mensah",
    initials: "KM",
    timezone: "UTC+0",
    skills: ["Agile Methodology", "Scrum", "Stakeholder Management"],
    interests: ["Finance", "Open Source"],
    roles: ["Project Manager", "Team Facilitator"],
  },
  {
    id: 9,
    name: "Lina Hoshino",
    initials: "LH",
    timezone: "UTC+9",
    skills: ["SQL", "Data Cleaning", "Business Intelligence"],
    interests: ["E-Commerce", "Consumer Behavior"],
    roles: ["Data Analyst", "BI Developer"],
  },
  {
    id: 10,
    name: "Zachary Lee",
    initials: "ZL",
    timezone: "UTC-7",
    skills: ["Public Speaking", "User Research", "Workshop Facilitation"],
    interests: ["Civic Tech", "Education"],
    roles: ["Community Manager", "Design Researcher"],
  },
];

// State
let filteredTeammates = [...teammates];
let connectedTeammates = [];
let currentProfile = null;

// Navigation
function navigateToProfile(id) {
  currentProfile = teammates.find((t) => t.id === id);
  showProfile(id);
  document.getElementById("main-view").classList.add("hidden");
  document.getElementById("profile-view").classList.remove("hidden");
}

function navigateToMain() {
  document.getElementById("profile-view").classList.add("hidden");
  document.getElementById("main-view").classList.remove("hidden");
  // Don't reset currentProfile here - let it be set properly in navigateToProfile
}

// Rendering
function renderTeammates() {
  const container = document.getElementById("teammates-container");

  if (filteredTeammates.length === 0) {
    container.innerHTML =
      '<div class="no-results">No teammates found matching your criteria.</div>';
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
    // Properly maintain the HTML structure
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
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  initializeEventListeners();
  renderTeammates();
});
