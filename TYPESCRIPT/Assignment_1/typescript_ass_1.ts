// 1. Create an employee object with nested address and department
interface Address {
  city: string;
  state: string;
  country: string;
}
interface Department {
  name: string;
  manager: string;
}

interface Employee {
  id: number;
  name: string;
  age: number;
  salary: number;
  address: Address;
  department: Department;
  skills: string[];
}

// 2. Store at least 10 employees in an array.
const employees: Employee[] = [
  {
    id: 1,
    name: "Pratik",
    age: 25,
    salary: 50000,
    address: { city: "Pune", state: "Maharashtra", country: "India" },
    department: { name: "IT", manager: "Rahul" },
    skills: ["JavaScript", "React"],
  },
  {
    id: 2,
    name: "Amit",
    age: 28,
    salary: 60000,
    address: { city: "Mumbai", state: "Maharashtra", country: "India" },
    department: { name: "HR", manager: "Sneha" },
    skills: ["Communication", "Recruitment"],
  },
  {
    id: 3,
    name: "Sneha",
    age: 26,
    salary: 70000,
    address: { city: "Pune", state: "Maharashtra", country: "India" },
    department: { name: "IT", manager: "Rahul" },
    skills: ["JavaScript", "Node.js"],
  },
  {
    id: 4,
    name: "Rahul",
    age: 30,
    salary: 80000,
    address: { city: "Delhi", state: "Delhi", country: "India" },
    department: { name: "Finance", manager: "Karan" },
    skills: ["Accounting", "Excel"],
  },
  {
    id: 5,
    name: "Neha",
    age: 27,
    salary: 55000,
    address: { city: "Pune", state: "Maharashtra", country: "India" },
    department: { name: "HR", manager: "Sneha" },
    skills: ["Recruitment", "Communication"],
  },
  {
    id: 6,
    name: "Karan",
    age: 32,
    salary: 90000,
    address: { city: "Mumbai", state: "Maharashtra", country: "India" },
    department: { name: "IT", manager: "Rahul" },
    skills: ["JavaScript", "Python"],
  },
  {
    id: 7,
    name: "Pooja",
    age: 24,
    salary: 45000,
    address: { city: "Nashik", state: "Maharashtra", country: "India" },
    department: { name: "Marketing", manager: "Amit" },
    skills: ["SEO", "Marketing"],
  },
  {
    id: 8,
    name: "Rohit",
    age: 29,
    salary: 65000,
    address: { city: "Pune", state: "Maharashtra", country: "India" },
    department: { name: "Finance", manager: "Karan" },
    skills: ["Excel", "Accounting"],
  },
  {
    id: 9,
    name: "Priya",
    age: 26,
    salary: 75000,
    address: { city: "Mumbai", state: "Maharashtra", country: "India" },
    department: { name: "Marketing", manager: "Amit" },
    skills: ["SEO", "Content Writing"],
  },
  {
    id: 10,
    name: "Vikas",
    age: 31,
    salary: 85000,
    address: { city: "Pune", state: "Maharashtra", country: "India" },
    department: { name: "IT", manager: "Rahul" },
    skills: ["React", "Node.js"],
  },
];

console.log(employees);

// 3. Add, update, delete and search employees.
// Add Employee
function addEmp(emp: Employee) {
  employees.push(emp);
  console.log(`Emp added : ${emp.name}`);
}

addEmp({
  id: 11,
  name: "Pratik",
  age: 24,
  salary: 8000,
  address: { city: "nandane", state: "Maharashtra", country: "India" },
  department: { name: "Bakend devloper", manager: "Kiran sir" },
  skills: ["javascript"],
});

// update
type updateFun = (id: number, UpdateData: Partial<Employee>) => void; // Partial: makes every property optional (?)

const updateEmp: updateFun = (id, UpdateData) => {
  const EmpID = employees.find((emp) => emp.id === id);
  if (!EmpID) {
    console.log(`Employee with id ${id} not found`);
    return;
  }
  Object.assign(EmpID, UpdateData);
  console.log(`update Emp: ${EmpID}`);
};

updateEmp(11, {
  name: "pratik patil",
  skills: ["javascript", "Typescript"],
});
console.log(employees);

// delete

function Delete(id: number): void {
  const EmpID = employees.find((emp) => emp.id === id);
  if (!EmpID) {
    console.log("Employee not found");
    return;
  }
  const updateEmp = employees.filter((emp) => emp.id !== id);

  employees.length = 0;
  employees.push(...updateEmp);
  console.log(`Emp deleted: ${(EmpID.id, EmpID.name)}`);
}
Delete(3);

// search
function Search(id: number): Employee | undefined {
  return employees.find((emp) => emp.id === id);
  //   return employees.find((emp) => emp.id === id)?.id; // if need only id. add number in rwtuen type
}
console.log("Search by ID:", Search(10));

// 4. Filter employees by department.
function filterByDep(departmentName: string): Employee[] {
  return employees.filter((emp) => emp.department.name === departmentName);
}
console.log("Deparment emp: ", filterByDep("IT"));

// 5. Calculate total salary using reduce()
function totalSalary(): number {
  return employees.reduce((total, emp) => total + emp.salary, 0);
}
console.log(`Total salary ${totalSalary()}`);

// 6. Sort employees by salary.
function sortEmpSal(): Employee[] {
  return [...employees].sort((a, b) => a.salary - b.salary);
}
console.log("Sort By salary: ", sortEmpSal());

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
function genrateId(startID: number) {
  let id = startID;
  return function (): string {
    id++;
    return `ID_${id}`;
  };
}
const gen = genrateId(0);
console.log(gen()); // ID_1
console.log(gen()); // ID_2

//10. Use call(), apply() and bind() to calculate salary.

const salaryCalculator = {
  calculateSalary: function (
    this: { salary: number },
    bonus: number,
    allowance: number,
  ): number {
    return this.salary + bonus + allowance;
  },
};

interface calculate {
  name: string;
  salary: number;
  bonus: number;
  allowance: number;
}
const emp1: calculate = {
  name: "krishna",
  salary: 50000,
  allowance: 50000,
  bonus: 10000,
};

//call
const callSalary = salaryCalculator.calculateSalary.call(emp1, 5000, 2000);
console.log("call salary: ", callSalary);

// Apply
const applySalary = salaryCalculator.calculateSalary.apply(emp1, [5000, 2000]);
console.log("Apply salary: ", applySalary);

//bind
const bindSalary = salaryCalculator.calculateSalary.bind(emp1, 5000, 2000);
console.log("Bind salary: ", bindSalary);

// 11. Use Map to store employee records.
const empRecords = new Map();

employees.forEach((emp) => {
  empRecords.set(emp.id, emp);
});
console.log("employee data: ", empRecords);
console.log("GET: ", empRecords.get(1));

//12. Use Set to maintain unique employee skills.
const setSkills = new Set();

employees.forEach((emp) => {
  emp.skills.forEach((skills) => {
    setSkills.add(skills);
  });
});
console.log("Is skill", setSkills.has("javascript"));
console.log("Skills: ", setSkills);

//13. Implement Promise-based employee fetching.
function fetching(): Promise<Employee[]> {
  return new Promise((resolve, reject) => {
    if (employees.length > 0) {
      resolve(employees);
    } else {
      reject("No EMP found");
    }
  });
}

fetching()
  .then((data) => {
    console.log("promises data: ", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
export {};

// 14. Use async/await and error handling.
async function getEmp(): Promise<void> {
  try {
    const data = await fetching();
    console.log("data: ", data);
  } catch (error) {
    console.log("Error Fteching Emp: ", error);
  }
}
getEmp();

// 15. Implement debouncing for employee search.
function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
) {
  let timer: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    console.log("argumeents: ", ...args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

function empSearch(values: string): void {
  const result = employees.filter((emp) =>
    emp.name.toLowerCase().includes(values.toLowerCase()),
  );
  console.log("search Result: ", result);
}

const debouncedSearch = debounce(empSearch, 500);
debouncedSearch("k");
debouncedSearch("kr");
debouncedSearch("kri");
debouncedSearch("kris");
debouncedSearch("krish");
debouncedSearch("krishn");
debouncedSearch("krishna");

// 16. Implement throttling for report generation.

function throttle<T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
) {
  let lastCall = 0;

  return (...args: Parameters<T>): void => {
    const currentTime = Date.now();

    if (currentTime - lastCall >= delay) {
      lastCall = currentTime;
      callback(...args);
    }
  };
}

function generateReport(): void {
  console.log("Total Employees:", employees.length);
  const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
  console.log("Total salary is:", total);
}

const throttleReport = throttle(generateReport, 2000);

// Only the first call runs immediately;
// calls within 2000ms are ignored
throttleReport();
throttleReport();
throttleReport();
throttleReport();
