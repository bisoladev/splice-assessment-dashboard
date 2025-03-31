"use client";

import { ColumnDef } from "@tanstack/react-table";
import { UserContext } from "./type";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";

export const columns: ColumnDef<UserContext>[] = [
  {
    id: "id",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className={"pl-4 text-[13px]"}
        title="SN"
      />
    ),
    cell: ({ row }) => <div className="text-center w-12">{row.index + 1}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="w-auto">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div>{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
    cell: ({ row }) => <div>{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Company Name" />
    ),
    cell: ({ row: { original } }) => {
      const company = original.company; // Get full company object
      return <div>{company?.name || "N/A"}</div>;
    },
  },
];
