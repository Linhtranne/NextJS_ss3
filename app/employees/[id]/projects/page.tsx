/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import React from 'react';

const projects: Record<number, string[]> = {
  1: ['Project A', 'Project B'],
  2: ['Facebook', 'Instagram'],
  3: ['Project X', 'Project Y'],
};

const page = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const employeeProjects = projects[Number(id)];

  if (!employeeProjects) {
    return <div>Không có dự án nào cho nhân viên này</div>;
  }

  return (
    <div>
      <h1>Danh sách dự án của nhân viên</h1>
      <ul>
        {employeeProjects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default page;
