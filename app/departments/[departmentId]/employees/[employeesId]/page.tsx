/* eslint-disable react/jsx-key */
import { log } from "console";
import React from "react";
type PropTypes = {
  params: {
    departmentId: string;
    employeeId: string;
  };
};
const employees = [
  { id: 1, name: "Alice", departmentId: 1 },
  { id: 2, name: "Bob", departmentId: 1 },
  { id: 3, name: "Charlie", departmentId: 2 },
  { id: 4, name: "David", departmentId: 2 },
  { id: 5, name: "Eve", departmentId: 3 },
  { id: 6, name: "Frank", departmentId: 3 },
  { id: 7, name: "Grace", departmentId: 4 },
  { id: 8, name: "Hank", departmentId: 4 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Sales" },
  { id: 4, name: "IT" },
];
export default function Page({ params }: PropTypes) {
  const departmentId = parseInt(params.departmentId);
  const employeeId = parseInt(params.employeeId);

  const department = departments.find((dep) => dep.id === departmentId);

  const employee = employees.filter((emp)=>emp.departmentId===departmentId);

  
  
  return (
    <div>
      {department && employee ? (
        <div>
          <h1>Department: {department.name}</h1>
          <p>Employee:</p>
          <ol>
             {employee.map((emp)=>(<li>{emp.name}</li>))}
          </ol>
        </div>
      ) : (
        <p>Data not found</p>
      )}
    </div>
  );
}
