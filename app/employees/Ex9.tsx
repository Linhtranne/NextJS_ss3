import React from 'react'
import Link from 'next/link';

const employees = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Linda', age: 22 },
  { id: 3, name: 'Karen', age: 35 },
];


export default function page() {
  return (
    <div>  <div>
      <h1>Danh sách nhân viên</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <Link href={`/employees/${employee.id}`}>
              <a>{employee.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div></div>
  )
}


