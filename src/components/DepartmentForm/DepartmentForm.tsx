"use client";

import { FormEvent, useState } from "react";
import { DepartmentInput, useDepartments } from "@hooks/use-departments";
import { useStore } from "@context/context";

export const DepartmentForm = () => {
  const [department, setDepartment] = useState<DepartmentInput>({
    name: "",
    type: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const { postDepartment } = useDepartments();
  const { departments } = useStore();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !departments?.filter(
        (dept) =>
          dept?.type ===
          department.type.toLocaleLowerCase().trim().replace(/ /g, "-")
      ).length
    ) {
      postDepartment({
        name: department.name.trim(),
        type: department.type.trim().replace(/ /g, "-"),
      });
      setSuccess(true);
    } else {
      setError("Department already exists");
    }
    setDepartment({
      name: "",
      type: "",
    });
  };

  return (
    <section className="flex gap-8 max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="w-2/3">
        <div className="grid grid-cols-1 gap-6 mt-4">
          <div>
            <label
              className="text-white dark:text-gray-200"
              htmlFor="med-type-name"
            >
              Name (Ex: CARDIOLOGY) *
            </label>
            <input
              id="med-type-name"
              type="text"
              required={true}
              value={department?.name}
              onChange={(e) => {
                setError("");
                setSuccess(false);
                if (!/^[a-zA-Z\s]*$/g.test(e.target.value)) {
                  setError("Invalid input, please enter charecters only...");
                } else {
                  setDepartment({
                    ...department,
                    name: e.target.value.toUpperCase().trimStart(),
                    type: e.target.value.toLocaleLowerCase().trimStart(),
                  });
                }
              }}
              className="block w-full px-4 py-2 mt-2 text-gray-700 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
            {success && (
              <span className="text-xs mt-2 ml-3 block text-green-600">
                Department added successfully!!!
              </span>
            )}
            {Boolean(error) && (
              <span className="text-xs mt-2 ml-3 block text-red-600">
                {error}
              </span>
            )}
            <label
              className="text-white dark:text-gray-200 mt-4 block"
              htmlFor="med-type-name"
            >
              Type (Auto Generated)
            </label>
            <input
              type="text"
              required={true}
              value={department?.type}
              readOnly
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-4 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
      <div className="w-1/3" style={{ height: "inherit" }}>
        <h5 className="font-bold py-2 text-xl">AVAILABLE DEPARTMENTS</h5>
        <div className="flex flex-col overflow-y-auto h-[16rem]">
          {departments?.map((dept) => (
            <span className="p-2 border" key={dept.type}>{dept.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
