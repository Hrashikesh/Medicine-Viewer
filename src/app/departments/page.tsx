"use client";

import { Department } from "@components/Department/Department";
import { useStore } from "@context/context";
import { useDepartments } from "@hooks/use-departments";

const Departments = () => {
  useDepartments();
  const { departments } = useStore();

  return (
    <div className="p-4 flex flex-wrap gap-5">
      {departments?.map((department) => (
        <Department key={department.id} department={department} />
      ))}
    </div>
  );
};

export default Departments;
