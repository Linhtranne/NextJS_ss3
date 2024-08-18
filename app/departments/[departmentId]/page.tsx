import React from "react";

type PropTypes = {
  params: {
    departmentID: string;
  };
};

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Sales" },
  { id: 4, name: "IT" },
];

export default function Page({ params }: PropTypes) {
  const department = departments.find((dep) => dep.id === parseInt(params.departmentID));
  return (
    <div>
      {department ? (
        <>
          <p>{department.id}</p>
          <p>{department.name}</p>
        </>
      ) : (
        <p>Department not found</p>
      )}
    </div>
  );
}
