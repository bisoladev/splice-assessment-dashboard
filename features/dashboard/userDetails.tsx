"use client";

import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

type Props = {
  label?: string;
  value?: string;
  subValue?: string;
  className?: string;
  valueClassName?: string;
  subValueClassName?: string;
};

export const ListItem = ({ label, value, subValue, className, valueClassName, subValueClassName }: Props) => {
  return (
    <div className="flex justify-between items-center text-sm py-3">
      <p className={cn("", className)}>{label}</p>
      <div className="text-right">
        <p className={cn("font-medium", valueClassName)}>{value}</p>
        <p className={cn("text-xs", subValueClassName)}>{subValue}</p>
      </div>
    </div>
  );
};

const UserDetails = () => {
  const { user_id } = useParams();

  return (
    <div className="my-5 divide-y ">
      <p>User {user_id}</p>
    </div>
  );
};

export default UserDetails;
