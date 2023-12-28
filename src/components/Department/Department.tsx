import { Department as DepartmentType } from "@schema/.";

type Props = {
  department: DepartmentType;
};

export const Department = ({ department }: Props) => {
  return (
    <div
      id={department?.type}
      className="p-4 bg-white rounded w-fit overflow-hidden shadow-lg"
    >
      <h5 className="text-black m-auto block w-fit font-semibold">
        {department?.name}
      </h5>
    </div>
  );
};
