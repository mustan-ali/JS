let t = document.querySelector('table');

t.rows // returns all rows
t.caption // returns the caption
t.tHead // returns the table head
t.tBodies // returns all table bodies
t.tFoot // returns the table foot

tbody.rows // returns all rows in the table body
thead.rows // returns all rows in the table head
tfoot.rows // returns all rows in the table foot

//t.cells[0].cells
tr.cells // returns all cells in the row 
tr.sectionRowIndex // returns the index of the row in the table section
tr.rowIndex // returns the index of the row in the table
tr.cellIndex // returns the index of the cell in the row