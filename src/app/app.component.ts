import {Component, effect, inject} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {AllCommunityModule, ColDef, GridApi, GridOptions, GridReadyEvent, ModuleRegistry} from 'ag-grid-community';
import {DataService} from './services/data.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {DetailGridComponent} from './detail-grid/detail-grid.component';
import {
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  MasterDetailModule,
  PivotModule,
  RowGroupingModule,
  SideBarModule,
  TreeDataModule
} from 'ag-grid-enterprise';
import {ColumnStateService} from './services/column-state.service';
import {DetailColumnsPanelComponent} from './custom-column-tool-panel/detail-columns-panel.component';

// Register modules
ModuleRegistry.registerModules([
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  SideBarModule,
  RowGroupingModule,
  PivotModule,
  TreeDataModule,
  MasterDetailModule,
  AllCommunityModule
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private api!: GridApi;

  dataService = inject(DataService);
  colStateService = inject(ColumnStateService);

  // Row Data
  rowData = toSignal(this.dataService.getData());

  // Master Column Definitions
  colDefs: ColDef[] = [
    { field: 'mission', cellRenderer: 'agGroupCellRenderer' },
    { field: 'company' },
    { field: 'location' }
  ];

  defaultColDefs: ColDef = {
    flex: 1,
    resizable: true
  };

  // Grid options
  gridOptions: GridOptions = {
    rowHeight: 32,
    masterDetail: true,
    detailCellRenderer: DetailGridComponent,
    domLayout: 'normal',
    detailRowAutoHeight: true,
    sideBar: {
      toolPanels: [
        {
          id: 'columns',
          labelDefault: 'Master Columns',
          labelKey: 'columns',
          iconKey: 'columns',
          toolPanel: 'agColumnsToolPanel'
        },
        {
          id: 'detailColumns',
          labelDefault: 'Detail Columns',
          labelKey: 'detailColumns',
          iconKey: 'columns',
          toolPanel: DetailColumnsPanelComponent
        }
      ]
    },
    onGridReady: (params: GridReadyEvent) => {
      this.api = params.api;
    }
  };

  constructor() {
    effect(() => {
      // You can watch state here if needed
      // console.log(this.colStateService.state()());
    });
  }
}
