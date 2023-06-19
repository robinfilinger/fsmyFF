import { readFile, utils } from 'xlsx';

// Specify the file path of the XLSX file
const filePath = 'path/to/your/Records.xlsx';

// Read the XLSX file
const workbook = readFile(filePath);

// Get the sheet by name
const sheetName = 'Records';
const sheet = workbook.Sheets[sheetName];

// Convert the sheet data to JSON
const jsonData = utils.sheet_to_json(sheet);

// Access the imported data
console.log(jsonData);