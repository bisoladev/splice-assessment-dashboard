"use client";

import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import { exportToCsv } from "@/lib/exportToCSV";
import { UserContext } from "./type";
import { Dayjs } from "@/lib/dayjs";

const Download = ({ data }: { data: UserContext[] }) => {
  const handleDownloadCsv = async () => {
    const newData = data?.map((item) => ({
      name: item?.name ?? "N/A",
      email: item?.email ?? "N/A",
      company: item?.company.name ?? "N/A",
      phone: item?.phone ?? "N/A",
    }));

    exportToCsv(newData || [], `Users_export_${Dayjs().format("Do MMMM YYYY")}`, "csv");
  };
  return (
    <Button onClick={handleDownloadCsv}>
      <span>Download CSV</span> <IconDownload size={18} />
    </Button>
  );
};

export default Download;
