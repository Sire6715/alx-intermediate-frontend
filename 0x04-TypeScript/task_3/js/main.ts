/// <reference path="./interface.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";


const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowId: RowID = CRUD.insertRow(row);
const updateRow: RowElement = {
    ...row,
    age: 23
};

CRUD.updateRow(newRowId, updateRow);
CRUD.deleteRow(newRowId);

const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowId, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125