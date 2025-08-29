import {Component} from '@angular/core';
import {AgGridAngular, ICellRendererAngularComp} from 'ag-grid-angular';
import {ColDef, GridOptions, ICellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-detail-detail-grid',
  imports: [
    AgGridAngular
  ],
  templateUrl: './detail-detail-grid.component.html',
  styleUrl: './detail-detail-grid.component.scss'
})
export class DetailDetailGridComponent implements ICellRendererAngularComp{
  value!: any;
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
    console.log(this.value);
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.value = params.value;
    return true;
  }
  // Row Data: The data to be displayed.
  rowData = [
    { euros: "euros",  dollars: "dollars"  },
    { euros: "euros",  dollars: "dollars"  },
  ]

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    {
      headerName: "EXPANDOOOR",
      field: "euros",
      cellRenderer: 'agGroupCellRenderer'
    },
    {
      headerName: "HEADER DUDE",
      field: "dollars",
    },
  ];

  defaultColDefs: ColDef = {
    flex: 1
  }

  gridOptions: GridOptions = {
    rowHeight: 32,
    headerHeight: 48,
    domLayout: "autoHeight",
  }
}
