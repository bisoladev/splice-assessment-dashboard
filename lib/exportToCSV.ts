import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const exportToCsv = (apiData: any, fileName: string, extension: "csv" | "xlsx" = "csv") => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = extension ?? ".csv"; //-->csv or xlsx(excel)

  const ws = XLSX.utils.json_to_sheet(apiData);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: fileExtension, type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + `.${fileExtension}`);
};
