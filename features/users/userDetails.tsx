"use client";

import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useUser } from "./services";
import { Main } from "@/components/layout/main";
import { Header } from "@/components/layout/header";
import FullPageSpinner from "@/components/Spinner/FullPageSpinner";
import { Card } from "@/components/ui/card";

type Props = {
  label?: string;
  value?: string;
  subValue?: string;
  className?: string;
  wrapperClass?: string;
  valueClassName?: string;
  subValueClassName?: string;
};

export const ListItem = ({
  label,
  value,
  subValue,
  className,
  wrapperClass,
  valueClassName,
  subValueClassName,
}: Props) => {
  return (
    <div
      className={cn(
        "flex justify-between items-center text-sm py-3",
        wrapperClass
      )}
    >
      <p className={cn("", className)}>{label}</p>
      <div className="text-right">
        <p className={cn("font-medium", valueClassName)}>{value}</p>
        <p className={cn("text-xs", subValueClassName)}>{subValue}</p>
      </div>
    </div>
  );
};

const UserDetails = () => {
  const { user_id } = useParams<{ user_id: string }>();

  const { data, isLoading } = useUser(user_id);

  if (isLoading) return <FullPageSpinner />;

  const items = [
    { label: "Dashboard", to: "/app" },
    { label: "Users", to: "/app/users" },
    { label: "User Details", to: `/app/users/${user_id}` },
  ];

  return (
    <>
      <Header fixed items={items} />
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap gap-x-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">User Details</h2>
            <p className="text-muted-foreground">
              Here&apos;s a summary of your user details!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-6 xl:pr-10">
          <Card className="mt-8 p-4">
            <p className="font-semibold">Bio Data</p>
            <div className="divide-y">
              <ListItem
                label="Name"
                value={data?.name ?? "N/A"}
                wrapperClass={"pt-0"}
              />
              <ListItem label="Username" value={data?.username ?? "N/A"} />
              <ListItem label="Email" value={data?.email ?? "N/A"} />
              <ListItem label="Website" value={data?.website ?? "N/A"} />
              <ListItem label="Name" value={data?.name ?? "N/A"} />
              <ListItem label="Name" value={data?.name ?? "N/A"} />
            </div>
          </Card>
          <Card className="mt-8 p-4">
            <p className="font-semibold">Address Data</p>
            <div className="divide-y">
              <ListItem
                label="Street"
                value={data?.address?.street ?? "N/A"}
                wrapperClass={"pt-0"}
              />
              <ListItem label="Suite" value={data?.address?.suite ?? "N/A"} />
              <ListItem label="City" value={data?.address?.city ?? "N/A"} />
              <ListItem
                label="Zipcode"
                value={data?.address?.zipcode ?? "N/A"}
              />
              <ListItem
                label="Geo-Lat"
                value={data?.address?.geo?.lat ?? "N/A"}
              />
              <ListItem
                label="Geo-Lng"
                value={data?.address?.geo?.lng ?? "N/A"}
              />
            </div>
          </Card>
          <Card className="p-4">
            <p className="font-semibold">Company Data</p>
            <div className="divide-y">
              <ListItem
                label="Name"
                value={data?.company?.name}
                wrapperClass={"pt-0"}
              />
              <ListItem label="Username" value={data?.company?.catchPhrase} />
              <ListItem label="Email" value={data?.company?.bs} />
            </div>
          </Card>
        </div>
      </Main>
    </>
  );
};

export default UserDetails;
