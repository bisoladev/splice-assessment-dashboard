"use client";

import { Main } from "@/components/layout/main";
import { columns } from "./columns.tsx";
import Download from "./download.tsx";
import { DataTable } from "@/components/table/data-table.tsx";
import { useGetUsers } from "./services.ts";
import { Header } from "@/components/layout/header.tsx";

const items = [
  { label: "Dashboard", to: "/app" },
  { label: "Users", to: "/app/users" },
];
import { Input } from "@/components/ui/input.tsx";
import { FormEvent, useState } from "react";
import { useSearchDebounce } from "@/hooks/use-search-debounce.ts";

export default function UsersView() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useSearchDebounce(search, 1000);
  const { data: users, isFetching } = useGetUsers(debouncedSearch);

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setSearch((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Header fixed items={items} />
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2 flex-wrap gap-x-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Users</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your users!
            </p>
          </div>
          <div className="flex gap-2">
            <Download data={users ?? []} />
          </div>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <DataTable data={users ?? []} columns={columns} loading={isFetching}>
            <Input
              type="text"
              className="max-w-48 block ml-auto mr-4"
              placeholder="Search by fullname"
              onInput={handleChange}
            />
          </DataTable>
        </div>
      </Main>
    </>
  );
}
