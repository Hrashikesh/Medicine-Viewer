import Image from "next/image";
import { Doctor as DoctorType } from "@schema/.";

type Props = {
  doctor: DoctorType;
};

export const Doctor = ({ doctor }: Props) => {
  return (
    <div className="min-w-[14.5rem] bg-white rounded w-fit overflow-hidden shadow-lg">
      <div className="text-center p-3 border-b">
        <Image
          className="h-24 w-24 rounded-full mx-auto"
          src={doctor?.photo}
          height={100}
          width={100}
          alt="Doctor"
        />
        <p className="pt-2 text-lg text-black font-bold">{doctor?.name}</p>
        <p className="text-sm font-bold text-gray-500">
          {doctor?.qualification}
        </p>
        <p className="text-sm font-bold text-gray-500">{doctor?.role}</p>
        <p className="text-sm text-gray-600">{doctor?.phone}</p>
        <p className="text-sm text-gray-600">{doctor?.email}</p>
      </div>
    </div>
  );
};
