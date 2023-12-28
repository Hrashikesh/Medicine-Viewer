"use client";

import { Doctor } from "@components/Doctor";
import { useStore } from "@context/context";
import { useDoctors } from "@hooks/use-doctors";

const Doctors = () => {
  useDoctors();
  const { doctors } = useStore();

  return (
    <div className="p-4 flex flex-wrap gap-5">
      {doctors?.map((doctor) => (
        <Doctor key={doctor.id} doctor={doctor} />
      ))}
    </div>
  );
};

export default Doctors;
