import * as XLSX from 'xlsx';

export class excelUtils {
    // which excel file you need to read // file path
    // which sheet to be considered from the excel // name of the sheet
    static getExcelData(filepath: string, sheetname: string) {
        const workbook = XLSX.readFile(filepath);
        const worksheet = workbook.Sheets[sheetname];
        const data = XLSX.utils.sheet_to_json(worksheet);
        return data;
    }
}
