import {Component, effect, inject} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {AllCommunityModule, ColDef, colorSchemeDark, GridOptions, ModuleRegistry, themeAlpine} from 'ag-grid-community';
import {DataService} from './services/data.service';
import {toSignal} from '@angular/core/rxjs-interop';
import {DetailGridComponent} from './detail-grid/detail-grid.component';
import {MasterDetailModule, PivotModule, RowGroupingModule, TreeDataModule} from 'ag-grid-enterprise';

// Enterprise ?
ModuleRegistry.registerModules([ RowGroupingModule, PivotModule, TreeDataModule, MasterDetailModule ]);

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-root',
  imports: [AgGridAngular],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dataService: DataService = inject(DataService);

  // Row Data: The data to be displayed.
  rowData = toSignal(this.dataService.getData())

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "mission",
      cellRenderer: 'agGroupCellRenderer'
    },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price"},
    { field: "successful" },
    { field: "rocket" }
  ];

  defaultColDefs: ColDef = {
    flex: 1
  }

  gridOptions: GridOptions = {
    rowHeight: 32,
    masterDetail: true,
    detailCellRenderer: DetailGridComponent,
    domLayout: "normal",
    detailRowAutoHeight: true,
  }

  constructor(){
    effect(()=> {
      console.log(this.rowData())
    })
  }

  protected readonly DetailGridComponent = DetailGridComponent;
}
