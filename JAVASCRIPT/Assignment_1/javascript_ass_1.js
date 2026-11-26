// 1. Create an employee object with nested address and department

const employee = {
  id: 1,
  name: "Pratik",
  age: 25,
  salary: 50000,

  address: {
    city: "Pune",
    state: "Maharashtra",
    country: "India",
  },

  department: {
    name: "IT",
    manager: "Rahul",
  },

  skills: ["JavaScript", "React", "Node.js"],
};

console.log(employee);

// 2. Store at least 10 employees in an array.
const employees = [
  {
    id: 1,
    name: "Pratik",
    age: 25,
    salary: 50000,
    address: { city: "Pune", state: "Maharashtra" },
    department: { name: "IT", manager: "Rahul" },
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Amit",
    age: 28,
    salary: 60000,
    address: { city: "Mumbai", state: "Maharashtra" },
    department: { name: "HR", manager: "Sneha" },
    skills: ["Communication", "Recruitment"],
  },
  {
    id: 3,
    name: "Sneha",
    age: 26,
    salary: 70000,
    address: { city: "Pune", state: "Maharashtra" },
    department: { name: "IT", manager: "Rahul" },
    skills: ["JavaScript", "Node.js"],
  },
  {
    id: 4,
    name: "Rahul",
    age: 30,
    salary: 80000,
    address: { city: "Delhi", state: "Delhi" },
    department: { name: "Finance", manager: "Karan" },
    skills: ["Accounting", "Excel"],
  },
  {
    id: 5,
    name: "Neha",
    age: 27,
    salary: 55000,
    address: { city: "Pune", state: "Maharashtra" },
    department: { name: "HR", manager: "Sneha" },
    skills: ["Recruitment", "Communication"],
  },
  {
    id: 6,
    name: "Karan",
    age: 32,
    salary: 90000,
    address: { city: "Mumbai", state: "Maharashtra" },
    department: { name: "IT", manager: "Rahul" },
    skills: ["JavaScript", "Python"],
  },
  {
    id: 7,
    name: "Pooja",
    age: 24,
    salary: 45000,
    address: { city: "Nashik", state: "Maharashtra" },
    department: { name: "Marketing", manager: "Amit" },
    skills: ["SEO", "Marketing"],
  },
  {
    id: 8,
    name: "Rohit",
    age: 29,
    salary: 65000,
    address: { city: "Pune", state: "Maharashtra" },
    department: { name: "Finance", manager: "Karan" },
    skills: ["Excel", "Accounting"],
  },
  {
    id: 9,
    name: "Priya",
    age: 26,
    salary: 75000,
    address: { city: "Mumbai", state: "Maharashtra" },
    department: { name: "Marketing", manager: "Amit" },
    skills: ["SEO", "Content Writing"],
  },
  {
    id: 10,
    name: "Vikas",
    age: 31,
    salary: 85000,
    address: { city: "Pune", state: "Maharashtra" },
    department: { name: "IT", manager: "Rahul" },
    skills: ["React", "Node.js"],
  },
];

console.log(employee);

// 3. Add, update, delete and search employees.

// Add Employee
function addEmp(emp) {
  employees.push(emp);
  console.log(`Emp added : ${emp.name}`);
}

addEmp({
  id: 11,
  name: "Pratik",
  age: 24,
  salary: 8000,
  address: { city: "nandane", state: "Maharashtra" },
  department: { name: "Bakend devloper", manager: "Kiran sir" },
  skills: ["javascript"],
});

// update
function updateEmp(id, UpdateData) {
  const EmpID = employees.find((emp) => emp.id === id);

  employee[EmpID] = {
    ...employees[EmpID],
    ...UpdateData,
  };

  console.log(`update Emp: ${employees[EmpID]}`);
}

updateEmp(11, {
  name: "pratik patil",
  skills: ["javascript", "Typescript"],
});

// delete
function deleteEmp(id) {
  const EmpID = employees.find((emp) => emp.id === id);
  const updateEmp = employees.filter((emp) => emp.id !== id);
  employees.push(...updateEmp);
  console.log(`Emp deleted: ${(employees.id, employees.name)}`);
}

deleteEmp(3);

// search
function searchEmp(id) {
  const EmpID = employees.find((emp) => emp.id === id);
  return employees.EmpID || "Employee Not found";
}
searchEmp(10);

// 4. Filter employees by department.
function filterByDepartment(departmentName) {
  const deparment = employees.filter(
    (emp) => emp.department.name === departmentName,
  );
  return deparment;
}
console.log(filterByDepartment("IT"));

// 5. Calculate total salary using reduce()

function totalSalary() {
  return employees.reduce((total, emp) => total + emp.salary, 0);
}
console.log(`Total salary ${totalSalary()}`);

// 6. Sort employees by salary.
function sortBySalary() {
  return [...employees].sort((a, b) => {
    a.salary - b.salary;
  });
}
console.log("Sort By salary: ", sortBySalary());
console.log("Sort By salary: ", sortBySalary()); // Template literals force every object in the array to call .toString(), which produces [object Object] for each of your 21 employee objects.

// 7. Use Object.keys(), values(), entries().

const emp = employees[0];
console.log(`\nobject keys: ${Object.keys(emp).join("\n")}`);
console.log(`\nobject Values: ${Object.values(emp).join("\n")}`);
console.log(
  `\nobject Entries: ${Object.entries(emp).join("\n").replaceAll(",", ": ")}`,
);

// 8. Implement shallow and deep copying.
const shallowCopy = { ...employees[0] };
shallowCopy.salary = 1000000;
shallowCopy.address.city = "Nashik";
console.log("\norginal emp: ", employees[0]);
console.log("\nshallow copy: ", shallowCopy);

// deep copy
const deepCopy = structuredClone(employees[0]);
deepCopy.address.city = "Delhi";
console.log("\norginal emp: ", employees[0]);
console.log("\nDeep copy: ", deepCopy);

// 9. Use closures to generate unique employee IDs.
function genrateId() {
  let id = 0;
  return function () {
    id++;
    return `ID_${id}`;
  };
}
const gen = genrateId();
console.log(gen()); // ID_1
console.log(gen()); // ID_2

//10. Use call(), apply() and bind() to calculate salary.
const salaryCalculator = {
  calcukateSalary: function (bonus, allowance) {
    return this.salary + bonus + allowance;
  },
};

const emp1 = {
  name: "krishna",
  salary: 5000,
};

//call
const callSalary = salaryCalculator.calcukateSalary.call(emp1, 5000, 2000);
console.log("call salary: ", callSalary);

// Apply
const applySalary = salaryCalculator.calcukateSalary.apply(emp1, [5000, 2000]);
console.log("Apply salary: ", applySalary);

//bind
const bindSalary = salaryCalculator.calcukateSalary.bind(emp1, 5000, 2000);
console.log("Bind salary: ", bindSalary);

// 11. Use Map to store employee records.
const empRecords = new Map();
employees.forEach((emp) => {
  empRecords.set(emp.id, emp);
});
console.log("employee data: ", empRecords);
console.log("GET: ", empRecords.get(1));

//12. Use Set to maintain unique employee skills.
const empSkills = new Set();
empSkills.forEach((emp) => {
  emp.skills.forEach((skills) => {
    empSkills.add(skills);
  });
});
console.log("Is skill", empSkills.has("javascript"));
console.log("Skills: ", empSkills);

//13. Implement Promise-based employee fetching.
function fetchEmp() {
  return new Promise((resolve, reject) => {
    if (employees.length > 0) {
      resolve(employees);
    } else {
      reject("no Emp found");
    }
  });
}

fetchEmp()
  .then((data) => {
    console.log("promises data: ", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// 14. Use async/await and error handling.
async function getEmp() {
  try {
    const data = await fetchEmp();
    console.log("\n try catch data: ", data);
  } catch (error) {
    console.log("Error Fteching Emp: ", error);
  }
}
getEmp();

// 15. Implement debouncing for employee search.
function debounce(callback, delay) {
  let timer;

  return function (...args) {
    console.log("argumeents: ", ...args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function empSearch(values) {
  const result = employees.filter((emp) =>
    emp.name.toLowerCase().includes(values.toLowerCase()),
  );

  console.log("Search result: ", result);
}

const debouncedSearch = debounce(empSearch, 1000);
debouncedSearch("k");
debouncedSearch("kr");
debouncedSearch("kri");
debouncedSearch("kris");
debouncedSearch("krish");
debouncedSearch("krishn");
debouncedSearch("krishna");

// 16. Implement throttling for report generation.
function throttle(callback, delay) {
  let lastCall = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastCall >= delay) {
      lastCall = currentTime;
      callback(...args);
    }
  };
}

function genrateReport() {
  console.log("Total Employees:", employees.length);
  const total = employees.reduce((sum, emp) => {
    return sum + emp.salary;
  }, 0);
  console.log("Total slary is: ", total);
}

const throttleReport = throttle(genrateReport, 2000);
throttleReport();
throttleReport();
throttleReport();
throttleReport();
