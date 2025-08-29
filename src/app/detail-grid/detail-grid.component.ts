import {Component} from '@angular/core';
import {AgGridAngular, ICellRendererAngularComp} from "ag-grid-angular";
import {ColDef, GridOptions, ICellRendererParams, IDetailCellRendererParams} from 'ag-grid-community';

@Component({
  selector: 'app-detail-grid',
    imports: [
        AgGridAngular
    ],
  templateUrl: './detail-grid.component.html',
  styleUrl: './detail-grid.component.scss'
})
export class DetailGridComponent implements ICellRendererAngularComp{
  value!: any;
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.value = params.value;
    console.log("Initied")
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.value = params.value;
    return true;
  }
  // Row Data: The data to be displayed.
  rowData = [
    { euros: "euros",  dollars: "dollars"  },
    { euros: "euros",  dollars: "dollars"  },
    { euros: "euros",  dollars: "dollars"  },
    { euros: "euros",  dollars: "dollars"  },
  ]

  childRowData = [
    { "detail-euros": "euros",  "detail-dollars": "dollars"  },
    { "detail-euros": "euros",  "detail-dollars": "dollars"  },
    { "detail-euros": "euros",  "detail-dollars": "dollars"  },
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
    detailRowAutoHeight: true,
    masterDetail: true,
    detailCellRendererParams: {
      template: params=> {
        return `
              <div style="
                padding-left: 1rem;
                padding-bottom: 1rem;
                border-left: 4px solid lightgreen;
                background-color: lightblue;
              " class="grid-deet ag-details-row ag-details-row-auto-height">
                  <div data-ref="eDetailGrid" class="ag-details-grid ag-details-grid-auto-height"/>
              </div>
          `;
      },
      detailGridOptions: {
        rowHeight: 24,
        defaultColDef: {
          flex: 1
        },
        columnDefs: [
          {
            headerName: "DETAILOOOR",
            field: "detail-euros",
          },
          {
            headerName: "DETAIIIILLOOOOOOOR",
            field: "detail-dollars",
          },
        ]
      },
      getDetailRowData: (params) => {
        // supply data to the detail grid
        params.successCallback(this.childRowData);
      }
    } as IDetailCellRendererParams
  }
}
