import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

const employees = [
  { id: 1, name: 'John Doe', age: 28 },
  { id: 2, name: 'Linda', age: 22 },
  { id: 3, name: 'Karen', age: 35 },
];

const page = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <div>Nhân viên không tồn tại</div>;
  }

  return (
    <div>
      <h1>Chi tiết nhân viên</h1>
      <p>Id: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Age: {employee.age}</p>
      <Link href={`/employees/${id}/projects`}>
        <a>Xem các dự án của nhân viên</a>
      </Link>
    </div>
  );
};

export default page;
