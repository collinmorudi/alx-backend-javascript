// task_3/js/main.ts

/// <reference path="./crud.d..ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.';

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Inserted new row with ID: ${newRowID}`);

const updatedRow: RowElement = { 
    firstName: 'Guillaume', 
    lastName: 'Salva', 
    age: 23 
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row with ID: ${newRowID}`);

CRUD.deleteRow(newRowID);
console.log(`Deleted row with ID: ${newRowID}`);
