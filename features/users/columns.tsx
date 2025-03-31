"use client";

import { ColumnDef } from "@tanstack/react-table";
import { UserContext } from "./type";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";

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
      const company = original.company;
      return <div>{company?.name || "N/A"}</div>;
    },
  },
  {
    id: "actions",
    meta: {
      className: "sticky right-0 bg-white shadow-md",
    },
    size: 30,
    cell: ({ row: { original } }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-[30px] p-0 !cursor-pointer"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="p-0">
              <Link
                href={`/app/users/${original.id}`}
                className="block size-full px-2 py-1.5 leading-none"
              >
                View User Details
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
