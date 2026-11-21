const projects = [
  {
    _id: "66adc1025a55a526d565823c",
    name: "Shopify App",
    details: {
      reason: "To enhance functionality and improve user engagement.",
      type: "Development",
      division: "Marketing",
      category: "Web Development",
      priority: "High",
      department: "FIN",
      location: "Remote",
    },
    schedule: {
      startDate: "2024-04-15T00:00:00.000Z",
      endDate: "2024-04-20T00:00:00.000Z",
      status: "Registered",
    },
    timestamps: {
      createdAt: "2024-08-03T05:32:50.553Z",
      updatedAt: "2024-08-03T05:32:50.553Z",
    },
  },
  {
    _id: "66adc1025a55a526d565823d",
    name: "E-commerce Redesign",
    details: {
      reason: "To modernize the user interface and improve conversion rates.",
      type: "Design",
      division: "Marketing",
      category: "UI/UX",
      priority: "Medium",
      department: "DES",
      location: "On-site",
    },
    schedule: {
      startDate: "2024-05-01T00:00:00.000Z",
      endDate: "2024-05-15T00:00:00.000Z",
      status: "In Progress",
    },
    timestamps: {
      createdAt: "2024-08-03T05:35:12.553Z",
      updatedAt: "2024-08-03T05:35:12.553Z",
    },
  },
  {
    _id: "66adc1025a55a526d565823e",
    name: "API Integration",
    details: {
      reason: "To integrate third-party services for enhanced capabilities.",
      type: "Development",
      division: "Engineering",
      category: "API Development",
      priority: "High",
      department: "ENG",

      location: "Remote",
    },
    schedule: {
      startDate: "2024-06-01T00:00:00.000Z",
      endDate: "2024-06-10T00:00:00.000Z",
      status: "Completed",
    },
    timestamps: {
      createdAt: "2024-08-03T05:37:30.553Z",
      updatedAt: "2024-08-03T05:37:30.553Z",
    },
  },
  {
    _id: "66adc1025a55a526d565823f",
    name: "Mobile App Launch",
    details: {
      reason: "To provide users with a mobile platform for easier access.",
      type: "Development",
      division: "Product",
      category: "Mobile Development",
      priority: "High",
      department: "PROD",
      location: "On-site",
    },
    schedule: {
      startDate: "2024-07-01T00:00:00.000Z",
      endDate: "2024-07-15T00:00:00.000Z",
      status: "Registered",
    },
    timestamps: {
      createdAt: "2024-08-03T05:40:15.553Z",
      updatedAt: "2024-08-03T05:40:15.553Z",
    },
  },
  {
    _id: "66adc1025a55a526d5658240",
    name: "CRM System Overhaul",
    details: {
      reason: "To improve data management and customer interactions.",
      type: "Development",
      division: "Sales",
      category: "System Development",
      priority: "Medium",
      department: "SALES",
      location: "Remote",
    },
    schedule: {
      startDate: "2024-08-01T00:00:00.000Z",
      endDate: "2024-08-10T00:00:00.000Z",
      status: "Registered",
    },
    timestamps: {
      createdAt: "2024-08-03T05:42:50.553Z",
      updatedAt: "2024-08-03T05:42:50.553Z",
    },
  },
  {
    _id: "66adc1025a55a526d5658241",
    name: "Marketing Campaign Launch",
    details: {
      reason: "To increase brand awareness and drive traffic.",
      type: "Marketing",
      division: "Marketing",
      category: "Campaign Management",
      priority: "High",
      department: "MKTG",
      location: "Remote",
    },
    schedule: {
      startDate: "2024-09-01T00:00:00.000Z",
      endDate: "2024-09-15T00:00:00.000Z",
      status: "Registered",
    },
    timestamps: {
      createdAt: "2024-08-03T05:45:10.553Z",
      updatedAt: "2024-08-03T05:45:10.553Z",
    },
  },
  {
    _id: "66adc1025a55a526d5658242",
    name: "Employee Training Program",
    details: {
      reason: "To upskill employees and improve productivity.",
      type: "HR",
      division: "Human Resources",
      category: "Training",
      priority: "Medium",
      department: "HR",
      location: "On-site",
    },
    schedule: {
      startDate: "2024-10-01T00:00:00.000Z",
      endDate: "2024-10-05T00:00:00.000Z",
      status: "Completed",
    },
    timestamps: {
      createdAt: "2024-08-03T05:47:45.553Z",
      updatedAt: "2024-08-03T05:47:45.553Z",
    },
  },
  {
    _id: "66adc1025a55a526d5658243",
    name: "Cloud Migration",
    details: {
      reason: "To improve scalability and reduce infrastructure costs.",
      type: "Development",
      division: "Engineering",
      category: "Cloud Computing",
      priority: "High",
      department: "ENG",
      location: "Remote",
    },
    schedule: {
      startDate: "2024-11-01T00:00:00.000Z",

      endDate: "2024-11-20T00:00:00.000Z",
      status: "In Progress",
    },
    timestamps: {
      createdAt: "2024-08-03T05:50:12.553Z",
      updatedAt: "2024-08-03T05:50:12.553Z",
    },
  },
  {
    _id: "66adc1025a55a526d5658244",
    name: "Security Audit",
    details: {
      reason: "To identify and fix vulnerabilities in our systems.",
      type: "Audit",
      division: "IT",
      category: "Security",
      priority: "High",
      department: "IT",
      location: "Remote",
    },
    schedule: {
      startDate: "2024-12-01T00:00:00.000Z",
      endDate: "2024-12-05T00:00:00.000Z",
      status: "Registered",
    },
    timestamps: {
      createdAt: "2024-08-03T05:52:45.553Z",
      updatedAt: "2024-08-03T05:52:45.553Z",
    },
  },
  {
    _id: "77adc1025a55a526d5658241",
    name: "Marketing Campaign Launch",
    details: {
      reason: "To promote the new product line.",
      type: "Marketing",
      division: "Sales",
      category: "Digital Marketing",
      priority: "High",
      department: "MARKETING",
      location: "In-Office",
    },
    schedule: {
      startDate: "2024-07-05T00:00:00.000Z",
      endDate: "2024-08-05T00:00:00.000Z",
      status: "In Progress",
    },
    timestamps: {
      createdAt: "2024-08-03T05:50:00.000Z",
      updatedAt: "2024-08-03T05:50:00.000Z",
    },
  },
];

const projectCategories = projects.reduce(
  (acc, project) => {
    const status = project.schedule.status;

    if (status === "Completed") {
      acc.completedProject.push(project);
    } else if (status === "In Progress") {
      acc.inprogressProject.push(project);
    } else if (status === "Registered") {
      acc.resgisterProject.push(project);
    }

    return acc;
  },
  {
    completedProject: [],
    inprogressProject: [],
    resgisterProject: [],
  },
);

console.log(projectCategories);

// Question 1: Use the map method to create a new array containing the names of all projects.
const projectName = projects.map((project) => project.name);
console.log(`projects name: ${projectName}`);

// Question 2: Use the filter method to get a list of projects with the status "Registered".
const registered = projects.filter(
  (project) => project.schedule.status === "Registered",
);
console.log(`Regestered project: ${registered}`);

// Question 3 :Use the reduce method to count how many projects have the priority "High".
const getHighPriority = projects.reduce((count, project) => {
  return project.details.priority === "High" ? count + 1 : count;
}, 0);
console.log(`High priorty projects: ${getHighPriority}`);

//Question 4: Use the forEach method to log the reason for each project
projects.forEach((project) => {
  console.log(
    `project name: ${project.name} = logs: ${project.details.reason}`,
  );
});

// Question 5: Use a for...of loop to log the names and start dates of all projects.
for (const project of projects) {
  console.log(
    `project name: ${project.name} start date is ${project.schedule.startDate}`,
  );
}

// Question 6: Use a for...in loop to log all keys and values for the first project's details object.
for (const key in projects[0].details) {
  // console.log(key)
  console.log(`key: ${key} = value: ${projects[0].details[key]}`);
}

// Question 7: Use Object.keys and map to create an array of all keys in the details object of the first project.
const keys = Object.keys(projects[0].details).map((key) => key);
console.log(`keys of first project: ${keys}`);

// Question 8: Access and log the endDate of the project with _id "66adc1025a55a526d5658240".
const dateWithId = projects.find((p) => p._id === "66adc1025a55a526d5658240");
console.log(dateWithId);
console.log(`end date of project: ${dateWithId.schedule.endDate}`);

// Question 9: Use map to create an array of objects where each object contains the project's name and reason from the details object.

const nameWithReason = projects.map((project) => ({
  name: project.name,
  reason: project.details.reason,
}));
console.log(nameWithReason);

// Question 10: Filter the projects that are "In Progress" and then use map to create an array of their names.
const filterArray = projects.filter(
  (project) => project.schedule.status === "In Progress",
);
// console.log(filterArray);
const progressArray = filterArray.map((names) => [names.name]);
console.log(`progress projects: ${progressArray}`);

// Question 11: Use the map method to create an array of project names and their corresponding priority.
const priority = projects.map((names) => [names.name, names.details.priority]);
console.log(priority);

// Question 12: Filter the projects where the division in details is "Engineering" and list their names.
const divison = projects.filter(
  (div) => div.details.division === "Engineering",
);
console.log(divison);
console.log(divison.map((dev) => dev.name));

// Question 13: Use the reduce method to calculate the total number of days for all projects. Assume the startDate and endDate are in ISO 8601 format.
const totalDays = projects.reduce((total, proj) => {
  const start = new Date(proj.schedule.startDate);
  const end = new Date(proj.schedule.endDate);

  const days = (end - start) / (1000 * 60 * 60 * 24);
  return total + days;
});

console.log(totalDays);

// Question 14: Use forEach to count the number of projects for each priority level (High, Medium). Log the count for each priority.
const priorityCount = {
  High: 0,
  Medium: 0,
};

projects.forEach((project) => {
  const priority = project.details.priority;

  if (priority in priorityCount) {
    priorityCount[priority]++;
  }
});

console.log(priorityCount);

// Question 15: Use a for...of loop to log the location and status of each project.
for (const project of projects) {
  console.log(
    `location: ${project.details.location} and status: ${project.schedule.status}`,
  );
}

// Question 16: Use a for...in loop to log all the values within the schedule object of the first project.
for (const log in projects[0].schedule) {
  console.log(log);
}

// Question 17: Use Object.keys and filter to create an array of keys from the details object that have the value "Remote".
const remoteKeys = Object.keys(projects[0].details).filter(
  (key) => projects[0].details[key] === "Remote",
);
console.log(remoteKeys);

// Question 18: Use map and Object.keys to create an array of objects where each object contains the project.name and an array of details keys.
const name_details = projects.map((project) => ({
  name: project.name,
  details: Object.keys(project.details),
}));
console.log(name_details);

// Question 19: Find the project with the _id "66adc1025a55a526d5658243" and log its reason from the details object if the status is "In Progress".

function reasons() {
  const getProject = projects.find(
    (project) => project._id === "66adc1025a55a526d5658243",
  );

  if (getProject && getProject.schedule.status === "In Progress") {
    console.log(`reasons: ${getProject.details.reason}`);
  }
}

reasons();

// Question 21: Filter out projects with the priority "High", then map their name and endDate, and finally use reduce to concatenate their names into a single string.
console.log(reduce);

const singleOperation = projects
  .filter((project) => project.details.priority === "High")
  .map((project) => ({ name: project.name, date: project.schedule.endDate }))
  .reduce((result, project) => result + project.name + "," + "");

console.log(singleOperation);
