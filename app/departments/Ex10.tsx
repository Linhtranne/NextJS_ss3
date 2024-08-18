/* eslint-disable react/jsx-key */
import React from "react";

export default function page() {
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

  return (
    <div>
      <p>List departments</p>
      <ul>
        {departments.map((job) => (
          <li>{job.name}</li>
        ))}
      </ul>
    </div>
  );
}
