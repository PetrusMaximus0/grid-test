import {Component, computed, effect, inject, signal, Signal, ViewChild} from '@angular/core';
import {AgGridAngular, ICellRendererAngularComp} from 'ag-grid-angular';
import {ColDef, GridApi, GridOptions, ICellRendererParams, IRowNode} from 'ag-grid-community';
import {DetailDetailGridComponent} from '../detail-detail-grid/detail-detail-grid.component';
import {ColumnStateService} from '../services/column-state.service';

@Component({
  selector: 'app-detail-grid',
  imports: [AgGridAngular],
  standalone: true,
  templateUrl: './detail-grid.component.html',
  styleUrl: './detail-grid.component.scss'
})
export class DetailGridComponent implements ICellRendererAngularComp {
  private colStateService = inject(ColumnStateService);

  agInit(params: ICellRendererParams): void {
    this.colStateService.state.set({...this.colStateService.state(), "yen": true, "dollars": true })
  }

  refresh(params: ICellRendererParams): boolean {
    return true;
  }

  // Row Data
  rowData = [
    { euros: "More details ?", dollars: "1.2", yen: "30" },
    { euros: "More details ?", dollars: "12", yen: "300" },
    { euros: "More details ?", dollars: "1512", yen: "3041" },
  ];

  // Column Definitions
  colDefs= computed(()=> [
    {
      headerName: 'Detail',
      field: 'euros',
      cellRenderer: 'agGroupCellRenderer'
    },
    { hide: !this.colStateService.state()["dollars"] , headerName: 'United States Dollars', field: 'dollars' },
    { hide: !this.colStateService.state()["yen"] , headerName: 'Japanese Yen', field: 'yen' }
  ]);

  defaultColDefs: ColDef = { flex: 1 };

  gridOptions: Signal<GridOptions> = computed (( )=> ({
    rowHeight: 32,
    headerHeight: 48,
    domLayout: 'autoHeight',
    detailRowAutoHeight: true,
    masterDetail: true,
    detailCellRenderer: DetailDetailGridComponent,
  }));
}
