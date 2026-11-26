
interface Employee { id: number; name: string; email: string; salary: number; department: string }

type EmployeeDetails = Pick<Employee, "id" | "name" | "department">;

const emp3: EmployeeDetails = {id: 1,name: "Rahul",department: "IT" };