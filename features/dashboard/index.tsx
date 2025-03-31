"use client";

import { Main } from "@/components/layout/main";
import { columns } from "./columns.tsx";
import Stats from "./stats.tsx";
import { DataTable } from "@/components/table/data-table.tsx";
import { Header } from "@/components/layout/header.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGetUsers } from "../users/services.ts";

const items = [{ label: "Dashboard", to: "/app" }];

export default function DashboardView() {
  const { data: users, isFetching } = useGetUsers(undefined);

  const router = useRouter();

  const handleNavigate = () => {
    router.push("/app/users");
  };

  return (
    <>
      <Header fixed items={items} />
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap gap-x-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">Here&apos;s your dashboard overview!</p>
          </div>
        </div>
        <div className="mt-6 mb-3">
          <Stats />
        </div>
        <div className="mt-8 mb-5 flex items-center justify-between gap-4">
          <p className="text-[19px] font-semibold">Recent Users</p>
          <Button onClick={handleNavigate}>
            <span>View More</span> <ArrowRight size={16} />
          </Button>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <DataTable
            data={users ?? []}
            columns={columns}
            loading={isFetching}
            showPagination={false}
            showToolbar={false}
          />
        </div>
      </Main>
    </>
  );
}
